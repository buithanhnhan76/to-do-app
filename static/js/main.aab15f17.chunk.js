(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),s=n(18),r=n.n(s),c=(n(28),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))}),l=n(8),o=n.n(l),u=n(19),h=n(3),j=n(4),d=n(6),p=n(5),b=(n(30),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Hello Guy!"}),Object(a.jsxs)("h2",{children:["It is ",this.state.date.toLocaleTimeString(),". "]})]})}}]),n}(i.Component)),v=n(20),g=n.n(v),k=n(21),m=n.n(k);var O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentPage:0,pageSize:5},e.handlePageChange=function(t){var n=t.selected;e.setState({currentPage:n})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.willPower,n=function(e,t,n){var a=(t-1)*n;return m()(e).slice(a).take(n).value()}(e.tasks,this.state.currentPage,this.state.pageSize);return t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"This Is Your Tasks Today !"}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)("li",{children:e.title},e.id)}))}),Object(a.jsx)(g.a,{onPageChange:this.handlePageChange,marginPagesDisplayed:2,containerClassName:"pagination",pageClassName:"page-item",nextClassName:"page-item",previousClassName:"page-item",breakClassName:"page-item",activeClassName:"page-item active",pageLinkClassName:"page-link",nextLinkClassName:"page-link",previousLinkClassName:"page-link",breakLinkClassName:"page-link",activeLinkClassName:"page-link"})]}):Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"There're somethings you need to do !"})})}}]),n}(i.Component),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.willPower;return Object(a.jsx)("button",{onClick:this.props.onClick,className:e?"btn btn-danger":"btn btn-success",children:e?"Finish":"Get it"})}}]),n}(i.Component),C=n(22),w=n.n(C),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={tasks:[],willPower:!1},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/todos");case 2:t=e.sent,this.setState({tasks:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(){this.setState({willPower:!this.state.willPower})}},{key:"render",value:function(){var e=this,t=this.state,n=t.tasks,i=t.willPower;return Object(a.jsxs)("div",{className:"container-fluid mt-3",children:[Object(a.jsx)(b,{}),Object(a.jsxs)("div",{className:"row container-fluid",children:[Object(a.jsx)("div",{className:"col-10",children:Object(a.jsx)(O,{tasks:n,willPower:i})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)(f,{willPower:i,onClick:function(){return e.handleClick()}})})]})]})}}]),n}(i.Component);r.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),c()}},[[50,1,2]]]);
//# sourceMappingURL=main.aab15f17.chunk.js.map