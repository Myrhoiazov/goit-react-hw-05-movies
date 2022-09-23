"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{8416:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(6731),n=s(885),i=s(2791),r=s(184),c=function(){var e=(0,i.useState)(!1),t=(0,n.Z)(e,1)[0],s=(0,i.useState)(!1),a=(0,n.Z)(s,2),c=a[0],l=a[1];return(0,r.jsx)("div",{className:"sidebar-container".concat(t?" shrink":""),children:(0,r.jsx)("div",{className:"sidebar-wrapper",children:(0,r.jsx)("div",{className:"sidebar-themeContainer",children:(0,r.jsxs)("label",{htmlFor:"theme-toggle",className:"sidebar-themeLabel".concat(c?" switched":""),children:[(0,r.jsx)("input",{className:"sidebar-themeInput",type:"checkbox",id:"theme-toggle",onChange:function(){l(!c),document.body.classList.toggle("dark")}}),(0,r.jsxs)("div",{className:"sidebar-themeType light",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"sidebar-listIcon",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,r.jsx)("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}),(0,r.jsx)("span",{className:"sidebar-themeInputText",children:"Light"})]}),(0,r.jsxs)("div",{className:"sidebar-themeType dark",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"sidebar-listIcon",children:(0,r.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),(0,r.jsx)("span",{className:"sidebar-themeInputText",children:"Dark"})]})]})})})})},l="header_header__RZQYQ",o="header_wrapper__vteUK",d="header_nav__n24hS",_="header_item__OOsNB",h="header_active__W7yWI",m=function(e){return e.isActive?"".concat(_," ").concat(h):_},u=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("header",{className:l,children:(0,r.jsx)("div",{className:o,children:(0,r.jsxs)("nav",{className:d,children:[(0,r.jsx)(c,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.OL,{to:"/",end:!0,className:m,children:"Home"}),(0,r.jsx)(a.OL,{to:"/movies",className:m,children:"Movies"})]})]})})})})}},9503:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(5861),n=s(885),i=s(7757),r=s.n(i),c=s(2791),l=s(6731),o=s(7689),d=s(8174),_=s(8416),h=s(6673),m="Modal_overlay__r63M6",u="Modal_modal__DJDMv",x=s(184),p=function(e){var t=e.onClose,s=e.children,a=function(e){"Escape"===e.code&&t()};return(0,c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[]),(0,x.jsx)("div",{className:m,onClick:function(e){e.target===e.currentTarget&&t()},children:(0,x.jsx)("div",{className:u,children:s})})},v={hidden:"Home_hidden__QfSH2",wrapper:"Home_wrapper__iZIsl",hero:"Home_hero__tSEiQ",img:"Home_img__6O+7s",list:"Home_list__aopnc",title:"Home_title__L087v",text:"Home_text__YlQ2v",list__title:"Home_list__title__I9qvf",list__thumb:"Home_list__thumb__NR++z",list__img:"Home_list__img__bKoHA",card:"Home_card__+O6lb",data__content:"Home_data__content__vnECj",thumb__photo:"Home_thumb__photo__6FPEM",photo:"Home_photo__GzM6P",modal__title:"Home_modal__title__NijGo",modal__text:"Home_modal__text__+y5T5",modal__text_accent:"Home_modal__text_accent__HRFHR",button:"Home_button__1gOAx"},j=s(4569),N=s.n(j),f=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),s=t[0],i=t[1],m=(0,c.useState)(!1),u=(0,n.Z)(m,2),j=u[0],f=u[1],g=(0,c.useState)({}),b=(0,n.Z)(g,2),w=b[0],k=b[1],H=(0,c.useState)(!1),M=(0,n.Z)(H,2),y=M[0],C=M[1],L=(0,o.TH)(),Z=(0,c.useCallback)((0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),e.next=4,N().get("https://api.themoviedb.org/3/trending/all/day?api_key=53f28f10fb3650af7c7f4f04a387344f");case 4:t=e.sent,i(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d.Am.error("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(");case 11:return e.prev=11,f(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[]),S=function(e){k(e),C((function(e){return!e}))};return(0,c.useEffect)((function(){Z()}),[Z,w]),(0,x.jsxs)("div",{className:y?v.hidden:null,children:[(0,x.jsx)(_.Z,{}),(0,x.jsxs)("div",{className:v.wrapper,children:[(0,x.jsxs)("div",{className:v.hero,children:[(0,x.jsx)("h1",{className:v.title,children:"Trending Film today"}),(0,x.jsx)("p",{className:v.text,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c. \u041c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u0444\u0438\u043b\u044c\u043c\u043e\u0432, \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u043b\u044e\u0434\u0435\u0439. \u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441."})]}),j&&(0,x.jsx)(h.Z,{}),(0,x.jsx)("ul",{className:v.list,children:s.map((function(e){return(0,x.jsxs)("li",{onClick:function(){return S(e)},children:[(0,x.jsx)("div",{className:v.list__thumb,children:(0,x.jsx)("img",{className:v.list__img,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),width:"225",alt:e.title})}),(0,x.jsx)("p",{className:v.list__title,children:e.original_title||e.original_name})]},e.id)}))})]}),y&&(0,x.jsx)(p,{onClose:S,children:(0,x.jsx)("article",{children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:v.card,children:[(0,x.jsx)("div",{className:v.thumb__photo,children:(0,x.jsx)("img",{className:v.photo,src:"https://image.tmdb.org/t/p/w500".concat(w.poster_path),alt:""})}),(0,x.jsxs)("div",{className:v.data__content,children:[(0,x.jsx)("h1",{className:v.modal__title,children:w.name||w.title}),(0,x.jsxs)("p",{className:v.modal__text,children:[" ",(0,x.jsx)("span",{className:v.modal__text_accent,children:"Overview: "}),w.overview]}),(0,x.jsxs)("p",{className:v.list__text,children:[(0,x.jsx)("span",{className:v.modal__text_accent,children:"Rating: "}),Math.round(w.vote_average)]}),(0,x.jsxs)("p",{className:v.list__text,children:[(0,x.jsx)("span",{className:v.modal__text_accent,children:"Popularity: "}),w.popularity]}),(0,x.jsx)(l.rU,{className:v.button,type:"button",to:"/movies/".concat(w.id),state:{from:L},children:"Reed More..."})]})]})})})})]})}}}]);
//# sourceMappingURL=503.091f4471.chunk.js.map