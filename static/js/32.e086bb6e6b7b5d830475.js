webpackJsonp([32],{Fsxm:function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"80px",model:t.dataForm,rules:t.dataRule},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-radio-group",{model:{value:t.dataForm.type,callback:function(e){t.$set(t.dataForm,"type",e)},expression:"dataForm.type"}},t._l(t.dataForm.typeList,function(e,r){return a("el-radio",{key:r,attrs:{label:r}},[t._v(t._s(e))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.dataForm.typeList[t.dataForm.type]+"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:t.dataForm.typeList[t.dataForm.type]+"名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:t.menuList,props:t.menuListTreeProps,"node-key":"id",accordion:"","default-expand-all":!1,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":t.handleMenuListTreeCurrentChange}})],1),t._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:t.dataForm.parentName,callback:function(e){t.$set(t.dataForm,"parentName",e)},expression:"dataForm.parentName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"菜单路由",prop:"link"}},[a("el-input",{attrs:{placeholder:"菜单路由"},model:{value:t.dataForm.link,callback:function(e){t.$set(t.dataForm,"link",e)},expression:"dataForm.link"}})],1),t._v(" "),0!==t.dataForm.type?a("el-form-item",{attrs:{label:"授权标识",prop:"perms"}},[a("el-input",{attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create"},model:{value:t.dataForm.perms,callback:function(e){t.$set(t.dataForm,"perms",e)},expression:"dataForm.perms"}})],1):t._e(),t._v(" "),2!==t.dataForm.type?a("el-form-item",{attrs:{label:"排序号",prop:"position"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序号"},model:{value:t.dataForm.position,callback:function(e){t.$set(t.dataForm,"position",e)},expression:"dataForm.position"}})],1):t._e(),t._v(" "),2!==t.dataForm.type?a("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-popover",{ref:"iconListPopover",attrs:{placement:"bottom-start",trigger:"click","popper-class":"menu__icon-popover"}},[a("div",{staticClass:"menu__icon-list"},t._l(t.iconList,function(e,r){return a("el-button",{key:r,class:{"is-active":e===t.dataForm.icon},on:{click:function(a){t.handleIconActive(e)}}},[a("icon-svg",{attrs:{"icon-class":e}})],1)}))]),t._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:iconListPopover",arg:"iconListPopover"}],staticClass:"icon-list__input",attrs:{readonly:!0,placeholder:"菜单图标名称"},model:{value:t.dataForm.icon,callback:function(e){t.$set(t.dataForm,"icon",e)},expression:"dataForm.icon"}})],1),t._v(" "),a("el-col",{staticClass:"icon-list__tips",attrs:{span:2}},[a("el-tooltip",{attrs:{placement:"top",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("全站推荐使用SVG Sprite, 详细请参考:"),a("a",{attrs:{href:"//github.com/daxiongYang/renren-fast-vue/blob/master/src/icons/index.js",target:"_blank"}},[t._v("icons/index.js")]),t._v("描述")]),t._v(" "),a("i",{staticClass:"el-icon-warning"})])],1)],1)],1):t._e(),t._v(" "),2!==t.dataForm.type?a("el-form-item",{attrs:{label:"菜单状态",prop:"visible"}},[a("el-switch",{model:{value:t.dataForm.visible,callback:function(e){t.$set(t.dataForm,"visible",e)},expression:"dataForm.visible"}}),t._v(" "+t._s(t.dataForm.visible?"显示":"隐藏")+"\n    ")],1):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},i=[]},cFZF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("wX2O"),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);var n=a("Fsxm"),s=a("XyMi");var l=function(t){a("zhau")},d=Object(s.a)(i.a,n.a,n.b,!1,l,null,null);e.default=d.exports},uepl:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".menu__icon-popover{width:50%}.icon-list__input>.el-input__inner,.menu-list__input>.el-input__inner{cursor:pointer}__icon-popover{max-width:3.7rem}__icon-list{max-height:1.8rem;padding:0;margin:-.08rem 0 0 -.08rem}__icon-list>.el-button{padding:.08rem;margin:.08rem 0 0 .08rem}__icon-list>.el-button>span{display:inline-block;vertical-align:middle;width:.18rem;height:.18rem;font-size:.18rem}.icon-list__tips{font-size:.18rem;text-align:center;color:#e6a23c;cursor:pointer}",""])},wX2O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(a("woOf")),i=l(a("Dd8w")),o=a("0xDb"),n=l(a("5oG8")),s=l(a("Q7M0"));function l(t){return t&&t.__esModule?t:{default:t}}var d={add:n.default.addAuth,edit:n.default.updateAuth,list:n.default.getAuth},m={id:void 0,type:0,typeList:["目录","菜单","按钮"],name:"",parentId:0,parentName:"",url:"",perms:"",position:0,icon:"",iconList:[],visible:!0};e.default={data:function(){var t=this;return{visible:!1,roleList:[],dataForm:(0,i.default)({},m),dataRule:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级菜单不能为空",trigger:"change"}],url:[{validator:function(e,a,r){1!==t.dataForm.type||/\S/.test(a)?r():r(new Error("菜单URL不能为空"))},trigger:"blur"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){this.iconList=s.default.getNameList()},methods:{resetDataForm:function(){this.dataForm=(0,i.default)({},m)},init:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),this.dataForm.id=e.id||0,d.list({type:1},function(a){t.menuList=(0,o.treeDataTranslate)(a.data),t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&((0,r.default)(t.dataForm,e),t.dataForm.type=Number(e.type),t.dataForm.visible=Boolean(e.visible),t.menuListTreeSetCurrentNode())})},function(t){})},handleMenuListTreeCurrentChange:function(t,e){this.dataForm.parentId=t.id,this.dataForm.parentName=t.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},handleIconActive:function(t){this.dataForm.icon=t},dataFormSubmit:function(){var t=this;console.log(this.dataForm);var e=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(t.dataForm),a)&&d[e?"add":"edit"]((0,i.default)({},t.dataForm,{visible:Number(t.dataForm.visible)}),function(a){t.visible=!1,t.$notify({title:"成功",message:e?"创建成功":"编辑成功",type:"success",duration:2e3}),t.$emit("refreshDataList")},function(t){})})}}},t.exports=e.default},zhau:function(t,e,a){var r=a("uepl");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("rjj0").default)("fad9b1d2",r,!0,{})}});