(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),b=n(4),i=n(1),o=(n(9),n(0)),r=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.find((function(t){return t.id===n}))||e[0];return Object(o.jsxs)(o.Fragment,{children:[e.map((function(t){return Object(o.jsx)("button",{type:"button",onClick:function(){return c(t)},children:t.title},t.id)})),Object(o.jsx)("p",{"data-cy":"tab-content",children:a.content})]})},s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],d=function(){var t=Object(i.useState)(s[0]),e=Object(b.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Selected tab is Tab ".concat(n.title)}),Object(o.jsx)(r,{tabs:s,selectedTabId:n.id,onTabSelected:c})]})};a.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.80b258ba.chunk.js.map