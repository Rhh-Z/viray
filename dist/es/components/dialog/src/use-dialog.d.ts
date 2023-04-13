import { DialogProps } from "./dialog";
export declare const useDialog: (props: DialogProps) => {
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    visible: import("vue").Ref<boolean>;
    handleClose: () => void;
};
