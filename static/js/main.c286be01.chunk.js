(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={auth:"AuthForm_auth__1BFDU",control:"AuthForm_control__1oPB2",actions:"AuthForm_actions__32Yy6",toggle:"AuthForm_toggle__36oQQ"}},,,,function(e,t,n){e.exports={card:"ListItem_card__8jXkv",cardHeader:"ListItem_cardHeader__3mZqc"}},,function(e,t,n){e.exports={projectslist:"ProjectList_projectslist__27JvW"}},function(e,t,n){e.exports={container:"Projects_container__3bsY1"}},,function(e,t,n){e.exports={row:"InfoRow_row__2-IDI"}},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports={header:"MainHeader_header__X0RrD"}},,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),o=n(6),s=(n(24),n(2)),a=n(0),i=function(){return Object(a.jsx)("h1",{children:"The Welcome Page"})},l=n(3),j=n(5),d=n.n(j),u=n(7),h=n(1),b=n.n(h),p=n(12),x=n.n(p),f=function(e){return Object(a.jsxs)("div",{className:x.a.card,children:[Object(a.jsxs)("header",{className:x.a.cardHeader,children:[Object(a.jsx)("p",{children:"Nov 16th 2021"}),Object(a.jsx)("h2",{children:e.title})]}),Object(a.jsx)("p",{children:e.description}),Object(a.jsxs)("h4",{children:["completed: ",e.completed]})]})},m=n(14),O=n.n(m),g=function(e){var t=e.items;return Object(a.jsx)("ul",{className:O.a.projectslist,children:t.map((function(e){return Object(a.jsx)(f,{title:e.title,description:e.description,completed:e.completed},e._id)}))})},v=n(15),w=n.n(v),y=b.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),_=function(e){var t=Object(h.useState)(null),n=Object(l.a)(t,2),c=n[0],r=n[1],o={token:c,isLoggedIn:!!c,login:function(e){r(e)},logout:function(){r(null)}};return Object(a.jsx)(y.Provider,{value:o,children:e.children})},P=y,k=function(){var e=Object(h.useContext)(P);Object(h.useEffect)((function(){var t=function(){var t=Object(u.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/allProjects",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}});case 3:return n=t.sent,t.next=6,n.json();case 6:if(c=t.sent,console.log("from AllProjects"),console.log(c),!c.error){t.next=11;break}throw new Error;case 11:r(c),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),r([{id:0,title:"No Projects to show ",description:"We had Some problem trying to fetch your projects from The server Please wait for a few Momnents and try again",completed:"false"}]),console.log("damn");case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var t=Object(h.useState)([{id:1,title:"Project 1",description:"This is the description for the first Project",completed:"true"},{id:2,title:"Second Project",description:"yet another description for the second Project",completed:"false"},{id:3,title:"The Third Project",description:"yet another description for the second Project",completed:"false"}]),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsx)("div",{className:w.a.container,children:Object(a.jsx)(g,{items:c})})},N=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h1",{children:"The Gallery Page"}),Object(a.jsx)(k,{})]})},T=n(8),S=n.n(T),C=function(){var e=Object(s.f)(),t=Object(h.useRef)(),n=Object(h.useRef)(),c=Object(h.useRef)(),r=Object(h.useContext)(P),o=Object(h.useState)(!0),i=Object(l.a)(o,2),j=i[0],b=i[1],p=function(){var o=Object(u.a)(d.a.mark((function o(s){var a,i,l,u,h,b,p;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s.preventDefault(),a=n.current.value,i=c.current.value,o.prev=3,!j){o.next=16;break}return o.next=7,fetch("/users/login",{method:"POST",body:JSON.stringify({email:a,password:i}),headers:{"Content-Type":"application/json"}});case 7:return l=o.sent,o.next=10,l.json();case 10:u=o.sent,console.log(u),r.login(u.token),e("/welcome"),o.next=26;break;case 16:return h=t.current.value,o.next=19,fetch("/users",{method:"POST",body:JSON.stringify({email:a,name:h,password:i}),headers:{"Content-Type":"application/json"}});case 19:return b=o.sent,o.next=22,b.json();case 22:p=o.sent,console.log(p),r.login(p.token),e("/welcome");case 26:o.next=31;break;case 28:o.prev=28,o.t0=o.catch(3),console.log(o.t0);case 31:case"end":return o.stop()}}),o,null,[[3,28]])})));return function(e){return o.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:S.a.auth,children:[Object(a.jsx)("h1",{children:j?"Login":"Sign Up"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:S.a.control,children:[Object(a.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(a.jsx)("input",{type:"email",id:"email",required:!0,ref:n})]}),!j&&Object(a.jsxs)("div",{className:S.a.control,children:[Object(a.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(a.jsx)("input",{type:"text",id:"name",required:!0,ref:t})]}),Object(a.jsxs)("div",{className:S.a.control,children:[Object(a.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(a.jsx)("input",{type:"password",id:"password",required:!0,ref:c})]}),Object(a.jsxs)("div",{className:S.a.actions,children:[Object(a.jsx)("button",{onClick:p,children:j?"Login":"Create Account"}),Object(a.jsx)("button",{type:"button",className:S.a.toggle,onClick:function(){b((function(e){return!e}))},children:j?"Create new account":"Login with existing account"})]})]})]})},F=function(){return Object(a.jsx)(C,{})},A=n(16),E=n(17),L=n.n(E),I=function(e){return Object(a.jsxs)("div",{className:L.a.row,children:[Object(a.jsxs)("label",{children:[e.label,": "]}),Object(a.jsx)("p",{children:e.info})]})},B=n(18),G=n.n(B),J=function(e){return Object(a.jsxs)("div",{className:G.a.container,children:[Object(a.jsx)(I,{label:"Name",info:e.name}),Object(a.jsx)(I,{label:"email",info:e.email}),Object(a.jsx)(I,{label:"age",info:e.age}),Object(a.jsx)(I,{label:"joined",info:e.joined})]})},R=n(19),W=n.n(R),Y=function(){var e=Object(h.useContext)(P),t=Object(h.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1];Object(h.useEffect)((function(){var t=function(){var t=Object(u.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}});case 3:return n=t.sent,t.next=6,n.json();case 6:if(c=t.sent,console.log("from user"),console.log(c),!c.error){t.next=11;break}throw new Error;case 11:j(c),r(!0),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),j({id:1,name:"Source Code",email:"source@gmail.com",age:404,joined:"25th nov 6969"}),r(!1),console.log("damn");case 21:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/projects",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}});case 3:return n=t.sent,t.next=6,n.json();case 6:if(c=t.sent,console.log("from projects"),console.log(c),!c.error){t.next=11;break}throw new Error;case 11:f(c),t.next=20;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0),f([{id:0,title:"No Projects to show ",description:"We had Some problem trying to fetch your projects from The server Please wait for a few Momnents and try again",completed:"false"}]),r(!1),console.log("damn");case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();t(),n()}),[]);var o=Object(h.useState)(),s=Object(l.a)(o,2),i=s[0],j=s[1],b=Object(h.useState)([{id:4,title:"Project 1",description:"This is the description for the first Project",completed:"true"},{id:5,title:"Second Project",description:"yet another description for the second Project",completed:"false"},{id:6,title:"The Third Project",description:"yet another description for the second Project",completed:"false"}]),p=Object(l.a)(b,2),x=p[0],f=p[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:W.a.showBox,children:c&&Object(a.jsx)(J,Object(A.a)({name:i.name,email:i.email,age:i.age,joined:i.createdAt},"name",i.name))}),Object(a.jsx)(g,{items:x})]})},q=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"The Profile Page"}),Object(a.jsx)(Y,{})]})},D=n(11),H=n(20),z=n.n(H),M=function(){var e=Object(h.useContext)(P).isLoggedIn;return Object(a.jsx)("header",{className:z.a.header,children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[!e&&Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/login",children:"Login / Signup"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/welcome",children:"Welcome"})}),e&&Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/gallery",children:"Gallery"})}),e&&Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/profile",children:"Profile"})}),e&&Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/signout",children:"Signout"})})]})})})},Q=function(e){return Object(a.jsxs)(D.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsx)("main",{children:e.children})]})};var U=function(){return Object(a.jsx)(Q,{children:Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{path:"/",element:Object(a.jsx)(F,{})}),Object(a.jsx)(s.a,{path:"/login",element:Object(a.jsx)(F,{})}),Object(a.jsx)(s.a,{path:"/welcome",element:Object(a.jsx)(i,{})}),Object(a.jsx)(s.a,{path:"/gallery",element:Object(a.jsx)(N,{})}),Object(a.jsx)(s.a,{path:"/profile",element:Object(a.jsx)(q,{})})]})})};r.a.render(Object(a.jsx)(_,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(U,{})})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.c286be01.chunk.js.map