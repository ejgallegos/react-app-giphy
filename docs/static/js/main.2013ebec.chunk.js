(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(7),r=a.n(c),i=a(2),s=a(9),j=a(0),d=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],d=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),d(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){d(e.target.value)}})})},u=a(10),l=a(6),o=a.n(l),b=a(8),m=function(){var e=Object(b.a)(o.a.mark((function e(t){var a,n,c,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=pZa5wgIbyTYjtgkijajtDOki33ytdM59"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"cards",children:Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{className:"card__image",src:e.url,alt:e.title}),Object(j.jsx)("div",{className:"card__overlay",children:Object(j.jsxs)("div",{className:"card__header",children:[Object(j.jsx)("svg",{className:"card__arc",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{})}),Object(j.jsx)("div",{className:"card__header-text",children:Object(j.jsx)("h3",{className:"card__title",children:e.title})})]})})]})})})})},O=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){m(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__bounce animate__delay-2s",children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(j.jsx)("div",{className:"cards",children:c.map((function(e){return Object(j.jsx)(h,Object(u.a)({},e),e.id)}))})]})},p=function(){var e=Object(n.useState)([""]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)(O,{category:e},e)}))})]})};a(17);r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2013ebec.chunk.js.map