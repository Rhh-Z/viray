import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue'
import { CheckboxGroupProps } from '@viray/components/checkbox-group/src/checkbox-group'

type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  changeEvent?: (...args: any) => any
} & ToRefs<
  Pick<
    CheckboxGroupProps,
    'size' | 'min' | 'max' | 'disabled'
  >
>

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')