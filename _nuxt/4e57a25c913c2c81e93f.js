(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{229:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},234:function(t,e,n){"use strict";var d=n(229);n.n(d).a},235:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},262:function(t,e,n){var content=n(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("27da3647",content,!1,{sourceMap:!1})},263:function(t,e,n){"use strict";var d=n(1).default.extend({props:{icon:{type:String}}}),r=(n(234),n(4)),component=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},332:function(t){t.exports=JSON.parse('{"last_update":"2020-04-05T21:02:00+09:00"}')},333:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/27","url":"https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/1007542.html","text":"LINE を活用した相談・情報提供サービスを開始"},{"date":"2020/03/27","url":"https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/1007534.html","text":"中小企業従業員融資 の申込受付を開始 "}]}')},334:function(t,e,n){"use strict";var d=n(262);n.n(d).a},335:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .Header[data-v-7067c38d]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-7067c38d]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-7067c38d]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-7067c38d]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-7067c38d]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-7067c38d]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-7067c38d]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-7067c38d]{padding:4px 8px}}",""]),t.exports=e},339:function(t,e,n){"use strict";n.r(e);var d=n(1),r=n(263),c=n(332),o=n(333),l=n(270),m=n(277),f=n(272),v=n(273),h=n(278),x=n(271),_=n(274),w=n(247),C=d.default.extend({components:{PageHeader:r.a,ConfirmedCasesDetailsCard:l.a,ConfirmedCasesNumberCard:m.a,ConfirmedCasesAttributesCard:f.a,TestedNumberCard:v.a,PatientsByAge:h.a,PatientsByClusters:x.a,PatientsAndSickbeds:_.a},data:function(){var data={updatedTimeStr:Object(w.a)(c.last_update),headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("兵庫県内の最新感染動向")},newsItems:o.newsItems};return data},computed:{updatedAt:function(){return Object(w.a)(c.last_update)}},head:function(){return{title:this.$t("兵庫県内の最新感染動向")}}}),P=(n(334),n(4)),component=Object(P.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.updatedTimeStr))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("patients-by-age"),t._v(" "),n("patients-by-clusters"),t._v(" "),n("patients-and-sickbeds")],1)],1)}),[],!1,null,"7067c38d",null);e.default=component.exports}}]);