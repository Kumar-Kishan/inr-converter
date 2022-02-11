(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[t._m(0),n("div",{staticClass:"row justify-content-evenly"},[n("div",{staticClass:"col"},[n("table",{staticClass:"table table-striped text-center"},[n("thead",[n("tr",t._l(t.destCountries,(function(e){return n("th",{key:e.code},[t._v(" "+t._s(e.code)+" ")])})),0)]),n("tbody",[n("tr",t._l(t.destCountries,(function(e){return n("td",{key:e.code},[t._v(" "+t._s(t.rates[e.code]?Math.round(1e4*t.rates[e.code].rate)/1e4+" "+e.symbol:"-")+" ")])})),0)])])])]),n("div",{staticClass:"row justify-content-evenly"},t._l(t.destCountries,(function(e){return n("div",{key:e.code,staticClass:"col-md-4 px-4 py-4"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),n("div",{staticClass:"card-text"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"country.amount"}],staticClass:"text-center form-control",attrs:{type:"text"},domProps:{value:e.amount},on:{input:function(n){n.target.composing||t.$set(e,"amount",n.target.value)}}}),n("span",{staticClass:"input-group-text"},[t._v(t._s(t.countries[0].symbol))])])]),n("div",{staticClass:"col"},[t.rates[e.code]?n("p",{staticClass:"mt-2 text-start"},[t._v(" = "+t._s(Math.round(t.rates[e.code].rate*e.amount*1e4)/1e4)+" "+t._s(e.symbol)+" ")]):t._e()])])])])])])})),0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"row"},[n("h1",[t._v("INR Currency Converter")])])}],s=n("5530"),c=(n("4de4"),n("d3b7"),n("2f62")),i={name:"App",data:function(){return{base:"INR",countries:[{code:"INR",name:"Indian Rupees",symbol:"₹",amount:1},{code:"USD",name:"US Dollars",symbol:"$",amount:1},{code:"EUR",name:"Euro",symbol:"€",amount:1},{code:"GBP",name:"British Pound",symbol:"£",amount:1},{code:"AUD",name:"Australian Dollar",symbol:"$",amount:1},{code:"SGD",name:"Singapore Dollar",symbol:"$",amount:1}]}},mounted:function(){this.setupPolling()},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["rates"])),{},{destCountries:function(){var t=this;return this.countries.filter((function(e){return e.code!==t.base}))}}),methods:Object(s["a"])({},Object(c["b"])(["setupPolling"]))},u=i,l=(n("5c0b"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,null,null),p=d.exports,f=n("1da1"),b=(n("96cf"),n("159b"),n("d4ec")),m=n("bee2"),h=n("262e"),v=n("2caf"),y=n("bc3a"),j=n.n(y),g=Object(m["a"])((function t(){Object(b["a"])(this,t),this.$http=j.a.create({baseURL:"https://inr-conversion-api.herokuapp.com/",headers:{"Content-Type":"application/json",Accept:"application/json"}})})),_=g,w=function(t){Object(h["a"])(n,t);var e=Object(v["a"])(n);function n(){return Object(b["a"])(this,n),e.call(this)}return Object(m["a"])(n,[{key:"fetchRates",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){e.$http.get("/").then((function(e){t(e.data)})).catch(n)})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(_),C=new w;r["a"].use(c["a"]);var O={rates:{}},x={rates:function(t){return t.rates}},R={setRates:function(t,e){t.rates=e}},P={fetchRates:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.fetchRates();case 2:n=e.sent,r={},n.forEach((function(t){r[t.to]=t})),t.commit("setRates",r);case 6:case"end":return e.stop()}}),e)})))()},setupPolling:function(){var t=this;this.dispatch("fetchRates"),setInterval((function(){t.dispatch("fetchRates")}),5e3)}},k=new c["a"].Store({state:O,mutations:R,actions:P,getters:x});n("b383");n("1235"),n("7b17"),r["a"].config.productionTip=!1,new r["a"]({store:k,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b383:function(t,e,n){}});
//# sourceMappingURL=app.36a6e033.js.map