(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,n,e){"use strict";var r=function(t){if(t)return t.reduce(function(t,n){return t.concat(n.tags.reduce(function(n,e){return!e||t.length&&0!==t.filter(function(t){return t.id===e}).length||n.push({id:e,isEnabled:!0,isSelected:!1}),n},[]))},[])},o=function(t,n){for(var e=[],r=0;r<t.length;r++){var o=t[r];if(o.context&&o.context.custom&&o.context.custom[n]){var i=o.context.custom[n];-1===e.indexOf(i)&&e.push(i)}}return e},i=e(9),u=function(t){var n=[];return i.a.map(function(e){var r=o(t,e);return n.push({id:e,options:r.map(function(t){return{id:t,isSelected:!1}})})}),n};e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},23:function(t,n,e){"use strict";var r=e(3),o=e(11),i=function(t){return t.tags},u=function(t){return t.tags.reduce(function(t,n){return n.isSelected&&t.push(n.id),t},[])},c=function(t){return function(n){n({type:"TOGGLE_TAG_SELECTED",id:t})}};e.d(n,"c",function(){return i}),e.d(n,"b",function(){return u}),e.d(n,"d",function(){return c});var a=[];n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.a:return Object(o.c)(n.payload.photos);case"TOGGLE_TAG_SELECTED":return t.map(function(t){return t.id!==n.id?t:Object.assign({},t,{isSelected:!t.isSelected})});case"TOGGLE_TAG_ENABLED":default:return t}}},3:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r="FETCH_PHOTOS_SUCCESS"},32:function(t,n,e){"use strict";var r=e(8),o=e(3),i=e(7),u=function(t){return t.photos.photos},c=function(t,n){return t.photos.photos.filter(function(t){return t.id===n.id})};Object(i.a)(c,function(t){return t&&t.tags}),Object(i.a)(c,function(t){return t&&t.album}),Object(i.a)(c,function(t){return t&&t.medium}),Object(i.a)(c,function(t){return t&&t.subject}),e(36);e.d(n,"b",function(){return u});var a={photos:[],error:null};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.a:return Object(r.a)({},t,{photos:n.payload.photos});default:return t}}},37:function(t,n,e){t.exports=e(67)},46:function(t,n,e){},47:function(t,n,e){},67:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),i=e(24),u=e.n(i),c=e(10),a=e.n(c),s=e(20),d=(e(46),e(15)),f=e(16),l=e(18),p=e(17),h=e(19),v=(e(47),a()({loader:function(){return Promise.all([e.e(3),e.e(1)]).then(e.bind(null,156))},loading:function(){return o.a.createElement("div",null,"loading...")},modules:["photography"]})),b=function(t){function n(){return Object(d.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(h.a)(n,t),Object(f.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=e(4),m=e(34),g=e(35),O=e(32),j=e(23),w=e(9),S=Object(m.composeWithDevTools)(Object(E.applyMiddleware)(g.a))(E.createStore),T=Object(E.combineReducers)({photos:O.a,tags:j.a,filters:w.b});var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S(T,t)}(window.REDUX_STATE||{}),G=o.a.createElement(s.a,{store:y},o.a.createElement(b,null));window.onload=function(){a.a.preloadReady().then(function(){u.a.hydrate(G,document.getElementById("root"))})},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,n,e){"use strict";var r=e(8),o=e(3),i=e(11),u=["medium","subject","location"],c=function(t){return t.filters},a=function(t){return t.filters.reduce(function(t,n){if(n&&n.options.length){var e=n.options.filter(function(t){return!0===t.isSelected});e.length&&(t[n.id]=e[0].id)}return t},{})},s=function(t,n){return function(e){e({type:"TOGGLE_SELECTED_FILTER",title:t,option:n})}};e.d(n,"a",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return s});var d=[];n.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o.a:return Object(i.b)(n.payload.photos);case"TOGGLE_SELECTED_FILTER":return t.map(function(t){return t.id!==n.title?t:Object(r.a)({},t,{options:t.options.map(function(t){return t.id!==n.option?Object.assign({},t,{isSelected:!1}):Object.assign({},t,{isSelected:!t.isSelected})})})});default:return t}}}},[[37,2,4]]]);
//# sourceMappingURL=main.0908941b.chunk.js.map