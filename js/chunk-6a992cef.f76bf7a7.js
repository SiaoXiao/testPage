(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a992cef"],{"3a38":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[a("v-container",[a("v-row",{attrs:{dense:""}},[a("v-icon",{attrs:{large:""},on:{click:t.backHistory}},[t._v("mdi-chevron-left")]),a("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[a("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("客戶 (店名) 名稱")])]),a("v-text-field",{attrs:{rules:[t.rules.required],type:"text",label:"請輸入客戶名稱",required:"",outlined:""},model:{value:t.AddCustomerData.shopName,callback:function(e){t.$set(t.AddCustomerData,"shopName",e)},expression:"AddCustomerData.shopName"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("聯繫電話(手機)")])]),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.moblie],label:"請輸入聯繫電話",required:"",outlined:""},model:{value:t.AddCustomerData.phone,callback:function(e){t.$set(t.AddCustomerData,"phone",e)},expression:"AddCustomerData.phone"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("窗口姓名")])]),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.nameCheck],label:"請輸入窗口姓名",required:"",outlined:""},model:{value:t.AddCustomerData.contactPerson,callback:function(e){t.$set(t.AddCustomerData,"contactPerson",e)},expression:"AddCustomerData.contactPerson"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("地址")])]),a("v-col",{staticClass:"d-flex pa-0",attrs:{cols:"12"}},[a("v-col",{staticClass:"py-0 px-2",attrs:{sm:"6"}},[a("v-select",{attrs:{items:t.cityItems,label:"請選擇","no-data-text":"請選擇縣市","single-line":"",required:"",solo:""},on:{change:function(e){return t.getAreaIngo(t.AddCustomerData.city)}},model:{value:t.AddCustomerData.city,callback:function(e){t.$set(t.AddCustomerData,"city",e)},expression:"AddCustomerData.city"}})],1),a("v-col",{staticClass:"py-0 px-2",attrs:{sm:"6"}},[a("v-select",{attrs:{items:t.areaItems,label:"請選擇","no-data-text":"請先選擇縣市","single-line":"",solo:""},model:{value:t.AddCustomerData.area,callback:function(e){t.$set(t.AddCustomerData,"area",e)},expression:"AddCustomerData.area"}})],1)],1),a("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入地址",required:"",outlined:""},model:{value:t.AddCustomerData.address,callback:function(e){t.$set(t.AddCustomerData,"address",e)},expression:"AddCustomerData.address"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("統一編號")])]),a("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入統一編號(若無填身分證)",required:"",outlined:""},model:{value:t.AddCustomerData.taxIDnumber,callback:function(e){t.$set(t.AddCustomerData,"taxIDnumber",e)},expression:"AddCustomerData.taxIDnumber"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("店家分類")])]),a("v-select",{attrs:{items:t.StoreItems,"item-text":"state",label:"請選擇店家分類",required:"","single-line":"",solo:""},model:{value:t.AddCustomerData.label,callback:function(e){t.$set(t.AddCustomerData,"label",e)},expression:"AddCustomerData.label"}}),a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("div",{staticClass:"my-1 text-body-2"},[a("span",[t._v("*")]),t._v("客戶 Line ID")])]),a("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入客戶 Line ID",required:"",outlined:""},model:{value:t.AddCustomerData.lineID,callback:function(e){t.$set(t.AddCustomerData,"lineID",e)},expression:"AddCustomerData.lineID"}}),a("v-btn",{staticClass:"my-4",attrs:{rounded:"",block:"",color:"primary",disabled:!t.valid},on:{click:t.getAllProductLabel}},[t._v(" 送出 ")])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticStyle:{height:"100px"}})])],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[t._v(" "+t._s(t.dialogText)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v(" 確定 ")])],1)],1)],1)],1)},i=[],r=(a("159b"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("365c")),n={data:function(){return{valid:!0,token:"",dialog:!1,dialogText:"",AddCustomerData:{shopName:"",phone:"",contactPerson:"",city:"",area:"",address:"",taxIDnumber:"",label:"",lineID:""},rules:{required:function(t){return!!t||"請輸入文字。"},nameCheck:function(t){return t&&t.length<=5||"名字不得超過5個字。"},moblie:function(t){return/^09[0-9]{8}$/.test(t)||"請輸入正確的手機號碼。"}},resData:{},cityItems:[],areaItems:[],StoreItems:[{state:"食"},{state:"衣"},{state:"住"},{state:"行"},{state:"娛樂"}],timer:null}},created:function(){this.init()},methods:{init:function(){this.token=this.$Cookies.get("Token"),this.getTaiwanAreaInfo()},backHistory:function(){this.$router.go(-1)},getTaiwanAreaInfo:function(){var t=this;Object(r["y"])(this.token).then((function(e){200===e.status&&(t.resData=e.data,t.resData.forEach((function(e){t.cityItems.push(e.city)})))})).catch((function(t){console.log(t)}))},getAreaIngo:function(t){var e=this;this.areaItems=[],this.resData.forEach((function(a){a.city===t&&a.area_data.forEach((function(t){e.areaItems.push(t.area)}))}))},getAllProductLabel:function(){var t=this;if(this.$refs.form.validate()){this.valid=!1;var e=new URLSearchParams;e.append("name",this.AddCustomerData.shopName),e.append("phoneNo",this.AddCustomerData.phone),e.append("contactWindow",this.AddCustomerData.contactPerson),e.append("city",this.AddCustomerData.city),e.append("area",this.AddCustomerData.area),e.append("address",this.AddCustomerData.address),e.append("uniformNumber",this.AddCustomerData.taxIDnumber),e.append("label",this.AddCustomerData.label),e.append("lineId",this.AddCustomerData.lineID),Object(r["d"])(e,this.token).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code?(t.dialog=!0,t.dialogText="新增客戶成功",t.timer=setTimeout((function(){t.$router.push({name:"Homepage"}),t.valid=!0}),2e3)):(t.dialog=!0,t.dialogText=e.data.status_code,t.valid=!0)})).catch((function(t){console.log(t)}))}},destroyed:function(){clearTimeout(this.timer)}}},o=n,d=(a("b767"),a("2877")),l=a("6544"),u=a.n(l),c=a("8336"),m=a("b0af"),f=a("99d9"),h=a("62ad"),v=a("a523"),p=a("169a"),b=a("4bd4"),C=a("132d"),x=a("0fd9"),D=a("b974"),y=a("8dd9"),g=a("2fa4"),A=a("8654"),_=Object(d["a"])(o,s,i,!1,null,"1b8464c8",null);e["default"]=_.exports;u()(_,{VBtn:c["a"],VCard:m["a"],VCardActions:f["a"],VCardTitle:f["d"],VCol:h["a"],VContainer:v["a"],VDialog:p["a"],VForm:b["a"],VIcon:C["a"],VRow:x["a"],VSelect:D["a"],VSheet:y["a"],VSpacer:g["a"],VTextField:A["a"]})},"4bd4":function(t,e,a){"use strict";var s=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),r=a("7e2b"),n=a("3206");e["a"]=Object(i["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=a(t)))})):s.valid=a(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"728e":function(t,e,a){},b767:function(t,e,a){"use strict";a("728e")}}]);
//# sourceMappingURL=chunk-6a992cef.f76bf7a7.js.map