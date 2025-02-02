/// <reference types="google.maps" />
import { InjectionKey, Ref } from "vue";
import { IGoogleMapsAPI, IMap } from "../@types/index";
export declare const mapSymbol: InjectionKey<Ref<IMap | null>>;
export declare const apiSymbol: InjectionKey<Ref<IGoogleMapsAPI | null>>;
/**
 * Utilitary flag for components that need to know the map
 * was fully loaded (including its tiles) to decide their behavior
 */
export declare const mapWasLoadedSymbol: InjectionKey<Ref<boolean>>;
export declare const loaderInstance: Ref<{
    version: string;
    apiKey: string;
    channel: string;
    client: string;
    id: string;
    libraries: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
    language: string;
    region: string;
    mapIds: string[];
    nonce: string | null;
    retries: number;
    url: string;
    readonly options: {
        apiKey: string;
        channel?: string | undefined;
        client?: string | undefined;
        version?: string | undefined;
        id?: string | undefined;
        libraries?: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] | undefined;
        language?: string | undefined;
        region?: string | undefined;
        mapIds?: string[] | undefined;
        url?: string | undefined;
        nonce?: string | undefined;
        retries?: number | undefined;
    };
    createUrl: () => string;
    load: () => Promise<typeof google>;
    loadPromise: () => Promise<typeof google>;
    loadCallback: (fn: (e: Event) => void) => void;
    deleteScript: () => void;
} | null>;
export declare const mapEvents: string[];
export declare const markerEvents: string[];
export declare const polylineEvents: string[];
export declare const polygonEvents: string[];
export declare const rectangleEvents: string[];
export declare const circleEvents: string[];
