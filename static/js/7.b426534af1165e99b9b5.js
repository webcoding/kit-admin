webpackJsonp([7],{MKqi:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,".app-container[data-v-71b78407] .permission-alert{width:3.2rem;margin-top:.3rem;background-color:#f0f9eb;color:#67c23a;padding:.08rem .16rem;border-radius:.04rem;display:block}.app-container[data-v-71b78407] .permission-tag{background-color:#ecf5ff}",""])},To9v:function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return i});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),s("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[s("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n      Only "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see this\n    ")],1),e._v(" "),s("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n      Only "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1),e._v(" "),s("span",{directives:[{name:"permission",rawName:"v-permission",value:[],expression:"[]"}],staticClass:"permission-alert"},[e._v("\n      Both "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and "),s("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see this\n    ")],1)])],1)},i=[]},Ux7v:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(s("je39")),i=n(s("v5cR"));function n(e){return e&&e.__esModule?e:{default:e}}t.default={name:"directivePermission",components:{SwitchRoles:i.default},directives:{permission:a.default},data:function(){return{key:1}},methods:{handleRolesChange:function(){this.key++}}},e.exports=t.default},VaMn:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=s("IcnI"),n=(a=i)&&a.__esModule?a:{default:a};t.default={inserted:function(e,t,s){var a=t.value,i=n.default.getters&&n.default.getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=a;i.some(function(e){return r.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},e.exports=t.default},dy4A:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Ux7v"),i=s.n(a);for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);var r=s("To9v"),o=s("XyMi");var l=function(e){s("fn3G")},d=Object(o.a)(i.a,r.a,r.b,!1,l,"data-v-71b78407",null);t.default=d.exports},fn3G:function(e,t,s){var a=s("MKqi");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s("rjj0").default)("651579c8",a,!0,{})},je39:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=s("VaMn"),n=(a=i)&&a.__esModule?a:{default:a};var r=function(e){e.directive("permission",n.default)};window.Vue&&(window.permission=n.default,Vue.use(r)),n.default.install=r,t.default=n.default,e.exports=t.default}});