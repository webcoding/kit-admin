webpackJsonp([23],{"0Ank":function(e,t,a){var l=a("Geoy");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,a("rjj0").default)("7c62c07a",l,!0,{})},Geoy:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},KLH4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("xAjv"),i=a.n(l);for(var n in l)"default"!==n&&function(e){a.d(t,e,function(){return l[e]})}(n);var s=a("YMhA"),r=a("XyMi");var o=function(e){a("0Ank")},u=Object(r.a)(i.a,s.a,s.b,!1,o,"data-v-608fdfc2",null);t.default=u.exports},YMhA:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0,model:e.queryForm}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索关键字"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.queryForm.keywords,callback:function(t){e.$set(e.queryForm,"keywords",t)},expression:"queryForm.keywords"}})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("添加")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"姓名",prop:"username"}}),e._v(" "),a("el-table-column",{attrs:{label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("sexFilter")(t.row.gender)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",prop:"mobile"}}),e._v(" "),a("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),e._v(" "),a("el-table-column",{attrs:{label:"学历"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.education))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"职称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.jobTitle))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"部门"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.deptId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"职位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.scope))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"是否领导"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.isLeader))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"养老金是否参保"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.isPension))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"16px"}},[a("el-pagination",{attrs:{background:"","current-page":e.queryForm.page,"page-sizes":[10,20,30,50],"page-size":e.queryForm.size,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{"min-width":"300px","max-width":"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"username"}},[a("el-input",{model:{value:e.temp.username,callback:function(t){e.$set(e.temp,"username",t)},expression:"temp.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"gender"}},[a("el-radio-group",{model:{value:e.temp.gender,callback:function(t){e.$set(e.temp,"gender",t)},expression:"temp.gender"}},[a("el-radio",{attrs:{label:0}},[e._v("未知")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{model:{value:e.temp.mobile,callback:function(t){e.$set(e.temp,"mobile",t)},expression:"temp.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"学历",prop:"education"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.education,callback:function(t){e.$set(e.temp,"education",t)},expression:"temp.education"}},e._l(e.educations,function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"部门",prop:"deptId"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.deptId,callback:function(t){e.$set(e.temp,"deptId",t)},expression:"temp.deptId"}},e._l(e.deptIds,function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"职称",prop:"jobTitle"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.jobTitle,callback:function(t){e.$set(e.temp,"jobTitle",t)},expression:"temp.jobTitle"}},e._l(e.jobTitles,function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("确定")])],1)],1)],1)},i=[]},xAjv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=u(a("BO1k")),i=u(a("woOf")),n=u(a("Dd8w")),s=u(a("5oG8")),r=a("uvFT"),o=u(a("cAgV"));function u(e){return e&&e.__esModule?e:{default:e}}var d={add:s.default.savePersonal,del:s.default.delPersonal,edit:s.default.updatePersonal,search:s.default.getPersonalList},c=[{id:1,value:"高中"},{id:2,value:"职专"},{id:3,value:"本科"},{id:4,value:"硕士"},{id:5,value:"博士"}],p=[{id:1,value:"总部"},{id:2,value:"分部"}],m=[{id:1,value:"高级"},{id:2,value:"中级"}],f={id:void 0,username:"",mobile:"",email:"",gender:0,remark:"",education:"",jobTitle:"",deptId:"",scope:"",isLeader:"",isPension:"",state:""};t.default={name:"sys_org",directives:{waves:o.default},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,queryForm:{page:1,size:20,keywords:""},educations:c,deptIds:p,jobTitles:m,temp:(0,n.default)({},f),dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},rules:{email:[{required:!0,message:"邮箱必须填写",trigger:"blur"}]}}},filters:{sexFilter:function(e){return["未知","男","女"][e]},statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,d.search((0,n.default)({},this.queryForm),function(t){e.listLoading=!1;var a=t.data,l=void 0===a?{}:a;e.list=l.list||[],e.total=l.total},function(e){})},handleFilter:function(){this.queryForm.page=1,this.getList()},handleSizeChange:function(e){this.queryForm.size=e,this.getList()},handleCurrentChange:function(e){this.queryForm.page=e,this.getList()},handleModifyStatus:function(e,t){switch(t){case"delete":this.handleDelete(e)}this.$message({message:"操作成功",type:"success"}),e.status=t},resetTemp:function(){this.temp=(0,n.default)({},f)},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&d.add((0,n.default)({},e.temp),function(t){e.dialogFormVisible=!1,(0,i.default)(e.temp,t.data),e.list.unshift(e.temp),e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})},function(e){})})},handleUpdate:function(e){var t=this;this.temp=(0,r.copy)(e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=(0,r.copy)(e.temp);d.edit((0,n.default)({},a),function(t){var a=!0,i=!1,n=void 0;try{for(var s,r=(0,l.default)(e.list);!(a=(s=r.next()).done);a=!0){var o=s.value;if(o.id===e.temp.id){var u=e.list.indexOf(o);e.list.splice(u,1,e.temp);break}}}catch(e){i=!0,n=e}finally{try{!a&&r.return&&r.return()}finally{if(i)throw n}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})},function(e){})}})},handleDelete:function(e){var t=this;d.del({id:e.id},function(a){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var l=t.list.indexOf(e);t.list.splice(l,1)},function(e){t.$message({message:"删除失败",type:"danger"})})}}},e.exports=t.default}});