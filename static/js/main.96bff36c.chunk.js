(this.webpackJsonpwebsite1=this.webpackJsonpwebsite1||[]).push([[0],{23:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(17),n=c.n(i),r=(c(23),c(3)),l=c(0);var j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"header",children:[Object(l.jsxs)("div",{className:"left_header",children:[Object(l.jsxs)("h1",{children:[e.name," ",Object(l.jsx)("strong",{className:"brand",children:"XYZ manegers.."})]}),Object(l.jsx)("p",{children:"Lorem ipsum, Commodi, eaque quas sed odit doloribus modi."}),Object(l.jsx)(r.b,{to:e.visit,children:Object(l.jsx)("button",{children:e.btname})})]}),Object(l.jsx)("div",{className:"right_header",children:Object(l.jsx)("img",{className:"animated",src:e.imgsrc,alt:"image"})})]})})},b=c.p+"static/media/homeheader.70c46cb8.svg";var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{name:"Grow your Business with",imgsrc:b,visit:"/service",btname:"Get Started"})})},d=c.p+"static/media/aboutheader.a49b8659.svg";var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(j,{name:"Welcome to About Page",imgsrc:d,visit:"/contact",btname:"Contact Now"})})},h=c(10),x=c(16),O=c(11);var u=function(){var e=Object(s.useState)({fullname:"",phone:"",email:"",message:""}),t=Object(O.a)(e,2),c=t[0],a=t[1],i=function(e){var t=e.target.name,c=e.target.value;a((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},t,c))}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"contact",children:[Object(l.jsx)("h1",{children:"Contact Us"}),Object(l.jsx)("div",{className:"cform",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.fullname&&c.phone&&c.email&&c.message?(alert("".concat(c.fullname," thanks for contacting us, We will ans your queries asap!")),a({fullname:"",phone:"",email:"",message:""})):alert("Fill all the inputs below")},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:"Fullname"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",name:"fullname",value:c.fullname,onChange:i,placeholder:"Enter your full name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:"Phone Number"}),Object(l.jsx)("input",{type:"number",autoComplete:"off",name:"phone",value:c.phone,onChange:i,placeholder:"Enter you phone number"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:"Email ID"}),Object(l.jsx)("input",{type:"email",autoComplete:"off",name:"email",value:c.email,onChange:i,placeholder:"Enter your email address"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:"Message"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"message",value:c.message,onChange:i,placeholder:"Write your queries here"})]}),Object(l.jsx)("button",{children:"Submit"})]})})]})})};var v=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.imgsrc,alt:"cardimg"}),Object(l.jsxs)("div",{className:"carddesc",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)("p",{children:"Lorem ipsum dolor si saepe in! Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(l.jsx)(r.b,{to:"",children:Object(l.jsx)("button",{children:"Go Somewhere"})})]})]})})},p=[{imgsrc:c.p+"static/media/sc1.dc47c6d5.jpg",title:"Web Development"},{imgsrc:c.p+"static/media/sc2.2373d890.jpg",title:"Web Development"},{imgsrc:c.p+"static/media/sc3.f39f92fd.jpg",title:"Web Development"},{imgsrc:c.p+"static/media/sc4.fe61465a.jpg",title:"Web Development"},{imgsrc:c.p+"static/media/sc5.79fcfca6.jpg",title:"Web Development"}];var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{id:"service",children:[Object(l.jsx)("h1",{children:"Our Services.."}),Object(l.jsx)("div",{className:"cardsec",children:p.map((function(e,t){return Object(l.jsx)(v,{imgsrc:e.imgsrc,title:e.title},t)}))})]})})};var f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"rightnav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,activeClassName:"active_class",to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,activeClassName:"active_class",to:"/service",children:"Service"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,activeClassName:"active_class",to:"/about",children:"About Us"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{exact:!0,activeClassName:"active_class",to:"/contact",children:"Contact Us"})})]})})})};var C=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],i=function(){a(!1)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{class:"burger",onClick:function(){a(!c)},children:[Object(l.jsx)("div",{class:"line"}),Object(l.jsx)("div",{class:"line"}),Object(l.jsx)("div",{class:"line"})]}),Object(l.jsx)("div",{className:"rightnav rightnavbur",style:{display:c?"block":"none"},children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{onClick:i,exact:!0,activeClassName:"active_class",to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{onClick:i,exact:!0,activeClassName:"active_class",to:"/service",children:"Service"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{onClick:i,exact:!0,activeClassName:"active_class",to:"/about",children:"About Us"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{onClick:i,exact:!0,activeClassName:"active_class",to:"/contact",children:"Contact Us"})})]})})]})};var F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("div",{className:"leftnav",children:Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("h1",{children:"Hello"})})}),Object(l.jsx)(f,{}),Object(l.jsx)(C,{})]})})};var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{id:"footer",children:Object(l.jsx)("p",{children:"Made with \u2764\ufe0f by Sudipta Das"})})})},y=c(2);var S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(F,{}),Object(l.jsxs)(y.d,{children:[Object(l.jsx)(y.b,{exact:!0,path:"/",component:o}),Object(l.jsx)(y.b,{exact:!0,path:"/about",component:m}),Object(l.jsx)(y.b,{exact:!0,path:"/contact",component:u}),Object(l.jsx)(y.b,{exact:!0,path:"/service",component:g}),Object(l.jsx)(y.a,{to:"/"})]}),Object(l.jsx)(N,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(S,{})})})}),document.getElementById("root")),w()}},[[33,1,2]]]);
//# sourceMappingURL=main.96bff36c.chunk.js.map