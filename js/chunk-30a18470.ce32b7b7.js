(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30a18470"],{3137:function(t,e,i){},"5dba":function(t,e,i){"use strict";i("3137")},7088:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[i("v-container",[i("v-row",{staticClass:"ma-auto",attrs:{dense:""}},[i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex justify-space-between mb-1"},[i("span",{staticClass:"body-2"},[t._v("個人相關")])]),i("v-card",{staticStyle:{height:"180px"},attrs:{color:"white",elevation:"10"}},[i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/userInfo"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-account-circle-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("個人資料")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-divider"),i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/bankAccount"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-wallet-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("銀行帳戶")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-divider"),i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/resetPWD"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-shield-key-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("修改密碼")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-divider"),i("v-btn",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},on:{click:t.bindLine}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-link-variant")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("LINE ID綁定")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1),i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex justify-space-between mb-1"},[i("span",{staticClass:"body-2"},[t._v("團隊相關")])]),i("v-card",{staticStyle:{height:"90px"},attrs:{color:"white",elevation:"10"}},[i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/team"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-account-group-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("合作顧問群")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-divider"),i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/invitationCode"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-share-variant-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("邀請加入")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1),i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex justify-space-between mb-1"},[i("span",{staticClass:"body-2"},[t._v("APP相關")])]),i("v-card",{staticStyle:{height:"90px"},attrs:{color:"white",elevation:"10"}},[i("router-link",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3",staticStyle:{width:"100%",height:"45px"},attrs:{to:"user/setting"}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-cog-outline")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("設置")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1),i("v-divider"),i("v-btn",{staticClass:"text-decoration-none text-center d-flex justify-space-between px-3 white",staticStyle:{width:"100%",height:"45px"},attrs:{light:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[i("div",{staticClass:"d-flex"},[i("v-icon",[t._v("mdi-logout")]),i("p",{staticClass:"body-2 ma-0 ml-2 textLine"},[t._v("登出")])],1),i("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1),i("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[i("div",{staticClass:"d-flex justify-center"},[i("span",{staticClass:"body-2 text-center"},[t._v("Copyright © iFAlink All rights reserved"),i("br"),t._v(" 版權所有 秒創意科技股份有限公司"),i("br"),t._v(" 勤律法律事務所 ")])])]),i("v-col",{attrs:{cols:"12"}},[i("div",{staticStyle:{height:"100px"}})])],1)],1),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-subtitle-1"},[t._v(" 是否要登出？ ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"black",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 取消 ")]),i("v-btn",{attrs:{text:""},on:{click:t.logout}},[t._v(" 確定 ")])],1)],1)],1),i("v-dialog",{attrs:{width:"500"},model:{value:t.lineDialog,callback:function(e){t.lineDialog=e},expression:"lineDialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[t._v(" "+t._s(t.dialogText)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.lineDialog=!1}}},[t._v(" 確定 ")])],1)],1)],1)],1)},s=[],o=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("365c")),n={data:function(){return{dialog:!1,lineDialog:!1,dialogText:""}},created:function(){this.init()},methods:{init:function(){this.urlCheck()},bindLine:function(){var t=this;Object(o["s"])().then((function(e){200===e.status&&"SUCCESS"===e.data.status_code&&(t.$store.dispatch("setLineUrl",e.data.url),window.location.href=t.$store.getters.lineUrl)})).catch((function(t){console.log(t)}))},logout:function(){var t=this,e=this.$Cookies.get("Token");Object(o["E"])(e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code&&(t.$cookies.remove("Token"),sessionStorage.clear(),t.dialog=!1,t.$router.push({path:"/"}))})).catch((function(t){console.log(t)}))},urlCheck:function(){var t=this;if(void 0!==this.$route.query.error)this.lineDialog=!0,this.dialogText=this.$route.query.error_info;else if(void 0!==this.$route.query.code&&void 0!==this.$route.query.state){var e=this.$Cookies.get("Token");this.$store.dispatch("setLineLoginCode",this.$route.query.code),this.$store.dispatch("setLineLoginState",this.$route.query.state);var i=new URLSearchParams;i.append("state",this.$store.getters.lineLoginCode),i.append("code",this.$store.getters.lineLoginState),Object(o["A"])(i,e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code?(console.log(e),t.lineDialog=!0,t.dialogText="Line ID 綁定成功"):(t.lineDialog=!0,t.dialogText=e.data.status_code)})).catch((function(t){console.log(t)}))}}}},r=n,c=(i("5dba"),i("2877")),l=i("6544"),d=i.n(l),v=i("8336"),u=i("b0af"),h=i("99d9"),f=i("62ad"),p=i("a523"),x=i("169a"),g=i("ce7e"),b=i("132d"),C=i("0fd9"),m=i("8dd9"),y=i("2fa4"),_=Object(c["a"])(r,a,s,!1,null,"11d72ded",null);e["default"]=_.exports;d()(_,{VBtn:v["a"],VCard:u["a"],VCardActions:h["a"],VCardTitle:h["d"],VCol:f["a"],VContainer:p["a"],VDialog:x["a"],VDivider:g["a"],VIcon:b["a"],VRow:C["a"],VSheet:m["a"],VSpacer:y["a"]})},"8ce9":function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85");var a=i("e8f2"),s=i("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,o=e.data,n=e.children,r=o.attrs;return r&&(o.attrs={},i=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(o.domProps=o.domProps||{},o.domProps.id=a.id),t(a.tag,Object(s["a"])(o,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),n)}})},ce7e:function(t,e,i){"use strict";var a=i("5530"),s=(i("8ce9"),i("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("498a"),i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("a15b");var a=i("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,s=i.data,o=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var n=s.attrs;if(n){s.attrs={};var r=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,o)}})}}}]);
//# sourceMappingURL=chunk-30a18470.ce32b7b7.js.map