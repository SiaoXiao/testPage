(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17257817"],{"1ad4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[s("v-container",[s("v-row",{staticClass:"ma-auto",attrs:{dense:""}},[s("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex justify-space-between mb-1"},[s("span",{staticClass:"body-2"},[t._v("客服")])]),s("v-card",{staticClass:"d-flex",staticStyle:{height:"90px"},attrs:{color:"white",elevation:"10"}},[s("router-link",{staticClass:"text-decoration-none text-center d-flex flex-column justify-center",staticStyle:{width:"100%"},attrs:{to:"service/ContactCustomerService"}},[s("v-icon",[t._v("mdi-comment-edit-outline")]),s("p",{staticClass:"body-2 text-center mt-1 mb-0"},[t._v("聯繫客服")])],1),s("v-divider",{attrs:{inset:"",vertical:""}}),s("router-link",{staticClass:"text-decoration-none text-center d-flex flex-column justify-center",staticStyle:{width:"100%"},attrs:{to:"service/CustomerServiceRecord"}},[s("v-icon",[t._v("mdi-comment-text-multiple-outline")]),s("p",{staticClass:"body-2 text-center mt-1 mb-0"},[t._v("客服紀錄")])],1)],1)],1),s("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex justify-space-between mb-1"},[s("span",{staticClass:"body-2"},[t._v("真人客服")])]),s("v-card",{staticClass:"d-flex justify-center",staticStyle:{height:"90px"},attrs:{color:"white",elevation:"10"}},[s("a",{staticClass:"text-decoration-none text-center d-flex flex-column justify-center py-3",staticStyle:{width:"100%"},attrs:{href:"https://line.me/R/ti/p/%40211ailbs"}},[s("v-img",{attrs:{height:"45",contain:"",src:a("f61b")}}),s("p",{staticClass:"body-2 text-center mt-1 mb-0"},[t._v("Line @ 真人客服")])],1)])],1),s("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[s("div",{staticClass:"d-flex justify-space-between mb-1"},[s("span",{staticClass:"body-2"},[t._v("消息")])]),s("v-card",{staticClass:"d-flex justify-center",staticStyle:{height:"90px"},attrs:{color:"white",elevation:"10"}},[s("router-link",{staticClass:"text-decoration-none text-center d-flex flex-column justify-center",staticStyle:{width:"100%"},attrs:{to:"service/Announcement"}},[s("v-icon",[t._v("mdi-bullhorn-outline")]),s("p",{staticClass:"body-2 text-center mt-1 mb-0"},[t._v("消息公告")])],1)],1)],1),s("v-col",{attrs:{cols:"12"}},[s("div",{staticStyle:{height:"100px"}})])],1)],1)],1)},i=[],r={data:function(){return{}}},n=r,c=(a("6444"),a("2877")),o=a("6544"),l=a.n(o),d=a("b0af"),f=a("62ad"),u=a("a523"),v=a("ce7e"),p=a("132d"),m=a("adda"),h=a("0fd9"),b=a("8dd9"),x=Object(c["a"])(n,s,i,!1,null,"991045ee",null);e["default"]=x.exports;l()(x,{VCard:d["a"],VCol:f["a"],VContainer:u["a"],VDivider:v["a"],VIcon:p["a"],VImg:m["a"],VRow:h["a"],VSheet:b["a"]})},6444:function(t,e,a){"use strict";a("df06")},"8ce9":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85");var s=a("e8f2"),i=a("d9f7");e["a"]=Object(s["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,r=e.data,n=e.children,c=r.attrs;return c&&(r.attrs={},a=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),t(s.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),n)}})},ce7e:function(t,e,a){"use strict";var s=a("5530"),i=(a("8ce9"),a("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},df06:function(t,e,a){},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("498a"),a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("a15b");var s=a("2b0e");function i(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,i=a.data,r=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var n=i.attrs;if(n){i.attrs={};var c=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(i.staticClass+=" ".concat(c.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}},f61b:function(t,e,a){t.exports=a.p+"img/LINE_Brand_icon.37b0675d.png"}}]);
//# sourceMappingURL=chunk-17257817.cee8c4f2.js.map