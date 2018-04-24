// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/lang","../../../Color","./support/utils"],function(r,t,p,d,g){function n(a,b){var c;if(a)switch(b){case "point":case "multipoint":c={color:new d(a.color),outline:{color:new d(a.outline.color),width:a.outline.width},size:a.size,opacity:a.opacity||1};break;case "polyline":c={color:new d(a.color),width:a.width,opacity:a.opacity||1};break;case "polygon":c={color:new d(a.color),outline:{color:new d(a.outline.color),width:a.outline.width},opacity:a.opacity||1};break;
case "mesh":c={color:new d(a.color),opacity:a.opacity||1}}return c}function q(a,b){var c=h["default"];b=g.getStorageType(b);return(c=c&&c[b])&&c[a]}var k={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},
pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,1],
width:"1px"},size:"8px"}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,1],width:"1px"},opacity:.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,1],width:"1px"},opacity:.8},
{color:[255,255,255,1],outline:{color:[128,128,128,1],width:"1px"},opacity:.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[51,51,51,1],width:"1px"},opacity:.8},secondary:[{color:[178,178,178,1],outline:{color:[51,51,51,1],width:"1px"},opacity:.8},{color:[26,26,26,1],outline:{color:[128,128,128,1],width:"1px"},opacity:.8}]}}}},h={};(function(){for(var a in k){var b=k[a],c=b.basemapGroups,l=h[a]={basemaps:[].concat(c.light).concat(c.dark),point:{},polyline:{},polygon:{}},e;for(e in c)for(var f=
c[e],d=0;d<f.length;d++){var g=f[d];b.pointSchemes&&(l.point[g]=b.pointSchemes[e]);b.lineSchemes&&(l.polyline[g]=b.lineSchemes[e]);b.polygonSchemes&&(l.polygon[g]=b.polygonSchemes[e])}}})();var m={getThemes:function(a){var b=[],c;for(c in k){var d=k[c],e=h[c],f=g.getBasemapId(a,e.basemaps);f&&-1===e.basemaps.indexOf(f)||b.push({name:d.name,label:d.label,description:d.description,basemaps:e.basemaps.slice(0)})}return b},getSchemes:function(a){var b=a.geometryType,c="mesh"!==b&&a.worldScale,d=a.view;
a=g.getBasemapId(a.basemap,h["default"].basemaps);var e=q(a,b),f;e&&(f=n(e.primary,b),f={primaryScheme:c?m.toWorldScale({scheme:f,view:d}):f,secondarySchemes:e.secondary.map(function(a){a=n(a,b);return c?m.toWorldScale({scheme:a,view:d}):a}),basemapId:a});return f},cloneScheme:function(a){var b;a&&(b=p.mixin({},a),b.color&&(b.color=new d(b.color)),b.outline&&(b.outline={color:b.outline.color&&new d(b.outline.color),width:b.outline.width}));return b},toWorldScale:function(a){if(a.scheme&&a.view){var b=
a.scheme,c=a.scheme;return b.hasOwnProperty("size")?(b.size&&(b.size=g.toWorldScale(b.size,a.view)),b):c.hasOwnProperty("width")?(c.width&&(c.width=g.toWorldScale(c.width,a.view)),c):a.scheme}}};return m});