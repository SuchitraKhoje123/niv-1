(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d4f8678"],{"14b8":function(e,t,r){"use strict";r("edd5")},2532:function(e,t,r){"use strict";var o=r("23e7"),a=r("5a34"),n=r("1d80"),i=r("ab13");o({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(n(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var o=r("861d"),a=r("c6b6"),n=r("b622"),i=n("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"5a34":function(e,t,r){var o=r("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"68b0":function(e,t,r){},"6cf7":function(e,t,r){"use strict";r("9894")},7277:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-modal",{staticClass:"long",attrs:{id:"nodeForm",title:"Add new Node","hide-footer":""}},[r("AddNodeForm")],1),r("div",{staticClass:"row"},[r("table",[r("tr",[r("td",[r("div",[r("b-button",{staticStyle:{float:"left","margin-right":"10px"},attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.show("nodeForm")}}},[r("PlusIcon",{staticClass:"addnode"}),e._v(" Add Node ")],1)],1),r("div",[r("b-button",{staticStyle:{float:"left"},attrs:{variant:"outline-primary"},on:{click:function(t){return e.goToTrend()}}},[r("ChartLine",{staticClass:"addnode"}),e._v(" See trend ")],1)],1)]),r("td",[r("div",{staticStyle:{float:"right","text-align":"right","font-size":"10pt"}},[r("strong",[e._v(" "+e._s(e.ip)+" ")])])])])])]),r("div",{staticClass:"summary"},[r("b",[e._v("Summary")]),e._v(" "),r("br"),e._v(" "+e._s(e.faultyNodes&&e.faultyNodes.length)+" Faulty nodes "),r("br"),e._v(" "+e._s(e.healthyNodes&&e.healthyNodes.length)+" Healthy nodes ")]),r("hr"),!e.sensors||e.loading?r("vue-loaders-ball-beat",{attrs:{color:"grey",scale:"1"}}):e._e(),r("b-tabs",[r("b-tab",{attrs:{title:"Faulty"}},[e.sensors&&!e.loading?r("Cards",{attrs:{sensors:e.faultyNodes}}):e._e()],1),r("b-tab",{attrs:{title:"Healthy"}},[e.sensors&&!e.loading?r("Cards",{attrs:{sensors:e.healthyNodes}}):e._e()],1)],1)],1)},a=[],n=(r("4de4"),r("5530")),i=(r("96cf"),r("1da1")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("b-modal",{staticClass:"long",attrs:{id:"modifyForm",title:"Modify Node","hide-footer":""}},[r("ModifyNodeForm",{attrs:{sensor:e.currentNode}})],1)],1),r("div",{staticClass:"container"},e._l(e.sensors,(function(t){return r("b-card",{key:t._id,staticClass:"card drk",attrs:{title:"UID: "+t.uid,"sub-title":t.name}},[e._v(" Offline since "+e._s(e.checkOffline(t))+" hrs "),r("hr"),r("b-card-text",[r("table",[r("tr",[r("td",[e._v(" Machine ")]),r("td",{staticClass:"value"},[e._v(" "+e._s(t.machineName)+" ")])]),r("tr",[r("td",[e._v(" Location ")]),r("td",{staticClass:"value"},[e._v(" "+e._s(t.location)+" ")])]),t.isTemperature?r("tr",[r("td",[e._v("Temperature")]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.temperatureRange,t.readings.temperature),notok:!e.checkOK(t.temperatureRange,t.readings.temperature)}},[e._v(" "+e._s(t.readings.temperature||"-")+" °C ")])]):e._e(),t.isHumidity?r("tr",[r("td",[e._v("Humidity")]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.humidityRange,t.readings.humidity),notok:!e.checkOK(t.humidityRange,t.readings.humidity)}},[e._v(" "+e._s(t.readings.humidity||"-")+" % ")])]):e._e(),t.isCO2?r("tr",[r("td",[e._v("CO"),r("sub",[e._v("2")])]),r("td",{staticClass:"value",class:{ok:e.checkOK(t.co2Range,t.readings.co2),notok:!e.checkOK(t.co2Range,t.readings.co2)}},[e._v(" "+e._s(t.readings.co2||"-")+" % ")])]):e._e(),r("tr",[r("td",[e._v("Battery")]),r("td",{staticClass:"value",style:{ok:!0}},[parseInt(t.readings.battery)>=90?r("BatteryFull",{staticClass:"ok"}):parseInt(t.readings.battery)>=20&&parseInt(t.readings.battery)<90?r("BatteryHalf",{staticClass:"notbad"}):r("BatteryLow",{staticClass:"notok"})],1)])]),r("hr"),r("table",[r("tr",[r("td",{on:{click:function(r){return e.deleteNode(t.uid)}}},[r("DeleteIcon",{staticClass:"action-btn delete",attrs:{title:"Delete Node"}})],1),r("td",{staticClass:"value"},[r("Pencil",{staticClass:"action-btn",attrs:{title:"Edit the node"},on:{click:function(r){return e.showModify(t)}}})],1)])]),r("hr"),r("div",[e._v(" Last Updated at: "+e._s(t.readings.timestamp)+" ")])])],1)})),1)])},d=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",[r("b-form-group",{attrs:{label:"UID: ","label-for":"node_uid",description:"Please enter uid"}},[r("b-form-input",{attrs:{id:"node_uid",placeholder:"Enter UID"},model:{value:e.modifyNodeForm.uid,callback:function(t){e.$set(e.modifyNodeForm,"uid",t)},expression:"modifyNodeForm.uid"}})],1),r("b-form-group",{attrs:{label:"Location: ","label-for":"node_loc",description:"Please enter Location"}},[r("b-form-input",{attrs:{id:"node_loc",placeholder:"Enter Location"},model:{value:e.modifyNodeForm.loc,callback:function(t){e.$set(e.modifyNodeForm,"loc",t)},expression:"modifyNodeForm.loc"}})],1),r("b-form-group",{attrs:{label:"Machine: ","label-for":"node_mac",description:"Please enter Machine name"}},[r("b-form-input",{attrs:{id:"node_mac",placeholder:"Enter Machine"},model:{value:e.modifyNodeForm.mac,callback:function(t){e.$set(e.modifyNodeForm,"mac",t)},expression:"modifyNodeForm.mac"}})],1),r("b-form-checkbox",{attrs:{id:"_isTemp",name:"checkbox1"},model:{value:e.isTemp,callback:function(t){e.isTemp=t},expression:"isTemp"}},[e._v(" Temperature ")]),e.isTemp?r("b-form-group",{attrs:{label:"Temperature Range: ","label-for":"node_temperaturer",description:"Please enter Temperature Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturen",placeholder:"Enter Temperature Min"},model:{value:e.modifyNodeForm.temperaturen,callback:function(t){e.$set(e.modifyNodeForm,"temperaturen",t)},expression:"modifyNodeForm.temperaturen"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturex",placeholder:"Enter Temperature Max"},model:{value:e.modifyNodeForm.temperaturex,callback:function(t){e.$set(e.modifyNodeForm,"temperaturex",t)},expression:"modifyNodeForm.temperaturex"}})],1):e._e(),r("b-form-checkbox",{attrs:{id:"_isHum",name:"checkbox2"},model:{value:e.isHum,callback:function(t){e.isHum=t},expression:"isHum"}},[e._v(" Humidity ")]),e.isHum?r("b-form-group",{attrs:{label:"Humidity Range: ","label-for":"node_humidityr",description:"Please enter Pressure Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_humidityn",placeholder:"Enter Humidity Min"},model:{value:e.modifyNodeForm.humidityn,callback:function(t){e.$set(e.modifyNodeForm,"humidityn",t)},expression:"modifyNodeForm.humidityn"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_humidityx",placeholder:"Enter Humidity Max"},model:{value:e.modifyNodeForm.humidityx,callback:function(t){e.$set(e.modifyNodeForm,"humidityx",t)},expression:"modifyNodeForm.humidityx"}})],1):e._e(),r("b-form-checkbox",{attrs:{id:"_isCO2",name:"checkbox3"},model:{value:e.isCO2,callback:function(t){e.isCO2=t},expression:"isCO2"}},[e._v(" CO"),r("sub",[e._v("2")])]),e.isCO2?r("b-form-group",{attrs:{label:"CO2 Range: ","label-for":"node_co2r",description:"Please enter CO2 Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2n",placeholder:"Enter CO2 Min"},model:{value:e.modifyNodeForm.co2n,callback:function(t){e.$set(e.modifyNodeForm,"co2n",t)},expression:"modifyNodeForm.co2n"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2x",placeholder:"Enter CO2 Max"},model:{value:e.modifyNodeForm.co2x,callback:function(t){e.$set(e.modifyNodeForm,"co2x",t)},expression:"modifyNodeForm.co2x"}})],1):e._e(),r("hr"),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.modifyNode()}}},[e._v("Update Node")])],1)},c=[],u={name:"ModifyNodeForm",props:["sensor"],methods:{modifyNode:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r={uid:e.modifyNodeForm.uid,location:e.modifyNodeForm.loc,machineName:e.modifyNodeForm.mac,co2Range:{min:e.modifyNodeForm.co2n,max:e.modifyNodeForm.co2x},temperatureRange:{min:e.modifyNodeForm.temperaturen,max:e.modifyNodeForm.temperaturex},pressureRange:{min:e.modifyNodeForm.pressuren,max:e.modifyNodeForm.pressurex},humidityRange:{min:e.modifyNodeForm.humidityn,max:e.modifyNodeForm.humidityx},isTemp:e.isTemp,isHum:e.isHum,isCO2:e.isCO2},e.$store.dispatch("modifyNode",r).then((function(){e.$bvModal.msgBoxOk("Node Modified").then((function(){e.$bvModal.hide("nodeForm"),e.$store.dispatch("fetchSensors",1)}))})).catch((function(t){return e.$bvModal.msgBoxOk("Could not modified node: "+t)}));case 2:case"end":return t.stop()}}),t)})))()}},data:function(){return{modifyNodeForm:{uid:this.sensor.uid,loc:this.sensor.location,mac:this.sensor.machineName,co2n:parseFloat(this.sensor.co2Range.min),co2x:parseFloat(this.sensor.co2Range.max),temperaturen:parseFloat(this.sensor.temperatureRange.min),temperaturex:parseFloat(this.sensor.temperatureRange.min),humidityn:parseFloat(this.sensor.humidityRange.min),humidityx:parseFloat(this.sensor.humidityRange.min)},isTemp:this.sensor.isTemp,isHum:this.sensor.isHum,isCO2:this.sensor.isCO2}}},m=u,p=(r("8dd5"),r("2877")),f=Object(p["a"])(m,l,c,!1,null,null,null),h=f.exports,b=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon delete-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},g=[],y=(r("a9e3"),{name:"DeleteIcon",props:{title:{type:String,default:"Delete icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),v=y,_=Object(p["a"])(v,b,g,!0,null,null,null),x=_.exports,C=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon battery-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},N=[],F={name:"BatteryIcon",props:{title:{type:String,default:"Battery icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},k=F,O=Object(p["a"])(k,C,N,!0,null,null,null),H=O.exports,w=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon battery-low-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16"}},[r("title",[t._v(t._s(t.props.title))])])])])},$=[],M={name:"BatteryLowIcon",props:{title:{type:String,default:"Battery Low icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},R=M,S=Object(p["a"])(R,w,$,!0,null,null,null),T=S.exports,B=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon battery50-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16,13H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},L=[],V={name:"Battery50Icon",props:{title:{type:String,default:"Battery50 icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},E=V,j=Object(p["a"])(E,B,L,!0,null,null,null),P=j.exports,A=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon pencil-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},I=[],z={name:"PencilIcon",props:{title:{type:String,default:"Pencil icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},D=z,K=Object(p["a"])(D,A,I,!0,null,null,null),U=K.exports,Z={name:"Cards",props:["sensors"],data:function(){return{server:"",currentNode:null}},components:{DeleteIcon:x,BatteryFull:H,BatteryHalf:P,ModifyNodeForm:h,BatteryLow:T,Pencil:U},methods:{showModify:function(e){this.currentNode=e,this.$bvModal.show("modifyForm")},checkOK:function(e,t){return e.min<=t&&t<=e.max},deleteNode:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$bvModal.msgBoxConfirm("Are you sure you want to delete the node "+e).then((function(r){r&&t.$store.dispatch("deleteNode",e).then((function(){t.$bvModal.msgBoxOk("Successfully Deleted "+e).then((function(){})),t.$store.dispatch("fetchSensors",1)})).catch((function(){return t.$bvModal.msgBoxOk("Could not delete "+e)}))})).catch((function(e){t.message=e.message,t.$bvModal.msgBoxOk(e.message)}));case 1:case"end":return r.stop()}}),r)})))()},checkOffline:function(e){var t=e.readings.timestamp,r=Math.floor((new Date-t)/1e3/3600);return r}}},q=Z,W=(r("14b8"),Object(p["a"])(q,s,d,!1,null,null,null)),J=W.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",[r("b-form-group",{attrs:{label:"UID: ","label-for":"node_uid",description:"Please enter uid"}},[r("b-form-input",{attrs:{id:"node_uid",placeholder:"Enter UID"},model:{value:e.addNodeForm.uid,callback:function(t){e.$set(e.addNodeForm,"uid",t)},expression:"addNodeForm.uid"}})],1),r("b-form-group",{attrs:{label:"Location: ","label-for":"node_loc",description:"Please enter Location"}},[r("b-form-input",{attrs:{id:"node_loc",placeholder:"Enter Location"},model:{value:e.addNodeForm.loc,callback:function(t){e.$set(e.addNodeForm,"loc",t)},expression:"addNodeForm.loc"}})],1),r("b-form-group",{attrs:{label:"Machine: ","label-for":"node_mac",description:"Please enter Machine name"}},[r("b-form-input",{attrs:{id:"node_mac",placeholder:"Enter Machine"},model:{value:e.addNodeForm.mac,callback:function(t){e.$set(e.addNodeForm,"mac",t)},expression:"addNodeForm.mac"}})],1),r("b-form-checkbox",{attrs:{id:"_isTemp",name:"checkbox1"},model:{value:e.isTemp,callback:function(t){e.isTemp=t},expression:"isTemp"}},[e._v(" Temperature ")]),e.isTemp?r("b-form-group",{attrs:{label:"Temperature Range: ","label-for":"node_temperaturer",description:"Please enter Temperature Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturen",placeholder:"Enter Temperature Min"},model:{value:e.addNodeForm.temperaturen,callback:function(t){e.$set(e.addNodeForm,"temperaturen",t)},expression:"addNodeForm.temperaturen"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_temperaturex",placeholder:"Enter Temperature Max"},model:{value:e.addNodeForm.temperaturex,callback:function(t){e.$set(e.addNodeForm,"temperaturex",t)},expression:"addNodeForm.temperaturex"}})],1):e._e(),r("b-form-checkbox",{attrs:{id:"_isHum",name:"checkbox2"},model:{value:e.isHum,callback:function(t){e.isHum=t},expression:"isHum"}},[e._v(" Humidity ")]),e.isHum?r("b-form-group",{attrs:{label:"Humidity Range: ","label-for":"node_humidityr",description:"Please enter Pressure Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_humidityn",placeholder:"Enter Humidity Min"},model:{value:e.addNodeForm.humidityn,callback:function(t){e.$set(e.addNodeForm,"humidityn",t)},expression:"addNodeForm.humidityn"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_humidityx",placeholder:"Enter Humidity Max"},model:{value:e.addNodeForm.humidityx,callback:function(t){e.$set(e.addNodeForm,"humidityx",t)},expression:"addNodeForm.humidityx"}})],1):e._e(),r("b-form-checkbox",{attrs:{id:"_isCO2",name:"checkbox3"},model:{value:e.isCO2,callback:function(t){e.isCO2=t},expression:"isCO2"}},[e._v(" CO"),r("sub",[e._v("2")])]),e.isCO2?r("b-form-group",{attrs:{label:"CO2 Range: ","label-for":"node_co2r",description:"Please enter CO2 Range"}},[r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2n",placeholder:"Enter CO2 Min"},model:{value:e.addNodeForm.co2n,callback:function(t){e.$set(e.addNodeForm,"co2n",t)},expression:"addNodeForm.co2n"}}),r("b-form-input",{staticClass:"range",attrs:{type:"number",id:"node_co2x",placeholder:"Enter CO2 Max"},model:{value:e.addNodeForm.co2x,callback:function(t){e.$set(e.addNodeForm,"co2x",t)},expression:"addNodeForm.co2x"}})],1):e._e(),r("hr"),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.addNode()}}},[e._v("Add Node")])],1)},Q=[],X={name:"AddNodeForm",methods:{addNode:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r={uid:e.addNodeForm.uid,location:e.addNodeForm.loc,machineName:e.addNodeForm.mac,co2Range:{min:e.addNodeForm.co2n,max:e.addNodeForm.co2x},temperatureRange:{min:e.addNodeForm.temperaturen,max:e.addNodeForm.temperaturex},pressureRange:{min:e.addNodeForm.pressuren,max:e.addNodeForm.pressurex},humidityRange:{min:e.addNodeForm.humidityn,max:e.addNodeForm.humidityx},isTemp:e.isTemp,isHum:e.isHum,isCO2:e.isCO2},e.$store.dispatch("addNode",r).then((function(){e.$bvModal.msgBoxOk("Node Added").then((function(){e.$bvModal.hide("nodeForm"),e.$store.dispatch("fetchSensors",1)}))})).catch((function(t){return e.$bvModal.msgBoxOk("Could not Add node: "+t)}));case 2:case"end":return t.stop()}}),t)})))()}},data:function(){return{addNodeForm:{uid:"",loc:"",mac:"",co2n:0,co2x:100,temperaturen:0,temperaturex:100,pressuren:0,pressurex:100,humidityn:0,humidityx:100},isTemp:!1,isHum:!1,isCO2:!1}}},Y=X,ee=(r("6cf7"),Object(p["a"])(Y,G,Q,!1,null,null,null)),te=ee.exports,re=(r("cc73"),function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon plus-circle-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[r("title",[t._v(t._s(t.props.title))])])])])}),oe=[],ae={name:"PlusCircleIcon",props:{title:{type:String,default:"Plus Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ne=ae,ie=Object(p["a"])(ne,re,oe,!0,null,null,null),se=ie.exports,de=function(e,t){var r=t._c;return r("span",t._g(t._b({staticClass:"material-design-icon chart-line-icon",class:[t.data.class,t.data.staticClass],attrs:{"aria-hidden":t.props.decorative,"aria-label":t.props.title,role:"img"}},"span",t.data.attrs,!1),t.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.props.fillColor,width:t.props.size,height:t.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"}},[r("title",[t._v(t._s(t.props.title))])])])])},le=[],ce={name:"ChartLineIcon",props:{title:{type:String,default:"Chart Line icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},ue=ce,me=Object(p["a"])(ue,de,le,!0,null,null,null),pe=me.exports,fe=r("2f62"),he=(r("caad"),r("d3b7"),r("2532"),r("b85c"));function be(e,t){return new Promise((function(r,o){e&&0!=e.length||o();var a,n=[],i=Object(he["a"])(e);try{for(i.s();!(a=i.n()).done;){var s,d=a.value,l=d.co2Range,c=d.humidityRange,u=d.temperatureRange,m=d.pressureRange,p=null!==(s=d.readings)&&void 0!==s?s:0;0==p&&n.push(d.uid),(p.co2<l.min||p.co2>l.max||p.pressure<m.min||p.pressure>m.max||p.temperature<u.min||p.temperature>u.max||p.humidity<c.min||p.humidity>c.max)&&(t.includes(d.uid)||n.push(d.uid))}}catch(f){i.e(f)}finally{i.f()}0==n.length&&o(),r(n)}))}function ge(e){var t,r="Faulty sensors are : ",o=Object(he["a"])(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;r+="".concat(a," ")}}catch(n){o.e(n)}finally{o.f()}console.log(e),new Notification("There are few faulty sensors that require attention",{body:r}),navigator.serviceWorker.register("sw.js"),Notification.requestPermission((function(e){"granted"===e&&navigator.serviceWorker.ready.then((function(e){e.showNotification("There are few faulty sensors",{body:r})}))}))}var ye={name:"Dashboard",components:{Cards:J,AddNodeForm:te,PlusIcon:se,ChartLine:pe},data:function(){return{fetchSensors:null,ip:window.location.host,server:"",healthyNodes:null,faultyNodes:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return null==e.$store.getters.getAccessToken&&(e.$bvModal.msgBoxOk("Please Login"),e.$router.push("/")),navigator.serviceWorker.register("sw.js"),e.fetchSensors=setInterval((function(){e.$store.getters.getLogInStatus&&e.$store.dispatch("fetchSensors",0),null!=e.$store.getters.getSensors&&(e.healthyNodes=e.$store.getters.getSensors.filter((function(t){var r=!(t.isCO2^e.checkOK(t.co2Range,t.readings.co2)),o=!(t.isTemperature^e.checkOK(t.temperatureRange,t.readings.temperature)),a=!(t.isHumidity^e.checkOK(t.humidityRange,t.readings.humidity));return r&&o&&a})),e.faultyNodes=e.$store.getters.getSensors.filter((function(t){var r=!(t.isCO2^e.checkOK(t.co2Range,t.readings.co2)),o=!(t.isTemperature^e.checkOK(t.temperatureRange,t.readings.temperature)),a=!(t.isHumidity^e.checkOK(t.humidityRange,t.readings.humidity));return!(r&&o&&a)})),be(e.$store.getters.getSensors,e.$store.getters.getFaulties).then((function(t){e.$store.commit("setFaulties",t),ge(t)})).catch((function(){})))}),3e3),t.next=5,window.Notification.requestPermission();case 5:case"end":return t.stop()}}),t)})))()},computed:Object(n["a"])(Object(n["a"])({},Object(fe["c"])({sensors:"getSensors",loading:"isLoading"})),Object(fe["b"])("notifications",["add"])),methods:{goToTrend:function(){this.$router.push({name:"Trends"})},checkOK:function(e,t){return e.min<=t&&t<=e.max},deleteNode:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$bvModal.msgBoxConfirm("Are you sure you want to delete the node "+e).then((function(r){r&&t.$store.dispatch("deleteNode",e).then((function(){t.$bvModal.msgBoxOk("Successfully Deleted "+e).then((function(){})),t.$store.dispatch("fetchSensors",1)})).catch((function(){return t.$bvModal.msgBoxOk("Could not delete "+e)}))})).catch((function(e){t.message=e.message,t.$bvModal.msgBoxOk(e.message)}));case 1:case"end":return r.stop()}}),r)})))()}}},ve=ye,_e=(r("9968"),Object(p["a"])(ve,o,a,!1,null,"3a5e1c84",null));t["default"]=_e.exports},"8dd5":function(e,t,r){"use strict";r("bc14")},9894:function(e,t,r){},9968:function(e,t,r){"use strict";r("68b0")},ab13:function(e,t,r){var o=r("b622"),a=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(o){}}return!1}},b85c:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var o=r("06c5");function a(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(o["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){d=!0,i=e},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(d)throw i}}}}},bc14:function(e,t,r){},caad:function(e,t,r){"use strict";var o=r("23e7"),a=r("4d64").includes,n=r("44d2"),i=r("ae40"),s=i("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:!s},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},cc73:function(e,t,r){},edd5:function(e,t,r){}}]);
//# sourceMappingURL=chunk-7d4f8678.a6ccefc1.js.map