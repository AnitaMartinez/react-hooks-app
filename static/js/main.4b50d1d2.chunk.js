(this["webpackJsonpreact-hooks-crud"]=this["webpackJsonpreact-hooks-crud"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),u=n.n(l),c=(n(12),n(6)),m=n(1),s=function(e){var t=e.users,n=e.onDeleteUser,a=e.onEditUser;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.length>0?t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,r.a.createElement("button",{className:"button muted-button",onClick:function(){return a(e)}},"Edit"),r.a.createElement("button",{onClick:function(){return n(e)},className:"button muted-button"},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No users"))))},i=n(2),o=n(3),d=function(e){var t={name:"",username:""},n=Object(a.useState)(t),l=Object(m.a)(n,2),u=l[0],c=l[1],s=function(e){var t=e.target,n=t.name,a=t.value;c(Object(o.a)({},u,Object(i.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(n){var a=e.onAddUser;n.preventDefault(),u.name&&u.username&&(a(u),c(t))}},r.a.createElement("label",{id:"name"},"Name"),r.a.createElement("input",{onChange:s,type:"text",name:"name",value:u.name}),r.a.createElement("label",{id:"username"},"Username"),r.a.createElement("input",{onChange:s,type:"text",name:"username",value:u.username}),r.a.createElement("button",null,"Add new user"))},E=function(e){var t=e.setEditing,n=e.currentUser,l=e.updateUser,u=Object(a.useState)(n),c=Object(m.a)(u,2),s=c[0],d=c[1];Object(a.useEffect)((function(){d(e.currentUser)}),[e]);var E=function(e){var t=e.target,n=t.name,a=t.value;d(Object(o.a)({},s,Object(i.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(s.id,s)}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:s.name,onChange:E}),r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",value:s.username,onChange:E}),r.a.createElement("button",null,"Update user"),r.a.createElement("button",{onClick:function(){return t(!1)},className:"button muted-button"},"Cancel"))},b=[{id:1,name:"Tania",username:"floppydiskette"},{id:2,name:"Craig",username:"siliconeidolon"},{id:3,name:"Ben",username:"benisphere"}],f=function(){var e=Object(a.useState)(b),t=Object(m.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(!1),i=Object(m.a)(u,2),o=i[0],f=i[1],p=Object(a.useState)({id:null,name:"",username:""}),v=Object(m.a)(p,2),h=v[0],j=v[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"CRUD App with Hooks"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},o?r.a.createElement(E,{setEditing:f,currentUser:h,updateUser:function(e,t){f(!1);var a=n.map((function(n){return n.id===e?t:n}));l(a)}}):r.a.createElement("div",null,r.a.createElement("h2",null,"Add user"),r.a.createElement(d,{onAddUser:function(e){e.id=n.length+1,l([].concat(Object(c.a)(n),[e]))},editingMode:o}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View users"),r.a.createElement(s,{users:n,onDeleteUser:function(e){f(!1);var t=n.filter((function(t){return t.id!==e.id}));l(t)},onEditUser:function(e){f(!0),j({id:e.id,name:e.name,username:e.username})}}))))};u.a.render(r.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4b50d1d2.chunk.js.map