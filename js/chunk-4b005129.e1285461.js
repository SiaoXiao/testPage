(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b005129"],{"6d5d":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden px-3",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[n("v-container",[n("v-row",{directives:[{name:"show",rawName:"v-show",value:!a.isLoad,expression:"!isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[n("v-col",{staticClass:"my-16 text-center",attrs:{cols:"12"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:a.isLoad,expression:"isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[n("v-icon",{attrs:{large:""},on:{click:a.backHistory}},[a._v("mdi-chevron-left")]),a.NoContent?n("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[n("div",{staticClass:"d-flex text-h4 blue-grey--text flex-column align-center"},[n("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[a._v("mdi-clipboard-text-search-outline")]),a._v(" 尚無銀行帳戶資料 ")],1),n("v-btn",{staticClass:"mt-10",attrs:{rounded:"",block:"",color:"primary"},on:{click:a.goToAddBankAccount}},[a._v(" 新增銀行帳戶 ")])],1):a._e(),a.NoContent?a._e():n("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[n("div",{staticClass:"d-flex justify-space-between mb-1"},[n("v-card-title",[a._v("銀行資料狀態: "),n("div",{staticClass:"ml-1",class:1===a.bankData.colorState?"grey--text":2===a.bankData.colorState?"green--text":"red--text"},[a._v(a._s(a.bankData.statusText))])])],1),n("v-card",{staticClass:"mx-auto pa-3",attrs:{color:"white",elevation:"10"}},[n("v-img",{staticClass:"white--text mx-auto",attrs:{contain:"","max-height":"300","max-width":"100%",src:a.bankData.img,alt:"bank"}}),n("v-card-subtitle",{staticClass:"pb-0"},[n("p",{staticClass:"text-h6 text--primary"},[a._v(" 銀行名稱: "+a._s(a.bankData.bankName)+" ")])]),n("v-card-text",{staticClass:"text--primary"},[n("div",[a._v("銀行代號: "+a._s(a.bankData.bankNo))]),n("div",[a._v("銀行分行名稱: "+a._s(a.bankData.bankHome))]),n("div",[a._v("銀行分行代號: "+a._s(a.bankData.bankHomeNo))]),n("div",[a._v("銀行戶名: "+a._s(a.bankData.name))]),n("div",[a._v("銀行帳號: "+a._s(a.bankData.account))])]),2===a.bankData.colorState||3===a.bankData.colorState?n("v-card-actions",[n("v-btn",{attrs:{tile:"",color:"success"},on:{click:a.goTomodifyBankAccount}},[n("v-icon",{attrs:{left:""}},[a._v(" mdi-pencil ")]),a._v(" 修改銀行資料 ")],1)],1):a._e()],1)],1),n("v-col",{attrs:{cols:"12"}},[n("div",{staticStyle:{height:"100px"}})])],1)],1)],1)},s=[],o=(n("b0c0"),n("365c")),c={data:function(){return{isLoad:!1,NoContent:!0,bankData:{statusText:"",bankName:"",bankNo:"",bankHome:"",bankHomeNo:"",name:"",account:"",colorState:"",img:null}}},created:function(){this.init()},methods:{init:function(){sessionStorage.removeItem("modifyBank"),this.getConsultantBalance()},backHistory:function(){this.$router.go(-1)},getConsultantBalance:function(){var a=this,t=this.$Cookies.get("Token");Object(o["q"])(t).then((function(t){if(200===t.status&&0===t.data.status_balance)a.NoContent=!0;else if(200===t.status&&0!==t.data.status_balance)switch(a.NoContent=!1,a.bankData.bankName=t.data.account_name,a.bankData.bankNo=t.data.account_no,a.bankData.bankHome=t.data.account_home,a.bankData.bankHomeNo=t.data.account_home_id,a.bankData.name=t.data.username_balance,a.bankData.account=t.data.account_id,a.bankData.img=t.data.img_balance,a.bankData.colorState=t.data.status_balance,t.data.status_balance){case 0:a.bankData.statusText="未新增";break;case 1:a.bankData.statusText="審核中";break;case 2:a.bankData.statusText="審核通過";break;case 3:a.bankData.statusText="審核失敗";break;default:break}a.$nextTick((function(){a.isLoad=!0}))})).catch((function(a){console.log(a)}))},goToAddBankAccount:function(){this.$router.push({path:"bankAccount/addBankAccount"})},goTomodifyBankAccount:function(){sessionStorage.setItem("modifyBank",!1),this.$router.push({path:"bankAccount/addBankAccount"})}}},i=c,r=n("2877"),d=n("6544"),l=n.n(d),u=n("8336"),b=n("b0af"),v=n("99d9"),k=n("62ad"),m=n("a523"),f=n("132d"),h=n("adda"),p=n("490a"),g=n("0fd9"),x=n("8dd9"),_=Object(r["a"])(i,e,s,!1,null,null,null);t["default"]=_.exports;l()(_,{VBtn:u["a"],VCard:b["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:k["a"],VContainer:m["a"],VIcon:f["a"],VImg:h["a"],VProgressCircular:p["a"],VRow:g["a"],VSheet:x["a"]})},a523:function(a,t,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var e=n("e8f2"),s=n("d9f7");t["a"]=Object(e["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(a,t){var n,e=t.props,o=t.data,c=t.children,i=o.attrs;return i&&(o.attrs={},n=Object.keys(i).filter((function(a){if("slot"===a)return!1;var t=i[a];return a.startsWith("data-")?(o.attrs[a]=t,!1):t||"string"===typeof t}))),e.id&&(o.domProps=o.domProps||{},o.domProps.id=e.id),a(e.tag,Object(s["a"])(o,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),c)}})},e8f2:function(a,t,n){"use strict";n.d(t,"a",(function(){return s}));n("498a"),n("99af"),n("4de4"),n("b64b"),n("2ca0"),n("a15b");var e=n("2b0e");function s(a){return e["a"].extend({name:"v-".concat(a),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var e=n.props,s=n.data,o=n.children;s.staticClass="".concat(a," ").concat(s.staticClass||"").trim();var c=s.attrs;if(c){s.attrs={};var i=Object.keys(c).filter((function(a){if("slot"===a)return!1;var t=c[a];return a.startsWith("data-")?(s.attrs[a]=t,!1):t||"string"===typeof t}));i.length&&(s.staticClass+=" ".concat(i.join(" ")))}return e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,s,o)}})}}}]);
//# sourceMappingURL=chunk-4b005129.e1285461.js.map