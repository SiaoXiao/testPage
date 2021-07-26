(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72bb4bb8"],{1954:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-form",{ref:"form"},[i("v-text-field",{staticClass:"input-group--focused",attrs:{label:"輸入您的帳號",type:"text",rules:[t.rules.required,t.rules.min],counter:t.textLength,outlined:"",clearable:""},model:{value:t.data.accountId,callback:function(e){t.$set(t.data,"accountId",e)},expression:"data.accountId"}}),i("v-text-field",{staticClass:"input-group--focused",attrs:{rules:[t.rules.required,t.rules.counter,t.rules.password],type:t.showPWD?"text":"password",counter:t.textLength,label:"輸入您的密碼",outlined:"",clearable:""},on:{"click:append":function(e){t.showPWD=!t.showPWD}},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}}),i("div",{staticClass:"loginToolBox"},[i("v-checkbox",{attrs:{label:"顯示密碼"},model:{value:t.showPWD,callback:function(e){t.showPWD=e},expression:"showPWD"}}),i("label",{on:{click:t.goToForgetPWD}},[t._v(t._s(t.items.text))])],1),i("div",{staticClass:"text-center"},[i("div",{staticClass:"my-4"},[i("v-btn",{attrs:{rounded:"",block:"",color:"primary",dark:""},on:{click:t.login}},[t._v(" 登入 ")])],1),i("div",{staticClass:"my-4"},[i("v-btn",{attrs:{rounded:"",block:"",color:"green accent-4",dark:""},on:{click:t.lineLogin}},[t._v(" 使用 LINE 登入 ")])],1)]),i("div",{staticClass:"registerBox"},[i("p",[t._v("還沒有帳號？"),i("label",{on:{click:t.goToRegister}},[t._v(t._s(t.items.registerText))])])]),i("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[t._v(" "+t._s(t.errorText)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v(" 確定 ")])],1)],1)],1)],1)},a=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("b0c0"),i("365c")),o={data:function(){var t=this;return{dialog:!1,card:{cardTitle:"品牌顧問登入"},textLength:10,showPWD:!1,data:{accountId:"",password:""},rules:{required:function(t){return!!t||"請輸入文字。"},min:function(e){return e&&e.length<=t.textLength||"最多10碼"},counter:function(t){return t&&t.length>=6&&t.length<=10||"密碼必須為6-10位英文+數字。"},password:function(t){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;return e.test(t)||"請填寫正確格式的密碼。"}},items:{text:"忘記密碼？",registerText:"立即申請"},errorText:"",switchopen:!1,tableData:{},token:""}},created:function(){this.init()},methods:{goToForgetPWD:function(){this.$router.push({name:"ForgetPWD"})},goToRegister:function(){this.$router.push({name:"Register"})},init:function(){this.urlCheck()},lineLogin:function(){var t=this;Object(s["B"])().then((function(e){200===e.status&&"SUCCESS"===e.data.status_code&&(t.$store.dispatch("setLineUrl",e.data.url),window.location.href=t.$store.getters.lineUrl)})).catch((function(t){console.log(t)}))},login:function(){var t=this;this.switchopen=!1;var e=new URLSearchParams;e.append("id",this.data.accountId),e.append("password",this.data.password),Object(s["D"])(e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code?(t.switchopen=!0,t.data.accountId="",t.data.password="",t.$Cookies.set("Token",e.data.auth_token),sessionStorage.setItem("refreshToken",e.data.refresh_token)):"T013"===e.data.status_code?(t.dialog=!0,t.errorText="登入資訊錯誤"):"T014"===e.data.status_code&&(t.dialog=!0,t.errorText="帳號凍結")})).then((function(){t.switchopen&&t.consultantInfo()})).catch((function(t){console.log(t)}))},consultantInfo:function(){var t=this;this.switchopen=!1,this.token=this.$Cookies.get("Token"),Object(s["j"])(this.token).then((function(t){200===t.status&&"SUCCESS"===t.data.status_code&&(sessionStorage.setItem("name",t.data.datas.name),sessionStorage.setItem("id",t.data.datas.id),sessionStorage.setItem("pic",t.data.datas.pic),sessionStorage.setItem("data",JSON.stringify(t.data)))})).then((function(){t.$router.push({path:"/home"})})).catch((function(t){console.log(t)}))},urlCheck:function(){var t=this;if(console.log(1),void 0!==this.$route.query.error)this.dialog=!0,this.errorText=this.$route.query.error_info;else if(void 0!==this.$route.query.code&&void 0!==this.$route.query.state){this.$store.dispatch("setLineLoginCode",this.$route.query.code),this.$store.dispatch("setLineLoginState",this.$route.query.state);var e=new URLSearchParams;e.append("state",this.$store.getters.lineLoginCode),e.append("code",this.$store.getters.lineLoginState),Object(s["z"])(e).then((function(e){200===e.status&&"SUCCESS"===e.data.status_code?(t.switchopen=!0,t.$store.dispatch("setLineLoginCode",""),t.$store.dispatch("setLineLoginState",""),t.$Cookies.set("Token",e.data.auth_token)):"未綁定line"===e.data.status_code&&(t.dialog=!0,t.errorText="未綁定 Line")})).then((function(){t.switchopen&&t.consultantInfo()})).catch((function(t){console.log(t)}))}}}},r=o,u=(i("6e1a"),i("2877")),c=i("6544"),l=i.n(c),d=i("8336"),h=i("b0af"),p=i("99d9"),f=i("ac7c"),v=i("169a"),m=i("4bd4"),g=i("2fa4"),b=i("8654"),k=Object(u["a"])(r,n,a,!1,null,"d37f18c8",null);e["default"]=k.exports;l()(k,{VBtn:d["a"],VCard:h["a"],VCardActions:p["a"],VCardTitle:p["d"],VCheckbox:f["a"],VDialog:v["a"],VForm:m["a"],VSpacer:g["a"],VTextField:b["a"]})},"2b7c":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var n=i("5530"),a=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),s=i("7e2b"),o=i("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,i){},"6e1a":function(t,e,i){"use strict";i("2b7c")},8547:function(t,e,i){"use strict";var n=i("2b0e"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["i"]}}})},ac7c:function(t,e,i){"use strict";var n=i("15fd"),a=i("5530"),s=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),o=i("c37a"),r=i("fe09"),u=["title"];e["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,u));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("d3b7"),i("25f0"),i("4de4");var n=i("c37a"),a=i("5311"),s=i("8547"),o=i("58df");function r(t){t.preventDefault()}e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-72bb4bb8.76a9f198.js.map