// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix/vec3 ../../../../core/libs/gl-matrix/mat4 ../../../../core/promiseUtils ../../../../geometry/Point ../Container ./GeometryUtils ./WGLRendererInfo ./Utils".split(" "),function(w,x,p,m,k,q,r,t,u,v,n){return function(l){function b(a,e,d){var c=l.call(this)||this;c._displayWidth=0;c._displayHeight=0;c._pointToCallbacks=new Map;c._highlightIDs=new Set;c._highlightOptionsUpToDate=!1;c._tileSize=a;c._tileCoordRange=
e;c._tileCoordRatio=e/a;c._parentLayerView=d;c._oneOverTileRatio=1/c._tileCoordRatio;c._tileCoordinateScale=m.create();c._orientationVec=m.create();c._displayScale=m.create();c._orientationVec.set([0,0,1]);c._defaultTransform=k.create();return c}p(b,l);Object.defineProperty(b.prototype,"highlightOptions",{get:function(){return this._highlightOptions},set:function(a){this._highlightOptions=a;this._highlightOptionsUpToDate=!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"displayWidth",
{get:function(){return this._displayWidth},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0});b.prototype.initialize=function(a){this._tileInfoView=a;this.wglRendererInfo=new v(this)};b.prototype.updateHeatmapParameters=function(a){this.wglRendererInfo.updateHeatmapParameters(a);this.requestRender()};b.prototype.hitTest=function(a,e){var d=this,c=[a,e];return q.create(function(a,e){d._pointToCallbacks.set(c,
{resolve:a,reject:e});d.requestRender()},function(){d._pointToCallbacks.has(c)&&d._pointToCallbacks.delete(c)})};b.prototype.setHighlight=function(a){this._highlightIDs.clear();this.addHighlight(a)};b.prototype.addHighlight=function(a){var e=this;a.forEach(function(a){e._highlightIDs.add(a)});this._buildHLList()};b.prototype.removeHighlight=function(a){var e=this;a.forEach(function(a){e._highlightIDs.delete(a)});this._buildHLList()};b.prototype.addChild=function(a){a=l.prototype.addChild.call(this,
a);this._buildHLList();return a};b.prototype.removeChild=function(a){a=l.prototype.removeChild.call(this,a);this._buildHLList();return a};b.prototype.prepareChildrenRenderParameters=function(a){return a};b.prototype.renderChildren=function(a){var e=this;this.wglRendererInfo.updateVisualVariables(this._parentLayerView.rendererInfo.vvRanges,a.state);var d=this.parent.glPainter;this.sortChildren(function(a,c){return a.key.level-c.key.level});var c=this._tileInfoView.getClosestInfoForScale(a.state.scale).level;
this.wglRendererInfo.heatmapParameters?d.drawHeatmap(a.context,this,c,a.devicePixelRatio):d.draw(a.context,this,c,a.devicePixelRatio,a.stationary);0<this._highlightIDs.size&&d.highlight(a.context,this,c,a.devicePixelRatio);0!==this._pointToCallbacks.size&&(this._pointToCallbacks.forEach(function(c,d){c.resolve(e._hitTest(a,d[0],d[1]))}),this._pointToCallbacks.clear())};b.prototype.attachChild=function(a,e){return a.attach(e)};b.prototype.detachChild=function(a,e){a.detach(e)};b.prototype.renderChild=
function(a,e){a.doRender(e)};b.prototype.beforeRenderChildren=function(a,e){this._updateTilesTransform(a.state,this._tileInfoView.getClosestInfoForScale(a.state.scale).level);this._updateHighlightOptions()};b.prototype._hitTest=function(a,e,d){var c=this.parent.glPainter,b=this._tileInfoView.getClosestInfoForScale(a.state.scale).level,h=[0,0];a.state.toMap(h,[e,d]);var g=a.state.clone(),f=g.viewpoint.clone();f.targetGeometry=new r(h[0],h[1],a.state.spatialReference);g.viewpoint=f;g.size=[n.C_HITTEST_SEARCH_SIZE,
n.C_HITTEST_SEARCH_SIZE];this._updateTilesTransform(g,b);c.update(g,a.devicePixelRatio);return c.hitTest({context:a.context,budget:a.budget,state:g,devicePixelRatio:a.devicePixelRatio,stationary:a.stationary},e,d,this,b)};b.prototype._updateTilesTransform=function(a,e){var d=1/a.width,c=1/a.height,b=[0,0];this._calculateRelativeViewProjMat(this._tileInfoView.tileInfo.lods[e].resolution,a.resolution,a.rotation,this._tileInfoView.tileInfo.size[0],this._tileCoordRange,a.width,a.height,this._defaultTransform);
for(var h=0,g=this.children;h<g.length;h++){var f=g[h];a.toScreen(b,f.coords);b[1]=a.height-b[1];f.tileTransform.displayCoord[0]=2*b[0]*d-1;f.tileTransform.displayCoord[1]=2*b[1]*c-1;f.key.level===e?f.tileTransform.transform.set(this._defaultTransform):this._calculateRelativeViewProjMat(this._tileInfoView.tileInfo.lods[f.key.level].resolution,a.resolution,a.rotation,this._tileInfoView.tileInfo.size[0],f.coordRange,a.width,a.height,f.tileTransform.transform)}};b.prototype._calculateRelativeViewProjMat=
function(a,b,d,c,l,h,g,f){a=a/b*this._oneOverTileRatio;this._tileCoordinateScale.set([a,a,1]);if(h!==this._displayWidth||g!==this._displayHeight)this._displayScale.set([2/h,-2/g,1]),this._displayWidth=h,this._displayHeight=g;k.identity(f);k.scale(f,f,this._tileCoordinateScale);k.rotate(f,f,-d*u.C_DEG_TO_RAD,this._orientationVec);k.scale(f,f,this._displayScale);k.transpose(f,f)};b.prototype._updateHighlightOptions=function(){!this._highlightOptionsUpToDate&&this._setHighlightOptions(this._highlightOptions)&&
(this._highlightOptionsUpToDate=!0)};b.prototype._setHighlightOptions=function(a){if(!this.parent)return!1;var b=this.parent.glPainter;if(!b)return!1;var d=a.color.toRgba();d[0]/=255;d[1]/=255;d[2]/=255;var c=d.slice();d[3]*=a.fillOpacity;c[3]*=a.haloOpacity;b.setHighlightOptions({fillColor:d,outlineColor:c,outlineWidth:2,outerHaloWidth:.3,innerHaloWidth:.3,outlinePosition:0});return!0};b.prototype._buildHLList=function(){var a=this;this.children.forEach(function(b){b.buildHLList(a._highlightIDs)});
this.requestRender()};return b}(t)});