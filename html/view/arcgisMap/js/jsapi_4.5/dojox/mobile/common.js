//>>built
define("dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/_base/kernel dojo/dom dojo/dom-class dojo/dom-construct dojo/domReady dojo/ready dojo/touch dijit/registry ./sniff ./uacss".split(" "),function(p,g,m,n,d,u,v,k,q,w,x,z,y,e){var a=n.getObject("dojox.mobile",!0);d.doc.dojoClick=!0;e("touch")&&(e.add("clicks-prevented",!(4.1<=e("android")||10===e("ie")||!e("ie")&&6<e("trident"))),e("clicks-prevented")&&(a._sendClick=function(a,c){for(var b=a;b;b=b.parentNode)if(b.dojoClick)return;
b=d.doc.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,d.global,1,c.screenX,c.screenY,c.clientX,c.clientY);a.dispatchEvent(b)}));a.getScreenSize=function(){return{h:d.global.innerHeight||d.doc.documentElement.clientHeight,w:d.global.innerWidth||d.doc.documentElement.clientWidth}};a.updateOrient=function(){var b=a.getScreenSize();k.replace(d.doc.documentElement,b.h>b.w?"dj_portrait":"dj_landscape",b.h>b.w?"dj_landscape":"dj_portrait")};a.updateOrient();a.tabletSize=500;a.detectScreenSize=
function(b){var c=a.getScreenSize(),e=Math.min(c.w,c.h),h,f;e>=a.tabletSize&&(b||!this._sz||this._sz<a.tabletSize)?(h="phone",f="tablet"):e<a.tabletSize&&(b||!this._sz||this._sz>=a.tabletSize)&&(h="tablet",f="phone");f&&(k.replace(d.doc.documentElement,"dj_"+f,"dj_"+h),m.publish("/dojox/mobile/screenSize/"+f,[c]));this._sz=e};a.detectScreenSize();a.hideAddressBarWait="number"===typeof g.mblHideAddressBarWait?g.mblHideAddressBarWait:1500;a.hide_1=function(){scrollTo(0,1);a._hidingTimer=0==a._hidingTimer?
200:2*a._hidingTimer;setTimeout(function(){a.isAddressBarHidden()||a._hidingTimer>a.hideAddressBarWait?(a.resizeAll(),a._hiding=!1):setTimeout(a.hide_1,a._hidingTimer)},50)};a.hideAddressBar=function(b){a.disableHideAddressBar||a._hiding||(a._hiding=!0,a._hidingTimer=e("ios")?200:0,b=screen.availHeight,e("android")&&(b=outerHeight/devicePixelRatio,0==b&&(a._hiding=!1,setTimeout(function(){a.hideAddressBar()},200)),b<=innerHeight&&(b=outerHeight),3>e("android")&&(d.doc.documentElement.style.overflow=
d.body().style.overflow="visible")),d.body().offsetHeight<b&&(d.body().style.minHeight=b+"px",a._resetMinHeight=!0),setTimeout(a.hide_1,a._hidingTimer))};a.isAddressBarHidden=function(){return 1===pageYOffset};a.resizeAll=function(b,c){if(!a.disableResizeAll){m.publish("/dojox/mobile/resizeAll",[b,c]);m.publish("/dojox/mobile/beforeResizeAll",[b,c]);a._resetMinHeight&&(d.body().style.minHeight=a.getScreenSize().h+"px");a.updateOrient();a.detectScreenSize();var e=function(a){var b=a.getParent&&a.getParent();
return!(b&&b.resize||!a.resize)},h=function(a){p.forEach(a.getChildren(),function(a){e(a)&&a.resize();h(a)})};c?(c.resize&&c.resize(),h(c)):p.forEach(p.filter(y.toArray(),e),function(a){a.resize()});m.publish("/dojox/mobile/afterResizeAll",[b,c])}};a.openWindow=function(a,c){d.global.open(a,c||"_blank")};a._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&q.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},d.doc.head);var a=function(){k.add(d.doc.documentElement,
"windows_theme");u.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},c=e("windows-theme");if(void 0!==c)c&&a();else{for(var l,h=function(b){return b&&-1!==b.indexOf("/windows/")?(e.add("windows-theme",!0),a(),!0):!1},f=d.doc.styleSheets,c=0;c<f.length;c++)if(!f[c].href){var g=f[c].cssRules||f[c].imports;if(g)for(l=0;l<g.length;l++)if(h(g[l].href))return}l=d.doc.getElementsByTagName("link");for(c=0;c<l.length&&!h(l[c].href);c++);}};!1!==g.mblApplyPageStyles&&
k.add(d.doc.documentElement,"mobile");e("chrome")&&k.add(d.doc.documentElement,"dj_chrome");if(d.global._no_dojo_dm){n=d.global._no_dojo_dm;for(var r in n)a[r]=n[r];a.deviceTheme.setDm(a)}e.add("mblAndroidWorkaround",!1!==g.mblAndroidWorkaround&&3>e("android"),void 0,!0);e.add("mblAndroid3Workaround",!1!==g.mblAndroid3Workaround&&3<=e("android"),void 0,!0);a._detectWindowsTheme();a.setSelectable=function(a,c){var b,d;a=v.byId(a);if(9>=e("ie"))if(b=a.getElementsByTagName("*"),d=b.length,c)for(a.removeAttribute("unselectable");d--;)b[d].removeAttribute("unselectable");
else for(a.setAttribute("unselectable","on");d--;)"INPUT"!==b[d].tagName&&b[d].setAttribute("unselectable","on");else k.toggle(a,"unselectable",!c)};var t=e("pointer-events")?"touchAction":e("MSPointer")?"msTouchAction":null;a._setTouchAction=t?function(a,d){a.style[t]=d}:function(){};w(function(){!1!==g.mblApplyPageStyles&&k.add(d.body(),"mblBackground")});x(function(){a.detectScreenSize(!0);!1!==g.mblAndroidWorkaroundButtonStyle&&e("android")&&q.create("style",{innerHTML:"BUTTON,INPUT[type\x3d'button'],INPUT[type\x3d'submit'],INPUT[type\x3d'reset'],INPUT[type\x3d'file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},
d.doc.head,"first");e("mblAndroidWorkaround")&&q.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},d.doc.head,"last");var b=a.resizeAll,c=-1!=navigator.appVersion.indexOf("Mobile")&&!(7<=e("ios"));if(!1!==g.mblHideAddressBar&&c||!0===g.mblForceHideAddressBar)a.hideAddressBar(),!0===g.mblAlwaysHideAddressBar&&(b=a.hideAddressBar);var l=6<=e("ios");if((e("android")||l)&&void 0!==d.global.onorientationchange){var h=b,f,k,n;l?
(k=d.doc.documentElement.clientWidth,n=d.doc.documentElement.clientHeight):(b=function(a){var b=m.connect(null,"onresize",null,function(a){m.disconnect(b);h(a)})},f=a.getScreenSize());m.connect(null,"onresize",null,function(b){if(l){var c=d.doc.documentElement.clientWidth,e=d.doc.documentElement.clientHeight;c==k&&e!=n&&h(b);k=c;n=e}else c=a.getScreenSize(),c.w==f.w&&100<=Math.abs(c.h-f.h)&&h(b),f=c})}m.connect(null,void 0!==d.global.onorientationchange?"onorientationchange":"onresize",null,b);d.body().style.visibility=
"visible"});return a});