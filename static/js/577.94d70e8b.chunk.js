"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[577],{9044:function(n,e,r){r.d(e,{Z:function(){return c}});var t,i=r(8402),a=r(168),o=r(6444).ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n"]))),s=r(184),c=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(i.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},9577:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,i,a,o,s,c,p,x,l,d,u=r(5861),h=r(9439),f=r(7757),b=r.n(f),g=r(7689),v=r(2791),Z=r(1243),w=function(){var n=(0,u.Z)(b().mark((function n(e){var r,t;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"?api_key=").concat("dcb571cd23b92080c89a6cccb7d6e9ea"),n.next=3,Z.Z.get(r);case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=r(9044),m=r(168),k=r(1087),_=r(6444),y=(0,_.ZP)(k.rU)(t||(t=(0,m.Z)(["\n  display: flex;\n  width: 100px;\n  height: 30px;\n  margin: 15px;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  font-weight: 600;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    background-color: lightgrey;\n    color: #ffffff;\n    cursor: 'pointer';\n  }\n"]))),P=_.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  gap: 30px;\n  padding-left: 15px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),U=_.ZP.img(a||(a=(0,m.Z)(["\n  width: 180px;\n"]))),S=_.ZP.div(o||(o=(0,m.Z)([""]))),C=_.ZP.h2(s||(s=(0,m.Z)([""]))),O=_.ZP.h3(c||(c=(0,m.Z)(["\n  margin: 0;\n"]))),T=_.ZP.p(p||(p=(0,m.Z)(["\n  margin-top: 15px;\n"]))),z=_.ZP.ul(x||(x=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),F=_.ZP.li(l||(l=(0,m.Z)([""]))),G=(0,_.ZP)(k.OL)(d||(d=(0,m.Z)(["\n  display: flex;\n  margin-bottom: 8px;\n\n  &.active {\n    color: rgb(227, 17, 108);\n  }\n"]))),L=r(184),R=function(){var n,e,r=(0,v.useState)([]),t=(0,h.Z)(r,2),i=t[0],a=t[1],o=(0,v.useState)(!1),s=(0,h.Z)(o,2),c=s[0],p=s[1],x=(0,v.useState)(null),l=(0,h.Z)(x,2),d=l[0],f=l[1],Z=(0,g.UO)().movieId,m=(0,g.TH)(),k=(0,v.useRef)(null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),_=i.poster_path,R=i.title,A=i.release_date,B=i.overview,E=i.genres,H=i.vote_average;return(0,v.useEffect)((function(){p(!0),(0,u.Z)(b().mark((function n(){var e;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w(Z);case 3:if(0!==(e=n.sent).length){n.next=11;break}return a([]),p(!1),f("There is no description for this movie."),n.abrupt("return");case 11:a(e);case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),f("Movie details loading error.");case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))(),p(!1)}),[Z]),(0,L.jsxs)("main",{children:[c&&(0,L.jsx)(j.Z,{}),0!==i.length&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(y,{to:k.current,children:"Go back"}),(0,L.jsxs)(P,{children:[(0,L.jsx)(U,{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(_),alt:R}),(0,L.jsxs)(S,{children:[(0,L.jsxs)(C,{children:[R,"(",A?A.slice(0,4):"Unknown date",")"]}),(0,L.jsx)(T,{children:H?"User score: ".concat((10*H).toFixed(0),"%"):"Unknown user score"}),(0,L.jsx)(O,{children:"Overview:"}),(0,L.jsx)(T,{children:B||"There is no overview"}),(0,L.jsx)(O,{children:"Genres: "}),(0,L.jsx)(T,{children:E?E.map((function(n){return n.name})).join(", "):"Unknown genre"})]})]}),(0,L.jsxs)(z,{children:[(0,L.jsx)(F,{children:(0,L.jsx)(O,{children:"Additional information"})}),(0,L.jsxs)(F,{children:[(0,L.jsx)(G,{to:"cast",children:"Cast"}),(0,L.jsx)(G,{to:"reviews",children:"Reviews"})]})]})]}),(0,L.jsx)(v.Suspense,{fallback:(0,L.jsx)(j.Z,{}),children:(0,L.jsx)(g.j3,{})}),d&&(0,L.jsx)("h2",{children:d})]})}}}]);
//# sourceMappingURL=577.94d70e8b.chunk.js.map