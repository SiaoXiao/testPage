(function(e){function t(t){for(var a,o,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1004be46":"376788d1","chunk-17257817":"e6180940","chunk-254e113a":"ab81587c","chunk-27b565d0":"3dc20f47","chunk-2a4bdc30":"995f8ef8","chunk-2f6ce438":"d19f5244","chunk-33a0824c":"1eaf9772","chunk-387edceb":"2d7c5842","chunk-4616d4ff":"e3d32308","chunk-4b005129":"e51155ed","chunk-4b0131fb":"f032f2c6","chunk-5330597f":"2fe8eb72","chunk-5b38cc29":"969c6895","chunk-5fac3f19":"885ca903","chunk-6b0c30ec":"70a0ec32","chunk-6e8657db":"3df972a5","chunk-789c95e8":"38c2cbaf","chunk-7c9f1cbe":"74864ad8","chunk-02983d9f":"6ae1707f","chunk-051acfb0":"44efda83","chunk-0c5f8415":"d9b8c840","chunk-1add7f0e":"3ca5ef82","chunk-2d0b362d":"0af66c0f","chunk-2df78d1c":"f219a498","chunk-5d24a0c3":"7d450dcd","chunk-6a992cef":"40391827","chunk-ff1a5530":"69b2a61f","chunk-516dc483":"b2ced074","chunk-ef9c12a6":"3bd275c2","chunk-ffc9387c":"09407238"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-17257817":1,"chunk-254e113a":1,"chunk-27b565d0":1,"chunk-2a4bdc30":1,"chunk-2f6ce438":1,"chunk-33a0824c":1,"chunk-387edceb":1,"chunk-4616d4ff":1,"chunk-5330597f":1,"chunk-5b38cc29":1,"chunk-5fac3f19":1,"chunk-6b0c30ec":1,"chunk-6e8657db":1,"chunk-789c95e8":1,"chunk-7c9f1cbe":1,"chunk-02983d9f":1,"chunk-051acfb0":1,"chunk-0c5f8415":1,"chunk-1add7f0e":1,"chunk-2df78d1c":1,"chunk-5d24a0c3":1,"chunk-6a992cef":1,"chunk-ff1a5530":1,"chunk-516dc483":1,"chunk-ffc9387c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1004be46":"31d6cfe0","chunk-17257817":"dcb81a90","chunk-254e113a":"7249ac1d","chunk-27b565d0":"0b94f07b","chunk-2a4bdc30":"e0298cbb","chunk-2f6ce438":"20c372a5","chunk-33a0824c":"8ad0bb85","chunk-387edceb":"73bd8f63","chunk-4616d4ff":"da974b9b","chunk-4b005129":"31d6cfe0","chunk-4b0131fb":"31d6cfe0","chunk-5330597f":"9d21c0d7","chunk-5b38cc29":"0d3e544b","chunk-5fac3f19":"3b4472be","chunk-6b0c30ec":"2228f66d","chunk-6e8657db":"b5781c8e","chunk-789c95e8":"d7a819df","chunk-7c9f1cbe":"b4ec8843","chunk-02983d9f":"6fe29eea","chunk-051acfb0":"4224ff3a","chunk-0c5f8415":"bb10277d","chunk-1add7f0e":"1ef43780","chunk-2d0b362d":"31d6cfe0","chunk-2df78d1c":"42264033","chunk-5d24a0c3":"917afa55","chunk-6a992cef":"d5eef7fb","chunk-ff1a5530":"39241a03","chunk-516dc483":"4ef3fc75","chunk-ef9c12a6":"31d6cfe0","chunk-ffc9387c":"38f951c5"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===a||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],h.parentNode.removeChild(h),n(c)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0bc8":function(e,t,n){e.exports=n.p+"img/logo_white.8daaee73.png"},"2eba":function(e,t,n){},"365c":function(e,t,n){"use strict";n.d(t,"J",(function(){return h})),n.d(t,"D",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"B",(function(){return p})),n.d(t,"z",(function(){return b})),n.d(t,"A",(function(){return k})),n.d(t,"Q",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"E",(function(){return C})),n.d(t,"s",(function(){return g})),n.d(t,"y",(function(){return T})),n.d(t,"d",(function(){return x})),n.d(t,"F",(function(){return y})),n.d(t,"r",(function(){return B})),n.d(t,"C",(function(){return A})),n.d(t,"f",(function(){return _})),n.d(t,"G",(function(){return S})),n.d(t,"w",(function(){return L})),n.d(t,"g",(function(){return z})),n.d(t,"t",(function(){return P})),n.d(t,"h",(function(){return U})),n.d(t,"O",(function(){return j})),n.d(t,"o",(function(){return I})),n.d(t,"a",(function(){return V})),n.d(t,"n",(function(){return O})),n.d(t,"p",(function(){return R})),n.d(t,"e",(function(){return D})),n.d(t,"k",(function(){return $})),n.d(t,"x",(function(){return E})),n.d(t,"N",(function(){return W})),n.d(t,"v",(function(){return N})),n.d(t,"u",(function(){return G})),n.d(t,"I",(function(){return M})),n.d(t,"M",(function(){return F})),n.d(t,"L",(function(){return q})),n.d(t,"q",(function(){return H})),n.d(t,"l",(function(){return J})),n.d(t,"m",(function(){return K})),n.d(t,"c",(function(){return Q})),n.d(t,"P",(function(){return X})),n.d(t,"H",(function(){return Y})),n.d(t,"i",(function(){return Z})),n.d(t,"K",(function(){return ee}));n("d3b7"),n("ac1f"),n("5319");var a=n("bc3a"),o=n.n(a),r=n("2b27"),c=n.n(r),i=n("a18c"),u=n("3d20"),s=n.n(u),d=o.a.create({baseURL:"https://ae-api.ifalink.com/api/",timeout:5e3});d.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e):Promise.reject(e)}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="Request Error!";break;case 401:e.message="No permission, need login.",sessionStorage.clear(),c.a.remove("Token"),i["a"].replace({path:"/"}),s.a.fire({title:"登入狀態已過期，請重新登入",icon:"error",confirmButtonText:"確定"});break;case 403:e.message="Access denied!";break;case 404:e.message="Address not exist!";break;case 408:e.message="Request timeout!";break;case 500:e.message="Server inside error!";break;case 501:e.message="Service not allowed!";break;case 502:e.message="Bad gateway!";break;case 503:e.message="No service!";break;case 504:e.message="Gateway timeout!";break;case 505:e.message="http version not supported!";break;default:break}console.error("錯誤請求：".concat(e))}));var l=d;function h(e){return l({method:"post",url:"Consultant/Recommend",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function f(e){return l({method:"post",url:"Consultant/Login",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function m(e){return l({method:"post",url:"Consultant/AddConsultant",data:e,headers:{"Content-Type":"multipart/form-data"}})}function p(){return l({method:"post",url:"Consultant/GetLineLoginUrl",headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function b(e){return l({method:"post",url:"Consultant/LineLogin",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function k(e,t){return l({method:"post",url:"Consultant/LineLoginBind",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function v(e){return l({method:"post",url:"Consultant/MyPassword",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function w(e){return l({method:"post",url:"Consultant/Info",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function C(e){return l({method:"post",url:"Consultant/Logout",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function g(){return l({method:"post",url:"Consultant/GetLineLoginUrlBindLine",headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function T(e){return l({method:"post",url:"Consultant/GetTaiwanAreaInfo",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function x(e,t){return l({method:"post",url:"Consultant/AddCustomer",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function y(e,t){return l({method:"post",url:"Consultant/ModifyCustomer",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function B(e,t){return l({method:"post",url:"Consultant/GetCustomer",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function A(e,t){return l({method:"post",url:"Consultant/ListCustomer",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function _(e,t){return l({method:"post",url:"Consultant/AddMySchedule",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function S(e,t){return l({method:"post",url:"Consultant/ModifyMySchedule",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function L(e,t){return l({method:"post",url:"Consultant/GetSchedule",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function z(e,t){return l({method:"post",url:"UserContract/AddUserReport",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function P(e,t){return l({method:"post",url:"UserContract/GetMyReport",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function U(e,t){return l({method:"post",url:"UserContract/AlterContract",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function j(e,t){return l({method:"post",url:"UserContract/SingatureMyReportasync",data:e,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}})}function I(e){return l({method:"post",url:"Consultant/GetBonusDetailList",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function V(e,t){return l({method:"post",url:"Consultant/AddConsultWithdraw",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function O(e,t){return l({method:"post",url:"Consultant/GetBonusDetailFilterList",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function R(e,t){return l({method:"post",url:"Consultant/GetConsultWithdrawList",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function D(e,t){return l({method:"post",url:"Consultant/AddCustomerService",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function $(e,t){return l({method:"post",url:"Consultant/LogServices",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function E(e,t){return l({method:"post",url:"Consultant/GetServiceLog",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function W(e,t){return l({method:"post",url:"Consultant/ServiceTalk",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function N(e,t){return l({method:"post",url:"Consultant/GetNewsContextList",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function G(e,t){return l({method:"post",url:"Consultant/GetNewsContext",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function M(e){return l({method:"post",url:"Consultant/ConfigPersonalInfo",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function F(e,t){return l({method:"post",url:"Consultant/SavePersonalInfo",data:e,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}})}function q(e,t){return l({method:"post",url:"Consultant/SaveMyPassword",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function H(e){return l({method:"post",url:"Consultant/GetConsultantBalance",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function J(e){return l({method:"post",url:"Consultant/GetBankInfo",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function K(e,t){return l({method:"post",url:"Consultant/GetBankInfoBranchCode",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function Q(e,t){return l({method:"post",url:"Consultant/AddConsultantBalance",data:e,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}})}function X(e,t){return l({method:"post",url:"Consultant/UpdateConsultantBalance",data:e,headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(t)}})}function Y(e,t){return l({method:"post",url:"Consultant/MyTeam",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}function Z(e){return l({method:"post",url:"Consultant/ConfigLanguage",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(e)}})}function ee(e,t){return l({method:"post",url:"Consultant/SaveLanguage",data:e,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(t)}})}},4118:function(e,t,n){},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.af80c7f9.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("2106"),r=n.n(o),c=n("bc3a"),i=n.n(c),u=n("2b27"),s=n.n(u),d=n("f4b0"),l=n.n(d),h=n("f9d5"),f=n.n(h),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},p=[],b={name:"App",data:function(){return{}}},k=b,v=(n("034f"),n("2877")),w=n("6544"),C=n.n(w),g=n("7496"),T=n("f6c4"),x=Object(v["a"])(k,m,p,!1,null,null,null),y=x.exports;C()(x,{VApp:g["a"],VMain:T["a"]});var B=n("a18c"),A=n("2f62");a["a"].use(A["a"]);var _=new A["a"].Store({state:{lineUrl:"",lineLoginCode:"",lineLoginState:"",withdrawBonus:"",reLoadTalk:!1,token:""},actions:{setLineUrl:function(e,t){var n=e.commit;n("setLineUrl",t)},setLineLoginCode:function(e,t){var n=e.commit;n("setLineLoginCode",t)},setLineLoginState:function(e,t){var n=e.commit;n("setLineLoginState",t)},setWithdrawBonus:function(e,t){var n=e.commit;n("setWithdrawBonus",t)},setReLoadTalk:function(e,t){var n=e.commit;n("setReLoadTalk",t)},setToken:function(e,t){var n=e.commit;n("setToken",t)}},mutations:{setLineUrl:function(e,t){e.lineUrl=t},setLineLoginCode:function(e,t){e.lineLoginCode=t},setLineLoginState:function(e,t){e.lineLoginState=t},setWithdrawBonus:function(e,t){e.withdrawBonus=t},setReLoadTalk:function(e,t){e.reLoadTalk=t},setToken:function(e,t){e.token=t}},getters:{lineUrl:function(e){return e.lineUrl},lineLoginCode:function(e){return e.lineLoginCode},lineLoginState:function(e){return e.lineLoginState},withdrawBonus:function(e){return e.withdrawBonus},reLoadTalk:function(e){return e.reLoadTalk},token:function(e){return e.token}}}),S=_,L=n("f309");a["a"].use(L["a"]);var z=new L["a"]({});n("4413");a["a"].config.productionTip=!1,a["a"].prototype.$Cookies=s.a,a["a"].use(l.a),a["a"].use(s.a),a["a"].use(r.a,i.a),a["a"].use(f.a),new a["a"]({router:B["a"],store:S,vuetify:z,render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},"920a":function(e,t,n){"use strict";n("f777")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"mt-3",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"3",sm:"6",md:"4"}},[a("v-card",{staticClass:"elevation-8 pt-12 pb-12 pl-6 pr-6",attrs:{flat:"",tile:""}},[a("v-img",{attrs:{height:"60",contain:"",src:n("4ffd")}}),a("v-card-title",{staticClass:"font-weight-black justify-center",domProps:{textContent:e._s(this.cardTitle)}}),a("router-view")],1)],1)],1)},c=[],i=(n("b0c0"),{data:function(){return{cardTitle:""}},watch:{$route:{handler:function(e){switch(this.cardTitle="",e.name){case"Login":this.cardTitle="品牌顧問登入";break;case"ForgetPWD":this.cardTitle="忘記密碼";break;case"Register":this.cardTitle="註冊";break;default:}},immediate:!0}}}),u=i,s=n("2877"),d=n("6544"),l=n.n(d),h=n("b0af"),f=n("99d9"),m=n("62ad"),p=n("adda"),b=n("0fd9"),k=Object(s["a"])(u,r,c,!1,null,null,null),v=k.exports;l()(k,{VCard:h["a"],VCardTitle:f["d"],VCol:m["a"],VImg:p["a"],VRow:b["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{md:"6","offset-md":"3"}},[n("Header"),e.isShow?n("router-view"):e._e(),n("Footer")],1)],1)],1)},C=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"blue darken-4"}},[a("div",{staticClass:"d-flex justify-center"},[a("img",{directives:[{name:"show",rawName:"v-show",value:""==e.cardTitle||"home"===e.cardTitle||"Bonus"===e.cardTitle||"User"===e.cardTitle,expression:"cardTitle == ''\n        || cardTitle === 'home'\n        || cardTitle === 'Bonus'\n        || cardTitle === 'User'"}],staticClass:"mt-3",attrs:{height:"40",src:n("0bc8"),alt:"ifalinkLogo"}}),""!==e.cardTitle&&"home"!==e.cardTitle&&"Bonus"!==e.cardTitle&&"User"!==e.cardTitle?a("v-card-text",{staticClass:"mb-0 ml-3 pColorSize text-center text-h6",domProps:{textContent:e._s(e.cardTitle)}}):e._e()],1),"行事曆"!==e.cardTitle&&"服務"!==e.cardTitle&&"設定"!==e.cardTitle&&"邀請碼"!==e.cardTitle&&"合作顧問群"!==e.cardTitle&&"修改密碼"!==e.cardTitle&&"銀行帳戶"!==e.cardTitle&&"個人資料"!==e.cardTitle&&"聯繫客服"!==e.cardTitle&&"客服紀錄"!==e.cardTitle&&"消息公告"!==e.cardTitle&&"消息公告"!==e.cardTitle&&"客戶列表"!==e.cardTitle&&"新建合約"!==e.cardTitle&&"編輯合約"!==e.cardTitle&&"查看合約"!==e.cardTitle&&"客戶資料"!==e.cardTitle&&"新增客戶資料"!==e.cardTitle&&"新增/修改銀行帳戶"!==e.cardTitle&&"提領列表"!==e.cardTitle&&"簽名檔"!==e.cardTitle&&"負責人簽名"!==e.cardTitle?a("v-card-text",{staticClass:"d-flex justify-space-between"},[a("div",{staticClass:"mx-3 d-flex align-center",class:"home"===e.cardTitle?"":"flex-column"},[a("v-avatar",{staticClass:"avatarbd",attrs:{size:"80"}},[a("img",{attrs:{src:e.data.pic,alt:"User"}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:"home"===e.cardTitle,expression:"cardTitle === 'home'"}]},[a("p",{staticClass:"mb-0 ml-3 pColorSize"},[e._v(" "+e._s(e.data.user)+" 您好! ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"home"!==e.cardTitle,expression:"cardTitle !== 'home'"}]},[a("p",{staticClass:"ma-0 mt-1 pColorSize"},[e._v(" "+e._s(e.data.user)+" ")])])],1),"Bonus"===e.cardTitle?a("div",{staticClass:"d-flex flex-column mx-3"},[a("v-card-title",{staticClass:"pa-0 colorWhite justify-center"},[e._v(e._s(e.items.title))]),a("v-card-subtitle",{staticClass:"pa-0 ma-0 text-center"},[e._v(e._s(e.withdrawBonus))]),a("v-card-actions",[a("v-btn",{staticClass:"pa-1 mr-1",attrs:{color:"error"},on:{click:function(t){t.stopPropagation(),e.dialog=!0,e.bonusData.switchOpen=!0,e.checkCloss=!1}}},[e._v(" 立即提領 ")]),a("v-btn",{staticClass:"pa-1",attrs:{color:"error"},on:{click:e.gotoConsultWithdrawList}},[e._v(" 查詢提領 ")])],1)],1):e._e(),"User"===e.cardTitle?a("div",{staticClass:"d-flex flex-column align-center"},[a("v-card-title",{staticClass:"pa-0 colorWhite"},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-human-handsup")]),e._v(" 顧問編號 ")],1),a("v-card-subtitle",{staticClass:"pa-0 my-1"},[e._v(e._s(e.data.id))]),a("v-card-actions",{staticClass:"pa-0"},[a("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"white"},on:{click:e.goToinvitationCode}},[a("v-icon",{attrs:{color:"white"}},[e._v("mdi-share-variant-outline")]),e._v(" 邀請碼 ")],1)],1)],1):e._e()]):e._e(),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.bonusData.switchOpen,expression:"bonusData.switchOpen"}]},[a("v-card-title",{staticClass:"text-h5"},[e._v(" 立即提領 ")]),a("v-text-field",{staticClass:"px-6",attrs:{rules:[e.rules.required,e.rules.numberCheck],label:"請輸入提領金額",required:"",outlined:""},model:{value:e.bonusData.money,callback:function(t){e.$set(e.bonusData,"money",t)},expression:"bonusData.money"}}),a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text-subtitle-1 text--primary"},[e._v(e._s(e.bonusData.receiveText))])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"black",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 取消 ")]),a("v-btn",{attrs:{text:"",disabled:e.checkCloss},on:{click:e.addConsultWithdraw}},[e._v(" 確定 ")])],1)],1),a("v-card",{directives:[{name:"show",rawName:"v-show",value:!e.bonusData.switchOpen,expression:"!bonusData.switchOpen"}]},[a("v-card",[a("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[e._v(" "+e._s(e.dialogText)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v(" 確定 ")])],1)],1)],1)],1)],1)},T=[],x=(n("2b3d"),n("365c")),y={inject:["reload"],data:function(){return{dialog:!1,dialogText:"",cardTitle:"",bonusData:{switchOpen:!0,money:0,receiveText:"提領作業需 7個工作天，並扣除手續費 5%，不足 1000元則扣除 50元手續費，點確定送出申請。"},items:{title:"可提領獎金",money:0},data:{user:"使用者",message:"您好!",id:"",pic:null},rules:{required:function(e){return!!e||"請輸入金額。"},numberCheck:function(e){return/[0-9]/.test(e)||"請輸入數字。"}},consultantInfo:{},withdrawBonus:0,checkCloss:!1,timer:null,timer2:null}},watch:{$route:{handler:function(e){switch(this.cardTitle="",e.name){case"Homepage":this.cardTitle="home";break;case"Calendar":this.cardTitle="行事曆";break;case"Service":this.cardTitle="服務";break;case"Bonus":this.cardTitle="Bonus",this.withdrawBonus=sessionStorage.getItem("bonus");break;case"ConsultWithdrawList":this.cardTitle="提領列表";break;case"User":this.cardTitle="User";break;case"Setting":this.cardTitle="設定";break;case"InvitationCode":this.cardTitle="邀請碼";break;case"Team":this.cardTitle="合作顧問群";break;case"ResetPWD":this.cardTitle="修改密碼";break;case"BankAccount":this.cardTitle="銀行帳戶";break;case"AddBankAccount":this.cardTitle="新增/修改銀行帳戶";break;case"UserInfo":this.cardTitle="個人資料";break;case"ContactCustomerService":this.cardTitle="聯繫客服";break;case"CustomerServiceRecord":this.cardTitle="客服紀錄";break;case"CustomerServiceRecord_id":this.cardTitle="客服紀錄";break;case"Announcement":this.cardTitle="消息公告";break;case"AnnouncementContent_id":this.cardTitle="消息公告";break;case"CustomerList":this.cardTitle="客戶列表";break;case"AddContract_id":this.cardTitle="新建合約";break;case"EditContract_id":this.cardTitle="編輯合約";break;case"AddSignatureFile_id":this.cardTitle="簽名檔";break;case"AddCustomer":this.cardTitle="新增客戶資料";break;case"CustomerInfo_id":this.cardTitle="客戶資料";break;case"ViewContract":this.cardTitle="查看合約";break;case"Signature":this.cardTitle="負責人簽名";break;default:}},immediate:!0}},created:function(){this.init(),this.getBonus()},updated:function(){this.data.user=sessionStorage.getItem("name"),this.withdrawBonus=sessionStorage.getItem("bonus")},methods:{init:function(){this.$store.dispatch("setToken",this.$Cookies.get("Token")),this.data.user=sessionStorage.getItem("name"),this.data.id=sessionStorage.getItem("id"),this.data.pic=sessionStorage.getItem("pic"),this.withdrawBonus=sessionStorage.getItem("bonus")},goToinvitationCode:function(){this.$router.push({path:"user/invitationCode"})},gotoConsultWithdrawList:function(){this.$router.push({name:"ConsultWithdrawList"})},addConsultWithdraw:function(){var e=this;this.checkCloss=!0,this.dialogText="";var t=this.$store.getters.token,n=new URLSearchParams;n.append("amount",this.bonusData.money),Object(x["a"])(n,t).then((function(t){200===t.status&&"SUCCESS"===t.data.status_code?(e.bonusData.switchOpen=!1,e.dialogText="已送出提領申請。",e.timer=setTimeout((function(){e.dialog=!1,e.$router.go({name:"Bonus"})}),2e3)):(e.bonusData.switchOpen=!1,e.dialogText=t.data.status_code)})).catch((function(e){console.log(e)}))},getBonus:function(){var e=this;this.timer2=setTimeout((function(){e.withdrawBonus=sessionStorage.getItem("bonus")}),3500)}},destroyed:function(){clearTimeout(this.timer),clearTimeout(this.timer2)}},B=y,A=(n("920a"),n("8212")),_=n("8336"),S=n("169a"),L=n("132d"),z=n("2fa4"),P=n("8654"),U=Object(s["a"])(B,g,T,!1,null,"76a4f120",null),j=U.exports;l()(U,{VAvatar:A["a"],VBtn:_["a"],VCard:h["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VDialog:S["a"],VIcon:L["a"],VSpacer:z["a"],VTextField:P["a"]});var I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"pa-0",attrs:{color:"white",fixed:""}},[n("v-row",{staticClass:"ma-auto",attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},["客服紀錄"!==e.cardTitle?n("v-bottom-navigation",{attrs:{height:"9vh",grow:""}},[n("v-btn",{on:{click:e.goToHome}},[n("span",[e._v("首頁")]),n("v-icon",[e._v("mdi-home-outline")])],1),n("v-btn",{on:{click:e.goToBonus}},[n("span",[e._v("獎金")]),n("v-icon",[e._v("mdi-currency-usd")])],1),n("v-btn",{on:{click:e.goToCalendar}},[n("span",[e._v("行事曆")]),n("v-icon",[e._v("mdi-calendar-month-outline")])],1),n("v-btn",{on:{click:e.goToService}},[n("span",[e._v("服務")]),n("v-icon",[e._v("mdi-handshake-outline")])],1),n("v-btn",{on:{click:e.goToUser}},[n("span",[e._v("我的")]),n("v-icon",[e._v("mdi-account-outline")])],1)],1):e._e(),"客服紀錄"==e.cardTitle?n("v-bottom-navigation",{staticClass:"d-flex justify-space-between align-center py-2 px-3",attrs:{height:"9vh",fixed:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.conversation,expression:"conversation"}],attrs:{type:"text",placeholder:"請輸入訊息"},domProps:{value:e.conversation},on:{input:function(t){t.target.composing||(e.conversation=t.target.value)}}}),n("v-icon",{staticClass:"ml-3",attrs:{"x-large":""},on:{click:e.talk}},[e._v("mdi-send-circle-outline")])],1):e._e()],1)],1)],1)},V=[],O={inject:["reload"],data:function(){return{dialog:!1,cardTitle:"",conversation:"",textContent:""}},watch:{$route:{handler:function(e){switch(this.cardTitle="",e.name){case"CustomerServiceRecord_id":this.cardTitle="客服紀錄";break;default:}},immediate:!0}},methods:{goToHome:function(){this.$router.push({name:"Homepage"})},goToBonus:function(){this.$router.push({name:"Bonus"})},goToCalendar:function(){this.$router.push({name:"Calendar"})},goToService:function(){this.$router.push({name:"Service"})},goToUser:function(){this.$router.push({name:"User"})},talk:function(){var e=this,t=this.$Cookies.get("Token"),n=new URLSearchParams;n.append("serviceId",this.$route.params.id),n.append("conversation",this.conversation),Object(x["N"])(n,t).then((function(t){200===t.status&&"SUCCESS"===t.data.status_code&&(e.conversation="",e.reload())})).catch((function(e){console.log(e)}))}}},R=O,D=(n("ec84"),n("b81c")),$=n("553a"),E=Object(s["a"])(R,I,V,!1,null,"15b60604",null),W=E.exports;l()(E,{VBottomNavigation:D["a"],VBtn:_["a"],VCol:m["a"],VFooter:$["a"],VIcon:L["a"],VRow:b["a"]});var N={components:{Footer:W,Header:j},data:function(){return{isShow:!0}},provide:function(){return{reload:this.reload}},methods:{reload:function(){var e=this;this.isShow=!1,this.$nextTick((function(){e.isShow=!0}))}}},G=N,M=(n("a318"),n("f6c4")),F=Object(s["a"])(G,w,C,!1,null,null,null),q=F.exports;l()(F,{VCol:m["a"],VMain:M["a"],VRow:b["a"]}),a["a"].use(o["a"]);var H=[{path:"/",component:v,meta:{auth1:!0},children:[{path:"",name:"Login",component:function(){return n.e("chunk-2f6ce438").then(n.bind(null,"1954"))}},{path:"forgetPWD",name:"ForgetPWD",component:function(){return n.e("chunk-ef9c12a6").then(n.bind(null,"7779"))}},{path:"register",name:"Register",component:function(){return n.e("chunk-254e113a").then(n.bind(null,"1feb"))}}]},{path:"/home",component:q,children:[{path:"/",name:"Homepage",component:function(){return n.e("chunk-ffc9387c").then(n.bind(null,"487a"))},meta:{auth2:!0}},{path:"customerList",name:"CustomerList",component:function(){return n.e("chunk-4616d4ff").then(n.bind(null,"2a7c"))},meta:{auth2:!0}},{path:"customerList/addContract:id",name:"AddContract_id",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-0c5f8415")]).then(n.bind(null,"c1a3"))},meta:{auth2:!0}},{path:"customerList/editContract:id",name:"EditContract_id",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-2df78d1c")]).then(n.bind(null,"5afe"))}},{path:"customerList/viewContract",name:"ViewContract",component:function(){return n.e("chunk-2a4bdc30").then(n.bind(null,"a517"))}},{path:"customerList/signature",name:"Signature",component:function(){return n.e("chunk-387edceb").then(n.bind(null,"9ad1"))}},{path:"customerList/customerInfo:id",name:"CustomerInfo_id",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-1add7f0e")]).then(n.bind(null,"e4d6"))}},{path:"addCustomer",name:"AddCustomer",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-6a992cef")]).then(n.bind(null,"3a38"))}},{path:"bonus",name:"Bonus",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-ff1a5530")]).then(n.bind(null,"a56f"))}},{path:"bonus/ConsultWithdrawList",name:"ConsultWithdrawList",component:function(){return n.e("chunk-27b565d0").then(n.bind(null,"5868"))}},{path:"calendar",name:"Calendar",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-516dc483")]).then(n.bind(null,"c192"))}},{path:"service",name:"Service",component:function(){return n.e("chunk-17257817").then(n.bind(null,"1ad4"))}},{path:"service/ContactCustomerService",name:"ContactCustomerService",component:function(){return n.e("chunk-5330597f").then(n.bind(null,"bb77"))}},{path:"service/CustomerServiceRecord",name:"CustomerServiceRecord",component:function(){return n.e("chunk-789c95e8").then(n.bind(null,"fe6d"))}},{path:"service/CustomerServiceRecord/:id",name:"CustomerServiceRecord_id",component:function(){return n.e("chunk-6b0c30ec").then(n.bind(null,"0fe7"))}},{path:"service/Announcement",name:"Announcement",component:function(){return n.e("chunk-5fac3f19").then(n.bind(null,"807a"))}},{path:"service/AnnouncementContent/:id",name:"AnnouncementContent_id",component:function(){return n.e("chunk-4b0131fb").then(n.bind(null,"8b38"))}},{path:"user",name:"User",component:function(){return n.e("chunk-5b38cc29").then(n.bind(null,"7088"))}},{path:"user/setting",name:"Setting",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-2d0b362d")]).then(n.bind(null,"27c5"))}},{path:"user/invitationCode",name:"InvitationCode",component:function(){return n.e("chunk-1004be46").then(n.bind(null,"d0b8"))}},{path:"user/team",name:"Team",component:function(){return n.e("chunk-33a0824c").then(n.bind(null,"3f45"))}},{path:"user/resetPWD",name:"ResetPWD",component:function(){return n.e("chunk-6e8657db").then(n.bind(null,"eb4c"))}},{path:"user/bankAccount",name:"BankAccount",component:function(){return n.e("chunk-4b005129").then(n.bind(null,"6d5d"))}},{path:"user/bankAccount/addBankAccount",name:"AddBankAccount",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-5d24a0c3")]).then(n.bind(null,"4701"))}},{path:"user/userInfo",name:"UserInfo",component:function(){return Promise.all([n.e("chunk-7c9f1cbe"),n.e("chunk-02983d9f"),n.e("chunk-051acfb0")]).then(n.bind(null,"dac6"))}}]}],J=new o["a"]({mode:"history",base:"/",routes:H});J.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.auth1}))?"true"===sessionStorage.isAuth?n({path:"/home"}):n():e.matched.some((function(e){return e.meta.auth2}))&&"true"!==sessionStorage.isAuth?n("/"):n()}));t["a"]=J},a318:function(e,t,n){"use strict";n("2eba")},ec84:function(e,t,n){"use strict";n("4118")},f777:function(e,t,n){}});
//# sourceMappingURL=app.890d8357.js.map