(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5330597f"],{1681:function(t,a,e){},"4bd4":function(t,a,e){"use strict";var i=e("5530"),n=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("159b"),e("7db0"),e("58df")),r=e("7e2b"),o=e("3206");a["a"]=Object(n["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85");var i=e("e8f2"),n=e("d9f7");a["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,i=a.props,r=a.data,o=a.children,s=r.attrs;return s&&(r.attrs={},e=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),o)}})},bb77:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-sheet",{staticClass:"overflow-y-auto overflow-x-hidden scrollbarNone",attrs:{tile:"","max-height":"800px","shrink-on-scroll":""}},[e("v-container",[e("v-row",{staticClass:"ma-auto",attrs:{dense:""}},[e("v-icon",{attrs:{large:""},on:{click:t.backHistory}},[t._v("mdi-chevron-left")]),e("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[e("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("div",{staticClass:"my-1 text-body-2"},[t._v("標題")]),e("v-text-field",{staticClass:"input-group--focused",attrs:{rules:[t.rules.required],type:"text",label:"請輸入標題",outlined:"",required:""},model:{value:t.data.title,callback:function(a){t.$set(t.data,"title",a)},expression:"data.title"}}),e("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"說明您遇到的問題。"},model:{value:t.data.content,callback:function(a){t.$set(t.data,"content",a)},expression:"data.content"}}),e("v-btn",{staticClass:"my-4",attrs:{rounded:"",block:"",color:"primary",disabled:!t.valid},on:{click:t.submitQuestion}},[t._v(" 送出 ")])],1)],1),e("v-col",{attrs:{cols:"12"}},[e("div",{staticStyle:{height:"100px"}})])],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5 d-flex justify-center"},[t._v(" "+t._s(t.dialogText)+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.dialog=!1}}},[t._v(" 確定 ")])],1)],1)],1)],1)},n=[],r=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("365c")),o={data:function(){return{dialog:!1,dialogText:"",valid:!0,data:{title:"",content:""},rules:{required:function(t){return!!t||"* 必須輸入。"}},timer:null}},methods:{backHistory:function(){this.$router.go(-1)},submitQuestion:function(){var t=this;if(this.$refs.form.validate()){var a=this.$Cookies.get("Token"),e=new URLSearchParams;e.append("subject",this.data.title),e.append("body",this.data.content),Object(r["e"])(e,a).then((function(a){200===a.status&&"SUCCESS"===a.data.status_code&&(t.data.title="",t.data.content="",t.dialogText="已將問題發送給客服中心",t.dialog=!0,t.timer=setTimeout((function(){t.$router.go(-1)}),3e3))})).catch((function(t){console.log(t)}))}},destroyed:function(){clearTimeout(this.timer)}}},s=o,u=e("2877"),c=e("6544"),l=e.n(c),d=e("8336"),f=e("b0af"),h=e("99d9"),p=e("62ad"),v=e("a523"),m=e("169a"),g=e("4bd4"),b=e("132d"),w=e("0fd9"),y=e("8dd9"),x=e("2fa4"),V=e("8654"),k=e("5530"),C=(e("a9e3"),e("1681"),e("58df")),_=Object(C["a"])(V["a"]),$=_.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(k["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},V["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=V["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){V["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),B=Object(u["a"])(s,i,n,!1,null,null,null);a["default"]=B.exports;l()(B,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardTitle:h["d"],VCol:p["a"],VContainer:v["a"],VDialog:m["a"],VForm:g["a"],VIcon:b["a"],VRow:w["a"],VSheet:y["a"],VSpacer:x["a"],VTextField:V["a"],VTextarea:$})},e8f2:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("498a"),e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("a15b");var i=e("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var i=e.props,n=e.data,r=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));s.length&&(n.staticClass+=" ".concat(s.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),a(i.tag,n,r)}})}}}]);
//# sourceMappingURL=chunk-5330597f.70cf9b9c.js.map