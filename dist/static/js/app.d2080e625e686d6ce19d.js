webpackJsonp([0,2],[,,,,,,,,,,,function(t,e,n){"use strict";var s=n(4),a=n(80);s.a.use(a.a);var r={state:{isShowBanner:!0,selectedArr:[],resultListArr:[]},getters:{},mutations:{cleanSelectedArr:function(t){t.selectedArr=[]},singleSelectedArr:function(t,e){t.selectedArr.push(e)},modifySelectedArr:function(t,e){function n(t,e){var n=!1;return e.forEach(function(e,s){if(e.catalogName==t.catalogName)return void(n=!0)}),n}n(e,t.selectedArr)?t.selectedArr.forEach(function(t,n){t.catalogName==e.catalogName&&t.tId!=e.tId&&(t.tId=e.tId)}):t.selectedArr.push(e)},addResultListArr:function(t,e){console.log(e);var n=t.resultListArr.concat(e);t.resultListArr=n},cleanResultListArr:function(t){t.resultListArr=[]}},actions:{cleanSelectedArr:function(t){t.commit("cleanSelectedArr")},singleSelectedArr:function(t,e){t.commit("singleSelectedArr",e)},modifySelectedArr:function(t,e){t.commit("modifySelectedArr",e)},addResultListArr:function(t,e){t.commit("addResultListArr",e)},cleanResultListArr:function(t){t.commit("cleanResultListArr")}}},o=new a.a.Store({modules:{selectM:r}});e.a=o},,,,,,,,,,function(t,e,n){"use strict";var s={district:["卡拉布里亚","托斯卡纳","阿布鲁佐","皮埃蒙特","维纳图","下奥地利","马尔奇","坎帕尼亚","翁布里亚","撒丁岛","巴斯利卡塔","拉齐奥","伦巴第","西西里岛","普利亚","利古里亚","莫利塞","弗留利-威尼斯朱利亚","特伦蒂诺-上阿迪杰","瓦莱塔奥斯塔","圣马力诺产区","艾米利亚-罗马涅"],winetype:["红葡萄酒","起泡酒","白葡萄酒","桃红葡萄酒","格拉帕酒","加强型葡萄酒","甜葡萄酒","干邑","白兰地"],grapetype:["赤霞珠","霞多丽","西拉","美乐","歌海娜","黑比诺","品丽珠","马尔贝克","白莫斯卡托","白诗南","添普兰尼洛","慕合怀特","赛美蓉","玛尔维萨","灰比诺","维欧尼","长相思","小味儿多","麝香","内比奥罗","佳美娜","神索","黑达沃拉","佳美","密斯卡岱","黑曼罗","琼瑶浆","奥图歌","小芒森","桑娇维塞","马家婆","华帝露","小西拉","佳利酿","白玉霓"]};e.a=s},function(t,e,n){n(71);var s=n(0)(n(127),n(53),"data-v-6da79b90",null);t.exports=s.exports},,,function(t,e,n){"use strict";var s=n(4),a=n(81),r=n(11),o=n(37),l=n.n(o),i=n(43),u=n.n(i),c=n(42),d=n.n(c),p=n(41),f=n.n(p),h=n(39),m=n.n(h);s.a.use(a.a);var v=new a.a({mode:"history",routes:[{path:"/",name:"Login",component:l.a},{path:"/TypeList",name:"TypeList",component:u.a},{path:"/TagPage/:typename",name:"TagPage",component:d.a},{path:"/SelectPage",name:"TagPage",component:f.a},{path:"/Result",name:"Result",component:m.a}]});v.beforeEach(function(t,e,n){"/Result"==t.path?r.a.state.selectM.isShowBanner=!1:r.a.state.selectM.isShowBanner=!0,n()}),e.a=v},,function(t,e,n){var s=n(0)(n(125),n(46),null,null);t.exports=s.exports},function(t,e,n){n(73);var s=n(0)(n(126),n(55),null,null);t.exports=s.exports},function(t,e,n){n(67);var s=n(0)(n(128),n(49),null,null);t.exports=s.exports},function(t,e,n){n(63);var s=n(0)(n(129),n(44),null,null);t.exports=s.exports},function(t,e,n){n(65);var s=n(0)(n(130),n(47),null,null);t.exports=s.exports},function(t,e,n){n(78);var s=n(0)(n(131),n(60),null,null);t.exports=s.exports},function(t,e,n){n(74);var s=n(0)(n(132),n(56),null,null);t.exports=s.exports},function(t,e,n){n(66);var s=n(0)(n(133),n(48),"data-v-3837299c",null);t.exports=s.exports},function(t,e,n){n(77);var s=n(0)(n(134),n(59),"data-v-b82e1ed6",null);t.exports=s.exports},function(t,e,n){n(79);var s=n(0)(n(135),n(61),"data-v-df8d224c",null);t.exports=s.exports},function(t,e,n){n(69);var s=n(0)(n(136),n(51),"data-v-4f2504a3",null);t.exports=s.exports},function(t,e,n){n(76);var s=n(0)(n(137),n(58),null,null);t.exports=s.exports},function(t,e,n){n(70);var s=n(0)(n(138),n(52),null,null);t.exports=s.exports},function(t,e,n){n(68);var s=n(0)(n(139),n(50),null,null);t.exports=s.exports},function(t,e,n){n(75);var s=n(0)(n(140),n(57),null,null);t.exports=s.exports},function(t,e,n){n(64);var s=n(0)(n(141),n(45),null,null);t.exports=s.exports},function(t,e,n){n(72);var s=n(0)(n(142),n(54),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog"},[n("h3",{staticClass:"title"},[t._v(t._s(t.catalogTitle))]),t._v(" "),n("div",{staticClass:"tag-wrap"},t._l(t.tags,function(e){return n("Ctag",{attrs:{showName:e,catalogName:t.catalogName}})}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-page"},[n("Catalog",{attrs:{catalogName:t.catalogName}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[{col:!0},{addlong:t.isLong}]},[n("div",{staticClass:"tag",attrs:{tId:t.showName,catalogName:t.catalogName},on:{click:function(e){t.CtagClickHandle()}}},[t._v(t._s(t.showName))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-body"},[n("div",{staticClass:"text-wrap",staticStyle:{display:"block"}},[n("div",{staticClass:"input-wrap"},[n("input",{attrs:{id:"userName",type:"text",placeholder:"请填写名称"}})]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("input",{attrs:{id:"userCell",type:"number",placeholder:"请填写电话号码"}})]),t._v(" "),n("p",{staticClass:"require"},[t._v("请填写正确手机号码")])]),t._v(" "),n("div",{staticClass:"img-wrap",staticStyle:{display:"none"}},[n("div",{staticClass:"file-wrap"},[n("input",{attrs:{id:"cardFile",type:"file"}})]),t._v(" "),n("div",{staticClass:"show-wrap"},[n("img",{attrs:{src:""}})]),t._v(" "),n("div",{staticClass:"remove"},[n("a",[t._v("清空图片")])]),t._v(" "),n("p",{staticClass:"require"},[t._v("图片格式不正确")]),t._v(" "),n("input",{staticStyle:{border:"1px solid red"},attrs:{id:"urlAPI",type:"text"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-wrap"},[t._v("B2B找酒平台")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-head clearfix"},t._l(t.selectedArr,function(e){return n("div",{staticClass:"tag",attrs:{catalogName:e.catalogName}},[t._v("\n     "+t._s(e.tId)),n("span",[t._v("x")])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-form"},[n("Formhead"),t._v(" "),n("Formbody"),t._v(" "),n("Formfooter")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result"},[n("div",{staticClass:"result-wrap"},[n("TagHead"),t._v(" "),n("div",{staticClass:"list-wrap"},[n("div",{staticClass:"no-result",style:{display:t.isNoItem?"block":"none"}},[t._v("没有对应酒款")]),t._v(" "),n("div",{staticClass:"scroller-wrap"},[n("scroller",{ref:"resultScroller",staticStyle:{"font-size":"1.2rem"},attrs:{"lock-x":"",height:"100%","use-pullup":!0,"pullup-config":{downContent:"加载更多",upContent:"释放后更新",loadingContent:"正在加载中..."}},on:{"on-scroll":t.onScroll,"on-pullup-loading":t.onPullup}},[n("div",{staticClass:"scroller-move"},[n("ul",{staticClass:"result-list"},t._l(t.resultListArr,function(t){return n("ListItem",{attrs:{infoObj:t}})}))])])],1)])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[{app:!0},{nobanner:!t.isShowBanner}]},[n("Banner",{directives:[{name:"show",rawName:"v-show",value:t.isShowBanner,expression:"isShowBanner"}]}),t._v(" "),n("div",{staticClass:"main"},[n("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"type-list"},[n("div",{staticClass:"list-wrap"},[n("box",{attrs:{gap:"4rem 1rem"}},[n("div",{staticClass:"list-btn"},[n("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/TagPage/district"}},[t._v("按产区查找")])],1),t._v(" "),n("div",{staticClass:"list-btn"},[n("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/TagPage/winetype"}},[t._v("按酒品类型查找")])],1),t._v(" "),n("div",{staticClass:"list-btn"},[n("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/TagPage/grapetype"}},[t._v("按葡萄品种查找")])],1),t._v(" "),n("div",{staticClass:"list-btn"},[n("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/SelectPage"}},[t._v("多条件综合查找")])],1)])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.styles},[n("div",{staticClass:"xs-container"},[t._t("default"),t._v(" "),t._t("pulldown"),t._v(" "),t._t("pullup")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[{col:!0},{addlong:t.isLong}],style:{display:t.isShow?"inline-block":"none"}},[n("div",{class:[{tag:!0},{active:t.isActive}],attrs:{tId:t.showName,catalogName:t.catalogName},on:{click:function(e){t.StagClickHandle()}}},[t._v("\n   "+t._s(t.showName)+"\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select-page"},[n("Selection",{attrs:{catalogName:"district"}}),t._v(" "),n("Selection",{attrs:{catalogName:"winetype"}}),t._v(" "),n("Selection",{attrs:{catalogName:"grapetype"}}),t._v(" "),n("div",{staticClass:"footer-wrap",staticStyle:{display:"block"}},[n("div",{staticClass:"footer clearfix"},[n("router-link",{staticClass:"btn",attrs:{to:"/Result"}},[t._v("提交")]),t._v(" "),n("a",{staticClass:"btn",on:{click:function(e){t.ResetClickHandle()}}},[t._v("重置")])],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list-item"},[n("div",{staticClass:"item-wrap"},[n("div",{staticClass:"left"},[n("div",{staticClass:"thumb"},[n("img",{attrs:{src:t.infoObj.pic_url}})])]),t._v(" "),n("div",{staticClass:"content-wrap"},[n("p",{staticClass:"c-name"},[t._v(t._s(t.infoObj.name_ch)+" ")]),t._v(" "),n("p",{staticClass:"e-name"},[t._v(t._s(t.infoObj.name_en))]),t._v(" "),n("p",{staticClass:"rigion"},[n("span",{staticClass:"country"},[t._v(t._s(t.infoObj.country_ch))]),t._v(" >\n        "),n("span",{staticClass:"main-reg"},[t._v(t._s(t.infoObj.region_ch))]),t._v(" >\n        "),n("span",{staticClass:"sub-reg"},[t._v(t._s(t.infoObj.sub_region_ch))]),t._v(" >\n      ")]),t._v(" "),n("p",{staticClass:"type"},[t._v("\n        "+t._s(t.infoObj.wine_type_ch)+" | "+t._s(t.infoObj.sugar_ch)+"\n      ")]),t._v(" "),n("p",{staticClass:"grape"},t._l(t.infoObj.grape,function(e){return n("span",[t._v(" "+t._s(e.grape_ch)+" ")])})),t._v(" "),n("p")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-wrap clearfix"},[n("a",{staticClass:"contact",attrs:{href:"http://www.baidu.com"}},[t._v("联系酒庄")]),t._v(" "),n("a",{staticClass:"detail"},[t._v("酒款详情")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-footer"},[n("div",{staticClass:"form-desc"},[t._v("\r\n    请填写名称和电话号码，或选择上传名片进行登录\r\n  ")]),t._v(" "),n("div",{staticClass:"form-submit disable"},[n("router-link",{staticStyle:{display:"block",width:"100%",height:"100%"},attrs:{to:"/TypeList"}},[t._v("提交")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"selection"},[n("h3",{staticClass:"title"},[t._v(t._s(t.catalogTitle))]),t._v(" "),n("div",{staticClass:"tag-wrap"},t._l(t.tags,function(e,s){return n("Stag",{attrs:{showName:e,tagIndex:s,isExpress:t.isExpress,catalogName:t.catalogName,selectedId:t.selectedId}})})),t._v(" "),n("input",{staticClass:"get",staticStyle:{border:"1px solid red"},attrs:{type:"text"},domProps:{value:t.selectedId}}),t._v(" "),n("a",{staticClass:"express",on:{click:function(e){t.expressToggle()}}},[t._v(t._s(t.isExpress?"收起":"更多"))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-header clearfix"},[n("div",{staticClass:"head-tab active",attrs:{ctrl:"text"}},[t._v("填写信息")]),t._v(" "),n("div",{staticClass:"head-tab",attrs:{ctrl:"file"}},[t._v("上传名片")])])}]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{gap:String}}},function(t,e,n){"use strict";function s(t){return JSON.parse(r()(t))}Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),r=n.n(a),o=n(123),l=n.n(o),i=n(121),u=n.n(i),c=n(118),d=n.n(c),p=n(119),f=n.n(p),h=function(){return{content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},m=function(){return{content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"}};e.default={props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!0},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1}},methods:{reset:function(t){t&&(void 0!==t.left&&this._xscroll.scrollLeft(t.left),void 0!==t.top&&this._xscroll.scrollTop(t.top)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){this.$emit("input",s(t))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new u.a({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){t.$emit("on-scroll",{top:t._xscroll.getScrollTop(),left:t._xscroll.getScrollLeft()})}),t.usePulldown){var n=t.$slots.pulldown,s=l()(h(),t.pulldownConfig);n&&(s.container=n[0].elm),t.pulldown=new d.a(s),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var a=t.$slots.pullup,r=l()(m(),t.pullupConfig);a&&(r.container=a[0].elm),t.pullup=new f.a(r),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(29),a=n.n(s);e.default={name:"app",data:function(){return{}},computed:{isShowBanner:function(){return this.$store.state.selectM.isShowBanner}},components:{Banner:a.a},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"banner",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),a=n(31),r=n.n(a);e.default={name:"catalog",props:{catalogName:{type:String,default:""}},data:function(){return{tags:s.a[this.catalogName]}},computed:{catalogTitle:function(){return"district"==this.catalogName?"地区":"winetype"==this.catalogName?"红酒类型":"grapetype"==this.catalogName?"葡萄品种":void 0}},components:{Ctag:r.a},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ctag",props:{showName:{type:String,default:""},catalogName:{type:String,default:""}},data:function(){return{}},computed:{isLong:function(){return this.showName.length>5}},methods:{CtagClickHandle:function(){var t=event.target.getAttribute("catalogName"),e=event.target.getAttribute("tId");this.$store.dispatch("singleSelectedArr",{catalogName:t,tId:e}),this.$nextTick(function(){this.$router.push("/Result")})}},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),a=n(33),r=n.n(a);e.default={name:"selectionn",props:{catalogName:{type:String,default:""}},data:function(){return{isExpress:!1,tags:s.a[this.catalogName]}},methods:{expressToggle:function(){return this.isExpress=!this.isExpress,this.isExpress}},computed:{catalogTitle:function(){return"district"==this.catalogName?"地区":"winetype"==this.catalogName?"红酒类型":"grapetype"==this.catalogName?"葡萄品种":void 0},selectedArr:function(){return this.$store.state.selectM.selectedArr},selectedId:function(){var t=this,e=null;return this.selectedArr.forEach(function(n,s){n.catalogName==t.catalogName&&(e=n.tId)}),e}},components:{Stag:r.a},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"stag",props:{showName:{type:String,default:""},catalogName:{type:String,default:""},isSelect:{type:Boolean,default:!1},tagIndex:{type:Number,default:0},isExpress:{type:Boolean,default:!1},selectedId:{type:String,default:""}},data:function(){return{}},methods:{StagClickHandle:function(){var t=event.target.getAttribute("catalogName"),e=event.target.getAttribute("tId");this.$store.dispatch("modifySelectedArr",{catalogName:t,tId:e})}},computed:{isLong:function(){return this.showName.length>5},isShow:function(){return!(!this.isExpress&&this.tagIndex>8)},isActive:function(){return this.selectedId==this.showName}},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Form-body",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Formfooter",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Formhead",data:function(){return{}},computed:{},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(36),a=n.n(s),r=n(34),o=n.n(r),l=n(35),i=n.n(l);e.default={name:"banner",data:function(){return{}},computed:{},components:{Formhead:a.a,Formbody:o.a,Formfooter:i.a},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"listitem",props:{infoObj:{type:Object,default:{}}},data:function(){return{}},computed:{},methods:{},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),a=n.n(s),r=n(124),o=n.n(r),l=n(40),i=n.n(l),u=n(38),c=n.n(u),d=n(28),p=n.n(d),f=n(110),h=n.n(f);e.default={name:"ctag",props:{},data:function(){return{nowPageIndex:1}},computed:{selectedArr:function(){return this.$store.state.selectM.selectedArr},resultListArr:function(){return this.$store.state.selectM.resultListArr},SelectObj:function(){var t={};return this.selectedArr.forEach(function(e,n){"district"==e.catalogName?o()(t,{region:e.tId}):"winetype"==e.catalogName?o()(t,{wine_type:e.tId}):"grapetype"==e.catalogName&&o()(t,{grape:e.tId})}),t},PostObj:function(){var t=(new Date,this.SelectObj),e={authparams:{app_id:"343535",rtoken:"sldffyy9767",time:1489131067},authmode:"app",country:"意大利",page:"'"+this.nowPageIndex+"'"};return o()({},e,t)},isNoItem:function(){return!(this.resultListArr.length>0)}},methods:{onScroll:function(t){return!0},onPullup:function(){var t=this;this.nowPageIndex+=1,this.$nextTick(function(){t.$refs.resultScroller.donePullup(),t.getListData(t.PostObj)})},getListData:function(t){var e=this;h.a.ajax({type:"POST",url:"http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php",data:{jparams:a()(t)},success:function(t){var n=JSON.parse(t),s=n.jsonData;"ok"==n.description&&(e.$store.dispatch("addResultListArr",s),e.$nextTick(function(){e.$refs.resultScroller.reset()}))}})}},components:{TagHead:i.a,Scroller:p.a,ListItem:c.a},mounted:function(){this.$store.dispatch("cleanResultListArr"),this.getListData(this.PostObj)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"taghead",props:{},data:function(){return{}},computed:{selectedArr:function(){return this.$store.state.selectM.selectedArr}},components:{},mounted:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(32),a=n.n(s);e.default={name:"selectpage",data:function(){return{}},computed:{},methods:{ResetClickHandle:function(){this.$store.dispatch("cleanSelectedArr")}},components:{Selection:a.a},mounted:function(){this.$store.dispatch("cleanResultListArr")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(30),a=n.n(s);e.default={name:"tagpage",data:function(){return{}},computed:{catalogName:function(){return this.$route.params.typename}},components:{Catalog:a.a},mounted:function(){this.$store.dispatch("cleanSelectedArr"),this.$store.dispatch("cleanResultListArr")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(27),a=n.n(s);e.default={name:"type-list",data:function(){return{}},computed:{},components:{Box:a.a},mounted:function(){this.$store.dispatch("cleanSelectedArr")}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),a=n(22),r=n.n(a),o=n(25),l=n(24),i=(n.n(l),n(11)),u=n(23);n.n(u).a.attach(document.body),s.a.config.productionTip=!1;var c=window.history.state||"/";new s.a({router:o.a,store:i.a,render:function(t){return t(r.a,{})},mounted:function(){o.a.push({path:c})}}).$mount("#app")}],[144]);
//# sourceMappingURL=app.d2080e625e686d6ce19d.js.map