(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c5f8415"],{"4bd4":function(t,a,e){"use strict";var n=e("5530"),s=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),i=e("7e2b"),r=e("3206");a["a"]=Object(s["a"])(i["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(a.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"5e2c":function(t,a,e){},c1a3:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[e("v-container",[e("v-row",{attrs:{dense:""}},[e("v-icon",{attrs:{large:""},on:{click:t.backHistory}},[t._v("mdi-chevron-left")]),e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[e("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("客戶帳號")])]),e("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入客戶帳號",required:"",readonly:"",outlined:""},model:{value:t.addContractData.customerAccount,callback:function(a){t.$set(t.addContractData,"customerAccount",a)},expression:"addContractData.customerAccount"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("乙方公司名稱")])]),e("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入乙方公司名稱",required:"",outlined:""},model:{value:t.addContractData.companyName,callback:function(a){t.$set(t.addContractData,"companyName",a)},expression:"addContractData.companyName"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("統一編號")])]),e("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入統一編號(若無填身分證)",required:"",outlined:""},model:{value:t.addContractData.taxIDnumber,callback:function(a){t.$set(t.addContractData,"taxIDnumber",a)},expression:"addContractData.taxIDnumber"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("地址")])]),e("v-col",{staticClass:"d-flex pa-0",attrs:{cols:"12"}},[e("v-col",{staticClass:"py-0 px-2",attrs:{sm:"6"}},[e("v-select",{attrs:{items:t.cityItems,label:"請選擇","no-data-text":"請選擇縣市","single-line":"",required:"",solo:""},on:{change:function(a){return t.getAreaIngo(t.addContractData.city)}},model:{value:t.addContractData.city,callback:function(a){t.$set(t.addContractData,"city",a)},expression:"addContractData.city"}})],1),e("v-col",{staticClass:"py-0 px-2",attrs:{sm:"6"}},[e("v-select",{attrs:{items:t.areaItems,label:"請選擇","no-data-text":"請先選擇縣市","single-line":"",solo:""},model:{value:t.addContractData.area,callback:function(a){t.$set(t.addContractData,"area",a)},expression:"addContractData.area"}})],1)],1),e("v-text-field",{attrs:{rules:[t.rules.required],label:"請輸入地址",required:"",outlined:""},model:{value:t.addContractData.address,callback:function(a){t.$set(t.addContractData,"address",a)},expression:"addContractData.address"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("聯絡人電話")])]),e("v-text-field",{attrs:{rules:[t.rules.required,t.rules.moblie],label:"請輸入聯絡人電話",required:"",outlined:""},model:{value:t.addContractData.phone,callback:function(a){t.$set(t.addContractData,"phone",a)},expression:"addContractData.phone"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("銀行名稱")])]),e("v-select",{attrs:{items:t.banksData,"item-text":"name","item-value":"bank_code",label:"請選擇銀行","return-object":"","single-line":"",solo:""},on:{change:function(a){return t.getBankInfoBranchCode(t.addContractData.bank.bank_code)}},model:{value:t.addContractData.bank,callback:function(a){t.$set(t.addContractData,"bank",a)},expression:"addContractData.bank"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("銀行分行名稱")])]),e("v-select",{attrs:{items:t.bankBranchData,"item-text":"name","item-value":"bank_branch_code",label:"請選擇分行","no-data-text":"請先選擇銀行","return-object":"","single-line":"",solo:""},model:{value:t.addContractData.bankInfoBranch,callback:function(a){t.$set(t.addContractData,"bankInfoBranch",a)},expression:"addContractData.bankInfoBranch"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("銀行帳號")])]),e("v-text-field",{attrs:{rules:[t.rules.required],required:""},model:{value:t.addContractData.balanceId,callback:function(a){t.$set(t.addContractData,"balanceId",a)},expression:"addContractData.balanceId"}}),e("div",{staticClass:"d-flex justify-space-between mb-1"},[e("div",{staticClass:"my-1 text-body-2"},[e("span",[t._v("*")]),t._v("銀行戶名")])]),e("v-text-field",{attrs:{rules:[t.rules.required],required:""},model:{value:t.addContractData.name,callback:function(a){t.$set(t.addContractData,"name",a)},expression:"addContractData.name"}}),e("v-btn",{staticClass:"my-4",attrs:{rounded:"",block:"",color:"primary",disabled:!t.valid},on:{click:t.addUserReport}},[t._v(" 送出 ")])],1)],1),e("v-col",{attrs:{cols:"12"}},[e("div",{staticStyle:{height:"100px"}})])],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[t._v(" "+t._s(t.dialogText)+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.dialog=!1}}},[t._v(" 確定 ")])],1)],1)],1)],1)},s=[],i=(e("159b"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("b0c0"),e("365c")),r={data:function(){return{valid:!0,token:"",dialog:!1,dialogText:"",addContractData:{customerAccount:"",companyName:"",taxIDnumber:"",city:"",area:"",address:"",phone:"",bank:{},bankInfoBranch:{},balanceId:"",name:""},rules:{required:function(t){return!!t||"請輸入文字。"},nameCheck:function(t){return t&&t.length<=5||"名字不得超過5個字。"},moblie:function(t){return/^09[0-9]{8}$/.test(t)||"請輸入正確的手機號碼。"}},resData:{},cityItems:[],areaItems:[],banksData:[],bankBranchData:[],timer:null}},created:function(){this.inin()},methods:{inin:function(){this.token=this.$Cookies.get("Token"),this.addContractData.customerAccount=this.$route.params.id,this.getTaiwanAreaInfo(),this.getBankInfo()},backHistory:function(){this.$router.go(-1)},getTaiwanAreaInfo:function(){var t=this;Object(i["y"])(this.token).then((function(a){200===a.status&&(t.resData=a.data,t.resData.forEach((function(a){t.cityItems.push(a.city)})))})).catch((function(t){console.log(t)}))},getAreaIngo:function(t){var a=this;this.areaItems=[],this.resData.forEach((function(e){e.city===t&&e.area_data.forEach((function(t){a.areaItems.push(t.area)}))}))},getBankInfo:function(){var t=this;Object(i["l"])(this.token).then((function(a){200===a.status&&0!==a.data.length&&(t.banksData=a.data)})).catch((function(t){console.log(t)}))},getBankInfoBranchCode:function(t){var a=this,e=new URLSearchParams;e.append("code",t),Object(i["m"])(e,this.token).then((function(t){200===t.status&&0!==t.data.length&&(a.bankBranchData=t.data)})).catch((function(t){console.log(t)}))},addUserReport:function(){var t=this;if(this.$refs.form.validate()){this.valid=!1;var a=new URLSearchParams;a.append("customerid",this.addContractData.customerAccount),a.append("phone",this.addContractData.phone),a.append("username",this.addContractData.companyName),a.append("acname",this.addContractData.bank.name),a.append("acnum",this.addContractData.bank.bank_code),a.append("achome",this.addContractData.bankInfoBranch.name),a.append("acusername",this.addContractData.name),a.append("accountid",this.addContractData.balanceId),a.append("numberno",this.addContractData.taxIDnumber),a.append("city",this.addContractData.city),a.append("area",this.addContractData.area),a.append("address",this.addContractData.address),Object(i["g"])(a,this.token).then((function(a){200===a.status&&"SUCCESS"===a.data.status_code&&""!==a.data.contract_no?(t.dialog=!0,t.dialogText="新增合約成功",t.timer=setTimeout((function(){t.$router.go(-1),t.valid=!0}),2e3)):(t.dialog=!0,t.dialogText=a.data.status_code,t.valid=!0)})).catch((function(t){console.log(t)}))}},destroyed:function(){clearTimeout(this.timer)}}},o=r,c=(e("e64e"),e("2877")),d=e("6544"),l=e.n(d),u=e("8336"),f=e("b0af"),h=e("99d9"),m=e("62ad"),v=e("a523"),b=e("169a"),p=e("4bd4"),C=e("132d"),x=e("0fd9"),D=e("b974"),y=e("8dd9"),k=e("2fa4"),g=e("8654"),_=Object(c["a"])(o,n,s,!1,null,"f63093fa",null);a["default"]=_.exports;l()(_,{VBtn:u["a"],VCard:f["a"],VCardActions:h["a"],VCardTitle:h["d"],VCol:m["a"],VContainer:v["a"],VDialog:b["a"],VForm:p["a"],VIcon:C["a"],VRow:x["a"],VSelect:D["a"],VSheet:y["a"],VSpacer:k["a"],VTextField:g["a"]})},e64e:function(t,a,e){"use strict";e("5e2c")}}]);
//# sourceMappingURL=chunk-0c5f8415.d9b8c840.js.map