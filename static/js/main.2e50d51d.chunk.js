(this["webpackJsonpchildren-roledex"]=this["webpackJsonpchildren-roledex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(2),l=t.n(r),o=(t(12),t(3)),i=t(4),s=t(6),h=t(5),d=(t(13),function(e){return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{className:"card-image",alt:"child image",src:"https://biamuta-assets.s3.eu-west-2.amazonaws.com/child".concat(e.child.id,"sm.png")}),c.a.createElement("h2",null,e.child.name),c.a.createElement("p",null,e.child.email))}),u=(t(14),function(e){return c.a.createElement("div",{className:"card-list"},e.children.map((function(e){return c.a.createElement(d,{key:e.id,child:e})})))}),m=(t(15),function(e){var n=e.placeholder,t=e.handleChange;return c.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=(t(16),function(e){Object(s.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={children:[],searchField:""},e.handleChange=function(n){e.setState({searchField:n.target.value})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({children:n})}))}},{key:"render",value:function(){var e=this.state,n=e.children,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Children Roledex"),c.a.createElement(m,{placeholder:"search children",handleChange:this.handleChange}),c.a.createElement(u,{children:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.2e50d51d.chunk.js.map