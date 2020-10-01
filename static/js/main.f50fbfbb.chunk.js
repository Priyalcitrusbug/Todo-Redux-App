(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{207:function(e,t,n){e.exports=n(400)},400:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(77),c=n.n(r),l=n(81),i=n.n(l),u=(n(212),n(214),n(39)),s=n(14),d=n(6),b=n(79),p=Object(u.b)({firebase:d.firebaseReducer,firestore:b.firestoreReducer}),m=n(206),f=n(3),E=function(e){var t=e.children,n=Object(m.a)(e,["children"]),o=Object(s.b)((function(e){return e.firebase.auth}));return a.a.createElement(f.b,Object.assign({},n,{render:function(e){var n=e.location;return Object(d.isLoaded)(o)&&!Object(d.isEmpty)(o)?t:a.a.createElement(f.a,{to:{pathname:"/",state:{from:n}}})}}))},h=n(80),v=function(){var e=Object(o.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(d.useFirestore)(),l=Object(s.b)((function(e){return e.firebase.auth})).uid;return a.a.createElement("div",null,a.a.createElement("form",{action:""},a.a.createElement("input",{type:"text",name:"addTodo",value:n,onChange:function(e){var t=e.currentTarget,n=t.name,o=t.value;"addTodo"===n&&r(o)}}),a.a.createElement("button",{onClick:function(e){var t;e.preventDefault(),t=n,c.collection("users").doc(l).collection("todos").add({title:t,isDone:!1}).then((function(e){e.update({todoID:e.id})})),r("")}},"Add Todo")))},j=function(e){var t=e.isDone,n=e.title,r=e.todoID,c=Object(o.useState)(t),l=Object(h.a)(c,2),i=l[0],u=l[1],b=Object(d.useFirestore)(),p=Object(s.b)((function(e){return e.firebase.auth})).uid;return a.a.createElement("div",{style:{textDecoration:i&&"line-through",opacity:i?.5:1}},a.a.createElement("input",{type:"checkbox",name:"",id:"",onChange:function(e){"checkbox"===e.currentTarget.type&&(u(!i),b.collection("users").doc(p).collection("todos").doc(r).update({isDone:!i}))},checked:i}),n,i?a.a.createElement("button",{type:"button",onClick:function(){b.collection("users").doc(p).collection("todos").doc(r).delete().then((function(){console.log("Deleted")})).catch((function(e){console.error("Error removing document: ",e)}))}},"Remove"):a.a.createElement("button",{disabled:!0},"Remove"))},g=function(){var e=Object(s.b)((function(e){return e.firebase.auth})),t=e.displayName,n=e.uid;Object(d.useFirestoreConnect)({collection:"users/".concat(n,"/todos"),storeAs:"todos"});var o=Object(s.b)((function(e){return e.firestore.data.todos}));return a.a.createElement("div",null,a.a.createElement("h3",null,"Hello ",t),a.a.createElement("h4",null,"Todos"),a.a.createElement(v,null),a.a.createElement("ul",{style:{listStyleType:"none"}},o&&Object.values(o).map((function(e){return a.a.createElement("li",null,null===e?"":a.a.createElement(j,{title:e.title,isDone:e.isDone,todoID:e.todoID}))}))))},O=function(){var e=Object(d.useFirebase)(),t=Object(f.g)();return a.a.createElement("div",null,a.a.createElement("h1",null,"Sign In"),a.a.createElement("button",{onClick:function(n){n.preventDefault(),e.login({provider:"google",type:"popup"}).then((function(){t.push("/todos")}))}},"Sign In with Google"))};var y=function(){return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("h1",null,"Redux Todo App"),a.a.createElement(f.d,null,a.a.createElement(E,{path:"/todos"},a.a.createElement(g,null)),a.a.createElement(f.b,{path:"/"},a.a.createElement(O,null))))},D=n(52);i.a.initializeApp({apiKey:"AIzaSyAd4eJ6sW-JoEBoBlC8_bf1c246my4GXnE",authDomain:"to-do-app-b0d04.firebaseapp.com",databaseURL:"https://to-do-app-b0d04.firebaseio.com",projectId:"to-do-app-b0d04",storageBucket:"to-do-app-b0d04.appspot.com",messagingSenderId:"598084711554",appId:"1:598084711554:web:95695b55375efe60c8709b",measurementId:"G-2RMYB947NN"}),i.a.firestore();var I=Object(u.c)(p,{}),k={firebase:i.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:I.dispatch,createFirestoreInstance:b.createFirestoreInstance};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:I},a.a.createElement(d.ReactReduxFirebaseProvider,k,a.a.createElement(D.a,null,a.a.createElement(y,null))))),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.f50fbfbb.chunk.js.map