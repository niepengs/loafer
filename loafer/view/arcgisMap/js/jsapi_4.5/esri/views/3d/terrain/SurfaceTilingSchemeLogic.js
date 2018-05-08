// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../core/HandleRegistry ./terrainUtils ./TilingScheme".split(" "),function(n,p,k,e,d,l,m,g,f){return function(h){function a(b){b=h.call(this,b)||this;b._changeHandles=new m;return b}k(a,h);a.prototype.initialize=function(){var b=this;this._changeHandles.add(this.layers.on("change",function(){return b._update()}));this._changeHandles.add(this.extentHelper.watch("layerViewsExtent",
function(){return b._setAdHocTilingScheme()}));this._update();this.tilingSchemeLocked||this._setAdHocTilingScheme()};a.prototype.destroy=function(){this._changeHandles.destroy();this._changeHandles=null};a.prototype._update=function(){var b=this;this._waitTask=null;if(!this.tilingSchemeLocked){var a=this.layers.find(function(a){return g.isTiledLayer(a)?a.isFulfilled()?a.isRejected()?!1:!!g.getTiledLayerInfo(a,b.viewSpatialReference,b.manifold).tileInfo:!0:!1});if(a)if(a.isResolved()){var c=g.getTiledLayerInfo(a,
this.viewSpatialReference,this.manifold).tileInfo,c=new f(c),a=g.getKnownTiledServiceLevelCap(a.url);Infinity>a&&c.capMaxLod(a);this._lockTilingScheme(c)}else this._updateWhen(a)}};a.prototype._updateWhen=function(a){var b=this,c=a.always(function(){c===b._waitTask&&b._update()});this._waitTask=c};a.prototype._lockTilingScheme=function(a){var b=this;if("spherical"===this.manifold){var c=a.levels.length-1;a=a.spatialReference.isWebMercator?f.makeWebMercatorAuxiliarySphere(c):f.makeWGS84WithTileSize(a.pixelSize[0],
c)}this.tilingSchemeLocked=!0;this.tilingScheme=a;this.extentHelper.tilingScheme=this.tilingScheme;this._updateTiledLayerExtent();this._changeHandles.removeAll();this._changeHandles.add(this.extentHelper.watch("tiledLayersExtent",function(){return b._updateTiledLayerExtent()}))};a.prototype._updateTiledLayerExtent=function(){this.extent=this.extentHelper.tiledLayersExtent};a.prototype._setAdHocTilingScheme=function(){if("spherical"===this.manifold)this.tilingScheme=this.extentHelper.spatialReference.isWebMercator?
f.WebMercatorAuxiliarySphere:f.makeWGS84WithTileSize(256),this.extent=this.extentHelper.layerViewsExtent;else{var a=this.extentHelper.layerViewsExtent;a&&(this.tilingScheme=f.fromExtent(a,this.extentHelper.spatialReference),this.extent=a)}};e([d.property()],a.prototype,"tilingScheme",void 0);e([d.property()],a.prototype,"extent",void 0);e([d.property({value:!1})],a.prototype,"tilingSchemeLocked",void 0);e([d.property({constructOnly:!0})],a.prototype,"viewSpatialReference",void 0);e([d.property({constructOnly:!0})],
a.prototype,"layers",void 0);e([d.property({constructOnly:!0})],a.prototype,"extentHelper",void 0);e([d.property({constructOnly:!0})],a.prototype,"manifold",void 0);return a=e([d.subclass()],a)}(d.declared(l))});