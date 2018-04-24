// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["../core/declare","dojo/_base/xhr","../config","./WorkerClient"],function(k,l,g,m){function n(a,b){var c=new e;c.addWorkerCallback(a,b);f.unshift({id:b?a+"::"+b:a,client:c});f.length>h&&f.pop().client.terminate();return c}var e=k([m],{declaredClass:"esri.workers.RequestClient",constructor:function(){this.setWorker(["./mutableWorker","./requestWorker"],function(){})},get:function(a){return this._send("GET",a)},post:function(a){return this._send("POST",a)},_send:function(a,b){b=l._ioSetArgs(b);
b.xhr=null;var c=b.ioArgs,d=c.url;delete c.url;delete c.args;this.postMessage({method:a,url:d,options:c}).then(this._getSuccessHandler(b),this._getErrorHandler(b),this._getProgressHandler(b));return b},_addHeaderFunctions:function(a){a.getResponseHeader=function(b){var c,d=a.headers;Object.keys(d).forEach(function(a){if(a.toLowerCase()==b.toLowerCase())return c=d[a],!1});return c};a.getAllResponseHeaders=function(){var b=[],c=a.headers;Object.keys(c).forEach(function(a){b.push(a+": "+c[a])});return b=
b.join("\n")};return a},_getSuccessHandler:function(a){var b=this,c=a.ioArgs;return function(d){a.xhr=b._addHeaderFunctions(d);d=a.xhr.getResponseHeader("content-type");("xml"==c.handleAs||-1<d.indexOf("xml"))&&"string"==typeof a.xhr.response&&(a.xhr.response=(new DOMParser).parseFromString(a.xhr.response,"text/xml"));a.resolve(a.xhr.response,a.xhr)}},_getErrorHandler:function(a){return function(b){a.reject(b)}},_getProgressHandler:function(a){return function(b){a.progress(b)}}}),f=[],h=g.request.maxWorkers,
p=new e;e.getClient=function(a,b){if(a){var c;f.some(function(d){d.id==(b?a+"::"+b:a)&&(c=d.client);return!0});return c||n(a,b)}return p};e.setLimit=function(a){h=g.request.maxWorkers=a};return e});