'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var vue=require("vue"),jsApiLoader=require("@googlemaps/js-api-loader");
let mapSymbol=Symbol("map"),apiSymbol=Symbol("api"),mapWasLoadedSymbol=Symbol("mapwasloaded"),loaderInstance=vue.ref(null),mapEvents="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" "),markerEvents="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" "),
polylineEvents="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),polygonEvents=polylineEvents,rectangleEvents=polylineEvents.concat(["bounds_changed"]),circleEvents=polylineEvents.concat(["center_changed","radius_changed"]);
var _sfc_main$1=vue.defineComponent({props:{apiKey:{type:String,default:""},version:String,libraries:Array,region:String,language:String,backgroundColor:String,center:Object,clickableIcons:{type:Boolean,default:void 0},controlSize:Number,disableDefaultUi:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},draggableCursor:String,draggingCursor:String,fullscreenControl:{type:Boolean,default:void 0},fullscreenControlPosition:String,
gestureHandling:String,heading:Number,keyboardShortcuts:{type:Boolean,default:void 0},mapTypeControl:{type:Boolean,default:void 0},mapTypeControlOptions:Object,mapTypeId:{type:[Number,String]},mapId:String,maxZoom:Number,minZoom:Number,noClear:{type:Boolean,default:void 0},panControl:{type:Boolean,default:void 0},panControlPosition:String,restriction:Object,rotateControl:{type:Boolean,default:void 0},rotateControlPosition:String,scaleControl:{type:Boolean,default:void 0},scaleControlStyle:Number,
scrollwheel:{type:Boolean,default:void 0},streetView:Object,streetViewControl:{type:Boolean,default:void 0},streetViewControlPosition:String,styles:Array,tilt:Number,zoom:Number,zoomControl:{type:Boolean,default:void 0},zoomControlPosition:String},emits:mapEvents,setup(a,{emit:b}){let d=vue.ref(null),e=vue.ref(!1),c=vue.ref(null),g=vue.ref(null),h=vue.ref(!1);vue.provide(mapSymbol,c);vue.provide(apiSymbol,g);vue.provide(mapWasLoadedSymbol,h);let k=()=>{var c,f,l,b,d;const e={backgroundColor:a.backgroundColor,
center:a.center,mapId:a.mapId,clickableIcons:a.clickableIcons,controlSize:a.controlSize,disableDefaultUI:a.disableDefaultUi,disableDoubleClickZoom:a.disableDoubleClickZoom,draggable:a.draggable,draggableCursor:a.draggableCursor,draggingCursor:a.draggingCursor,fullscreenControl:a.fullscreenControl,fullscreenControlOptions:a.fullscreenControlPosition?{position:null===(c=g.value)||void 0===c?void 0:c.ControlPosition[a.fullscreenControlPosition]}:{},gestureHandling:a.gestureHandling,heading:a.heading,
keyboardShortcuts:a.keyboardShortcuts,mapTypeControl:a.mapTypeControl,mapTypeControlOptions:a.mapTypeControlOptions,mapTypeId:a.mapTypeId,maxZoom:a.maxZoom,minZoom:a.minZoom,noClear:a.noClear,panControl:a.panControl,panControlOptions:a.panControlPosition?{position:null===(f=g.value)||void 0===f?void 0:f.ControlPosition[a.panControlPosition]}:{},restriction:a.restriction,rotateControl:a.rotateControl,rotateControlOptions:a.rotateControlPosition?{position:null===(l=g.value)||void 0===l?void 0:l.ControlPosition[a.rotateControlPosition]}:
{},scaleControl:a.scaleControl,scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:{},scrollwheel:a.scrollwheel,streetView:a.streetView,streetViewControl:a.streetViewControl,streetViewControlOptions:a.streetViewControlPosition?{position:null===(b=g.value)||void 0===b?void 0:b.ControlPosition[a.streetViewControlPosition]}:{},styles:a.styles,tilt:a.tilt,zoom:a.zoom,zoomControl:a.zoomControl,zoomControlOptions:a.zoomControlPosition?{position:null===(d=g.value)||void 0===d?void 0:d.ControlPosition[a.zoomControlPosition]}:
{}};Object.keys(e).forEach(a=>void 0===e[a]&&delete e[a]);return e};vue.onBeforeUnmount(()=>{var a;h.value=!1;c.value&&(null===(a=g.value)||void 0===a?void 0:a.event.clearInstanceListeners(c.value))});let n=vue.watch([g,c],([a,f])=>{a&&f&&(a.event.addListenerOnce(f,"tilesloaded",()=>{h.value=!0}),setTimeout(n,0))},{immediate:!0});vue.onMounted(()=>{try{console.log("map onMounted",a),loaderInstance.value=new jsApiLoader.Loader({apiKey:a.apiKey,mapIds:a.mapId?[a.mapId]:void 0,version:a.version||"weekly",
libraries:a.libraries||["places"],language:a.language,region:a.region})}catch(m){console.error(m)}finally{loaderInstance.value.load().then(()=>{var {Map:h}=g.value=google.maps;c.value=new h(d.value,k());mapEvents.forEach(a=>{var f;null===(f=c.value)||void 0===f?void 0:f.addListener(a,f=>b(a,f))});e.value=!0;h=Object.keys(a).filter(a=>!["center","zoom"].includes(a)).map(f=>vue.toRef(a,f));vue.watch([()=>a.center,()=>a.zoom,...h],([a,b],[d,e])=>{var f,l,g;let {center:h,zoom:m,...p}=k();null===(f=c.value)||
void 0===f?void 0:f.setOptions(p);void 0!==b&&b!==e&&(null===(l=c.value)||void 0===l?void 0:l.setZoom(b));!a||d&&a.lng===d.lng&&a.lat===d.lat||(null===(g=c.value)||void 0===g?void 0:g.panTo(a))})})}});return{mapRef:d,ready:e,map:c,api:g}}});
function styleInject(a,b){void 0===b&&(b={});b=b.insertAt;if(a&&"undefined"!==typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css";"top"===b?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e);e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}var css_248z="\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n";styleInject(css_248z);let _withId=vue.withScopeId("data-v-177d06e3");
vue.pushScopeId("data-v-177d06e3");let _hoisted_1$1={ref:"mapRef",class:"mapdiv"};vue.popScopeId();let _sfc_render$1=_withId((a,b,d,e,c,g)=>(vue.openBlock(),vue.createBlock("div",null,[vue.createVNode("div",_hoisted_1$1,null,512),vue.renderSlot(a.$slots,"default",{},void 0,!0)])));_sfc_main$1.render=_sfc_render$1;_sfc_main$1.__scopeId="data-v-177d06e3";
let useSetupMapComponent=(a,b,d,e)=>{let c=null;const g=vue.ref(null),h=vue.inject(mapSymbol,vue.ref(null)),k=vue.inject(apiSymbol,vue.ref(null));vue.watch([h,d],(n,m,f)=>{h.value&&k.value&&(g.value=c=new k.value[a]({...d.value,map:h.value}),b.forEach(a=>{null===c||void 0===c?void 0:c.addListener(a,f=>e(a,f))}));f(()=>{var a;c&&(null===(a=k.value)||void 0===a?void 0:a.event.clearInstanceListeners(c),c.setMap(null))})},{immediate:!0});return{component:g}};
var Marker=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:markerEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{marker:useSetupMapComponent("Marker",markerEvents,a,b)}},render:()=>null}),Polyline=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:polylineEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{polyline:useSetupMapComponent("Polyline",polylineEvents,a,b)}},render:()=>null}),Polygon=vue.defineComponent({props:{options:{type:Object,required:!0}},
emits:polygonEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{polygon:useSetupMapComponent("Polygon",polygonEvents,a,b)}},render:()=>null}),Rectangle=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:rectangleEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");return{rectangle:useSetupMapComponent("Rectangle",rectangleEvents,a,b)}},render:()=>null}),Circle=vue.defineComponent({props:{options:{type:Object,required:!0}},emits:circleEvents,setup(a,{emit:b}){a=vue.toRef(a,"options");
return{circle:useSetupMapComponent("Circle",circleEvents,a,b)}},render:()=>null}),_sfc_main=vue.defineComponent({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(a,{emit:b}){let d=vue.ref(null),e=vue.inject(mapSymbol,vue.ref(null)),c=vue.inject(apiSymbol,vue.ref(null)),g=vue.inject(mapWasLoadedSymbol,vue.ref(!1)),h=vue.ref(!1),k=vue.watch([g,c,d],([f,c,d])=>{c&&f&&d&&(n(a.position),h.value=!0,b("content:loaded"),setTimeout(k,0))},{immediate:!0}),
n=a=>{e.value&&c.value&&d.value&&e.value.controls[c.value.ControlPosition[a]].push(d.value)},m=a=>{if(e.value&&c.value){let b=null;a=c.value.ControlPosition[a];e.value.controls[a].forEach((a,c)=>{a===d.value&&(b=c)});null!==b&&e.value.controls[a].removeAt(b)}};vue.onBeforeUnmount(()=>m(a.position));vue.watch(()=>a.position,(a,b)=>{m(b);n(a)});vue.watch(()=>a.index,b=>{b&&d.value&&(d.value.index=a.index)});return{controlRef:d,showContent:h}}});let _hoisted_1={ref:"controlRef"};
function _sfc_render(a,b,d,e,c,g){return vue.openBlock(),vue.createBlock(vue.Fragment,null,[vue.createCommentVNode("\n    v-show must be used instead of v-if otherwise there\n    would be no rendered content pushed to the map controls\n  "),vue.withDirectives(vue.createVNode("div",_hoisted_1,[vue.renderSlot(a.$slots,"default")],512),[[vue.vShow,a.showContent]])],2112)}_sfc_main.render=_sfc_render;
let aubergine=[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",
elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",
stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},
{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",
elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}],dark=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",
elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",
stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}],grey=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},
{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},
{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},
{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],minimal=[{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{visibility:"off"},{weight:7}]},{featureType:"administrative.locality",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",
elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#00ff28"},{visibility:"on"},{weight:2}]},{featureType:"administrative.neighborhood",elementType:"geometry.stroke",stylers:[{color:"#00ff28"},{visibility:"on"}]},{featureType:"administrative.neighborhood",
elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",
stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"},{lightness:-10},{color:"#b5b5b5"},{weight:.2}]},{featureType:"road",
elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#fbfbfb"},{lightness:-15},{weight:.5}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}],retro=[{elementType:"geometry",
stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",
stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",
elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},
{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}],roadways=[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",
elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",
elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",
stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#e5c163"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",
elementType:"geometry.fill",stylers:[{color:"#575757"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},
{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],roadwaysMinimal=[...roadways,...minimal],ultraLight=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},
{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",
stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];exports.Circle=Circle;exports.CustomControl=_sfc_main;exports.GoogleMap=_sfc_main$1;
exports.Marker=Marker;exports.Polygon=Polygon;exports.Polyline=Polyline;exports.Rectangle=Rectangle;exports.aubergine=aubergine;exports.dark=dark;exports.grey=grey;exports.minimal=minimal;exports.retro=retro;exports.roadways=roadways;exports.roadwaysMinimal=roadwaysMinimal;exports.ultraLight=ultraLight
