webpackJsonp([10],{"/OdN":function(e,t,i){var a=i("Uyjr");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i("rjj0").default)("50dbe808",a,!0,{})},OS94:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("tN50"),r=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);var l=i("Sfdk"),n=i("XyMi");var s=function(e){i("/OdN")},p=Object(n.a)(r.a,l.a,l.b,!1,s,null,null);t.default=p.exports},Sfdk:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px"}},[i("el-form-item",[i("p",[e._v("以下功能支持自动生成 "),i("b",[e._v("场景A")]),e._v(" -> "),i("b",[e._v("场景B")]),e._v(" 的跳转链接")])]),e._v(" "),i("el-form-item",{attrs:{label:"在哪配置"}},[i("el-radio-group",{model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}},[i("el-radio",{attrs:{label:"life"}},[e._v("生活号/H5页面")]),e._v(" "),i("el-radio",{attrs:{label:"couple"}},[e._v("拼团小程序")]),e._v(" "),i("el-radio",{attrs:{label:"point"}},[e._v("积分小程序")]),e._v(" "),i("el-radio",{attrs:{label:"message"}},[e._v("短信")]),e._v(" "),i("el-radio",{attrs:{label:"tplmsg"}},[e._v("模板消息")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"选择页面"}},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"如需要参数，请输入参数 如 id=xxx topic_code=xxx"},model:{value:e.form.params,callback:function(t){e.$set(e.form,"params",t)},expression:"form.params"}},[i("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.form.page,callback:function(t){e.$set(e.form,"page",t)},expression:"form.page"}},[i("el-option",{attrs:{label:"首页 index",value:"index"}}),e._v(" "),i("el-option",{attrs:{label:"详情 detail",value:"detail"}}),e._v(" "),i("el-option",{attrs:{label:"专题 zt2",value:"zt2"}}),e._v(" "),i("el-option",{attrs:{label:"个人中心 profile",value:"profile"}}),e._v(" "),i("el-option",{attrs:{label:"订单列表 order-list",value:"order-list"}}),e._v(" "),i("el-option",{attrs:{label:"订单详情 order-detail",value:"order-detail"}}),e._v(" "),i("el-option",{attrs:{label:"邀请拼团 couple-share",value:"couple-share"}})],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"跳转到哪里"}},[i("el-radio-group",{model:{value:e.form.dist,callback:function(t){e.$set(e.form,"dist",t)},expression:"form.dist"}},[i("el-radio",{attrs:{label:"life"}},[e._v("生活号")]),e._v(" "),i("el-radio",{attrs:{label:"couple"}},[e._v("拼团小程序")]),e._v(" "),i("el-radio",{attrs:{label:"point"}},[e._v("积分小程序")]),e._v(" "),i("el-radio",{attrs:{label:"othermini"}},[e._v("其他小程序")])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"othermini"===e.form.dist,expression:"form.dist === 'othermini'"}]},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"其他小程序链接 如 ${page}?appid=${appId}&xx=xxx"},model:{value:e.form.othermini,callback:function(t){e.$set(e.form,"othermini",t)},expression:"form.othermini"}}),e._v(" "),i("div",{staticClass:"content-example"},e._l(e.otherMinis,function(t,a){return i("p",{key:a},[e._v("\n            "+e._s(a)+": "+e._s(t)+"\n          ")])}))],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"是否需要渠道"}},[i("el-radio-group",{model:{value:e.form.channel,callback:function(t){e.$set(e.form,"channel",t)},expression:"form.channel"}},[i("el-radio",{attrs:{label:""}},[e._v("无渠道")]),e._v(" "),i("el-radio",{attrs:{label:"point"}},[e._v("积分小程序")]),e._v(" "),i("el-radio",{attrs:{label:"alipay_ant"}},[e._v("蚂蚁会员")]),e._v(" "),i("el-radio",{attrs:{label:"huabei"}},[e._v("花呗")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"生成结果"}},[i("div",{staticClass:"output"},[i("div",{staticClass:"output-item"},[e._v(e._s(e.output))]),e._v(" "),i("div",{staticClass:"output-item"},[e._v(e._s(e.tip))])])]),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.createShortUrl,expression:"form.createShortUrl"}]},[i("a",{attrs:{href:"http://dwz.wailian.work/",target:"_blank"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("生成短链接")])],1)]),e._v(" "),i("el-form-item",{attrs:{label:""}},[i("div",{staticClass:"output"},[i("div",{staticClass:"output-item"},[e._v(e._s(e.form.shortUrl))])])])],1)],1)},r=[]},Uyjr:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,".line{text-align:center}.output{max-width:6rem;padding-top:.1rem;line-height:1.5;word-break:break-all}.output .output-item{margin-bottom:.16rem}.output .output-item:empty{display:none}.input-with-select .el-input__inner{min-width:2.4rem}.content-example{line-height:1.5}",""])},tN50:function(e,t,i){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof e)return e;var t=e,i=[];for(var a in e)t[a]?i.push(a+"="+t[a]):delete t[a];return i.join("&")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return e?["life","message"].indexOf(t)>-1&&"index"===e?"":"pages/"+e+"/"+e:""},o={point:0x72b6826893e74,couple:0x72a8d7c3c399a},l=function(e){return"alipays://platformapi/startApp?appId="+o[e]},n={"in最美证件照":"pages/index?appid=2018013102119843&chanel=Haoshiqi","in照片打印定制":"pages/index/index?appid=2017111409929370&_s=haoshiqi"};t.default={data:function(){return{otherMinis:n,form:{createShortUrl:!1,source:"life",page:"index",params:"",dist:"couple",othermini:n[0],miniapp:!1,channel:"",tip:"",result:"",shortUrl:""}}},computed:{output:function(){var e=this.computedUrl();return this.resultUrl=e,e}},methods:{computedUrl:function(){this.tip="";var e=this.form,t=e.source,i=void 0===t?"":t,n=e.dist,s=void 0===n?"":n,p=e.params,u=void 0===p?"":p,m=e.page,c=void 0===m?"index":m,d=e.channel,f=void 0===d?"":d,v=e.spm,h=void 0===v?"":v;this.form.createShortUrl="message"===i,u&&(u="?"+u);var _=a({spm:h,channel_id:f}),b=a({query:encodeURIComponent(_),page:""+r(c,i)+encodeURIComponent(u)});switch(i){case"tplmsg":if("life"===s)return this.tip="暂未支持！！！","";if(["couple","point"].indexOf(s)>-1)return this.tip="模板消息，跳转到对应小程序，支持配置渠道",u=u?""+u+_:_?"?"+_:""+_,""+r(c)+u;break;case"couple":case"point":if("life"===s)return this.tip="小程序不支持向外跳转！！！","";if(s===i)return this.tip="这是小程序内跳转，直接使用以前的H5链接即可，注意：此时暂不支持渠道",this.form.channel="","";if(this.tip="这是小程序间跳转","point"===s?f=f?"&channel_id="+f:"":(this.tip+="，跳转拼团小程序不支持渠道",f=""),"othermini"===s)return this.tip+="，跳转其他小程序，请设置跳转页面以及appid，请参考示例",f="",b=function(e){return"miniapp://"+e}(this.form.othermini);var x=this.form.params;x&&(x="&"+x),b=""+function(e){var t=e.page,i=e.appid,a=e.appname,r=i?"appid="+i:"appname="+a;return a&&o[a]&&(r="appname="+a),"miniapp://pages/"+t+"/"+t+"?"+r}({page:c,appname:s,appid:o[s]})+f+x;break;case"message":if(this.tip="短信内限制必须使用http协议","life"===s)return this.tip="这个？O__O … 你自己有的吧","";b&&(b="&"+b),b=""+function(e){return"https://ds.alipay.com/?from=mobilecodec&scheme="+encodeURIComponent(e)}(""+l(s)+b);break;case"life":if("life"===s)return this.tip="你本就可以随意配置","";b&&(b="&"+b),b=""+l(s)+b}return b},onSubmit:function(){"message"===this.form.source?console.log(111):this.$message({message:"暂时只支持短信配置生成短链接",type:"warning"})},onCancel:function(){this.$message({message:"reset!",type:"warning"})}}},e.exports=t.default}});