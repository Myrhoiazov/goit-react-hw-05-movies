"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{9503:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var s=a(5861),n=a(885),_=a(7757),i=a.n(_),l=a(2791),o=a(6731),c=a(7689),r=a(8174),d=a(6673),m="Modal_overlay__r63M6",h="Modal_modal__DJDMv",u=a(184),x=function(e){var t=e.onClose,a=e.children,s=function(e){"Escape"===e.code&&t()};return(0,l.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[]),(0,u.jsx)("div",{className:m,onClick:function(e){e.target===e.currentTarget&&t()},children:(0,u.jsx)("div",{className:h,children:a})})},p={hidden:"Home_hidden__QfSH2",hero:"Home_hero__tSEiQ",img:"Home_img__6O+7s",list:"Home_list__aopnc",title:"Home_title__L087v",text:"Home_text__YlQ2v",list__title:"Home_list__title__I9qvf",list__thumb:"Home_list__thumb__NR++z",list__img:"Home_list__img__bKoHA",card:"Home_card__+O6lb",data__content:"Home_data__content__vnECj",thumb__photo:"Home_thumb__photo__6FPEM",photo:"Home_photo__GzM6P",modal__title:"Home_modal__title__NijGo",modal__text:"Home_modal__text__+y5T5",modal__text_accent:"Home_modal__text_accent__HRFHR",button:"Home_button__1gOAx"},f=a(4569),v=a.n(f),j=function(){var e=(0,l.useState)([]),t=(0,n.Z)(e,2),a=t[0],_=t[1],m=(0,l.useState)(!1),h=(0,n.Z)(m,2),f=h[0],j=h[1],N=(0,l.useState)({}),g=(0,n.Z)(N,2),H=g[0],b=g[1],w=(0,l.useState)(!1),k=(0,n.Z)(w,2),y=k[0],C=k[1],E=(0,c.TH)(),M=(0,l.useCallback)((0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,v().get("https://api.themoviedb.org/3/trending/all/day?api_key=53f28f10fb3650af7c7f4f04a387344f");case 4:t=e.sent,_(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r.Am.error("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(");case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[]),S=function(e){b(e),C((function(e){return!e})),console.log(e)};return(0,l.useEffect)((function(){M()}),[M,H]),(0,u.jsxs)("div",{className:y&&p.hidden,children:[(0,u.jsxs)("div",{className:p.hero,children:[(0,u.jsx)("h1",{className:p.title,children:"Trending Film today"}),(0,u.jsx)("p",{className:p.text,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c. \u041c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u0444\u0438\u043b\u044c\u043c\u043e\u0432, \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438 \u043b\u044e\u0434\u0435\u0439. \u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441."})]}),f&&(0,u.jsx)(d.Z,{}),(0,u.jsx)("ul",{className:p.list,children:a.map((function(e){return(0,u.jsxs)("li",{onClick:function(){return S(e)},children:[(0,u.jsx)("div",{className:p.list__thumb,children:(0,u.jsx)("img",{className:p.list__img,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),width:"225",alt:e.title})}),(0,u.jsx)("p",{className:p.list__title,children:e.original_title||e.original_name})]},e.id)}))}),y&&(0,u.jsx)(x,{onClose:S,children:(0,u.jsx)("article",{children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:p.card,children:[(0,u.jsx)("div",{className:p.thumb__photo,children:(0,u.jsx)("img",{className:p.photo,src:"https://image.tmdb.org/t/p/w500".concat(H.poster_path),alt:""})}),(0,u.jsxs)("div",{className:p.data__content,children:[(0,u.jsx)("h1",{className:p.modal__title,children:H.name||H.title}),(0,u.jsxs)("p",{className:p.modal__text,children:[" ",(0,u.jsx)("span",{className:p.modal__text_accent,children:"Overview: "}),H.overview]}),(0,u.jsxs)("p",{className:p.list__text,children:[(0,u.jsx)("span",{className:p.modal__text_accent,children:"Rating: "}),Math.round(H.vote_average)]}),(0,u.jsxs)("p",{className:p.list__text,children:[(0,u.jsx)("span",{className:p.modal__text_accent,children:"Popularity: "}),H.popularity]}),(0,u.jsx)(o.rU,{className:p.button,type:"button",to:"/movies/".concat(H.id),state:{from:E},children:"Reed More..."})]})]})})})})]})}}}]);
//# sourceMappingURL=503.4719ac1b.chunk.js.map