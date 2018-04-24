// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../core/lang ./SpatialReference ./Geometry ./Point ./Extent ./support/zmUtils".split(" "),function(N,O,P,Q,f,K,h){var n=Q.createSubclass({declaredClass:"esri.geometry.Polyline",type:"polyline",getDefaults:function(a){return{paths:[]}},normalizeCtorArgs:function(a,b){var c=null,e,d,g=null;a&&!Array.isArray(a)?(c=a.paths?a.paths:null,b||(a.spatialReference?b=a.spatialReference:a.paths||(b=a)),e=a.hasZ,d=a.hasM):c=a;c=c||[];b=b||P.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"==
typeof c[0][0]&&(c=[c]);if(g=c[0]&&c[0][0])void 0===e&&void 0===d?(e=2<g.length,d=!1):void 0===e?e=!d&&3<g.length:void 0===d&&(d=!e&&3<g.length);return{paths:c,spatialReference:b,hasZ:e,hasM:d}},_path:0,properties:{cache:{dependsOn:["hasM","hasZ","paths"]},extent:{dependsOn:["cache"],readOnly:!0,get:function(){function a(a){return function(b,c){return void 0===b?c:void 0===c?b:a(b,c)}}var b=this.paths,c=b.length;if(!c||!b[0].length)return null;var e,d,g,f,m,h,p,C,D,q,r,n,E=h=b[0][0][0],F=p=b[0][0][1],
G,H,k=a(Math.min),l=a(Math.max),t=this.spatialReference,I=[],u,v,w,x,y,z,A,B,J=this.hasZ,L=this.hasM,M=J?3:2;for(q=0;q<c;q++){e=b[q];u=v=e[0]&&e[0][0];w=x=e[0]&&e[0][1];n=e.length;A=B=y=z=void 0;for(r=0;r<n;r++)d=e[r],g=d[0],f=d[1],E=k(E,g),F=k(F,f),h=l(h,g),p=l(p,f),u=k(u,g),w=k(w,f),v=l(v,g),x=l(x,f),J&&2<d.length&&(m=d[2],G=k(G,m),C=l(C,m),y=k(y,m),z=l(z,m)),L&&d.length>M&&(d=d[M],H=k(H,m),D=l(D,m),A=k(A,d),B=l(B,d));I.push(new K({xmin:u,ymin:w,zmin:y,mmin:A,xmax:v,ymax:x,zmax:z,mmax:B,spatialReference:t?
t.clone():null}))}b=new K({xmin:E,ymin:F,xmax:h,ymax:p,spatialReference:t?t.toJSON():null});J&&(b.zmin=G,b.zmax=C);L&&(b.mmin=H,b.mmax=D);b.cache._partwise=1<I.length?I:null;return b}},paths:null},addPath:function(a){this.clearCache();this._path=this.paths.length;this.paths[this._path]=[];a.forEach(this._addPoint,this);return this},clone:function(){var a=new n;a.spatialReference=this.spatialReference;a.paths=N.clone(this.paths);a.hasZ=this.hasZ;a.hasM=this.hasM;return a},getPoint:function(a,b){if(this._validateInputs(a,
b)){a=this.paths[a][b];b=this.hasZ;var c=this.hasM;return b&&c?new f(a[0],a[1],a[2],a[3],this.spatialReference):b?new f(a[0],a[1],a[2],void 0,this.spatialReference):c?new f(a[0],a[1],void 0,a[2],this.spatialReference):new f(a[0],a[1],this.spatialReference)}},insertPoint:function(a,b,c){if(this._validateInputs(a)&&O.isDefined(b)&&0<=b&&b<=this.paths[a].length)return this.clearCache(),h.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.paths[a].splice(b,0,c),this},removePath:function(a){if(this._validateInputs(a,
null)){this.clearCache();a=this.paths.splice(a,1)[0];var b,c=a.length,e=this.spatialReference;for(b=0;b<c;b++)a[b]=new f(a[b],e);return a}},removePoint:function(a,b){if(this._validateInputs(a,b))return this.clearCache(),new f(this.paths[a].splice(b,1)[0],this.spatialReference)},setPoint:function(a,b,c){if(this._validateInputs(a,b))return this.clearCache(),h.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.paths[a][b]=c,this},toJSON:function(){var a=this.spatialReference,a={paths:this.paths,
spatialReference:a&&a.toJSON()};this.hasZ&&(a.hasZ=!0);this.hasM&&(a.hasM=!0);return a},_initPathPointsToArray:function(a){for(var b=0;b<a.paths.length;b++)a.paths[b]=a.paths[b].map(function(b){h.updateSupportFromPoint(a,b,!0);Array.isArray(b)||(a.spatialReference||(a.spatialReference=b.spatialReference),b=b.toArray());return b});return a},_addPoint:function(a){Array.isArray(a)?this.paths[this._path].push(a):this.paths[this._path].push(a.toArray());h.updateSupportFromPoint(this,a)},_insertPoints:function(a,
b){this.clearCache();this._path=b;this.paths[this._path]||(this.paths[this._path]=[]);a.forEach(this._addPoint,this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.paths.length)||null!==b&&void 0!==a&&(0>b||b>=this.paths[a].length)?!1:!0}});return n});