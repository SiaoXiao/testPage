(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4616d4ff"],{"17b3":function(t,a,e){},"2a7c":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[e("v-container",[e("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoad,expression:"!isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[e("v-col",{staticClass:"my-16 text-center",attrs:{cols:"12"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoad,expression:"isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[e("v-col",{staticClass:"ma-0 px-0 d-flex justify-space-between",attrs:{cols:"12"}},[e("v-icon",{attrs:{large:""},on:{click:t.backHistory}},[t._v("mdi-chevron-left")]),e("v-icon",{attrs:{large:""},on:{click:t.gotoAddCustomer}},[t._v("mdi-account-plus")])],1),e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},t._l(t.customerListData.data,(function(a){return e("v-card",{key:a.customer_id,staticClass:"mb-3",attrs:{color:"white",elevation:"10"}},[e("v-card-subtitle",[e("div",{staticClass:"contentTag mr-2"},[t._v(t._s(a.city))]),e("div",{staticClass:"contentTag"},[t._v(t._s(a.area))])]),e("v-card-title",{staticClass:"pt-0 pb-1"},[t._v(t._s(a.customer_name))]),e("v-divider"),e("v-card-actions",[e("v-btn",{attrs:{depressed:"",dark:"",color:"cyan darken-1"},on:{click:function(e){return t.gotoCustomerInfo(a.customer_id)}}},[e("v-icon",{staticClass:"mr-1",attrs:{dense:""}},[t._v("mdi-magnify-plus-outline")]),t._v(" 客戶資料 ")],1),"F1011"===a.status?e("v-btn",{attrs:{depressed:"",dark:"",color:"green"},on:{click:function(e){return t.gotoAddContract(a.customer_id)}}},[e("v-icon",{staticClass:"mr-1",attrs:{dense:""}},[t._v("mdi-clipboard-edit")]),t._v(" 新增合約 ")],1):t._e(),"F1012"==a.status||"F1013"==a.status?e("v-btn",{attrs:{depressed:"",dark:"",color:"green"},on:{click:function(e){return t.gotoEditContract(a.contract_no)}}},[e("v-icon",{staticClass:"mr-1",attrs:{dark:""}},[t._v("mdi-lead-pencil")]),t._v(" 編輯合約 ")],1):t._e(),"F1012"==a.status||"F1013"==a.status?e("v-btn",{attrs:{depressed:"",dark:"",color:"green"},on:{click:function(e){return t.gotoViewContract(a)}}},[e("v-icon",{staticClass:"mr-1",attrs:{dark:""}},[t._v("mdi-lead-pencil")]),t._v(" 查看合約 ")],1):t._e()],1),e("v-card-subtitle",{staticClass:"d-flex"},[e("div",{staticClass:"mr-3 fz-c"},[t._v("廣告機合約")]),e("div",[e("v-card-text",{staticClass:"pa-0"},[e("div",{staticClass:"d-flex"},[t._v("狀態："+t._s(t.stateReplace(a.status))+" "),"F1014"===a.status?e("v-icon",{staticClass:"ml-1",attrs:{dense:"",color:"blue accent-4"},on:{click:function(e){return t.gotoViewContract(a)}}},[t._v(" mdi-magnify-plus-outline ")]):t._e()],1),e("div",[t._v("店家分類："+t._s(a.label))])])],1)])],1)})),1),e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{length:t.customerListData.totalPage},on:{input:t.changePage},model:{value:t.customerListData.page,callback:function(a){t.$set(t.customerListData,"page",a)},expression:"customerListData.page"}})],1)],1)],1)],1)],1)]),e("v-col",{attrs:{cols:"12"}},[e("div",{staticStyle:{height:"100px"}})])],1)],1)],1)},s=[],n=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("365c")),r={data:function(){return{isLoad:!1,token:"",page:1,customerListData:{page:1,size:10,totalPage:1,data:{}},contractData:{customerId:"",contractNo:"",address:""}}},created:function(){this.init()},methods:{init:function(){this.getListCustomer()},backHistory:function(){this.$router.go(-1)},gotoAddCustomer:function(){this.$router.push({path:"addCustomer"})},gotoCustomerInfo:function(t){this.$router.push({path:"customerList/customerInfo".concat(t)})},gotoAddContract:function(t){this.$router.push({path:"customerList/addContract".concat(t)})},gotoEditContract:function(t){this.$router.push({path:"customerList/editContract".concat(t)})},gotoViewContract:function(t){sessionStorage.setItem("Cdata",JSON.stringify(t)),this.$router.push({path:"customerList/viewContract"})},getListCustomer:function(){var t=this,a=this.$store.getters.token,e=new URLSearchParams;e.append("pageNo",this.customerListData.page),e.append("pageSize",this.customerListData.size),Object(n["C"])(e,a).then((function(a){200===a.status&&"SUCCESS"===a.data.status_code&&(t.customerListData.data=a.data.datas,t.customerListData.page=a.data.page_no,t.customerListData.totalPage=a.data.total_page),t.$nextTick((function(){t.isLoad=!0}))})).catch((function(t){console.log(t)}))},stateReplace:function(t){var a="";return"F1011"===t?a="未新增合約":"F1012"===t?a="未簽名":"F1013"===t?a="審核中":"F1014"===t&&(a="審核通過"),a},changePage:function(t){var a=this;this.isLoad=!1;var e=this.$Cookies.get("Token"),i=new URLSearchParams;i.append("pageNo",t),i.append("pageSize",this.customerListData.size),Object(n["C"])(i,e).then((function(t){200===t.status&&"SUCCESS"===t.data.status_code&&(a.customerListData.data=t.data.datas),a.$nextTick((function(){a.isLoad=!0}))})).catch((function(t){console.log(t)}))}}},o=r,c=(e("6103"),e("2877")),l=e("6544"),u=e.n(l),d=e("8336"),v=e("b0af"),h=e("99d9"),p=e("62ad"),f=e("a523"),g=e("ce7e"),m=e("132d"),b=e("891e"),C=e("490a"),y=e("0fd9"),_=e("8dd9"),L=Object(c["a"])(o,i,s,!1,null,"881bc876",null);a["default"]=L.exports;u()(L,{VBtn:d["a"],VCard:v["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:p["a"],VContainer:f["a"],VDivider:g["a"],VIcon:m["a"],VPagination:b["a"],VProgressCircular:C["a"],VRow:y["a"],VSheet:_["a"]})},"5f54":function(t,a,e){},6103:function(t,a,e){"use strict";e("5f54")},"891e":function(t,a,e){"use strict";var i=e("2909"),s=e("5530"),n=(e("a9e3"),e("99af"),e("d3b7"),e("25f0"),e("d81d"),e("17b3"),e("9d26")),r=e("dc22"),o=e("a9ad"),c=e("de2c"),l=e("7560"),u=e("58df");a["a"]=Object(u["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(s["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var a=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=a)return this.range(1,this.length);var e=a%2===0?1:0,s=Math.floor(a/2),n=this.length-s+1+e;if(this.value>s&&this.value<n){var r=1,o=this.length,c=this.value-s+2,l=this.value+s-2-e,u=c-1===r+1?2:"...",d=l+1===o-1?l+1:"...";return[1,u].concat(Object(i["a"])(this.range(c,l)),[d,this.length])}if(this.value===s){var v=this.value+s-1-e;return[].concat(Object(i["a"])(this.range(1,v)),["...",this.length])}if(this.value===n){var h=this.value-s+1;return[1,"..."].concat(Object(i["a"])(this.range(h,this.length)))}return[].concat(Object(i["a"])(this.range(1,s)),["..."],Object(i["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,a){var e=[];t=t>0?t:1;for(var i=t;i<=a;i++)e.push(i);return e},genIcon:function(t,a,e,i,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{disabled:e,type:"button","aria-label":s},on:e?{}:{click:i}},[t(n["a"],[a])])])},genItem:function(t,a){var e=this,i=a===this.value&&(this.color||"primary"),s=a===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":a===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,a)},on:{click:function(){return e.$emit("input",a)}}}),[a.toString()])},genItems:function(t){var a=this;return this.items.map((function(e,i){return t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):a.genItem(t,e)])}))},genList:function(t,a){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},a)}},render:function(t){var a=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,a)])}})},"8ce9":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var i=e("e8f2"),s=e("d9f7");a["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,i=a.props,n=a.data,r=a.children,o=n.attrs;return o&&(n.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),r)}})},ce7e:function(t,a,e){"use strict";var i=e("5530"),s=(e("8ce9"),e("7560"));a["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var a;return this.$attrs.role&&"separator"!==this.$attrs.role||(a=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":a},this.$attrs),on:this.$listeners})}})},e8f2:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var i=e("2b0e");function s(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var i=e.props,s=e.data,n=e.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var r=s.attrs;if(r){s.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),a(i.tag,s,n)}})}}}]);
//# sourceMappingURL=chunk-4616d4ff.5ef1e432.js.map