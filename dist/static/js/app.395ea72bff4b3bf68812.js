webpackJsonp([0,2],[,,function(t,e,s){s(39);var n=s(0)(s(57),s(25),null,null);t.exports=n.exports},,function(t,e,s){"use strict";var n=s(54),a=s.n(n),i=s(3),r=s(49),o=s(1),c=s.n(o);i.a.use(r.a);var l={authparams:{app_id:"343535",rtoken:"sldffyy9767",time:1489131067},authmode:"app",country:"意大利",cookie:"940158d239561338e"},u={state:{district:null,winetype:null,grapetype:null,resultListArr:[]},getters:{},mutations:{modifyStateType:function(t,e){t[e.catalogName]==e.tId?t[e.catalogName]=null:t[e.catalogName]=e.tId},resetStateType:function(t){t.district=null,t.winetype=null,t.grapetype=null},cleanStateList:function(t){t.resultListArr.length&&(t.resultListArr=[])},pushStateList:function(t,e){var s=t.resultListArr;t.resultListArr=s.concat(e)}},actions:{modifyStateType:function(t,e){t.commit("modifyStateType",e)},resetStateType:function(t){t.commit("resetStateType")},refreshStateList:function(t,e){t.commit("cleanStateList");var s=c.a.extend({},l,e);c.a.ajax({url:"http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php",type:"POST",data:{jparams:a()(s)},success:function(e){var s=JSON.parse(e);"ok"==s.description&&t.commit("pushStateList",s.jsonData)}})}}},d=new r.a.Store({modules:{selectM:u}});e.a=d},function(t,e,s){s(36);var n=s(0)(s(68),s(22),null,null);t.exports=n.exports},,function(t,e,s){s(44);var n=s(0)(s(56),s(30),"data-v-6da79b90",null);t.exports=n.exports},,,function(t,e,s){"use strict";var n=s(3),a=s(50),i=s(1),r=s.n(i),o=(s(4),s(15)),c=s.n(o),l=s(16),u=s.n(l),d=s(21),p=s.n(d),f=s(20),v=s.n(f),m=s(18),_=s.n(m);n.a.use(a.a);var h=new a.a({mode:"history",routes:[{path:"/",name:"Login",component:c.a},{path:"/#MainList",name:"TypeList",component:u.a},{path:"/#TagPage/:typename",name:"TagPage",component:p.a},{path:"/#SelectPage",name:"SelectPage",component:v.a},{path:"/#Result",name:"Result",component:_.a}]});h.beforeEach(function(t,e,s){"/Result"!=t.path&&(console.log("1"),r()(window).scroll(function(){return!1})),s()}),e.a=h},,function(t,e,s){s(38);var n=s(0)(s(58),s(24),"data-v-3837299c",null);t.exports=n.exports},function(t,e,s){s(47);var n=s(0)(s(59),s(33),"data-v-b82e1ed6",null);t.exports=n.exports},function(t,e,s){s(48);var n=s(0)(s(60),s(34),"data-v-df8d224c",null);t.exports=n.exports},function(t,e,s){s(42);var n=s(0)(s(61),s(28),"data-v-4f2504a3",null);t.exports=n.exports},function(t,e,s){s(41);var n=s(0)(s(62),s(27),null,null);t.exports=n.exports},function(t,e,s){s(46);var n=s(0)(s(63),s(32),null,null);t.exports=n.exports},function(t,e,s){s(43);var n=s(0)(s(64),s(29),null,null);t.exports=n.exports},function(t,e,s){s(40);var n=s(0)(s(65),s(26),null,null);t.exports=n.exports},function(t,e,s){s(45);var n=s(0)(s(66),s(31),null,null);t.exports=n.exports},function(t,e,s){s(37);var n=s(0)(s(67),s(23),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-list"},[s("h3",{staticClass:"title"},[t._v(t._s(t.tagsData.title))]),t._v(" "),s("div",{staticClass:"tag-wrap"},t._l(t.tagsData.list,function(e,n){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.tagShow||n<8,expression:"tagShow||index<8"}],staticClass:"col"},[s("div",{class:[{tag:!0},{active:t.isExpress&&e==t.selectId}],attrs:{tId:e,catalogName:t.catalogName},on:{click:function(e){t.TagClickHandle()}}},[t._v(t._s(e))])])})),t._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:t.isExpress,expression:"isExpress"}],staticClass:"express",on:{click:function(e){t.ExpressClickHandle()}}},[t._v(t._s(t.tagShow?"收起":"更多"))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-page"},[s("Banner"),t._v(" "),s("Taglist",{attrs:{catalogName:t.catalogName,isExpress:!1}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-body"},[s("div",{staticClass:"text-wrap",staticStyle:{display:"block"}},[s("div",{staticClass:"input-wrap"},[s("input",{attrs:{id:"userName",type:"text",placeholder:"请填写名称"}})]),t._v(" "),s("div",{staticClass:"input-wrap"},[s("input",{attrs:{id:"userCell",type:"number",placeholder:"请填写电话号码"}})]),t._v(" "),s("p",{staticClass:"require"},[t._v("请填写正确手机号码")])]),t._v(" "),s("div",{staticClass:"img-wrap",staticStyle:{display:"none"}},[s("div",{staticClass:"file-wrap"},[s("input",{attrs:{id:"cardFile",type:"file"}})]),t._v(" "),s("div",{staticClass:"show-wrap"},[s("img",{attrs:{src:""}})]),t._v(" "),s("div",{staticClass:"remove"},[s("a",[t._v("清空图片")])]),t._v(" "),s("p",{staticClass:"require"},[t._v("图片格式不正确")]),t._v(" "),s("input",{staticStyle:{border:"1px solid red"},attrs:{id:"urlAPI",type:"text"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("div",{staticClass:"banner-wrap"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag-header-wrap"},[s("div",{staticClass:"header clearfix"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedObj.district,expression:"selectedObj.district"}],staticClass:"top-tag"},[t._v(t._s(t.selectedObj.district)),s("strong",{staticClass:"close"},[t._v("x")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedObj.winetype,expression:"selectedObj.winetype"}],staticClass:"top-tag"},[t._v(t._s(t.selectedObj.winetype)),s("strong",{staticClass:"close"},[t._v("x")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.selectedObj.grapetype,expression:"selectedObj.grapetype"}],staticClass:"top-tag"},[t._v(t._s(t.selectedObj.grapetype)),s("strong",{staticClass:"close"},[t._v("x")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-list"},[s("Banner"),t._v(" "),s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"list-btn"},[s("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/#TagPage/district"}},[t._v("按产区查找")])],1),t._v(" "),s("div",{staticClass:"list-btn"},[s("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/#TagPage/winetype"}},[t._v("按酒品类型查找")])],1),t._v(" "),s("div",{staticClass:"list-btn"},[s("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/#TagPage/grapetype"}},[t._v("按葡萄品种查找")])],1),t._v(" "),s("div",{staticClass:"list-btn"},[s("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/#SelectPage"}},[t._v("多条件综合查找")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login main"},[s("Banner",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]}),t._v(" "),s("div",{staticClass:"login-form"},[s("Formhead"),t._v(" "),s("Formbody"),t._v(" "),s("Formfooter")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result"},[s("TagHead",{attrs:{selectedObj:t.selectedObj}}),t._v(" "),s("div",{staticClass:"list-wrap"},[s("ul",{staticClass:"result-list"},t._l(t.resultListArr,function(t){return s("ListItem",{attrs:{infoObj:t}})}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"select-page"},[s("Banner"),t._v(" "),s("Taglist",{attrs:{catalogName:"district",isExpress:!0,selectId:t.selectObj.district}}),t._v(" "),s("Taglist",{attrs:{catalogName:"winetype",isExpress:!0,selectId:t.selectObj.winetype}}),t._v(" "),s("Taglist",{attrs:{catalogName:"grapetype",isExpress:!0,selectId:t.selectObj.grapetype}}),t._v(" "),s("div",{staticClass:"footer-wrap",staticStyle:{display:"block"}},[s("div",{staticClass:"footer clearfix"},[s("router-link",{staticClass:"btn",attrs:{to:"/#Result"}},[t._v("提交")]),t._v(" "),s("a",{staticClass:"btn",on:{click:function(e){t.ResetClickHandle()}}},[t._v("重置")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"list-item"},[s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"left"},[s("div",{staticClass:"thumb"},[s("img",{attrs:{src:t.infoObj.pic_url}})])]),t._v(" "),s("div",{staticClass:"content-wrap"},[s("p",{staticClass:"c-name"},[t._v(t._s(t.infoObj.name_ch)+" ")]),t._v(" "),s("p",{staticClass:"e-name"},[t._v(t._s(t.infoObj.name_en))]),t._v(" "),s("p",{staticClass:"rigion"},[s("span",{staticClass:"country"},[t._v(t._s(t.infoObj.country_ch))]),t._v(" >\n        "),s("span",{staticClass:"main-reg"},[t._v(t._s(t.infoObj.region_ch))]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.infoObj.sub_region_ch,expression:"infoObj.sub_region_ch"}],staticClass:"sub-reg"},[t._v(" > "+t._s(t.infoObj.sub_region_ch))])]),t._v(" "),s("p",{staticClass:"type"},[t._v("\n        "+t._s(t.infoObj.wine_type_ch)+" | "+t._s(t.infoObj.sugar_ch)+"\n      ")]),t._v(" "),s("p",{staticClass:"grape"},t._l(t.infoObj.grape,function(e){return s("span",[t._v(" "+t._s(e.grape_ch)+" ")])})),t._v(" "),s("p")])]),t._v(" "),s("div",{staticClass:"btn-wrap clearfix"},[s("a",{staticClass:"contact",attrs:{link:t.infoObj.winery_url},on:{click:function(e){t.wineryClickHandle()}}},[t._v("联系酒庄")]),t._v(" "),s("a",{staticClass:"detail",attrs:{wine_id:t.infoObj.wine_id,sign:t.infoObj.sign},on:{click:function(e){t.detailClickHandle()}}},[t._v("酒款详情")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-footer"},[s("div",{staticClass:"form-desc"},[t._v("\r\n    请填写名称和电话号码，或选择上传名片进行登录\r\n  ")]),t._v(" "),s("div",{staticClass:"form-submit disable"},[s("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/#MainList"}},[t._v("提交")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-header clearfix"},[s("div",{staticClass:"head-tab active",attrs:{ctrl:"text"}},[t._v("填写信息")]),t._v(" "),s("div",{staticClass:"head-tab",attrs:{ctrl:"file"}},[t._v("上传名片")])])}]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,s){"use strict";var n={district:{title:"地区",list:["卡拉布里亚","瓦莱塔奥斯塔","托斯卡纳","阿布鲁佐","特伦蒂诺-上阿迪杰","皮埃蒙特","维纳图","艾米利亚-罗马涅","马尔奇","坎帕尼亚","翁布里亚","撒丁岛","巴斯利卡塔","拉齐奥","伦巴第","西西里岛","普利亚","利古里亚","莫利塞","弗留利-威尼斯朱利亚","圣马力诺产区"]},winetype:{title:"葡萄酒类型",list:["红葡萄酒","起泡酒","白葡萄酒","桃红葡萄酒","格拉帕酒","加强型葡萄酒","甜葡萄酒","干邑","白兰地"]},grapetype:{title:"葡萄品种",list:["赤霞珠","霞多丽","西拉","美乐","歌海娜","黑比诺","品丽珠","马尔贝克","白莫斯卡托","白诗南","添普兰尼洛","慕合怀特","赛美蓉","玛尔维萨","灰比诺","维欧尼","长相思","小味儿多","麝香","内比奥罗","佳美娜","神索","黑达沃拉","佳美","密斯卡岱","黑曼罗","琼瑶浆","奥图歌","小芒森","桑娇维塞","马家婆","华帝露","小西拉","佳利酿","白玉霓"]}};e.a=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}},computed:{isShowBanner:function(){return this.$store.state.selectM.isShowBanner}},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"banner",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Form-body",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Formfooter",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Formhead",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n),i=s(14),r=s.n(i),o=s(12),c=s.n(o),l=s(13),u=s.n(l);e.default={name:"banner",data:function(){return{}},computed:{},components:{Banner:a.a,Formhead:r.a,Formbody:c.a,Formfooter:u.a},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n);e.default={name:"main-list",data:function(){return{}},computed:{},components:{Banner:a.a},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"listitem",props:{infoObj:{type:Object,default:{}}},data:function(){return{}},computed:{},methods:{wineryClickHandle:function(){var t=event.target.getAttribute("link");window.open(t)},detailClickHandle:function(){var t=event.target.getAttribute("wine_id"),e=event.target.getAttribute("sign");window.open("http://h5.9kacha.com/index.php/Wine/custom_detail?wine_id="+t+"&sign="+e+"&from=2b")}},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(19),a=s.n(n),i=s(17),r=s.n(i),o=s(1);s.n(o);e.default={name:"result",props:{},data:function(){return{nowPageIndex:1}},computed:{selectedObj:function(){var t={};return t.district=this.$store.state.selectM.district,t.winetype=this.$store.state.selectM.winetype,t.grapetype=this.$store.state.selectM.grapetype,t},resultListArr:function(){return this.$store.state.selectM.resultListArr}},methods:{},components:{TagHead:a.a,ListItem:r.a},mounted:function(){this.$store.dispatch("refreshStateList",this.selectedObj)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"taghead",props:{selectedObj:{type:Object,default:{}}},data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n),i=s(5),r=s.n(i),o=s(1),c=s.n(o);e.default={name:"selectpage",data:function(){return{}},computed:{selectObj:function(){var t={};return t.district=this.$store.state.selectM.district,t.winetype=this.$store.state.selectM.winetype,t.grapetype=this.$store.state.selectM.grapetype,t}},methods:{ResetClickHandle:function(){this.$store.dispatch("resetStateType")}},components:{Banner:a.a,Taglist:r.a},mounted:function(){c()(window).scroll(function(){return!1})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n),i=s(5),r=s.n(i);e.default={name:"tagpage",data:function(){return{}},computed:{catalogName:function(){return this.$route.params.typename}},components:{Banner:a.a,Taglist:r.a},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(55),a=s(1);s.n(a);e.default={name:"taglist",props:{catalogName:{type:String,default:""},isExpress:{type:Boolean,default:!1},selectId:{type:String,default:null}},data:function(){return{tagsData:n.a[this.catalogName],showToggle:!1}},computed:{tagShow:function(){return!this.isExpress||!!this.showToggle}},components:{},methods:{ExpressClickHandle:function(){return this.showToggle=!this.showToggle,this.showToggle},TagClickHandle:function(){var t=this,e=event.target.getAttribute("catalogName"),s=event.target.getAttribute("tId");this.isExpress?this.$store.dispatch("modifyStateType",{catalogName:e,tId:s}):(this.$store.dispatch("modifyStateType",{catalogName:e,tId:s}),this.$nextTick(function(){t.$router.push({path:"/#Result"})}))}},mounted:function(){}}},function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s(7),i=s.n(a),r=s(10),o=s(9),c=(s.n(o),s(4)),l=s(8);s.n(l).a.attach(document.body),n.a.config.productionTip=!1;var u=window.history.state||"/";new n.a({router:r.a,store:c.a,render:function(t){return t(i.a,{})},mounted:function(){r.a.push({path:u})}}).$mount("#app")}],[70]);
//# sourceMappingURL=app.395ea72bff4b3bf68812.js.map