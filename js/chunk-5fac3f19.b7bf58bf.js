(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fac3f19"],{"17b3":function(t,a,e){},"807a":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[e("v-container",[e("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoad,expression:"!isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[e("v-col",{staticClass:"my-16 text-center",attrs:{cols:"12"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoad,expression:"isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[e("v-icon",{attrs:{large:""},on:{click:t.backHistory}},[t._v("mdi-chevron-left")]),0===t.data.length?e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[e("div",{staticClass:"d-flex text-h4 blue-grey--text flex-column align-center"},[e("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("mdi-bullhorn-outline")]),t._v(" 尚無消息公告 ")],1)]):t._e(),e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[e("ul",{staticClass:"pa-0"},t._l(t.data,(function(a){return e("li",{key:a.news_id,staticClass:"my-2 d-flex"},[e("v-icon",{staticClass:"mr-3"},[t._v("mdi-bullhorn-outline")]),e("div",{staticStyle:{width:"100%"}},[e("a",{staticClass:"d-flex align-center",on:{click:function(e){return t.gotoContent(a.news_id)}}},[e("div",{staticClass:"d-flex flex-column"},[e("div",{staticClass:"titleColor"},[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.context))]),e("p",[e("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-clock-outline")]),t._v(" "+t._s(t.timeReplace(a.update_time))+" ")],1)])]),e("v-divider")],1)],1)})),0)]),e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{length:t.totalPage,"total-visible":5},on:{input:t.changePage},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)],1)],1)],1)]),e("v-col",{attrs:{cols:"12"}},[e("div",{staticStyle:{height:"100px"}})])],1)],1)],1)},n=[],s=(e("ac1f"),e("5319"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("365c")),r={data:function(){return{isLoad:!1,page:1,size:10,totalPage:1,data:[]}},created:function(){this.init()},methods:{init:function(){this.GetNewsContextList()},timeReplace:function(t){var a=/T/gi;return t.replace(a," ")},backHistory:function(){this.$router.go(-1)},gotoContent:function(t){this.$router.push({path:"AnnouncementContent/".concat(t)})},GetNewsContextList:function(){var t=this,a=this.$Cookies.get("Token"),e=new URLSearchParams;e.append("pageNo",this.page),e.append("pageSize",this.size),Object(s["v"])(e,a).then((function(a){200===a.status&&"SUCCESS"===a.data.status_code&&(t.data=a.data.datas,t.page=a.data.page_no,t.totalPage=a.data.total_page),t.$nextTick((function(){t.isLoad=!0}))})).catch((function(t){console.log(t)}))},changePage:function(t){var a=this;this.isLoad=!1;var e=this.$Cookies.get("Token"),i=new URLSearchParams;i.append("pageNo",t),i.append("pageSize",this.size),Object(s["v"])(i,e).then((function(t){200===t.status&&"SUCCESS"===t.data.status_code&&(a.data=t.data.datas,a.page=t.data.page_no,a.totalPage=t.data.total_page),a.$nextTick((function(){a.isLoad=!0}))})).catch((function(t){console.log(t)}))}}},o=r,c=(e("c3ac"),e("2877")),l=e("6544"),u=e.n(l),h=e("62ad"),d=e("a523"),v=e("ce7e"),p=e("132d"),f=e("891e"),g=e("490a"),m=e("0fd9"),b=e("8dd9"),y=Object(c["a"])(o,i,n,!1,null,"10b3a5bd",null);a["default"]=y.exports;u()(y,{VCol:h["a"],VContainer:d["a"],VDivider:v["a"],VIcon:p["a"],VPagination:f["a"],VProgressCircular:g["a"],VRow:m["a"],VSheet:b["a"]})},"891e":function(t,a,e){"use strict";var i=e("2909"),n=e("5530"),s=(e("a9e3"),e("99af"),e("d3b7"),e("25f0"),e("d81d"),e("17b3"),e("9d26")),r=e("dc22"),o=e("a9ad"),c=e("de2c"),l=e("7560"),u=e("58df");a["a"]=Object(u["a"])(o["a"],Object(c["a"])({onVisible:["init"]}),l["a"]).extend({name:"v-pagination",directives:{Resize:r["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(n["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var a=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=a)return this.range(1,this.length);var e=a%2===0?1:0,n=Math.floor(a/2),s=this.length-n+1+e;if(this.value>n&&this.value<s){var r=1,o=this.length,c=this.value-n+2,l=this.value+n-2-e,u=c-1===r+1?2:"...",h=l+1===o-1?l+1:"...";return[1,u].concat(Object(i["a"])(this.range(c,l)),[h,this.length])}if(this.value===n){var d=this.value+n-1-e;return[].concat(Object(i["a"])(this.range(1,d)),["...",this.length])}if(this.value===s){var v=this.value-n+1;return[1,"..."].concat(Object(i["a"])(this.range(v,this.length)))}return[].concat(Object(i["a"])(this.range(1,n)),["..."],Object(i["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,a){var e=[];t=t>0?t:1;for(var i=t;i<=a;i++)e.push(i);return e},genIcon:function(t,a,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":e},attrs:{disabled:e,type:"button","aria-label":n},on:e?{}:{click:i}},[t(s["a"],[a])])])},genItem:function(t,a){var e=this,i=a===this.value&&(this.color||"primary"),n=a===this.value,s=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":a===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(s,a)},on:{click:function(){return e.$emit("input",a)}}}),[a.toString()])},genItems:function(t){var a=this;return this.items.map((function(e,i){return t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):a.genItem(t,e)])}))},genList:function(t,a){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},a)}},render:function(t){var a=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,a)])}})},"8ce9":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var i=e("e8f2"),n=e("d9f7");a["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,i=a.props,s=a.data,r=a.children,o=s.attrs;return o&&(s.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(s.attrs[t]=a,!1):a||"string"===typeof a}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),r)}})},c3ac:function(t,a,e){"use strict";e("e5a4")},ce7e:function(t,a,e){"use strict";var i=e("5530"),n=(e("8ce9"),e("7560"));a["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var a;return this.$attrs.role&&"separator"!==this.$attrs.role||(a=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":a},this.$attrs),on:this.$listeners})}})},e5a4:function(t,a,e){},e8f2:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var i=e("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var i=e.props,n=e.data,s=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),a(i.tag,n,s)}})}}}]);
//# sourceMappingURL=chunk-5fac3f19.b7bf58bf.js.map