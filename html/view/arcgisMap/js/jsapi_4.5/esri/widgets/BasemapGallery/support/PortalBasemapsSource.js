// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/watchUtils ./LocalBasemapsSource ../../../Basemap ../../../core/Collection ../../../core/HandleRegistry ../../../portal/Portal".split(" "),function(q,r,g,d,c,h,k,l,m,n,p){var f=m.ofType(l);return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b._handles=new n;b.basemaps=new f;b.filterFunction=null;b.portal=null;b.query=
null;return b}g(a,e);a.prototype.initialize=function(){var b=this;this._handles.add([h.init(this,["filterFunction","portal.basemapGalleryGroupQuery","portal.user","query"],function(){return b.refresh()})])};a.prototype.destroy=function(){this._handles.destroy();this.portal=this.filterFunction=this._handles=null};Object.defineProperty(a.prototype,"state",{get:function(){return this._get("state")},enumerable:!0,configurable:!0});a.prototype.refresh=function(){var b=this;this._set("state","loading");
this._lastPortalBasemapFetch&&(this._lastPortalBasemapFetch.cancel(),this._lastPortalBasemapFetch=null);var a=this.portal;if(a){var c=!1;this._lastPortalBasemapFetch={cancel:function(){c=!0}};a.load().then(function(){if(!c)return a.fetchBasemaps(b._toQueryString(b.query))}).then(function(a){c||(a=b.filterFunction?a.filter(b.filterFunction):a,b.basemaps.removeAll(),b.basemaps.addMany(a))}).otherwise(function(){c||b.basemaps.removeAll()}).then(function(){c||b._set("state","ready")})}else this.basemaps.removeAll(),
this._set("state","ready")};a.prototype._toQueryString=function(b){return b&&"string"!==typeof b?Object.keys(b).map(function(a){return a+":"+b[a]}).join(" AND "):b};d([c.property({readOnly:!0,type:f})],a.prototype,"basemaps",void 0);d([c.property()],a.prototype,"filterFunction",void 0);d([c.property({type:p})],a.prototype,"portal",void 0);d([c.property()],a.prototype,"query",void 0);d([c.property({readOnly:!0,value:"loading"})],a.prototype,"state",null);return a=d([c.subclass("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],
a)}(c.declared(k))});