(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff1a5530"],{6062:function(t,e,a){"use strict";var s=a("6d61"),i=a("6566");t.exports=s("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},a56f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[a("v-container",[a("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.isLoad,expression:"!isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[a("v-col",{staticClass:"my-16 text-center",attrs:{cols:"12"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isLoad,expression:"isLoad"}],staticClass:"ma-auto",attrs:{dense:""}},[a("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[a("v-card",{staticClass:"d-flex justify-space-around",attrs:{color:"white",elevation:"10"}},[a("div",[a("v-card-title",{staticClass:"body-2 d-flex justify-center pb-1"},[t._v(t._s(t.bonusTitle.title))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.bonuSdata.extraBonus))])],1),a("div",[a("v-card-title",{staticClass:"body-2 d-flex justify-center pb-1"},[t._v(t._s(t.bonusTitle.title_2))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.bonuSdata.advertiseBonus))])],1),a("div",[a("v-card-title",{staticClass:"body-2 d-flex justify-center pb-1"},[t._v(t._s(t.bonusTitle.title_3))]),a("p",{staticClass:"text-center"},[t._v(t._s(t.bonuSdata.onlineBonus))])],1)])],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"d-flex justify-space-between mb-1"},[a("v-container",{attrs:{bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",[t._v(" "+t._s(t.objItemsText[1].title)+" ")])],1)],1),a("div",{staticClass:"d-flex"},[a("v-select",{staticClass:"mr-2",attrs:{items:t.bonusKind,"item-text":"state","item-value":"code",label:"請選擇分類","return-object":"","single-line":"",solo:""},on:{change:t.getBonusDetailFilterList},model:{value:t.bonuSdata.bonusKind,callback:function(e){t.$set(t.bonuSdata,"bonusKind",e)},expression:"bonuSdata.bonusKind"}}),a("v-select",{attrs:{items:t.sheachDate,label:"請選擇時間","single-line":"",solo:""},on:{change:t.getBonusDetailFilterList},model:{value:t.bonuSdata.seachTime,callback:function(e){t.$set(t.bonuSdata,"seachTime",e)},expression:"bonuSdata.seachTime"}})],1)],1),t._l(t.bonuSdata.list,(function(e){return a("v-card",{key:e.time_create,staticClass:"d-flex justify-space-between px-3 py-3 mb-6",attrs:{color:"white",elevation:"10",outlined:""}},[a("div",[a("div",{staticClass:"contentTag d-inline-block px-2"},[t._v(t._s(t.stateReplace(e.bonus_kind)))]),a("v-card-title",{staticClass:"text-subtitle-1 px-1 py-1"},[t._v(t._s(e.customer_name))]),a("v-card-subtitle",{staticClass:"pa-0 mt-0"},[t._v(t._s(t.timeReplace(e.time_create)))]),a("v-card-subtitle",{staticClass:"pa-0"},[t._v("備註："+t._s(e.momo))])],1),a("div",[a("v-card-title",{staticClass:"text-subtitle-1 pa-0",class:1===Math.sign(e.balance)?"green--text":"red--text"},[t._v(" "+t._s(e.balance)+" ")])],1)])}))],2),void 0==t.bonuSdata.list.length?a("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[a("div",{staticClass:"d-flex text-h4 blue-grey--text flex-column align-center"},[a("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("mdi-clipboard-text-search-outline")]),t._v(" 尚無獎金資料 ")],1)]):t._e(),0==t.bonuSdata.list.length?a("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[a("div",{staticClass:"d-flex text-h4 blue-grey--text flex-column align-center"},[a("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("mdi-clipboard-text-search-outline")]),t._v(" 尚無獎金資料 ")],1)]):t._e(),a("v-col",{attrs:{cols:"12"}},[a("div",{staticStyle:{height:"100px"}})])],1)],1)],1)},i=[],n=a("2909"),o=(a("ac1f"),a("1276"),a("5319"),a("159b"),a("fb6a"),a("a630"),a("3ca3"),a("d3b7"),a("6062"),a("ddb0"),a("4e827"),a("2b3d"),a("365c")),c={data:function(){return{isLoad:!1,bonusTitle:{title:"額外獎勵",title_2:"導購獎金",title_3:"徵員分紅"},objItemsText:[{title:"行程表",link:"查看所有行程",noContentText:"暫無行程"},{title:"獎金紀錄",link:"查看所有公告",noContentText:"暫無公告"}],token:"",bonuSdata:{extraBonus:0,advertiseBonus:0,onlineBonus:0,list:{},bonusKind:"",seachTime:""},bonusKind:[{state:"選擇分類",code:""},{state:"廣告機抽成",code:"ST01"},{state:"上限抽成",code:"ST02"},{state:"提領扣錢",code:"ST03"},{state:"取消提領加回去",code:"ST04"}],sheachDate:[]}},created:function(){this.init()},methods:{init:function(){this.$store.dispatch("setToken",this.$Cookies.get("Token")),this.getBonusData()},timeReplace:function(t){var e=/T/gi;return t.replace(e," ").split(".")[0]},stateReplace:function(t){var e="";return e="ST01"===t?"廣告機抽成":"ST02"===t?"上限抽成":"ST03"===t?"提領扣錢":"ST04"===t?"取消提領加回去":"其它",e},getBonusData:function(){var t=this,e=this.$store.getters.token;Object(o["o"])(e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code&&(sessionStorage.setItem("bonus",e.data.withdraw_bonus),t.bonuSdata.extraBonus=e.data.extra_bonus,t.bonuSdata.advertiseBonus=e.data.advertise_bonus,t.bonuSdata.onlineBonus=e.data.online_bonus,t.bonuSdata.list=e.data.datas,e.data.datas.forEach((function(e){t.sheachDate.push(e.time_create.slice(0,7))})),t.sheachDate=Array.from(new Set(Object(n["a"])(t.sheachDate))),t.sheachDate.sort((function(t,e){var a=new Date(Date.parse(t.replace(/-/g,"/"))),s=new Date(Date.parse(e.replace(/-/g,"/")));return a.getTime()-s.getTime()}))),t.$nextTick((function(){t.isLoad=!0}))})).catch((function(t){console.log(t)}))},getBonusDetailFilterList:function(){var t=this;this.isLoad=!1;var e=this.$store.getters.token,a=new URLSearchParams;void 0!==this.bonuSdata.bonusKind.code&&""!==this.bonuSdata.seachTime&&null!==this.bonuSdata.seachTime&&a.append("kind",this.bonuSdata.bonusKind.code),void 0!==this.bonuSdata.seachTime&&""!==this.bonuSdata.seachTime&&null!==this.bonuSdata.seachTime&&a.append("time",this.bonuSdata.seachTime),Object(o["n"])(a,e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code&&(t.bonuSdata.list={},t.bonuSdata.list=e.data.datas),t.$nextTick((function(){t.isLoad=!0}))})).catch((function(t){console.log(t)}))}}},l=c,r=(a("b087"),a("2877")),d=a("6544"),u=a.n(d),b=a("b0af"),v=a("99d9"),h=a("62ad"),f=a("a523"),m=(a("20f6"),a("e8f2")),x=Object(m["a"])("flex"),p=a("132d"),S=Object(m["a"])("layout"),_=a("490a"),g=a("0fd9"),C=a("b974"),T=a("8dd9"),w=Object(r["a"])(l,s,i,!1,null,"4aa7d470",null);e["default"]=w.exports;u()(w,{VCard:b["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:h["a"],VContainer:f["a"],VFlex:x,VIcon:p["a"],VLayout:S,VProgressCircular:_["a"],VRow:g["a"],VSelect:C["a"],VSheet:T["a"]})},b087:function(t,e,a){"use strict";a("ba7e")},ba7e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-ff1a5530.1afb9fc0.js.map