import { isString } from "lodash"

class VirayError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'VirayError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new VirayError(`[${scope}] ${m}`)
}

// 函数重载
export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new VirayError(`[${scope}] ${message}`)
      : scope
    console.warn(error);
  }
}