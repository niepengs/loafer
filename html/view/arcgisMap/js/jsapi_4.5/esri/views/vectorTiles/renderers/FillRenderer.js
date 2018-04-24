// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix/mat4 ../../../core/libs/gl-matrix/mat3 ../../../core/libs/gl-matrix/vec4 ../../../core/libs/gl-matrix/vec3 ../../webgl/Program ../../webgl/VertexArrayObject ../GeometryUtils ./vtShaderSnippets".split(" "),function(F,G,y,A,v,D,u,B,C,f){var E=1/65536;return function(){function m(){this._outlineAttributeLocations={a_pos:0,a_offset:1,a_xnormal:2};this._fillAttributeLocations={a_pos:0};this._initialized=!1;this._viewProjMat=y.create();this._offsetVector=
D.create();this._patternMatrix=A.create();this._color=v.create();this._outlineColor=v.create()}m.prototype.dispose=function(){this._solidFillProgram&&(this._solidFillProgram.dispose(),this._solidFillProgram=null);this._patternFillProgram&&(this._patternFillProgram.dispose(),this._patternFillProgram=null);this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null)};m.prototype.render=function(a,b,c,e,f,h,k,m,u,w,g){if(0!==b.triangleElementCount){this._initialized||this._initialize(a);
var l=k.getPaintValue("fill-pattern",c),q=void 0!==l;if(!q||0!==f){var v=k.getPaintValue("fill-antialias",c)&&!q;g*=k.getPaintValue("fill-opacity",c);var r=k.getPaintValue("fill-color",c),x=!1;if(!q){var d=r[3]*g;1===d&&0===f&&(x=!0);1>d&&1===f&&(x=!0)}if(x||0!==f){var n=h.tileTransform.transform,d=h.coordRange/512,p=k.getPaintValue("fill-translate",c);if(0!==p[0]||0!==p[1]){y.copy(this._viewProjMat,h.tileTransform.transform);var n=p[0],p=p[1],z=0,t=0,d=(1<<h.key.level)/Math.pow(2,c)*d;1===k.getPaintValue("fill-translate-anchor",
c)?(t=Math.sin(C.C_DEG_TO_RAD*-e),e=Math.cos(C.C_DEG_TO_RAD*-e),z=d*(n*e-p*t),t=d*(n*t+p*e)):(z=d*n,t=d*p);this._offsetVector[0]=z;this._offsetVector[1]=t;this._offsetVector[2]=0;y.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);n=this._viewProjMat}if(e=this._getTrianglesVAO(a,h))if(q?1===f&&(l=m.getMosaicItemPosition(l,!0))&&(d=h.coordRange/512/Math.pow(2,Math.round(c)-h.key.level)/w,A.identity(this._patternMatrix),q=1/(l.size[1]*d),this._patternMatrix[0]=1/(l.size[0]*d),this._patternMatrix[4]=
q,a.bindVAO(e),m.bind(a,9729,l.page,1),a.bindProgram(this._patternFillProgram),this._patternFillProgram.setUniformMatrix4fv("u_transformMatrix",n),this._patternFillProgram.setUniform2fv("u_normalized_origin",h.tileTransform.displayCoord),this._patternFillProgram.setUniform1f("u_depth",k.z),this._patternFillProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix),this._patternFillProgram.setUniform1f("u_opacity",g),this._patternFillProgram.setUniform2f("u_pattern_tl",l.tl[0],l.tl[1]),this._patternFillProgram.setUniform2f("u_pattern_br",
l.br[0],l.br[1]),this._patternFillProgram.setUniform1i("u_texture",1),a.drawElements(4,b.triangleElementCount,5125,12*b.triangleElementStart),a.bindVAO()):x&&(d=r[3]*g,this._color[0]=d*r[0],this._color[1]=d*r[1],this._color[2]=d*r[2],this._color[3]=d,a.bindVAO(e),a.bindProgram(this._solidFillProgram),this._solidFillProgram.setUniformMatrix4fv("u_transformMatrix",n),this._solidFillProgram.setUniform2fv("u_normalized_origin",h.tileTransform.displayCoord),this._solidFillProgram.setUniform1f("u_depth",
k.z+E),this._solidFillProgram.setUniform4fv("u_color",this._color),a.drawElements(4,b.triangleElementCount,5125,12*b.triangleElementStart),a.bindVAO()),v&&0<b.outlineElementCount&&1===f){c=k.getPaintValue("fill-outline-color",c);if(0===c[3]){if(1!==this._color[3])return;c=r}w=.75/w;g*=c[3];this._outlineColor[0]=g*c[0];this._outlineColor[1]=g*c[1];this._outlineColor[2]=g*c[2];this._outlineColor[3]=g;if(g=this._getOutlineVAO(a,h))a.bindVAO(g),a.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",
n),this._outlineProgram.setUniformMatrix4fv("u_extrudeMatrix",u),this._outlineProgram.setUniform2fv("u_normalized_origin",h.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_depth",k.z),this._outlineProgram.setUniform1f("u_outline_width",w),this._outlineProgram.setUniform4fv("u_color",this._outlineColor),a.drawElements(4,b.outlineElementCount,5125,12*b.outlineElementStart),a.bindVAO()}}}}};m.prototype._initialize=function(a){if(this._initialized)return!0;var b=new u(a,f.solidFillShaderVS,
f.solidFillShaderFS,{a_pos:0});if(!b)return!1;var c=new u(a,f.patternFillShaderVS,f.patternFillShaderFS,this._fillAttributeLocations);if(!c)return!1;a=new u(a,f.fillOutlineShaderVS,f.fillOutlineShaderFS,this._outlineAttributeLocations);this._solidFillProgram=b;this._patternFillProgram=c;this._trianglesVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]};this._outlineProgram=a;this._outlineVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,
offset:0,stride:8,normalized:!1,divisor:0},{name:"a_offset",count:2,type:5120,offset:4,stride:8,normalized:!1,divisor:0},{name:"a_xnormal",count:2,type:5120,offset:6,stride:8,normalized:!1,divisor:0}]};return this._initialized=!0};m.prototype._getTrianglesVAO=function(a,b){if(b.polygonTrianglesVertexArrayObject)return b.polygonTrianglesVertexArrayObject;var c=b.polygonTrianglesVertexBuffer,e=b.polygonTrianglesIndexBuffer;if(!c||!e)return null;b.polygonTrianglesVertexArrayObject=new B(a,this._fillAttributeLocations,
this._trianglesVertexAttributes,{geometry:c},e);return b.polygonTrianglesVertexArrayObject};m.prototype._getOutlineVAO=function(a,b){if(b.polygonOutlineVertexArrayObject)return b.polygonOutlineVertexArrayObject;var c=b.polygonOutlinesVertexBuffer,e=b.polygonOutlinesIndexBuffer;if(!c||!e)return null;b.polygonOutlineVertexArrayObject=new B(a,this._outlineAttributeLocations,this._outlineVertexAttributes,{geometry:c},e);return b.polygonOutlineVertexArrayObject};return m}()});