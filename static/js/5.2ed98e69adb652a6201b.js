webpackJsonp([5,37],{"2Oqf":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{model:e.dataForm,inline:!0}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"搜索关键字",width:"200",clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.dataForm.keywords,callback:function(t){e.$set(e.dataForm,"keywords",t)},expression:"dataForm.keywords"}})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:function(t){e.handleAddOrUpdate()}}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],key:e.tableKey,attrs:{data:e.dataList,"element-loading-text":"给我一点时间",border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"80",label:"ID"}}),e._v(" "),a("table-tree-column",{attrs:{prop:"name","header-align":"center",treeKey:"id",width:"180",label:"部门名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","header-align":"center",width:"200",label:"部门地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"url","header-align":"center",width:"200",label:"部门网址"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",width:"200",label:"部门职责"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.scope)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:"部门负责人"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.leader)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"position","header-align":"center",align:"center",width:"80",label:"排序"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleAddOrUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},r=[]},"2vMZ":function(e,t,a){var n=a("QHK3");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("rjj0").default)("736d94fa",n,!0,{})},"7OsU":function(e,t,a){var n=a("Uib1");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("rjj0").default)("3a8aa140",n,!0,{})},FxVX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Array.isArray;t.default={name:"table-tree-column",props:{prop:{type:String},treeKey:{type:String,default:"id"},parentKey:{type:String,default:"parentId"},levelKey:{type:String,default:"_level"},childKey:{type:String,default:"children"}},methods:{childStyles:function(e){return{"padding-left":(e[this.levelKey]>1?8*e[this.levelKey]:0)+"px"}},iconClasses:function(e){return[e._expanded?"el-icon-caret-bottom":"el-icon-caret-right"]},iconStyles:function(e){return{visibility:this.hasChild(e)?"visible":"hidden"}},hasChild:function(e){return n(e[this.childKey])&&e[this.childKey].length>=1||!1},toggleHandle:function(e,t){var a=this;if(this.hasChild(t)){var n=this.$parent.store.states.data.slice(0);n[e]._expanded=!n[e]._expanded,n=n[e]._expanded?n.splice(0,e+1).concat(t[this.childKey]).concat(n):this.removeChildNode(n,t[this.treeKey]),this.$parent.store.commit("setData",n),this.$nextTick(function(){a.$parent.doLayout()})}},removeChildNode:function(e,t){var a=n(t)?t:[t];if(t.length<=0)return e;for(var r=[],i=0;i<e.length;i++)-1!==a.indexOf(e[i][this.parentKey])&&-1===a.indexOf(e[i][this.treeKey])&&(r.push(e.splice(i,1)[0][this.treeKey]),i--);return this.removeChildNode(e,r)}}},e.exports=t.default},QHK3:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},R1Gs:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table-column",e._b({attrs:{prop:e.prop},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:e.childStyles(t.row),on:{click:function(a){a.preventDefault(),e.toggleHandle(t.$index,t.row)}}},[a("i",{class:e.iconClasses(t.row),style:e.iconStyles(t.row)}),e._v("\n      "+e._s(t.row[e.prop])+"\n    ")])]}}])},"el-table-column",e.$attrs,!1))},r=[]},Uib1:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".menu__icon-popover{width:50%}.icon-list__input>.el-input__inner,.menu-list__input>.el-input__inner{cursor:pointer}__icon-popover{max-width:3.7rem}__icon-list{max-height:1.8rem;padding:0;margin:-.08rem 0 0 -.08rem}__icon-list>.el-button{padding:.08rem;margin:.08rem 0 0 .08rem}__icon-list>.el-button>span{display:inline-block;vertical-align:middle;width:.18rem;height:.18rem;font-size:.18rem}.icon-list__tips{font-size:.18rem;text-align:center;color:#e6a23c;cursor:pointer}",""])},ZNy4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FxVX"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var l=a("R1Gs"),o=a("XyMi"),s=Object(o.a)(r.a,l.a,l.b,!1,null,null,null);t.default=s.exports},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var n,r=a("C4MV"),i=(n=r)&&n.__esModule?n:{default:n};t.default=function(e,t,a){return t in e?(0,i.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},dPnL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("t6ab"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var l=a("rhsR"),o=a("XyMi");var s=function(e){a("7OsU")},d=Object(o.a)(r.a,l.a,l.b,!1,s,null,null);t.default=d.exports},k40x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=c(a("Dd8w")),i=c(a("bOdI")),l=c(a("5oG8")),o=c(a("cAgV")),s=a("0xDb"),d=c(a("ZNy4")),u=c(a("dPnL"));function c(e){return e&&e.__esModule?e:{default:e}}var f={add:l.default.addDept,del:l.default.delDept,edit:l.default.updateDept,list:l.default.getDept};t.default={name:"org_dept",components:(n={},(0,i.default)(n,d.default.name,d.default),(0,i.default)(n,"AddOrUpdate",u.default),n),directives:{waves:o.default},data:function(){return{dataForm:{keywords:""},tableKey:0,dataList:[],dataListLoading:!0,dataListSelections:[],addOrUpdateVisible:!1}},filters:{},created:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,f.list((0,r.default)({},this.dataForm),function(t){e.dataListLoading=!1,e.dataList=(0,s.treeDataTranslate)(t.data)},function(e){})},handleFilter:function(){this.getDataList()},handleSizeChange:function(e){this.getDataList()},handleCurrentChange:function(e){this.getDataList()},handleSelectionChange:function(e){this.dataListSelections=e},handleAddOrUpdate:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},handleDelete:function(e){var t=this,a=e?[e]:[];f.del({ids:a},function(e){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),t.getDataList()},function(e){t.$message({message:"删除失败",type:"danger"})})}}},e.exports=t.default},nEnZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("k40x"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var l=a("2Oqf"),o=a("XyMi");var s=function(e){a("2vMZ")},d=Object(o.a)(r.a,l.a,l.b,!1,s,"data-v-20879e6e",null);t.default=d.exports},rhsR:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{"label-width":"100px",model:e.dataForm,rules:e.dataRule},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"上级部门",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"id",accordion:"","default-expand-all":!1,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.handleMenuListTreeCurrentChange}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"部门名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"部门地址"},model:{value:e.dataForm.address,callback:function(t){e.$set(e.dataForm,"address",t)},expression:"dataForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门网址",prop:"url"}},[a("el-input",{attrs:{placeholder:"部门网址"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门职责",prop:"scope"}},[a("el-input",{attrs:{placeholder:"部门职责"},model:{value:e.dataForm.scope,callback:function(t){e.$set(e.dataForm,"scope",t)},expression:"dataForm.scope"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门负责人",prop:"leader"}},[a("el-input",{attrs:{placeholder:"部门负责人"},model:{value:e.dataForm.leader,callback:function(t){e.$set(e.dataForm,"leader",t)},expression:"dataForm.leader"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"position"}},[a("el-input-number",{attrs:{"controls-position":"right",min:0,label:"排序"},model:{value:e.dataForm.position,callback:function(t){e.$set(e.dataForm,"position",t)},expression:"dataForm.position"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},r=[]},t6ab:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a("woOf")),r=o(a("Dd8w")),i=a("0xDb"),l=o(a("5oG8"));function o(e){return e&&e.__esModule?e:{default:e}}var s={add:l.default.addDept,edit:l.default.updateDept,list:l.default.getDept},d={id:void 0,name:"",parentId:0,parentName:"",address:"",url:"",leader:"0",scope:"",position:0};t.default={data:function(){return{visible:!1,roleList:[],dataForm:(0,r.default)({},d),dataRule:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级部门不能为空",trigger:"change"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){},methods:{resetDataForm:function(){this.dataForm=(0,r.default)({},d)},init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),this.dataForm.id=t.id||0,s.list({type:1},function(a){e.menuList=(0,i.treeDataTranslate)(a.data),e.visible=!0,e.$nextTick(function(){e.$refs.dataForm.resetFields(),(0,n.default)(e.dataForm,t),e.dataForm.id,e.menuListTreeSetCurrentNode()})},function(e){})},handleMenuListTreeCurrentChange:function(e,t){this.dataForm.parentId=e.id,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{}).name},dataFormSubmit:function(){var e=this;console.log(this.dataForm);var t=!this.dataForm.id;this.$refs.dataForm.validate(function(a){(console.log(e.dataForm),a)&&s[t?"add":"edit"]((0,r.default)({},e.dataForm),function(a){e.visible=!1,e.$notify({title:"成功",message:t?"创建成功":"编辑成功",type:"success",duration:2e3}),e.$emit("refreshDataList")},function(e){})})}}},e.exports=t.default}});