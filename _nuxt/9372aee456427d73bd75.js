(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{461:function(t,e,n){var content=n(464);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("153c97ab",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n.r(e);n(20);var r={name:"PageSectionHeader",props:{title:{type:String,default:""},tag:{type:String,default:"h2"},block:{type:Boolean,default:!1},top:{type:Number,default:0},bottom:{type:Number,default:6}}},o=(n(463),n(0)),component=Object(o.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("header",{staticClass:"section-header",class:(t={block:e.block},t["_margin-top-"+e.top]=!0,t["_margin-bottom-"+e.bottom]=!0,t)},[e._t("title",[r(e.tag,{tag:"h2"},[e._v(e._s(e.title))])]),e._v(" "),r("div",{staticClass:"lead"},[e._t("default")],2)],2)}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,n){"use strict";var r=n(461);n.n(r).a},464:function(t,e,n){(e=n(2)(!1)).push([t.i,".section-header{text-align:center}.section-header h1,.section-header h2,.section-header h3{margin-top:0;font-weight:700;color:#244484}.section-header.-block{max-width:none}",""]),t.exports=e},465:function(t,e,n){"use strict";n.d(e,"a",(function(){return title}));var title=function(t){return"".concat(t," - CodeNotary")}},704:function(t,e,n){"use strict";n.r(e);n(38);var r=n(9),meta=n(465),o={head:function(){return{title:Object(meta.a)(this.article.title)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.post).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}},c=n(0),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("page-section",[e("page-section-header",{attrs:{title:this.article.title,tag:"h1"}}),this._v(" "),e("i-container",[e("i-row",[e("i-column",[e("article",[e("nuxt-content",{attrs:{document:this.article}})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:n(462).default,PageSection:n(187).default})}}]);