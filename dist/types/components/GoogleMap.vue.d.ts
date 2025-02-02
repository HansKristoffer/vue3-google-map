/// <reference types="google.maps" />
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    apiKey: {
        type: StringConstructor;
        default: string;
    };
    version: StringConstructor;
    libraries: PropType<("drawing" | "geometry" | "localContext" | "places" | "visualization")[]>;
    region: StringConstructor;
    language: StringConstructor;
    backgroundColor: StringConstructor;
    center: PropType<google.maps.LatLng>;
    clickableIcons: {
        type: BooleanConstructor;
        default: undefined;
    };
    controlSize: NumberConstructor;
    disableDefaultUi: {
        type: BooleanConstructor;
        default: undefined;
    };
    disableDoubleClickZoom: {
        type: BooleanConstructor;
        default: undefined;
    };
    draggable: {
        type: BooleanConstructor;
        default: undefined;
    };
    draggableCursor: StringConstructor;
    draggingCursor: StringConstructor;
    fullscreenControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    fullscreenControlPosition: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
    gestureHandling: PropType<"cooperative" | "greedy" | "none" | "auto">;
    heading: NumberConstructor;
    keyboardShortcuts: {
        type: BooleanConstructor;
        default: undefined;
    };
    mapTypeControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    mapTypeControlOptions: PropType<google.maps.MapTypeControlOptions>;
    mapTypeId: {
        type: PropType<string>;
    };
    mapId: StringConstructor;
    maxZoom: NumberConstructor;
    minZoom: NumberConstructor;
    noClear: {
        type: BooleanConstructor;
        default: undefined;
    };
    panControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    panControlPosition: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
    restriction: PropType<google.maps.MapRestriction>;
    rotateControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    rotateControlPosition: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
    scaleControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    scaleControlStyle: PropType<google.maps.ScaleControlStyle>;
    scrollwheel: {
        type: BooleanConstructor;
        default: undefined;
    };
    streetView: PropType<google.maps.StreetViewPanorama>;
    streetViewControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    streetViewControlPosition: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
    styles: PropType<google.maps.MapTypeStyle[]>;
    tilt: NumberConstructor;
    zoom: NumberConstructor;
    zoomControl: {
        type: BooleanConstructor;
        default: undefined;
    };
    zoomControlPosition: PropType<"BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT">;
}, {
    mapRef: import("vue").Ref<HTMLElement | null>;
    ready: import("vue").Ref<boolean>;
    map: import("vue").Ref<{
        controls: {
            clear: () => void;
            forEach: (callback: (a: any, b: number) => void) => void;
            getArray: () => any[];
            getAt: (i: number) => any;
            getLength: () => number;
            insertAt: (i: number, elem: any) => void;
            pop: () => any;
            push: (elem: any) => number;
            removeAt: (i: number) => any;
            setAt: (i: number, elem: any) => void;
            addListener: (eventName: string, handler: Function) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values?: object | null | undefined) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        }[];
        data: {
            add: (feature?: google.maps.Data.Feature | google.maps.Data.FeatureOptions | null | undefined) => google.maps.Data.Feature;
            addGeoJson: (geoJson: object, options?: google.maps.Data.GeoJsonOptions | null | undefined) => google.maps.Data.Feature[];
            contains: (feature: google.maps.Data.Feature) => boolean;
            forEach: (callback: (a: google.maps.Data.Feature) => void) => void;
            getControlPosition: () => google.maps.ControlPosition;
            getControls: () => string[] | null;
            getDrawingMode: () => string | null;
            getFeatureById: (id: string | number) => google.maps.Data.Feature | undefined;
            getMap: () => google.maps.Map | null;
            getStyle: () => google.maps.Data.StylingFunction | google.maps.Data.StyleOptions | null;
            loadGeoJson: (url: string, options?: google.maps.Data.GeoJsonOptions | null | undefined, callback?: ((a: google.maps.Data.Feature[]) => void) | undefined) => void;
            overrideStyle: (feature: google.maps.Data.Feature, style: google.maps.Data.StyleOptions) => void;
            remove: (feature: google.maps.Data.Feature) => void;
            revertStyle: (feature?: google.maps.Data.Feature | null | undefined) => void;
            setControlPosition: (controlPosition: google.maps.ControlPosition) => void;
            setControls: (controls: string[] | null) => void;
            setDrawingMode: (drawingMode: string | null) => void;
            setMap: (map: google.maps.Map | null) => void;
            setStyle: (style: google.maps.Data.StylingFunction | google.maps.Data.StyleOptions | null) => void;
            toGeoJson: (callback: (a: object) => void) => void;
            addListener: (eventName: string, handler: Function) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values?: object | null | undefined) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        fitBounds: (bounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding | undefined) => void;
        getBounds: () => google.maps.LatLngBounds | undefined;
        getCenter: () => google.maps.LatLng | undefined;
        getClickableIcons: () => boolean | undefined;
        getDiv: () => Element;
        getHeading: () => number | undefined;
        getMapTypeId: () => string | undefined;
        getProjection: () => google.maps.Projection | undefined;
        getRenderingType: () => google.maps.RenderingType;
        getStreetView: () => google.maps.StreetViewPanorama;
        getTilt: () => number | undefined;
        getZoom: () => number | undefined;
        mapTypes: {
            set: (id: string, mapType: any) => void;
            addListener: (eventName: string, handler: Function) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            setValues: (values?: object | null | undefined) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        moveCamera: (cameraOptions: google.maps.CameraOptions) => void;
        overlayMapTypes: {
            clear: () => void;
            forEach: (callback: (a: any, b: number) => void) => void;
            getArray: () => any[];
            getAt: (i: number) => any;
            getLength: () => number;
            insertAt: (i: number, elem: any) => void;
            pop: () => any;
            push: (elem: any) => number;
            removeAt: (i: number) => any;
            setAt: (i: number, elem: any) => void;
            addListener: (eventName: string, handler: Function) => google.maps.MapsEventListener;
            bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined) => void;
            get: (key: string) => any;
            notify: (key: string) => void;
            set: (key: string, value: any) => void;
            setValues: (values?: object | null | undefined) => void;
            unbind: (key: string) => void;
            unbindAll: () => void;
        };
        panBy: (x: number, y: number) => void;
        panTo: (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
        panToBounds: (latLngBounds: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral, padding?: number | google.maps.Padding | undefined) => void;
        setCenter: (latlng: google.maps.LatLng | google.maps.LatLngLiteral) => void;
        setClickableIcons: (value: boolean) => void;
        setHeading: (heading: number) => void;
        setMapTypeId: (mapTypeId: string) => void;
        setOptions: (options: google.maps.MapOptions | null) => void;
        setStreetView: (panorama: google.maps.StreetViewPanorama | null) => void;
        setTilt: (tilt: number) => void;
        setZoom: (zoom: number) => void;
        addListener: (eventName: string, handler: Function) => google.maps.MapsEventListener;
        bindTo: (key: string, target: google.maps.MVCObject, targetKey?: string | null | undefined, noNotify?: boolean | undefined) => void;
        get: (key: string) => any;
        notify: (key: string) => void;
        set: (key: string, value: any) => void;
        setValues: (values?: object | null | undefined) => void;
        unbind: (key: string) => void;
        unbindAll: () => void;
    } | null>;
    api: import("vue").Ref<{
        Animation: {
            [x: number]: string;
            readonly BOUNCE: google.maps.Animation.BOUNCE;
            readonly DROP: google.maps.Animation.DROP;
        };
        BicyclingLayer: typeof google.maps.BicyclingLayer;
        Circle: typeof google.maps.Circle;
        ControlPosition: {
            [x: number]: string;
            readonly BOTTOM_CENTER: google.maps.ControlPosition.BOTTOM_CENTER;
            readonly BOTTOM_LEFT: google.maps.ControlPosition.BOTTOM_LEFT;
            readonly BOTTOM_RIGHT: google.maps.ControlPosition.BOTTOM_RIGHT;
            readonly LEFT_BOTTOM: google.maps.ControlPosition.LEFT_BOTTOM;
            readonly LEFT_CENTER: google.maps.ControlPosition.LEFT_CENTER;
            readonly LEFT_TOP: google.maps.ControlPosition.LEFT_TOP;
            readonly RIGHT_BOTTOM: google.maps.ControlPosition.RIGHT_BOTTOM;
            readonly RIGHT_CENTER: google.maps.ControlPosition.RIGHT_CENTER;
            readonly RIGHT_TOP: google.maps.ControlPosition.RIGHT_TOP;
            readonly TOP_CENTER: google.maps.ControlPosition.TOP_CENTER;
            readonly TOP_LEFT: google.maps.ControlPosition.TOP_LEFT;
            readonly TOP_RIGHT: google.maps.ControlPosition.TOP_RIGHT;
        };
        Data: typeof google.maps.Data;
        DirectionsRenderer: typeof google.maps.DirectionsRenderer;
        DirectionsService: typeof google.maps.DirectionsService;
        DirectionsStatus: {
            readonly INVALID_REQUEST: google.maps.DirectionsStatus.INVALID_REQUEST;
            readonly MAX_WAYPOINTS_EXCEEDED: google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED;
            readonly NOT_FOUND: google.maps.DirectionsStatus.NOT_FOUND;
            readonly OK: google.maps.DirectionsStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.DirectionsStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.DirectionsStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.DirectionsStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.DirectionsStatus.ZERO_RESULTS;
        };
        DistanceMatrixElementStatus: {
            readonly NOT_FOUND: google.maps.DistanceMatrixElementStatus.NOT_FOUND;
            readonly OK: google.maps.DistanceMatrixElementStatus.OK;
            readonly ZERO_RESULTS: google.maps.DistanceMatrixElementStatus.ZERO_RESULTS;
        };
        DistanceMatrixService: typeof google.maps.DistanceMatrixService;
        DistanceMatrixStatus: {
            readonly INVALID_REQUEST: google.maps.DistanceMatrixStatus.INVALID_REQUEST;
            readonly MAX_DIMENSIONS_EXCEEDED: google.maps.DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED;
            readonly MAX_ELEMENTS_EXCEEDED: google.maps.DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED;
            readonly OK: google.maps.DistanceMatrixStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.DistanceMatrixStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.DistanceMatrixStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.DistanceMatrixStatus.UNKNOWN_ERROR;
        };
        ElevationService: typeof google.maps.ElevationService;
        ElevationStatus: {
            readonly INVALID_REQUEST: google.maps.ElevationStatus.INVALID_REQUEST;
            readonly OK: google.maps.ElevationStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.ElevationStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.ElevationStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.ElevationStatus.UNKNOWN_ERROR;
        };
        Geocoder: typeof google.maps.Geocoder;
        GeocoderLocationType: {
            readonly APPROXIMATE: google.maps.GeocoderLocationType.APPROXIMATE;
            readonly GEOMETRIC_CENTER: google.maps.GeocoderLocationType.GEOMETRIC_CENTER;
            readonly RANGE_INTERPOLATED: google.maps.GeocoderLocationType.RANGE_INTERPOLATED;
            readonly ROOFTOP: google.maps.GeocoderLocationType.ROOFTOP;
        };
        GeocoderStatus: {
            readonly ERROR: google.maps.GeocoderStatus.ERROR;
            readonly INVALID_REQUEST: google.maps.GeocoderStatus.INVALID_REQUEST;
            readonly OK: google.maps.GeocoderStatus.OK;
            readonly OVER_QUERY_LIMIT: google.maps.GeocoderStatus.OVER_QUERY_LIMIT;
            readonly REQUEST_DENIED: google.maps.GeocoderStatus.REQUEST_DENIED;
            readonly UNKNOWN_ERROR: google.maps.GeocoderStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.GeocoderStatus.ZERO_RESULTS;
        };
        GroundOverlay: typeof google.maps.GroundOverlay;
        ImageMapType: typeof google.maps.ImageMapType;
        InfoWindow: typeof google.maps.InfoWindow;
        KmlLayer: typeof google.maps.KmlLayer;
        KmlLayerStatus: {
            readonly DOCUMENT_NOT_FOUND: google.maps.KmlLayerStatus.DOCUMENT_NOT_FOUND;
            readonly DOCUMENT_TOO_LARGE: google.maps.KmlLayerStatus.DOCUMENT_TOO_LARGE;
            readonly FETCH_ERROR: google.maps.KmlLayerStatus.FETCH_ERROR;
            readonly INVALID_DOCUMENT: google.maps.KmlLayerStatus.INVALID_DOCUMENT;
            readonly INVALID_REQUEST: google.maps.KmlLayerStatus.INVALID_REQUEST;
            readonly LIMITS_EXCEEDED: google.maps.KmlLayerStatus.LIMITS_EXCEEDED;
            readonly OK: google.maps.KmlLayerStatus.OK;
            readonly TIMED_OUT: google.maps.KmlLayerStatus.TIMED_OUT;
            readonly UNKNOWN: google.maps.KmlLayerStatus.UNKNOWN;
        };
        LatLng: typeof google.maps.LatLng;
        LatLngBounds: typeof google.maps.LatLngBounds;
        MVCArray: typeof google.maps.MVCArray;
        MVCObject: typeof google.maps.MVCObject;
        Map: typeof google.maps.Map;
        MapTypeControlStyle: {
            [x: number]: string;
            readonly DEFAULT: google.maps.MapTypeControlStyle.DEFAULT;
            readonly DROPDOWN_MENU: google.maps.MapTypeControlStyle.DROPDOWN_MENU;
            readonly HORIZONTAL_BAR: google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
        };
        MapTypeId: {
            readonly HYBRID: google.maps.MapTypeId.HYBRID;
            readonly ROADMAP: google.maps.MapTypeId.ROADMAP;
            readonly SATELLITE: google.maps.MapTypeId.SATELLITE;
            readonly TERRAIN: google.maps.MapTypeId.TERRAIN;
        };
        MapTypeRegistry: typeof google.maps.MapTypeRegistry;
        Marker: typeof google.maps.Marker;
        MaxZoomService: typeof google.maps.MaxZoomService;
        MaxZoomStatus: {
            readonly ERROR: google.maps.MaxZoomStatus.ERROR;
            readonly OK: google.maps.MaxZoomStatus.OK;
        };
        OverlayView: typeof google.maps.OverlayView;
        Point: typeof google.maps.Point;
        Polygon: typeof google.maps.Polygon;
        Polyline: typeof google.maps.Polyline;
        Rectangle: typeof google.maps.Rectangle;
        RenderingType: {
            readonly RASTER: google.maps.RenderingType.RASTER;
            readonly UNINITIALIZED: google.maps.RenderingType.UNINITIALIZED;
            readonly VECTOR: google.maps.RenderingType.VECTOR;
        };
        ScaleControlStyle: {
            [x: number]: string;
            readonly DEFAULT: google.maps.ScaleControlStyle.DEFAULT;
        };
        Size: typeof google.maps.Size;
        StreetViewCoverageLayer: typeof google.maps.StreetViewCoverageLayer;
        StreetViewPanorama: typeof google.maps.StreetViewPanorama;
        StreetViewPreference: {
            readonly BEST: google.maps.StreetViewPreference.BEST;
            readonly NEAREST: google.maps.StreetViewPreference.NEAREST;
        };
        StreetViewService: typeof google.maps.StreetViewService;
        StreetViewSource: {
            readonly DEFAULT: google.maps.StreetViewSource.DEFAULT;
            readonly OUTDOOR: google.maps.StreetViewSource.OUTDOOR;
        };
        StreetViewStatus: {
            readonly OK: google.maps.StreetViewStatus.OK;
            readonly UNKNOWN_ERROR: google.maps.StreetViewStatus.UNKNOWN_ERROR;
            readonly ZERO_RESULTS: google.maps.StreetViewStatus.ZERO_RESULTS;
        };
        StrokePosition: {
            [x: number]: string;
            readonly CENTER: google.maps.StrokePosition.CENTER;
            readonly INSIDE: google.maps.StrokePosition.INSIDE;
            readonly OUTSIDE: google.maps.StrokePosition.OUTSIDE;
        };
        StyledMapType: typeof google.maps.StyledMapType;
        SymbolPath: {
            [x: number]: string;
            readonly BACKWARD_CLOSED_ARROW: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW;
            readonly BACKWARD_OPEN_ARROW: google.maps.SymbolPath.BACKWARD_OPEN_ARROW;
            readonly CIRCLE: google.maps.SymbolPath.CIRCLE;
            readonly FORWARD_CLOSED_ARROW: google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
            readonly FORWARD_OPEN_ARROW: google.maps.SymbolPath.FORWARD_OPEN_ARROW;
        };
        TrafficLayer: typeof google.maps.TrafficLayer;
        TrafficModel: {
            readonly BEST_GUESS: google.maps.TrafficModel.BEST_GUESS;
            readonly OPTIMISTIC: google.maps.TrafficModel.OPTIMISTIC;
            readonly PESSIMISTIC: google.maps.TrafficModel.PESSIMISTIC;
        };
        TransitLayer: typeof google.maps.TransitLayer;
        TransitMode: {
            readonly BUS: google.maps.TransitMode.BUS;
            readonly RAIL: google.maps.TransitMode.RAIL;
            readonly SUBWAY: google.maps.TransitMode.SUBWAY;
            readonly TRAIN: google.maps.TransitMode.TRAIN;
            readonly TRAM: google.maps.TransitMode.TRAM;
        };
        TransitRoutePreference: {
            readonly FEWER_TRANSFERS: google.maps.TransitRoutePreference.FEWER_TRANSFERS;
            readonly LESS_WALKING: google.maps.TransitRoutePreference.LESS_WALKING;
        };
        TravelMode: {
            readonly BICYCLING: google.maps.TravelMode.BICYCLING;
            readonly DRIVING: google.maps.TravelMode.DRIVING;
            readonly TRANSIT: google.maps.TravelMode.TRANSIT;
            readonly WALKING: google.maps.TravelMode.WALKING;
        };
        UnitSystem: {
            [x: number]: string;
            readonly IMPERIAL: google.maps.UnitSystem.IMPERIAL;
            readonly METRIC: google.maps.UnitSystem.METRIC;
        };
        VehicleType: {
            readonly BUS: google.maps.VehicleType.BUS;
            readonly CABLE_CAR: google.maps.VehicleType.CABLE_CAR;
            readonly COMMUTER_TRAIN: google.maps.VehicleType.COMMUTER_TRAIN;
            readonly FERRY: google.maps.VehicleType.FERRY;
            readonly FUNICULAR: google.maps.VehicleType.FUNICULAR;
            readonly GONDOLA_LIFT: google.maps.VehicleType.GONDOLA_LIFT;
            readonly HEAVY_RAIL: google.maps.VehicleType.HEAVY_RAIL;
            readonly HIGH_SPEED_TRAIN: google.maps.VehicleType.HIGH_SPEED_TRAIN;
            readonly INTERCITY_BUS: google.maps.VehicleType.INTERCITY_BUS;
            readonly METRO_RAIL: google.maps.VehicleType.METRO_RAIL;
            readonly MONORAIL: google.maps.VehicleType.MONORAIL;
            readonly OTHER: google.maps.VehicleType.OTHER;
            readonly RAIL: google.maps.VehicleType.RAIL;
            readonly SHARE_TAXI: google.maps.VehicleType.SHARE_TAXI;
            readonly SUBWAY: google.maps.VehicleType.SUBWAY;
            readonly TRAM: google.maps.VehicleType.TRAM;
            readonly TROLLEYBUS: google.maps.VehicleType.TROLLEYBUS;
        };
        WebglOverlayView: typeof google.maps.WebglOverlayView;
        drawing: {
            DrawingManager: typeof google.maps.drawing.DrawingManager;
            OverlayType: {
                readonly CIRCLE: google.maps.drawing.OverlayType.CIRCLE;
                readonly MARKER: google.maps.drawing.OverlayType.MARKER;
                readonly POLYGON: google.maps.drawing.OverlayType.POLYGON;
                readonly POLYLINE: google.maps.drawing.OverlayType.POLYLINE;
                readonly RECTANGLE: google.maps.drawing.OverlayType.RECTANGLE;
            };
        };
        event: {
            addDomListener: typeof google.maps.event.addDomListener;
            addDomListenerOnce: typeof google.maps.event.addDomListenerOnce;
            addListener: typeof google.maps.event.addListener;
            addListenerOnce: typeof google.maps.event.addListenerOnce;
            clearInstanceListeners: typeof google.maps.event.clearInstanceListeners;
            clearListeners: typeof google.maps.event.clearListeners;
            removeListener: typeof google.maps.event.removeListener;
            trigger: typeof google.maps.event.trigger;
        };
        geometry: {
            encoding: {
                decodePath: typeof google.maps.geometry.encoding.decodePath;
                encodePath: typeof google.maps.geometry.encoding.encodePath;
            };
            poly: {
                containsLocation: typeof google.maps.geometry.poly.containsLocation;
                isLocationOnEdge: typeof google.maps.geometry.poly.isLocationOnEdge;
            };
            spherical: {
                computeArea: typeof google.maps.geometry.spherical.computeArea;
                computeDistanceBetween: typeof google.maps.geometry.spherical.computeDistanceBetween;
                computeHeading: typeof google.maps.geometry.spherical.computeHeading;
                computeLength: typeof google.maps.geometry.spherical.computeLength;
                computeOffset: typeof google.maps.geometry.spherical.computeOffset;
                computeOffsetOrigin: typeof google.maps.geometry.spherical.computeOffsetOrigin;
                computeSignedArea: typeof google.maps.geometry.spherical.computeSignedArea;
                interpolate: typeof google.maps.geometry.spherical.interpolate;
            };
        };
        localContext: {
            LocalContextMapView: typeof google.maps.localContext.LocalContextMapView;
            MapDirectionsOptions: typeof google.maps.localContext.MapDirectionsOptions;
            PlaceChooserLayoutMode: {
                readonly HIDDEN: google.maps.localContext.PlaceChooserLayoutMode.HIDDEN;
                readonly SHEET: google.maps.localContext.PlaceChooserLayoutMode.SHEET;
            };
            PlaceChooserPosition: {
                readonly BLOCK_END: google.maps.localContext.PlaceChooserPosition.BLOCK_END;
                readonly INLINE_END: google.maps.localContext.PlaceChooserPosition.INLINE_END;
                readonly INLINE_START: google.maps.localContext.PlaceChooserPosition.INLINE_START;
            };
            PlaceDetailsLayoutMode: {
                readonly INFO_WINDOW: google.maps.localContext.PlaceDetailsLayoutMode.INFO_WINDOW;
                readonly SHEET: google.maps.localContext.PlaceDetailsLayoutMode.SHEET;
            };
            PlaceDetailsPosition: {
                readonly INLINE_END: google.maps.localContext.PlaceDetailsPosition.INLINE_END;
                readonly INLINE_START: google.maps.localContext.PlaceDetailsPosition.INLINE_START;
            };
        };
        places: {
            Autocomplete: typeof google.maps.places.Autocomplete;
            AutocompleteResponse: typeof google.maps.places.AutocompleteResponse;
            AutocompleteService: typeof google.maps.places.AutocompleteService;
            AutocompleteSessionToken: typeof google.maps.places.AutocompleteSessionToken;
            BusinessStatus: {
                readonly CLOSED_PERMANENTLY: google.maps.places.BusinessStatus.CLOSED_PERMANENTLY;
                readonly CLOSED_TEMPORARILY: google.maps.places.BusinessStatus.CLOSED_TEMPORARILY;
                readonly OPERATIONAL: google.maps.places.BusinessStatus.OPERATIONAL;
            };
            PlacesService: typeof google.maps.places.PlacesService;
            PlacesServiceStatus: {
                readonly INVALID_REQUEST: google.maps.places.PlacesServiceStatus.INVALID_REQUEST;
                readonly NOT_FOUND: google.maps.places.PlacesServiceStatus.NOT_FOUND;
                readonly OK: google.maps.places.PlacesServiceStatus.OK;
                readonly OVER_QUERY_LIMIT: google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT;
                readonly REQUEST_DENIED: google.maps.places.PlacesServiceStatus.REQUEST_DENIED;
                readonly UNKNOWN_ERROR: google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR;
                readonly ZERO_RESULTS: google.maps.places.PlacesServiceStatus.ZERO_RESULTS;
            };
            RankBy: {
                [x: number]: string;
                readonly DISTANCE: google.maps.places.RankBy.DISTANCE;
                readonly PROMINENCE: google.maps.places.RankBy.PROMINENCE;
            };
            SearchBox: typeof google.maps.places.SearchBox;
        };
        version: string;
        visualization: {
            HeatmapLayer: typeof google.maps.visualization.HeatmapLayer;
        };
    } | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    apiKey: string;
} & {
    version?: string | undefined;
    libraries?: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] | undefined;
    region?: string | undefined;
    language?: string | undefined;
    backgroundColor?: string | undefined;
    center?: google.maps.LatLng | undefined;
    clickableIcons?: boolean | undefined;
    controlSize?: number | undefined;
    disableDefaultUi?: boolean | undefined;
    disableDoubleClickZoom?: boolean | undefined;
    draggable?: boolean | undefined;
    draggableCursor?: string | undefined;
    draggingCursor?: string | undefined;
    fullscreenControl?: boolean | undefined;
    fullscreenControlPosition?: "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT" | undefined;
    gestureHandling?: "cooperative" | "greedy" | "none" | "auto" | undefined;
    heading?: number | undefined;
    keyboardShortcuts?: boolean | undefined;
    mapTypeControl?: boolean | undefined;
    mapTypeControlOptions?: google.maps.MapTypeControlOptions | undefined;
    mapTypeId?: string | undefined;
    mapId?: string | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    noClear?: boolean | undefined;
    panControl?: boolean | undefined;
    panControlPosition?: "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT" | undefined;
    restriction?: google.maps.MapRestriction | undefined;
    rotateControl?: boolean | undefined;
    rotateControlPosition?: "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT" | undefined;
    scaleControl?: boolean | undefined;
    scaleControlStyle?: google.maps.ScaleControlStyle | undefined;
    scrollwheel?: boolean | undefined;
    streetView?: google.maps.StreetViewPanorama | undefined;
    streetViewControl?: boolean | undefined;
    streetViewControlPosition?: "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT" | undefined;
    styles?: google.maps.MapTypeStyle[] | undefined;
    tilt?: number | undefined;
    zoom?: number | undefined;
    zoomControl?: boolean | undefined;
    zoomControlPosition?: "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "LEFT_BOTTOM" | "LEFT_CENTER" | "LEFT_TOP" | "RIGHT_BOTTOM" | "RIGHT_CENTER" | "RIGHT_TOP" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT" | undefined;
}>, {
    apiKey: string;
    clickableIcons: boolean;
    disableDefaultUi: boolean;
    disableDoubleClickZoom: boolean;
    draggable: boolean;
    fullscreenControl: boolean;
    keyboardShortcuts: boolean;
    mapTypeControl: boolean;
    noClear: boolean;
    panControl: boolean;
    rotateControl: boolean;
    scaleControl: boolean;
    scrollwheel: boolean;
    streetViewControl: boolean;
    zoomControl: boolean;
}>;
export default _default;
