webpackJsonp([37],{"7OsU":function(e,t,a){var r=a("Uib1");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("3a8aa140",r,!0,{})},"7qqs":function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"100px",model:e.dataForm,rules:e.dataRule},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"上级部门",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"id",accordion:"","default-expand-all":!1,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.handleMenuListTreeCurrentChange}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"部门名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"部门地址"},model:{value:e.dataForm.address,callback:function(t){e.$set(e.dataForm,"address",t)},expression:"dataForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门网址",prop:"url"}},[a("el-input",{attrs:{placeholder:"部门网址"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门职责",prop:"scope"}},[a("el-input",{attrs:{placeholder:"部门职责"},model:{value:e.dataForm.scope,callback:function(t){e.$set(e.dataForm,"scope",t)},expression:"dataForm.scope"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门负责人",prop:"leader"}},[a("el-input",{attrs:{placeholder:"部门负责人"},model:{value:e.dataForm.leader,callback:function(t){e.$set(e.dataForm,"leader",t)},expression:"dataForm.leader"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"position"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序"},model:{value:e.dataForm.position,callback:function(t){e.$set(e.dataForm,"position",t)},expression:"dataForm.position"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},o=[]},Uib1:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".menu__icon-popover{width:50%}.icon-list__input>.el-input__inner,.menu-list__input>.el-input__inner{cursor:pointer}__icon-popover{max-width:3.7rem}__icon-list{max-height:1.8rem;padding:0;margin:-.08rem 0 0 -.08rem}__icon-list>.el-button{padding:.08rem;margin:.08rem 0 0 .08rem}__icon-list>.el-button>span{display:inline-block;vertical-align:middle;width:.18rem;height:.18rem;font-size:.18rem}.icon-list__tips{font-size:.18rem;text-align:center;color:#e6a23c;cursor:pointer}",""])},dPnL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("t6ab"),o=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);var i=a("7qqs"),l=a("XyMi");var s=function(e){a("7OsU")},d=Object(l.a)(o.a,i.a,i.b,!1,s,null,null);t.default=d.exports},t6ab:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a("woOf")),o=l(a("Dd8w")),n=a("0xDb"),i=l(a("5oG8"));function l(e){return e&&e.__esModule?e:{default:e}}var s={add:i.default.addDept,edit:i.default.updateDept,list:i.default.getDept},d={id:void 0,name:"",parentId:0,parentName:"",address:"",url:"",leader:"0",scope:"",position:0};t.default={data:function(){return{visible:!1,roleList:[],dataForm:(0,o.default)({},d),dataRule:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级部门不能为空",trigger:"change"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){},methods:{resetDataForm:function(){this.dataForm=(0,o.default)({},d)},init:function(e){var t=this;this.resetDataForm(),this.dataForm.id=e.id||0,s.list({type:1},function(a){t.menuList=(0,n.treeDataTranslate)(a.data),t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id?((0,r.default)(t.dataForm,e),t.menuListTreeSetCurrentNode()):t.menuListTreeSetCurrentNode()})},function(e){})},handleMenuListTreeCurrentChange:function(e,t){this.dataForm.parentId=e.id,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},dataFormSubmit:function(){var e=this;console.log(this.dataForm);var t=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(e.dataForm),a)&&s[t?"add":"edit"]((0,o.default)({},e.dataForm),function(a){e.visible=!1,e.$notify({title:"成功",message:t?"创建成功":"编辑成功",type:"success",duration:2e3}),e.$emit("refreshDataList")},function(e){})})}}},e.exports=t.default}});