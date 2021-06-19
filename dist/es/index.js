import{Loader}from'@googlemaps/js-api-loader';import{ref,defineComponent,provide,onBeforeUnmount,watch,onMounted,toRef,pushScopeId,popScopeId,openBlock,createBlock,createVNode,renderSlot,withScopeId,inject,Fragment,createCommentVNode,withDirectives,vShow}from'vue';let m=Symbol("map"),n=Symbol("api"),r=Symbol("mapwasloaded"),t=ref(null),u="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" "),v="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" "),
w="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" "),x=w.concat(["bounds_changed"]),y=w.concat(["center_changed","radius_changed"]);
var z=defineComponent({props:{apiKey:{type:String,default:""},version:String,libraries:Array,region:String,language:String,backgroundColor:String,center:Object,clickableIcons:{type:Boolean,default:void 0},controlSize:Number,disableDefaultUi:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},draggable:{type:Boolean,default:void 0},draggableCursor:String,draggingCursor:String,fullscreenControl:{type:Boolean,default:void 0},fullscreenControlPosition:String,gestureHandling:String,
heading:Number,keyboardShortcuts:{type:Boolean,default:void 0},mapTypeControl:{type:Boolean,default:void 0},mapTypeControlOptions:Object,mapTypeId:{type:[Number,String]},mapIds:Array,maxZoom:Number,minZoom:Number,noClear:{type:Boolean,default:void 0},panControl:{type:Boolean,default:void 0},panControlPosition:String,restriction:Object,rotateControl:{type:Boolean,default:void 0},rotateControlPosition:String,scaleControl:{type:Boolean,default:void 0},scaleControlStyle:Number,scrollwheel:{type:Boolean,
default:void 0},streetView:Object,streetViewControl:{type:Boolean,default:void 0},streetViewControlPosition:String,styles:Array,tilt:Number,zoom:Number,zoomControl:{type:Boolean,default:void 0},zoomControlPosition:String},emits:u,setup(a,{emit:d}){let e=ref(null),f=ref(!1),b=ref(null),g=ref(null),h=ref(!1);provide(m,b);provide(n,g);provide(r,h);let k=()=>{var b,c,l,d,e;const f={backgroundColor:a.backgroundColor,center:a.center,clickableIcons:a.clickableIcons,controlSize:a.controlSize,disableDefaultUI:a.disableDefaultUi,
disableDoubleClickZoom:a.disableDoubleClickZoom,draggable:a.draggable,draggableCursor:a.draggableCursor,draggingCursor:a.draggingCursor,fullscreenControl:a.fullscreenControl,fullscreenControlOptions:a.fullscreenControlPosition?{position:null===(b=g.value)||void 0===b?void 0:b.ControlPosition[a.fullscreenControlPosition]}:{},gestureHandling:a.gestureHandling,heading:a.heading,keyboardShortcuts:a.keyboardShortcuts,mapTypeControl:a.mapTypeControl,mapTypeControlOptions:a.mapTypeControlOptions,mapTypeId:a.mapTypeId,
maxZoom:a.maxZoom,minZoom:a.minZoom,noClear:a.noClear,panControl:a.panControl,panControlOptions:a.panControlPosition?{position:null===(c=g.value)||void 0===c?void 0:c.ControlPosition[a.panControlPosition]}:{},restriction:a.restriction,rotateControl:a.rotateControl,rotateControlOptions:a.rotateControlPosition?{position:null===(l=g.value)||void 0===l?void 0:l.ControlPosition[a.rotateControlPosition]}:{},scaleControl:a.scaleControl,scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:
{},scrollwheel:a.scrollwheel,streetView:a.streetView,streetViewControl:a.streetViewControl,streetViewControlOptions:a.streetViewControlPosition?{position:null===(d=g.value)||void 0===d?void 0:d.ControlPosition[a.streetViewControlPosition]}:{},styles:a.styles,tilt:a.tilt,zoom:a.zoom,zoomControl:a.zoomControl,zoomControlOptions:a.zoomControlPosition?{position:null===(e=g.value)||void 0===e?void 0:e.ControlPosition[a.zoomControlPosition]}:{}};Object.keys(f).forEach(a=>void 0===f[a]&&delete f[a]);return f};
onBeforeUnmount(()=>{var a;h.value=!1;b.value&&(null===(a=g.value)||void 0===a?void 0:a.event.clearInstanceListeners(b.value))});let q=watch([g,b],([a,c])=>{a&&c&&(a.event.addListenerOnce(c,"tilesloaded",()=>{h.value=!0}),setTimeout(q,0))},{immediate:!0});onMounted(()=>{try{t.value=new Loader({apiKey:a.apiKey,mapIds:a.mapIds,version:a.version||"weekly",libraries:a.libraries||["places"],language:a.language,region:a.region})}catch(p){console.error(p)}finally{t.value.load().then(()=>{var {Map:h}=g.value=
google.maps;b.value=new h(e.value,k());u.forEach(a=>{var c;null===(c=b.value)||void 0===c?void 0:c.addListener(a,c=>d(a,c))});f.value=!0;h=Object.keys(a).filter(a=>!["center","zoom"].includes(a)).map(c=>toRef(a,c));watch([()=>a.center,()=>a.zoom,...h],([a,l],[d,e])=>{var c,f,g;let {center:h,zoom:p,...H}=k();null===(c=b.value)||void 0===c?void 0:c.setOptions(H);void 0!==l&&l!==e&&(null===(f=b.value)||void 0===f?void 0:f.setZoom(l));!a||d&&a.lng===d.lng&&a.lat===d.lat||(null===(g=b.value)||void 0===
g?void 0:g.panTo(a))})})}});return{mapRef:e,ready:f,map:b,api:g}}});var A=void 0;void 0===A&&(A={});var B=A.insertAt;if("undefined"!==typeof document){var C=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css";"top"===B?C.firstChild?C.insertBefore(D,C.firstChild):C.appendChild(D):C.appendChild(D);D.styleSheet?D.styleSheet.cssText="\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n":D.appendChild(document.createTextNode("\n.mapdiv[data-v-177d06e3] {\n  width: 100%;\n  height: 100%;\n}\n"))}
let E=withScopeId("data-v-177d06e3");pushScopeId("data-v-177d06e3");let F={ref:"mapRef",class:"mapdiv"};popScopeId();let G=E(a=>(openBlock(),createBlock("div",null,[createVNode("div",F,null,512),renderSlot(a.$slots,"default",{},void 0,!0)])));z.render=G;z.__scopeId="data-v-177d06e3";
let I=(a,d,e,f)=>{let b=null;const g=ref(null),h=inject(m,ref(null)),k=inject(n,ref(null));watch([h,e],(q,p,c)=>{h.value&&k.value&&(g.value=b=new k.value[a]({...e.value,map:h.value}),d.forEach(a=>{null===b||void 0===b?void 0:b.addListener(a,c=>f(a,c))}));c(()=>{var a;b&&(null===(a=k.value)||void 0===a?void 0:a.event.clearInstanceListeners(b),b.setMap(null))})},{immediate:!0});return{component:g}};
var J=defineComponent({props:{options:{type:Object,required:!0}},emits:v,setup(a,{emit:d}){a=toRef(a,"options");return{marker:I("Marker",v,a,d)}},render:()=>null}),K=defineComponent({props:{options:{type:Object,required:!0}},emits:w,setup(a,{emit:d}){a=toRef(a,"options");return{polyline:I("Polyline",w,a,d)}},render:()=>null}),L=defineComponent({props:{options:{type:Object,required:!0}},emits:w,setup(a,{emit:d}){a=toRef(a,"options");return{polygon:I("Polygon",w,a,d)}},render:()=>null}),M=defineComponent({props:{options:{type:Object,
required:!0}},emits:x,setup(a,{emit:d}){a=toRef(a,"options");return{rectangle:I("Rectangle",x,a,d)}},render:()=>null}),N=defineComponent({props:{options:{type:Object,required:!0}},emits:y,setup(a,{emit:d}){a=toRef(a,"options");return{circle:I("Circle",y,a,d)}},render:()=>null}),O=defineComponent({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(a,{emit:d}){let e=ref(null),f=inject(m,ref(null)),b=inject(n,ref(null)),g=inject(r,ref(!1)),h=ref(!1),
k=watch([g,b,e],([c,b,e])=>{b&&c&&e&&(q(a.position),h.value=!0,d("content:loaded"),setTimeout(k,0))},{immediate:!0}),q=a=>{f.value&&b.value&&e.value&&f.value.controls[b.value.ControlPosition[a]].push(e.value)},p=a=>{if(f.value&&b.value){let c=null;a=b.value.ControlPosition[a];f.value.controls[a].forEach((a,b)=>{a===e.value&&(c=b)});null!==c&&f.value.controls[a].removeAt(c)}};onBeforeUnmount(()=>p(a.position));watch(()=>a.position,(a,b)=>{p(b);q(a)});watch(()=>a.index,b=>{b&&e.value&&(e.value.index=
a.index)});return{controlRef:e,showContent:h}}});let P={ref:"controlRef"};O.render=function(a){return openBlock(),createBlock(Fragment,null,[createCommentVNode("\n    v-show must be used instead of v-if otherwise there\n    would be no rendered content pushed to the map controls\n  "),withDirectives(createVNode("div",P,[renderSlot(a.$slots,"default")],512),[[vShow,a.showContent]])],2112)};
let Q=[{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{visibility:"off"},{weight:7}]},{featureType:"administrative.locality",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"on"}]},
{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#00ff28"},{visibility:"on"},{weight:2}]},{featureType:"administrative.neighborhood",elementType:"geometry.stroke",stylers:[{color:"#00ff28"},{visibility:"on"}]},{featureType:"administrative.neighborhood",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},
{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",
stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"},{lightness:-10},{color:"#b5b5b5"},{weight:.2}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#fbfbfb"},{lightness:-15},
{weight:.5}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]}],R=[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},
{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},
{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#c4c4c4"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#e5c163"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",
elementType:"geometry.fill",stylers:[{color:"#e5c163"},{lightness:0}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#e5c163"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575757"}]},
{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#2c2c2c"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#999999"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},
{lightness:17}]}],S=[...R,...Q];
var aubergine=[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",
elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",
stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},
{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",
elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}];
var dark=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},
{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",
elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}];
var grey=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},
{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},
{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}];
var retro=[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",
elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},
{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit.line",elementType:"geometry",
stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}];
var ultraLight=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},
{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},
{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];export{N as Circle,O as CustomControl,z as GoogleMap,J as Marker,L as Polygon,K as Polyline,M as Rectangle,aubergine,dark,grey,Q as minimal,retro,R as roadways,S as roadwaysMinimal,ultraLight}
