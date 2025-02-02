/// <reference types="google.maps" />
import * as themes from "../themes/index";
export declare type IGoogleMapsAPI = typeof google.maps;
export declare type IMap = google.maps.Map;
export declare type IMapOptions = google.maps.MapOptions;
export declare type ILatLng = google.maps.LatLngLiteral;
export declare type IControlPosition = keyof typeof google.maps.ControlPosition;
export declare type IScaleControlStyle = google.maps.ScaleControlStyle;
export declare type IMapTypeControlOptions = google.maps.MapTypeControlOptions;
export declare type IMapTypeId = google.maps.MapTypeId;
export declare type IMapRestriction = google.maps.MapRestriction;
export declare type IStreetViewPanorama = google.maps.StreetViewPanorama;
export declare type IMapTypeStyle = google.maps.MapTypeStyle;
export declare type IMarker = google.maps.Marker;
export declare type IPolyline = google.maps.Polyline;
export declare type IPolygon = google.maps.Polygon;
export declare type IRectangle = google.maps.Rectangle;
export declare type ICircle = google.maps.Circle;
export declare type IMarkerOptions = google.maps.MarkerOptions;
export declare type IPolylineOptions = google.maps.PolylineOptions;
export declare type IPolygonOptions = google.maps.PolygonOptions;
export declare type IRectangleOptions = google.maps.RectangleOptions;
export declare type ICircleOptions = google.maps.CircleOptions;
export declare type ITheme = keyof typeof themes;
