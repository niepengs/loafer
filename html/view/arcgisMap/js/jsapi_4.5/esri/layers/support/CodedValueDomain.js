// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./Domain ../../core/lang".split(" "),function(k,l,g,d,b,h,e){return function(f){function a(c){c=f.call(this,c)||this;c.codedValues=null;c.type="coded-value";return c}g(a,f);a.prototype.writeCodedValues=function(c,a){var b=null;c&&(b=c.map(function(a){return e.fixJson(e.clone(a))}));a.codedValues=b};a.prototype.getName=function(a){var b=null;if(this.codedValues){var c=
String(a);this.codedValues.some(function(a){String(a.code)===c&&(b=a.name);return!!b})}return b};d([b.property({json:{write:!0}})],a.prototype,"codedValues",void 0);d([b.writer("codedValues")],a.prototype,"writeCodedValues",null);d([b.property()],a.prototype,"type",void 0);return a=d([b.subclass("esri.layers.support.CodedValueDomain")],a)}(b.declared(h))});