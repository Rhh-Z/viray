import { ExtractPropTypes } from "vue";
import Card from './card.vue';
export declare const cardProps: {
    header: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
export declare type CardInstance = InstanceType<typeof Card>;
