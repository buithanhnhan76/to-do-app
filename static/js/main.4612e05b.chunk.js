(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(32),r=n.n(i),l=(n(43),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))}),o=n(13),u=n.n(o),d=n(36),j=n(16),h=n(8),b=n(9),p=n(11),m=n(10),O=(n(45),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Hello Guy"}),Object(a.jsxs)("h2",{children:["It is ",this.state.date.toLocaleTimeString(),". "]})]})}}]),n}(s.Component)),f=n(37),k=n(33),v=n.n(k),g=n(34),x=n.n(g);var C=n.p+"static/media/tasks.f287a546.jpg",w=n(14),N=n(2),y=function(e){var t=e.match.params.id,n=Object(s.useContext)(I),i=n.tasks.filter((function(e){return e.id===parseInt(t)}));return Object(a.jsxs)("div",{className:"container-fluid",children:[i[0]?Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("p",{children:["ID: ",i[0].id]}),Object(a.jsxs)("p",{children:["TITLE: ",i[0].title]}),Object(a.jsxs)("p",{children:["COMPLETE: ",i[0].completed?Object(a.jsx)("span",{className:"badge badge-success",children:"Complete"}):Object(a.jsx)("span",{className:"badge badge-danger",children:"Not Yet"})]}),Object(a.jsx)("button",{className:"btn btn-warning d-block",onClick:function(){return n.onUpdate(i[0])},children:"Update"}),Object(a.jsx)("button",{className:"btn btn-danger d-block my-3",onClick:function(){n.onDelete(i[0])},children:"Delete"})]}):Object(a.jsx)("span",{className:"badge badge-warning mb-3",children:"Delete Successful"}),Object(a.jsx)("button",{className:"btn btn-success mb-3 d-block",onClick:function(){return e.history.push("/")},children:"Close"})]})},P=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={currentPage:0,pageSize:5},e.handlePageChange=function(t){var n=t.selected;e.setState({currentPage:n})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.willPower,n=e.tasks,s=this.state,c=s.pageSize,i=function(e,t,n){var a=(t-1)*n;return x()(e).slice(a).take(n).value()}(n,s.currentPage,c),r=Math.ceil(n.length/c);return t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Your tasks !"}),i.map((function(e){return Object(a.jsxs)("div",{className:"row mb-3",children:[Object(a.jsx)("div",{className:"col-8 text-truncate",children:e.title}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)(w.b,{to:"/taskdetails/".concat(e.id),children:Object(a.jsx)("button",{className:"btn btn-success",children:"Details"})})})]},e.id)})),Object(a.jsx)(v.a,{pageCount:r,onPageChange:this.handlePageChange,marginPagesDisplayed:2,containerClassName:"pagination",pageClassName:"page-item",nextClassName:"page-item",previousClassName:"page-item",breakClassName:"page-item",activeClassName:"page-item active",pageLinkClassName:"page-link",nextLinkClassName:"page-link",previousLinkClassName:"page-link",breakLinkClassName:"page-link",activeLinkClassName:"page-link"}),Object(a.jsx)(N.a,{path:"/taskdetails/:id",render:function(e){return Object(a.jsx)(y,Object(f.a)({},e))}})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Tasks for you !"}),Object(a.jsx)("img",{className:"img img-thumbnail img-deco",src:C})]})}}]),n}(s.Component),D=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.willPower;return Object(a.jsx)("button",{onClick:this.props.onClick,className:e?"btn btn-danger":"btn btn-success",children:e?"Finish":"Get it"})}}]),n}(s.Component),S=n(17),L=n.n(S),I=c.a.createContext(),T=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[],willPower:!1},e.handleUpdate=function(){var t=Object(j.a)(u.a.mark((function t(n){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(d.a)(e.state.tasks),s=a.indexOf(n),a[s].completed=!a[s].completed,e.setState({tasks:a}),t.next=6,L.a.put("https://jsonplaceholder.typicode.com/todos/"+n.id,n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDelete=function(){var t=Object(j.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.tasks.filter((function(e){return e.id!==n.id})),e.setState({tasks:a}),t.next=4,L.a.delete("https://jsonplaceholder.typicode.com/todos/"+n.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://jsonplaceholder.typicode.com/todos");case 2:t=e.sent,this.setState({tasks:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){this.setState({willPower:!this.state.willPower})}},{key:"render",value:function(){var e=this,t=this.state,n=t.tasks,s=t.willPower;return Object(a.jsx)(I.Provider,{value:{tasks:this.state.tasks,onUpdate:this.handleUpdate,onDelete:this.handleDelete},children:Object(a.jsxs)("div",{className:"container mt-5",children:[Object(a.jsx)(O,{}),Object(a.jsxs)("div",{className:"row ",children:[Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsx)(P,{tasks:n,willPower:s})}),Object(a.jsx)("div",{className:"col-md-6 mt-2",children:Object(a.jsx)(D,{willPower:s,onClick:function(){return e.handleClick()}})})]})]})})}}]),n}(s.Component);r.a.render(Object(a.jsx)(w.a,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),l()}},[[69,1,2]]]);
//# sourceMappingURL=main.4612e05b.chunk.js.map