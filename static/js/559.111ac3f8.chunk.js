"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{8559:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(9439),r=n(2791),s=n(9434),c=n(208),i="ContactForm_form__dhl+T",u="ContactForm_input__Bl93P",o="ContactForm_btn__wll+u",l=function(e){return e.contacts.items},m=function(e){return e.filter.filter},d=function(e){return e.contacts.isLoading},f=function(e){return e.contacts.error},_=n(184),p=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],m=t[1],d=(0,r.useState)(""),f=(0,a.Z)(d,2),p=f[0],h=f[1],v=(0,s.v9)(l),x=(0,s.I0)();return(0,_.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=n.toLowerCase();if(v.find((function(e){return e.name.toLowerCase()===t})))return alert("".concat(n," is already in contacts."));n&&p&&(x((0,c.uK)({name:n,phone:p})),e.target.reset(m&&h({name:"",phone:""})))},children:[(0,_.jsxs)("label",{children:["Name",(0,_.jsx)("input",{type:"text",name:"name",className:u,placeholder:"Add a name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(e){return m(e.target.value)}})]}),(0,_.jsx)("input",{type:"tel",name:"phone",className:u,placeholder:"Add a number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:function(e){return h(e.target.value)}}),(0,_.jsx)("button",{type:"submit",className:o,children:"Add"})]})},h={item:"ContactList_item__EZYHO",btn:"ContactList_btn__6Piat"},v=function(e){var t=e.id,n=e.name,a=e.number,r=(0,s.I0)();return(0,_.jsxs)("li",{className:h.item,children:[n," : ",a,(0,_.jsx)("button",{className:h.btn,onClick:function(){return r((0,c.GK)(t))},children:"Delete"})]})},x=n(2877),b=function(){var e=(0,s.v9)(l),t=(0,s.v9)(m),n=(0,s.v9)(d),a=(0,s.v9)(f),i=(0,s.I0)();(0,r.useEffect)((function(){i((0,c.yF)())}),[i]);var u=t&&""!==t?e.filter((function(e){return e.name.toLowerCase().includes(t)})):e;return(0,_.jsxs)("ul",{className:h.list,children:[n&&!a&&(0,_.jsx)(x.Z,{}),u.map((function(e){return(0,_.jsx)(v,{id:e.id,name:e.name,number:e.phone},e.id)}))]})},j="Filter_filter__vxThR",C="Filter_label__vEd1E",N="Filter_input__N7T3z",g=n(6895),w=function(){var e=(0,s.I0)(),t=(0,s.v9)(m);return(0,_.jsx)("div",{className:j,children:(0,_.jsxs)("label",{className:C,children:["Find contacts by name",(0,_.jsx)("input",{className:N,name:"filter",type:"text",id:"filter",value:t,onChange:function(t){return e((0,g.$)(t.currentTarget.value))}})]})})},F="ContactPage_ContactWrapper__dDYcQ",k=function(){return(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)(p,{}),(0,_.jsx)(w,{}),(0,_.jsx)(b,{})]})}}}]);
//# sourceMappingURL=559.111ac3f8.chunk.js.map