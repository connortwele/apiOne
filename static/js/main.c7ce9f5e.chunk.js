(this["webpackJsonpapi-one"]=this["webpackJsonpapi-one"]||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/chuckFace.8fd2e6f8.png"},18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(12),r=n.n(c),i=(n(23),n(13)),l=n(14),s=n(17),u=n(16),h=n(2),f=n.n(h),d=n(15),m=n.n(d),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={fact:""},e.handleChange=function(){f.a.get("https://api.chucknorris.io/jokes/random").then((function(t){console.log(t.data.value),e.setState({fact:t.data.value})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.chucknorris.io/jokes/random").then((function(t){console.log(t.data.value),e.setState({fact:t.data.value})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Chuck Norris Facts"),this.state.fact,o.a.createElement("div",null,o.a.createElement("img",{src:m.a,alt:"chuck norris face",onClick:this.handleChange}),o.a.createElement("p",null,"click Chuck for the next fact")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c7ce9f5e.chunk.js.map