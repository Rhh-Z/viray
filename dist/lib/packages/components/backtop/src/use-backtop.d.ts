import { SetupContext } from "vue";
import { BacktopEmits, BacktopProps } from "./backtop";
export declare const useBacktop: (props: BacktopProps, emit: SetupContext<BacktopEmits>['emit'], componentName: string) => {
    visible: import("vue").Ref<boolean>;
    handleClick: (event: MouseEvent) => void;
};
