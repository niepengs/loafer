// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/window"],function(b,c,a){return{screenDPI:96,geometryService:null,geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",portalUrl:"https://www.arcgis.com",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{corsDetection:!(a.global&&a.global.cordova),corsDetectionTimeout:15,corsEnabledServers:"basemaps.arcgis.com basemapsbeta.arcgis.com basemapsbetadev.arcgis.com basemapsdev.arcgis.com cdn.arcgis.com cdn-a.arcgis.com cdn-b.arcgis.com demographics1.arcgis.com demographics2.arcgis.com demographics3.arcgis.com demographics4.arcgis.com demographics5.arcgis.com demographics6.arcgis.com dev.arcgis.com devext.arcgis.com elevation3d.arcgis.com elevation3ddev.arcgis.com js.arcgis.com jsdev.arcgis.com jsqa.arcgis.com geocode.arcgis.com geocodedev.arcgis.com geocodeqa.arcgis.com geoenrich.arcgis.com geoenrichdev.arcgis.com geoenrichqa.arcgis.com localvtiles.arcgis.com qaext.arcgis.com server.arcgisonline.com services.arcgis.com services.arcgisonline.com services1.arcgis.com services2.arcgis.com services3.arcgis.com services4.arcgis.com services5.arcgis.com services6.arcgis.com services7.arcgis.com services8.arcgis.com services9.arcgis.com servicesdev.arcgis.com servicesdev1.arcgis.com servicesdev2.arcgis.com servicesdev3.arcgis.com servicesqa.arcgis.com servicesqa1.arcgis.com servicesqa2.arcgis.com servicesqa3.arcgis.com static.arcgis.com staticqa.arcgis.com staticdev.arcgis.com tiles.arcgis.com tiles1.arcgis.com tiles2.arcgis.com tiles3.arcgis.com tiles4.arcgis.com tilesdevext.arcgis.com tilesqa.arcgis.com utility.arcgis.com utility.arcgisonline.com www.arcgis.com".split(" "),
corsStatus:{},forceProxy:!1,maxUrlLength:2E3,maxWorkers:5,proxyRules:[],proxyUrl:null,timeout:6E4,useIdentity:!0,useCors:"with-credentials",httpsDomains:"arcgis.com arcgisonline.com esrikr.com premiumservices.blackbridge.com esripremium.accuweather.com gbm.digitalglobe.com firstlook.digitalglobe.com msi.digitalglobe.com".split(" ")},useSpatialIndex:!1}});