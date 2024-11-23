(function(){"use strict";var t={6583:function(t,n,r){var e=r(6848),a=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("MyBlog")],1)},s=[],i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"blog-container"},[t._m(0),t._m(1),n("main",{staticClass:"main-content"},[n("section",{staticClass:"latest-posts"},[n("h2",[t._v("Latest Posts")]),n("div",{staticClass:"posts-grid"},t._l(t.posts,(function(r){return n("article",{key:r.id,staticClass:"post-card"},[n("img",{attrs:{src:r.image,alt:r.title}}),n("div",{staticClass:"post-content"},[n("h3",[t._v(t._s(r.title))]),n("p",[t._v(t._s(r.excerpt))]),n("span",{staticClass:"date"},[t._v(t._s(r.date))])])])})),0)])]),t._m(2)])},o=[function(){var t=this,n=t._self._c;return n("header",{staticClass:"header"},[n("h1",[t._v("Jack Ye")]),n("p",{staticClass:"subtitle"},[t._v("Personal Blog & Portfolio")])])},function(){var t=this,n=t._self._c;return n("nav",{staticClass:"navigation"},[n("ul",[n("li",[n("a",{attrs:{href:"#home"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#about"}},[t._v("About")])]),n("li",[n("a",{attrs:{href:"#blog"}},[t._v("Blog")])]),n("li",[n("a",{attrs:{href:"#projects"}},[t._v("Projects")])]),n("li",[n("a",{attrs:{href:"#contact"}},[t._v("Contact")])])])])},function(){var t=this,n=t._self._c;return n("footer",{staticClass:"footer"},[n("p",[t._v("© 2024 Jack Ye. All rights reserved.")]),n("div",{staticClass:"social-links"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-github"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-linkedin"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})])])])}],c={name:"MyBlog",data(){return{posts:[{id:1,title:"Getting Started with Vue.js",excerpt:"Learn the basics of Vue.js and how to build your first application.",image:"/images/vue-post.jpg",date:"March 15, 2024"}]}}},l=c,u=r(1656),f=(0,u.A)(l,i,o,!1,null,"7ac2af30",null),v=f.exports,p={name:"App",components:{MyBlog:v}},h=p,d=(0,u.A)(h,a,s,!1,null,null,null),_=d.exports;e.Ay.config.productionTip=!1,new e.Ay({render:t=>t(_)}).$mount("#app")}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var s=n[e]={exports:{}};return t[e].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(n,e,a,s){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,c=0;c<e.length;c++)(!1&s||i>=s)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=a();void 0!==l&&(n=l)}}return n}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[e,a,s]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,s,i=e[0],o=e[1],c=e[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var u=c(r)}for(n&&n(e);l<i.length;l++)s=i[l],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(u)},e=self["webpackChunkyxhblog"]=self["webpackChunkyxhblog"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[504],(function(){return r(6583)}));e=r.O(e)})();
//# sourceMappingURL=app.cd1f030a.js.map