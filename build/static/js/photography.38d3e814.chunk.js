(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,n){e.exports={"tablet-up":"min-width: 720px",wrapper:"Thumbnail_wrapper__17Iwh",squareCrop:"Thumbnail_squareCrop__2doBg",squareBorder:"Thumbnail_squareBorder__1Fu32"}},154:function(e,t,n){e.exports={"mobile-up":"min-width: 480px",container:"PhotoGrid_container__3cugW"}},155:function(e,t,n){e.exports={wrapper:"ComboBox_wrapper__1sP7n",optionsList:"ComboBox_optionsList__3oU4w",title:"ComboBox_title__3j_1x",option:"ComboBox_option__PwY0J",selected:"ComboBox_selected__3FhNw"}},156:function(e,t,n){e.exports={wrapper:"Filters_wrapper__3-ckh"}},157:function(e,t,n){e.exports={wrapper:"Accordion_wrapper__132cy",accordion:"Accordion_accordion__3pipN",label:"Accordion_label__3PAu0",open:"Accordion_open__2u_XP",icon:"Accordion_icon__17Upi"}},158:function(e,t,n){e.exports={button:"Tag_button__3HJ1d",isSelected:"Tag_isSelected__1uIi3"}},159:function(e,t,n){e.exports={wrapper:"Tags_wrapper__2K_k3"}},160:function(e,t,n){e.exports={container:"Photography_container__3Yss6"}},161:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n(16),i=n(19),c=n(17),o=n(18),s=n(0),u=n.n(s),l=n(21),p=n(86),b=n.n(p),d=n(73),h=n.n(d),m=h.a.bind(b.a),f=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.open,a=t.handleClick,r=m((e={},Object(l.a)(e,b.a.burger,!0),Object(l.a)(e,b.a.open,n),e));return u.a.createElement("button",{className:r,onClick:a},u.a.createElement("span",null),u.a.createElement("span",null),u.a.createElement("span",null))}}]),t}(s.Component),O=n(87),j=n.n(O),_=h.a.bind(j.a),g=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).toggleSideNav=function(){var t=e.state.open;e.setState({open:!t})},e.state={open:!1},e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.state.open,n=this.props.children,a=_((e={},Object(l.a)(e,j.a.flexContainer,!0),Object(l.a)(e,j.a.open,t),e));return u.a.createElement("div",{className:a},u.a.createElement("div",{className:j.a.positionContainer},u.a.createElement("nav",null,u.a.createElement(f,{handleClick:this.toggleSideNav,open:t}),n)))}}]),t}(s.Component),v=n(20),y=n(88),k=n.n(y),E=n(8),w=n(152),C=n.n(w),x=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.photo,a=e.width,r="c_scale,w_".concat(2*a),i=n.secure_url.split("/");return i.splice(i.length-2,0,r),u.a.createElement("div",{className:C.a.wrapper,style:Object(E.a)({},t)},u.a.createElement("img",{src:i.join("/"),alt:n.caption}))}}]),t}(s.Component),N=Object(v.b)(function(e){return Object(E.a)({},e)},function(){return{}})(x),q=n(153),R=n.n(q),S=n(2),T=n.n(S),F=(T.a.arrayOf(T.a.shape({public_id:T.a.string.isRequired,format:T.a.string.isRequired,version:T.a.number.isRequired,resource_type:T.a.string.isRequired,type:T.a.string.isRequired,created_at:T.a.string.isRequired,bytes:T.a.number.isRequired,width:T.a.number.isRequired,height:T.a.number.isRequired,url:T.a.string.isRequired,secure_url:T.a.string.isRequired,tags:T.a.array,context:T.a.object})),function(e,t,n){return function(e,t){var n=Object.keys(t);return n.length?e.reduce(function(e,a){return n.filter(function(e){return t[e]&&a.context&&a.context.custom[e]}).every(function(e){return t[e]===a.context.custom[e]})&&e.push(a),e},[]):e}(function(e,t){return e.reduce(function(e,n,a){return t.length&&t.find(function(e){return-1===n.tags.indexOf(e)})||e.push(n),e},[])}(e,n),t)}),W=n(154),B=n.n(W),A=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).dimensions={mobile:{column:110,gutter:15},desktop:{column:275,gutter:30}},n.breakpoint=720,n.handleResize=function(e){e&&e.target&&e.target.outerWidth&&n.setDimensions(e.target.innerWidth)},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){R.a.add("resize",300,this.handleResize),this.setDimensions(window.innerWidth)}},{key:"setDimensions",value:function(e){var t=e<=this.breakpoint?"mobile":"desktop";this.setState({viewport:t,gutterWidth:this.dimensions[t].gutter,columnWidth:this.dimensions[t].column})}},{key:"render",value:function(){var e=this.props,t=e.photos,n=e.selectedFilters,a=e.selectedTags,r=this.state,i=r.gutterWidth,c=r.columnWidth,o=[];if(t.length){var s=F(t,n,a);s.length&&(o=s.map(function(e,t){return u.a.createElement(N,{key:t,photo:e,width:c})}))}return u.a.createElement(k.a,{columnWidth:c,monitorImagesLoaded:!0,gutterWidth:i,className:B.a.container},o)}}]),t}(s.Component),P=n(32),z=n(23),I=n(9),J=Object(v.b)(function(e){return{photos:Object(P.b)(e),selectedTags:Object(z.b)(e),selectedFilters:Object(I.d)(e)}})(A),L=n(72),D=n.n(L),U=n(155),Y=n.n(U),G=T.a.arrayOf(T.a.shape({id:T.a.string.isRequired,isSelected:T.a.bool.isRequired})),H=(T.a.arrayOf(T.a.shape({id:T.a.string.isRequired,options:G})),D.a.bind(Y.a)),K=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.title,a=e.toggleSelectedFilter,r=t.map(function(e,t){var r,i=e.id,c=e.isSelected,o=H((r={},Object(l.a)(r,Y.a.option,!0),Object(l.a)(r,Y.a.selected,!!c),r));return u.a.createElement("li",{key:t,onClick:function(){return a(n,i)},className:o},i)});return u.a.createElement("div",{className:Y.a.wrapper},u.a.createElement("span",{className:Y.a.title},n),u.a.createElement("ul",{className:Y.a.optionsList},r))}}]),t}(s.Component),M=Object(v.b)(function(e){return Object(E.a)({},e)},function(e,t){t.title,t.option;return{toggleSelectedFilter:function(t,n){return e(Object(I.e)(t,n))}}})(K),X=n(156),Q=n.n(X),V=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filterOptions.map(function(t,n){var a=t.id,r=t.options;return u.a.createElement(M,{key:n,title:a,options:r,handleClick:e.handleClick})});return u.a.createElement("div",{className:Q.a.wrapper},t)}}]),t}(s.Component),Z=Object(v.b)(function(e){return{filterOptions:Object(I.c)(e)}},function(){return{}})(V),$=n(157),ee=n.n($),te=D.a.bind(ee.a),ne=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).handleClick=function(){var t=e.state.open;e.setState({open:!t})},e.state={open:!1},e}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.label,r=this.state.open,i=r?"\u2012":"+",c=te((e={},Object(l.a)(e,ee.a.accordion,!0),Object(l.a)(e,"open",r),e));return u.a.createElement("div",{className:ee.a.wrapper},u.a.createElement("label",{className:ee.a.label,onClick:this.handleClick},a," ",u.a.createElement("span",{className:ee.a.icon},i)),u.a.createElement("div",{className:c},n))}}]),t}(s.Component),ae=Object(v.b)(function(e){return Object(E.a)({},e)},function(){return{}})(ne),re=n(158),ie=n.n(re),ce=D.a.bind(ie.a),oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){var e=n.props;(0,e.toggleTagSelected)(e.id)},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.id,a=t.isEnabled,r=t.isSelected,i=ce((e={},Object(l.a)(e,ie.a.button,!0),Object(l.a)(e,"isSelected",r),e));return u.a.createElement("button",{className:i,disabled:!a,onClick:this.handleClick},n)}}]),t}(s.Component),se=Object(v.b)(function(e){return Object(E.a)({},e)},function(e,t){var n=t.id;return{toggleTagSelected:function(){return e(Object(z.d)(n))}}})(oe),ue=n(159),le=n.n(ue),pe=(T.a.arrayOf(T.a.shape({id:T.a.string.isRequired,isEnabled:T.a.bool.isRequired,isSelected:T.a.bool.isRequired})),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tags,n=e.toggleTag,a=t.length&&t.map(function(e,t){var a=e.id,r=e.isEnabled,i=e.isSelected;return u.a.createElement(se,{key:t,id:a,toggleTag:n,isEnabled:r,isSelected:i})});return u.a.createElement("div",{className:le.a.wrapper},a)}}]),t}(s.Component)),be=Object(v.b)(function(e){return{tags:Object(z.c)(e)}},function(){return{}})(pe),de=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(ae,{label:"Filters"},u.a.createElement(Z,{filterOptions:this.filterOptions,updateFilters:this.updateFilters})),u.a.createElement(ae,{label:"Tags"},u.a.createElement(be,null)))}}]),t}(s.Component),he=Object(v.b)(function(e){return Object(E.a)({},e)},function(){return{}})(de),me=n(160),fe=n.n(me),Oe=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null,u.a.createElement(he,null)),u.a.createElement("div",{className:fe.a.container},u.a.createElement(J,null)))}}]),t}(s.Component);t.default=Oe},86:function(e,t,n){e.exports={burger:"Burger_burger__1izPS",open:"Burger_open__2PUkm"}},87:function(e,t,n){e.exports={"mobile-up":"min-width: 480px",flexContainer:"Nav_flexContainer__An27I",positionContainer:"Nav_positionContainer__TRTp8",open:"Nav_open__1cadv"}}}]);
//# sourceMappingURL=photography.38d3e814.chunk.js.map