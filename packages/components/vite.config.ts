import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue';
import SetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  build: {
    outDir: "es",
    minify: "esbuild",
    rollupOptions: {
      external: ["vue", /\.scss/],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../../dist/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../../dist/lib",
        }
      ],
      // plugins: [terser()]
    },
    lib: {
      entry: './index.ts',
      name: 'Viray',
      formats: ['es'],
    },
  },
  plugins: [vue(), SetupExtend(), dts({
    entryRoot: './',
    include: './',
    skipDiagnostics: false,
    outputDir: ["../../dist/es/packages/components/", "../../dist/lib/packages/components/"],
    //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
    tsConfigFilePath: '../../tsconfig.json',
  }),
  {
    name: "style",
    generateBundle(config, bundle) {
      //这里可以获取打包后的文件目录以及代码code
      const keys = Object.keys(bundle);

      for (const key of keys) {
        const bundler: any = bundle[key as any];
        //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件
        this.emitFile({
          type: "asset",
          fileName: key, //文件名名不变
          source: bundler.code.replace(/\.scss|@viray/g, (matchStr: string) => {
            const map: Record<string, string> = {
              '.scss': '.css',
              '@viray': '../../..'
            }
            return map[matchStr]
          }),
        });
      }
    },
  }],
})