(this.webpackJsonpvladapp=this.webpackJsonpvladapp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(6),l=a.n(u),o=(a(12),a(1)),c=a(2),s=a(4),i=a(3),m=(a(13),function(e){return r.a.createElement("div",{className:"InputText"},r.a.createElement("p",null,"Enter task"),r.a.createElement("input",{type:"text",className:"InputText-field",min:"1",max:"8"}))}),p=(a(14),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={hoursValue:1},e.plusOne=function(){e.state.hoursValue>7?e.setState({hoursValue:e.state.hoursValue}):e.setState({hoursValue:e.state.hoursValue+1})},e.minusOne=function(){e.state.hoursValue<2?e.setState({hoursValue:e.state.hoursValue}):e.setState({hoursValue:e.state.hoursValue-1})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"InputHours"},r.a.createElement("p",null,"Enter number of hours (1-8)"),r.a.createElement("div",{className:"inputControls"},r.a.createElement("input",{type:"number",className:"InputHours-field",min:"1",max:"8",value:this.state.hoursValue,disabled:!0}),r.a.createElement("div",{className:"HoursButtons"},r.a.createElement("button",{onClick:this.plusOne},"+"),r.a.createElement("button",{onClick:this.minusOne},"-"))))}}]),a}(n.Component)),h=(a(15),function(e){return r.a.createElement("div",{className:"InputBox"},r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement("button",{className:"start"},"Start"))}),f=(a(16),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SmartWrap"},r.a.createElement(h,null))}}]),a}(n.Component)),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"PapaVlad's working timer"),r.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.8b5c484b.chunk.js.map