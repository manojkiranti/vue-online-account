(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1015250"],{1331:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"18f6":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"step-form"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body p-0"},[e._m(0),i("div",{staticClass:"step-form-content-inner"},[i("form",{staticClass:"needs-validation"},[i("div",{staticClass:"row"},[e._m(1),i("div",{staticClass:"col-md-12"},[i("b-form-group",{attrs:{label:"Employment type"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return[i("b-form-radio-group",{class:{"is-invalid":e.submitted&&e.$v.details.employment_id.$error},attrs:{id:"employment_id","value-field":"id","text-field":"title",options:e.preRequest.employmentTypes,"aria-describedby":n,name:"employment_id"},model:{value:e.details.employment_id,callback:function(t){e.$set(e.details,"employment_id",t)},expression:"details.employment_id"}}),e.submitted&&e.$v.details.employment_id.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.employment_id.required?e._e():i("span",[e._v("This field is required.")])]):e._e()]}}])})],1),"1"==e.details.employment_id||"3"==e.details.employment_id||"4"==e.details.employment_id?[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required",attrs:{for:"officeName"}},[e._v("Organization Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.details.organization_name,expression:"details.organization_name"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.organization_name.$error},attrs:{id:"officeName",type:"text",name:"officeName"},domProps:{value:e.details.organization_name},on:{input:function(t){t.target.composing||e.$set(e.details,"organization_name",t.target.value)}}}),e.submitted&&e.$v.details.organization_name.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.organization_name.required?e._e():i("span",[e._v("This field is required.")])]):e._e()])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required",attrs:{for:"officeAddress"}},[e._v("Organization Address")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.details.organization_address,expression:"details.organization_address"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.organization_address.$error},attrs:{id:"officeAddress",type:"text",name:"officeAddress"},domProps:{value:e.details.organization_address},on:{input:function(t){t.target.composing||e.$set(e.details,"organization_address",t.target.value)}}}),e.submitted&&e.$v.details.organization_address.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.organization_address.required?e._e():i("span",[e._v("This field is required.")])]):e._e()])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required",attrs:{for:"designation"}},[e._v("Designation")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.details.designation,expression:"details.designation"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.designation.$error},attrs:{id:"designation",type:"text",name:"designation"},domProps:{value:e.details.designation},on:{input:function(t){t.target.composing||e.$set(e.details,"designation",t.target.value)}}}),e.submitted&&e.$v.details.designation.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.designation.required?e._e():i("span",[e._v("This field is required.")])]):e._e()])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required",attrs:{for:"contact_no"}},[e._v("Contact Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.details.organization_contact_no,expression:"details.organization_contact_no"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.organization_contact_no.$error},attrs:{id:"contact_no",type:"text",name:"contact_no"},domProps:{value:e.details.organization_contact_no},on:{input:function(t){t.target.composing||e.$set(e.details,"organization_contact_no",t.target.value)}}}),e.submitted&&e.$v.details.organization_contact_no.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.organization_contact_no.required?e._e():i("span",[e._v("This field is required.")])]):e._e()])])]:e._e()],2),i("div",{staticClass:"row"},[e._m(2),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Purpose of account")]),i("b-form-select",{staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.purpose_of_account.$error},attrs:{options:e.preRequest.purposeOfAccount,"value-field":"id","text-field":"title"},model:{value:e.details.purpose_of_account,callback:function(t){e.$set(e.details,"purpose_of_account",t)},expression:"details.purpose_of_account"}}),e.submitted&&e.$v.details.purpose_of_account.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.purpose_of_account.required?e._e():i("span",[e._v("This field is required.")])]):e._e()],1)]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Source of fund")]),i("b-form-select",{staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.source_of_fund.$error},attrs:{options:e.preRequest.fundSource,"value-field":"id","text-field":"title"},model:{value:e.details.source_of_fund,callback:function(t){e.$set(e.details,"source_of_fund",t)},expression:"details.source_of_fund"}}),e.submitted&&e.$v.details.source_of_fund.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.source_of_fund.required?e._e():i("span",[e._v("This field is required.")])]):e._e()],1)]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",[e._v("Expected Annual Transaction")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.details.expected_annual_income,expression:"details.expected_annual_income"}],staticClass:"form-control",attrs:{id:"expected_annual_income",type:"text",name:"expected_annual_income"},domProps:{value:e.details.expected_annual_income},on:{input:function(t){t.target.composing||e.$set(e.details,"expected_annual_income",t.target.value)}}}),e.submitted&&e.$v.details.expected_annual_income.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.expected_annual_income.required?e._e():i("span",[e._v("This field is required.")])]):e._e()])]),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{label:"Are You Convicted For Any Crime?"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return[i("b-form-radio-group",{class:{"is-invalid":e.submitted&&e.$v.details.has_criminal_offense.$error},attrs:{id:"has_criminal_offense",options:e.preRequest.crimeTypes,"aria-describedby":n,name:"has_criminal_offense"},model:{value:e.details.has_criminal_offense,callback:function(t){e.$set(e.details,"has_criminal_offense",t)},expression:"details.has_criminal_offense"}}),e.submitted&&e.$v.details.has_criminal_offense.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.has_criminal_offense.required?e._e():i("span",[e._v("This field is required.")])]):e._e()]}}])})],1)]),i("div",{staticClass:"row"},[e._m(3),i("div",{staticClass:"col-md-12"},[i("b-form-group",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.ariaDescribedby;return[i("b-form-checkbox-group",{class:{"is-invalid":e.submitted&&e.$v.details.account_services.$error},attrs:{id:"checkbox-group-1",options:e.preRequest.account_services,"aria-describedby":n,name:"flavour-1"},model:{value:e.details.account_services,callback:function(t){e.$set(e.details,"account_services",t)},expression:"details.account_services"}}),e.submitted&&e.$v.details.account_services.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.account_services.required?e._e():i("span",[e._v("This field is required.")])]):e._e()]}}])})],1)]),i("div",{staticClass:"row"},[e._m(4),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required"},[e._v("Upload your recently taken PP size photo here.")]),i("b-form-file",{class:{"is-invalid":e.submitted&&e.$v.details.pp_photo.$error},attrs:{plain:"",accept:"image/jpeg, image/png"},on:{change:function(t){return e.onFileChange(t,"pp_photo")}}}),i("output",[e.passportUri?i("img",{staticClass:"preview-image",attrs:{src:e.passportUri}}):e._e()]),e.submitted&&e.$v.details.pp_photo.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.pp_photo.required?e._e():i("span",[e._v("This field is required.")])]):e._e()],1)]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required"},[e._v("Upload your document_photo or pp_photo here.")]),i("b-form-file",{class:{"is-invalid":e.submitted&&e.$v.details.document_photo.$error},attrs:{plain:"",accept:"image/jpeg, image/png"},on:{change:function(t){return e.onFileChange(t,"document_photo")}}}),i("output",[e.citizenshipUri?i("img",{staticClass:"preview-image",attrs:{src:e.citizenshipUri}}):e._e()]),e.submitted&&e.$v.details.document_photo.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.document_photo.required?e._e():i("span",[e._v("This field is required.")])]):e._e()],1)]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"required",attrs:{for:"userName"}},[e._v("Preferred Branch")]),i("b-form-select",{staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.details.branch_id.$error},attrs:{options:e.preRequest.branches,"value-field":"id","text-field":"title"},model:{value:e.details.branch_id,callback:function(t){e.$set(e.details,"branch_id",t)},expression:"details.branch_id"}}),e.submitted&&e.$v.details.branch_id.$error?i("div",{staticClass:"invalid-feedback"},[e.$v.details.branch_id.required?e._e():i("span",[e._v("This field is required.")])]):e._e()],1)])])])])])])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"steps-form-title bg-primary"},[i("div",{staticClass:"form-title-text"},[i("h6",{staticClass:"text-white"},[i("i",{staticClass:"mdi mdi-account"}),e._v("Declaration and Activation ")])]),i("div",{staticClass:"form-title-count"},[i("h5",{staticClass:"text-white"},[e._v("Step 3 of 3")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"sub-heading"},[i("h6",[e._v("Employment Details")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"sub-heading"},[i("h6",[e._v("Declaration")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"sub-heading"},[i("h6",[e._v("Account Services")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"sub-heading"},[i("h6",[e._v("Upload Documents")])])])}],r=i("3835"),s=(i("ac1f"),i("466d"),i("4fad"),i("91c8")),o=i.n(s),u=i("8e5c"),c=i("b5ae"),d=i("56d7"),l={mixins:[o.a],name:"StepThree",components:{},data:function(){return{submitted:!1,preRequest:{employmentTypes:[],crimeTypes:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],purposeOfAccount:[],fundSource:[],transactions:[],branches:[],account_services:[{text:"Internet Banking",value:"internet_banking"},{text:"Debit Card",value:"debit_card"},{text:"Mobile Banking",value:"mobile_banking"},{text:"Cheque Book",value:"cheque_book"},{text:"Utility Payment",value:"utility_payment"}]},citizenshipUri:null,passportUri:null,details:{employment_id:"",purpose_of_account:"",source_of_fund:"",expected_annual_income:"",has_criminal_offense:"no",document_photo:null,pp_photo:null,organization_name:"",organization_address:"",designation:"",organization_contact_no:"",account_services:[],branch_id:"",source_of_fund_other:"op",purpose_of_account_other:"op"}}},validations:{details:{employment_id:{required:c["required"]},purpose_of_account:{required:c["required"]},source_of_fund:{required:c["required"]},expected_annual_income:{required:c["required"]},has_criminal_offense:{required:c["required"]},document_photo:{required:c["required"]},pp_photo:{required:c["required"]},organization_name:{required:Object(c["requiredIf"])((function(){return"1"===this.details.employment_id||"3"===this.details.employment_id||"4"===this.details.employment_id}))},organization_address:{required:Object(c["requiredIf"])((function(){return"1"===this.details.employment_id||"3"===this.details.employment_id||"4"===this.details.employment_id}))},designation:{required:Object(c["requiredIf"])((function(){return"1"===this.details.employment_id||"3"===this.details.employment_id||"4"===this.details.employment_id}))},organization_contact_no:{required:Object(c["requiredIf"])((function(){return"1"===this.details.employment_id||"3"===this.details.employment_id||"4"===this.details.employment_id}))},branch_id:{required:c["required"]},account_services:{required:c["required"]}}},created:function(){var e=this;d["bus"].$on("validateFieldstepThree",(function(){console.log("bus"),e.submitted=!0,console.log("this.$v",e.$v),e.$v.$touch(),console.log(!e.$v.$invalid),e.$emit("validateField",{step:"stepThree",value:!e.$v.$invalid,data:e.details})}))},mounted:function(){this.param=this.$route.params.id,this.getPreRequest()},methods:{employmentSelected:function(){},onFileChange:function(e,t){console.log("event",e);var i,n=e.target.files[0];if(this.details[t]=n,"document_photo"==t?i="citizenshipUri":"pp_photo"==t&&(i="passportUri"),!n)return!1;if(!n.type.match("image.*"))return!1;var a=new FileReader,r=this;a.onload=function(e){console.log(e),r[i]=e.target.result},a.readAsDataURL(n)},getPreRequest:function(){var e=this,t=this.response(u["a"].getPreRequestSteps(this.param,"step-3-pre-requisite"));t.then((function(i){if(t.isFulfilled())if(console.log("step-3",i),e.preRequest.employmentTypes=i.employment_types,e.preRequest.purposeOfAccount=i.purposeAccounts,e.preRequest.fundSource=i.incomeSources,e.preRequest.branches=i.branches,"Update"==i.type){for(var n=0,a=Object.entries(i.step3details.acc_occupation_details);n<a.length;n++){var s=Object(r["a"])(a[n],2),o=s[0],u=s[1];e.details.hasOwnProperty(o)&&(e.details[o]=u)}for(var c=0,l=Object.entries(i.step3details.acc_service_details);c<l.length;c++){var f=Object(r["a"])(l[c],2),p=f[0],m=f[1];e.details.hasOwnProperty(p)&&(e.details[p]=m)}0==e.details.has_criminal_offense?e.details.has_criminal_offense="no":e.details.has_criminal_offense="yes",e.details.account_services=i.requestedServices,d["bus"].$emit("getStepData",{pageType:"update",info:i.accountStatus.account_status,guid:""})}else d["bus"].$emit("getStepData",{pageType:"create",info:{},guid:""})})).catch((function(e){console.log(e)}))}}},f=l,p=i("2877"),m=Object(p["a"])(f,n,a,!1,null,null,null);t["default"]=m.exports},"2a12":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,n.withParams)({type:"and"},(function(){for(var e=this,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,i){return t&&i.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"4fad":function(e,t,i){var n=i("23e7"),a=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return a(e)}})},"5d75":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,r=(0,n.regex)("email",a);t.default=r},"5db3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,i){return!(0,n.req)(t)||!e.call(this,t,i)}))};t.default=a},"6f53":function(e,t,i){var n=i("83ab"),a=i("df75"),r=i("fc6a"),s=i("d1e7").f,o=function(e){return function(t){var i,o=r(t),u=a(o),c=u.length,d=0,l=[];while(c>d)i=u[d++],n&&!s.call(o,i)||l.push(e?[i,o[i]]:o[i]);return l}};e.exports={entries:o(!0),values:o(!1)}},"772d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,r=(0,n.regex)("url",a);t.default=r},"78ef":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(i("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===r(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===r(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,i){return"function"===typeof e?e.call(t,i):i[e]};t.ref=u;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=c},8750:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",VUE_APP_APIKEY:"",VUE_APP_APPId:"",VUE_APP_AUTHDOMAIN:"",VUE_APP_BASE_URL_DEV:"https://dev.globalordernow.com/api/",VUE_APP_DATABASEURL:"",VUE_APP_DEFAULT_AUTH:"fack-backend",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"en",VUE_APP_MEASUREMENTID:"",VUE_APP_MESSAGINGSENDERID:"",VUE_APP_PROJECTId:"",VUE_APP_STORAGEBUCKET:"",VUE_APP_URL:"https://nepalicongress.maitreyatech.com/",BASE_URL:"/"}).BUILD?i("cb69").withParams:i("0234").withParams,a=n;t.default=a},"8e5c":function(e,t,i){"use strict";i("d3b7"),i("99af");var n=i("eadc"),a="online-account";t["a"]={getPreRequest:function(e,t){return new Promise((function(i,r){n["a"].get("".concat(a,"/").concat(t),{params:e}).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},getPreRequestSteps:function(e,t){return new Promise((function(i,r){n["a"].get("".concat(a,"/").concat(t,"/").concat(e)).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},stepOnePost:function(e,t){return new Promise((function(i,r){n["a"].post("".concat(a,"/first-step/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},stepOneUpdate:function(e,t){return new Promise((function(i,r){n["a"].patch("".concat(a,"/first-step-update/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},otpPreRequest:function(e){return new Promise((function(t,i){n["a"].get("".concat(a,"/otp-pre-requisite/").concat(e)).then((function(e){t(e.data)})).catch((function(e){i(e.response)}))}))},verifyOtp:function(e,t){return new Promise((function(i,r){n["a"].post("".concat(a,"/otp-verification/").concat(e),t).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},resendOtp:function(e){return new Promise((function(t,i){n["a"].get("".concat(a,"/otp-verification/resend/").concat(e)).then((function(e){t(e.data)})).catch((function(e){i(e.response)}))}))},stepTwoPost:function(e,t){return new Promise((function(i,r){n["a"].post("".concat(a,"/second-step/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},stepTwoUpdate:function(e,t){return new Promise((function(i,r){n["a"].patch("".concat(a,"/second-step-update/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},stepThreePost:function(e,t){return new Promise((function(i,r){n["a"].post("".concat(a,"/third-step/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},stepThreeUpdate:function(e,t){return new Promise((function(i,r){n["a"].patch("".concat(a,"/third-step-update/").concat(t),e).then((function(e){i(e.data)})).catch((function(e){r(e.response)}))}))},finalRequest:function(e){return new Promise((function(t,i){n["a"].get("account/step-final-pre-requisite/".concat(e)).then((function(e){t(e.data)})).catch((function(e){i(e.response)}))}))}}},"91d3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var i="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==i&&(6===i.length||8===i.length)&&i.every(r)}))};t.default=a;var r=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,i){return!(0,n.ref)(e,this,i)||(0,n.req)(t)}))};t.default=a},b5ae:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return q.default}}),t.helpers=void 0;var n=O(i("6235")),a=O(i("3a54")),r=O(i("45b8")),s=O(i("ec11")),o=O(i("5d75")),u=O(i("c99d")),c=O(i("91d3")),d=O(i("2a12")),l=O(i("5db3")),f=O(i("d4f4")),p=O(i("aa82")),m=O(i("e652")),_=O(i("b6cb")),v=O(i("772d")),b=O(i("d294")),h=O(i("3360")),g=O(i("6417")),y=O(i("eb66")),P=O(i("46bc")),$=O(i("1331")),q=O(i("c301")),x=C(i("78ef"));function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,i){return t===(0,n.ref)(e,this,i)}))};t.default=a},c301:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(r)}));t.default=a;var r=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,i){"use strict";(function(e){function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===i(e)&&void 0!==t?t:e((function(){}))},r=n.vuelidate?n.vuelidate.withParams:a;t.withParams=r}).call(this,i("c8ba"))},d294:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,n.withParams)({type:"or"},(function(){for(var e=this,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,i){return t||i.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e652:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,i){return!!(0,n.ref)(e,this,i)||(0,n.req)(t)}))};t.default=a},eadc:function(e,t,i){"use strict";i("d3b7");var n=i("bc3a"),a=i.n(n),r=i("a18c"),s="https://dev.globalordernow.com/api/",o=a.a.create({baseURL:s,timeout:5e4});o.interceptors.response.use((function(e){var t=e;return t}),(function(e){return console.log("err"+e),"403"!=e.response.status&&"401"!=e.response.status||(alert("Token Expired, Please login again"),r["a"].push("/login")),Promise.reject(e)})),t["a"]=o},eb66:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(i){return!(0,n.req)(i)||(!/\s/.test(i)||i instanceof Date)&&+e<=+i&&+t>=+i}))};t.default=a}}]);
//# sourceMappingURL=chunk-b1015250.417a3750.js.map