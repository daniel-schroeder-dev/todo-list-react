(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(13),n(6)),u=n(3),s=n(4),l=n(7),d=n(5);n(14);var h=function(t){return a.a.createElement("form",{onSubmit:function(e){return t.onSubmit(e)}},a.a.createElement("input",{type:"text",placeholder:"Add a Todo",value:t.todo,onChange:t.onChange}))};n(15);var m=function(t){return a.a.createElement("li",{className:t.completed?"completed":""},t.name)},p=(n(16),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],todo:""},t.handleCreateTodo=function(e){e.preventDefault();var n=t.state.todo;fetch("https://ds-dev-todo-api.herokuapp.com/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}).then((function(t){return t.json()})).then((function(e){t.setState((function(t){var n=t.todos.map((function(t){return Object(i.a)({},t)}));return n.push(e),{todos:n}}))})).catch(console.error),t.setState({todo:""})},t.handleCreateTodoInput=function(e){t.setState({todo:e.target.value})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://ds-dev-todo-api.herokuapp.com/api/todos").then((function(t){return t.json()})).then((function(e){return t.setState({todos:e})})).catch(console.error)}},{key:"render",value:function(){var t=this.state.todos.map((function(t){return a.a.createElement(m,{key:t._id,name:t.name,completed:t.completed})}));return a.a.createElement("div",null,a.a.createElement("h1",null,"TodoList"),a.a.createElement(h,{onSubmit:this.handleCreateTodo,onChange:this.handleCreateTodoInput,todo:this.state.todo}),a.a.createElement("ul",null,t))}}]),n}(a.a.Component));n(17);var f=function(){return a.a.createElement("main",{className:"app"},a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b7edf7e7.chunk.js.map