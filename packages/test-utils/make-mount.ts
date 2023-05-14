import { merge } from 'lodash-unified'
import { mount } from '@vue/test-utils';

export const makeMount = <C, O, E>(element: C, defaultOptions: O) => {
  return (props: (E | O) | (E & O) = {} as E) =>
    mount(element as any, merge({}, defaultOptions, props))
}