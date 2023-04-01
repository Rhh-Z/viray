import { CHANGE_EVENT } from "@viray/constants";
import { ComponentInternalInstance, getCurrentInstance } from "vue";


export function useCheckboxEvent() {
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  return (e: any) => {
    const val = e.target.checked ? true : false;
    emit(CHANGE_EVENT, val);
  }
}