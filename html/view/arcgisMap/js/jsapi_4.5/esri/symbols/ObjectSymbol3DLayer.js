// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/kebabDictionary ./Symbol3DLayer ./support/Symbol3DMaterial ./support/Symbol3DResource ../core/accessorSupport/decorators".split(" "),function(n,p,g,c,h,k,l,m,b){var e=h({center:"center",top:"top",bottom:"bottom",origin:"origin"},{ignoreUnknown:!0});return function(f){function a(a){a=f.call(this)||this;a.material=null;a.resource=null;a.type="object";a.width=void 0;a.height=void 0;a.depth=void 0;
a.anchor=void 0;a.heading=void 0;a.tilt=void 0;a.roll=void 0;return a}g(a,f);d=a;a.prototype.clone=function(){return new d({heading:this.heading,tilt:this.tilt,roll:this.roll,anchor:this.anchor,depth:this.depth,enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),height:this.height,material:this.material&&this.material.clone(),resource:this.resource&&this.resource.clone(),width:this.width})};Object.defineProperty(a.prototype,"isPrimitive",{get:function(){return!this.resource||
"string"!==typeof this.resource.href},enumerable:!0,configurable:!0});c([b.property({type:l.default})],a.prototype,"material",void 0);c([b.property({type:m.default,json:{write:!0}})],a.prototype,"resource",void 0);c([b.property()],a.prototype,"type",void 0);c([b.property({json:{write:!0}})],a.prototype,"width",void 0);c([b.property({json:{write:!0}})],a.prototype,"height",void 0);c([b.property({json:{write:!0}})],a.prototype,"depth",void 0);c([b.property({type:String,json:{read:e.read,write:e.write}})],
a.prototype,"anchor",void 0);c([b.property({json:{write:!0}})],a.prototype,"heading",void 0);c([b.property({json:{write:!0}})],a.prototype,"tilt",void 0);c([b.property({json:{write:!0}})],a.prototype,"roll",void 0);c([b.property({readOnly:!0,dependsOn:["resource","resource.href"]})],a.prototype,"isPrimitive",null);return a=d=c([b.subclass("esri.symbols.ObjectSymbol3DLayer")],a);var d}(b.declared(k))});