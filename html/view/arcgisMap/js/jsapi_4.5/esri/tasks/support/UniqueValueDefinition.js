// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","./ClassificationDefinition"],function(b,c){return c.createSubclass({declaredClass:"esri.tasks.support.UniqueValueDefinition",properties:{attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,type:"uniqueValueDef"},toJSON:function(){var a=this.inherited(arguments);this.uniqueValueFields=[];this.attributeField&&this.uniqueValueFields.push(this.attributeField);this.attributeField2&&this.uniqueValueFields.push(this.attributeField2);this.attributeField3&&
this.uniqueValueFields.push(this.attributeField3);b.mixin(a,{type:this.type,uniqueValueFields:this.uniqueValueFields});this.fieldDelimiter&&b.mixin(a,{fieldDelimiter:this.fieldDelimiter});return a}})});