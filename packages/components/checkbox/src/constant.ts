import type { ComputedRef, InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import { CheckboxProps } from './checkbox'

export const checkboxContextKey: InjectionKey<CheckboxProps> = Symbol('checkboxContextKey')