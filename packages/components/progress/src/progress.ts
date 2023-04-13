import { definePropType } from "@viray/utils/definePropType"
import { ExtractPropTypes, SVGAttributes } from "vue";
import type Progress from './progress.vue';

export type ProgressColor = { color: string; percentage: number }
export type ProgressFn = (percentage: number) => string

export const progressProps = {
  type: {
    type: String,
    default: 'line',
    values: ['line', 'circle', 'dashboard']
  },
  status: {
    type: String,
    default: '',
    values: ['', 'success', 'exception', 'warning'],
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100
  },
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes['stroke-linecap']>>(String),
    default: 'round',
  },
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
  duration: {
    type: Number,
    default: 3
  },
  color: {
    type: definePropType<string | ProgressColor[] | ProgressFn>([
      String,
      Array,
      Function,
    ]),
    default: '',
  },
  showText: {
    type: Boolean,
    default: true,
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 126,
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
}

export type ProgressProps = ExtractPropTypes<typeof progressProps>
export type ProgressInstance = InstanceType<typeof Progress>