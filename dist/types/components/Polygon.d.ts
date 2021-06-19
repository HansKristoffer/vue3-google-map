/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<google.maps.PolygonOptions>;
        required: true;
    };
}, {
    polygon: {
        component: import("vue").Ref<import("../composables/useSetupMapComponent").IComponent | null>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options: google.maps.PolygonOptions;
} & {}>, {}>;
export default _default;
