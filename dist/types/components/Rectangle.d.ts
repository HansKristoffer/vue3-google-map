/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.RectangleOptions>;
        required: true;
    };
}, {
    rectangle: {
        component: import("vue").Ref<import("../composables/useSetupMapComponent").IComponent | null>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: google.maps.RectangleOptions;
} & {}>, {}>;
export default _default;
