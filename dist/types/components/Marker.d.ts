/// <reference types="google.maps" />
import { PropType, Ref } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.MarkerOptions>;
        required: true;
    };
}, {
    marker: {
        component: Ref<import("../composables/useSetupMapComponent").IComponent | null>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: google.maps.MarkerOptions;
} & {}>, {}>;
export default _default;
