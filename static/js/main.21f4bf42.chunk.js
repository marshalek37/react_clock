(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n(0),d=function(){return(new Date).toUTCString().slice(-12,-4)},h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).timerId=0,t.state={today:d()},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:d()}),console.info("".concat(t.state.today))}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.today,e=this.props.clockName;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(s.Component);n(13);function m(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).today=new Date,t.timerId=0,t.state={clockName:"Clock-0",hasClock:!0},t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:m()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleLeftClick),window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.21f4bf42.chunk.js.map