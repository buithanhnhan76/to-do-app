(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),s=n(7),r=n.n(s),a=(n(13),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))}),o=n(2),l=n(3),u=n(5),j=n(4),h=(n(14),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={date:new Date},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){return t.tick()}),1e3)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Hello Guy!"}),Object(c.jsxs)("h2",{children:["It is ",this.state.date.toLocaleTimeString(),". "]})]})}}]),n}(i.Component)),b=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.willPower?Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"This Is Your Tasks Today !"}),Object(c.jsx)("ul",{children:this.props.tasks.map((function(t){return Object(c.jsx)("li",{children:t},t)}))})]}):Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"There're somethings you need to do !"})})}}]),n}(i.Component),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.willPower;return Object(c.jsx)("button",{onClick:this.props.onClick,className:t?"btn btn-danger":"btn btn-success",children:t?"Finish":"Get it"})}}]),n}(i.Component),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={tasks:[" Reactjs: Axios"," Improve: Html, Css, JavaScript, Bootstrap4"],willPower:!1},t}return Object(l.a)(n,[{key:"handleClick",value:function(){this.setState({willPower:!this.state.willPower})}},{key:"render",value:function(){var t=this,e=this.state,n=e.tasks,i=e.willPower;return Object(c.jsxs)("div",{className:"container mt-3",children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)(b,{tasks:n,willPower:i})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(d,{willPower:i,onClick:function(){return t.handleClick()}})})]})]})}}]),n}(i.Component);n(15);r.a.render(Object(c.jsx)(O,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.aec1a124.chunk.js.map