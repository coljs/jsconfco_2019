(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(156),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(48);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(51)),o=r(a(154)),l=r(a(155)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,w=e.backgroundColor,v=e.Tag,b="boolean"==typeof w?"lightgray":w,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),N={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var L=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&c.default.createElement(y,(0,l.default)({src:L.base64},N)),L.tracedSVG&&c.default.createElement(y,(0,l.default)({src:L.tracedSVG},N)),b&&c.default.createElement(v,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},L))}}))}if(m){var A=m,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},A.base64&&c.default.createElement(y,(0,l.default)({src:A.base64},N)),A.tracedSVG&&c.default.createElement(y,(0,l.default)({src:A.tracedSVG},N)),b&&c.default.createElement(v,{title:t,style:{backgroundColor:b,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,width:A.width,height:A.height,src:A.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(c.default.Component);w.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:v,sizes:b,fixed:v,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var E=w;t.default=E},147:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var n=r(a(154)),i=r(a(155)),s=r(a(7)),o=r(a(51)),l=r(a(52)),c=r(a(4)),d=r(a(0)),u=a(22),f=a(145);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),a.state={IOSupported:r},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,r,n=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(n.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,r=t.getProps,s=void 0===r?this.defaultGetProps:r,o=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,n.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(a);return d.default.createElement(u.Link,(0,i.default)({to:g,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(a,{state:c,replace:h})),!0}},m))},t}(d.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=m;t.default=g;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},148:function(e,t,a){"use strict";var r=a(179),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(145),c=a(181),d=a(146),u=a.n(d),f=function(e){return i.a.createElement(l.StaticQuery,{query:"1661786138",render:function(e){return i.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:c})},p=(a(182),function(){return i.a.createElement("header",{className:"header page-section",id:"top"},i.a.createElement("div",{className:"header-banner"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row header-data-logo"},i.a.createElement("div",{className:"col content-logo"},i.a.createElement(l.Link,{to:"/"},i.a.createElement(f,null))),i.a.createElement("div",{className:"content-information"},i.a.createElement("p",{className:"header-information"},"Bringing the Colombian JavaScript community under one roof."))),i.a.createElement("div",{className:"row  header-data"},i.a.createElement("p",{className:"col  header-data__description"},"October ",i.a.createElement("span",{className:"underline"},"18")," & ",i.a.createElement("span",{className:"underline"},"19")," ",i.a.createElement("span",{className:"underline"},"Medellín"),", Colombia")),i.a.createElement("div",{className:"btn-next-section"},i.a.createElement("a",{href:"#speaker"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55 30"},i.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},i.a.createElement("rect",{className:"cls-1",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"50",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"5",y:"5",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"45",y:"5",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"10",y:"10",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"40",y:"10",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"15",y:"15",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"35",y:"15",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"20",y:"20",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"30",y:"20",width:"5",height:"5"}),i.a.createElement("rect",{className:"cls-1",x:"25",y:"25",width:"5",height:"5"}))))))))}),h=a(7),m=a.n(h),g=(a(183),function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("p",{className:"footer-copyright"},"JSConf Colombia 2019 -"," ",i.a.createElement("a",{className:"underline--footer",href:"https://jsconf.com/codeofconduct.html",target:"_blank",rel:"noopener noreferrer"},"Code of conduct")," ",i.a.createElement("br",null),"This website was built with love from Quibdó, Colombia by:"," ",i.a.createElement("a",{className:"underline--footer",href:"https://twitter.com/asprillastiwar",target:"_blank",rel:"noopener noreferrer"},"@AsprillaStiwar")," ","&"," ",i.a.createElement("a",{className:"underline--footer",href:"https://twitter.com/miltoncode",target:"_blank",rel:"noopener noreferrer"},"@MiltonCode"))))))},t}(n.Component)),y=(a(184),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement("div",null,t),i.a.createElement(g,null))},data:r})});y.propTypes={children:o.a.node.isRequired};t.a=y},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}},155:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},a.apply(this,arguments)}e.exports=a},156:function(e,t,a){var r;e.exports=(r=a(180))&&r.default||r},179:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Colombia 2019 | October 18th & 19th, Medellín"}}}}},180:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(68),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},181:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAB10lEQVQ4y4WUzStEURiHb81Cs/CP2LOxsFd2slIiEsKCKF+FpLCS7CVTFqSsle/vSIQsiIWPEY2PaRhz7/U7t9+Z3jlzLqeezrlnzn3ue973nHF833f9/PZjmfdAJhh43ha6qIOGPsI+wOHiBJgCc+BGSL7ABHg2pWgbNqkWzoIxUAAKwQznGyn8FkLV0mFSNUiBdy4YcdgwLgdFYIW/uUIYLhULdM5KhbQMTDIlOsI/pY5YpIVxUAFqwJNRGNcizpWKH3T/ArqZ/FOwBM7AGri0iLNSVX0Zoa5eNSjm+AKcg2OwB16F0JQG7zuWo1ACdkO26v+RgkAqI9QH9k28oCIaBO382CPT0QlOLNX3ZA5d40Cr1oGPxPjcxHQcgWtQZ9yirDBjbEF+UUXlQqryWAlawSbnB8QpyBH6QmpG+6CiBP3gAAyx2juci+cJmTd5njz+Oeirpw52EuuS6JtZMLXl2rAtR7kFKdURLjKSXorvWZAWSs3ce/q2mFJ5vboQ3TzHqiB96gOYWw+rcsQiTbFfwIuqGON8rgd34BM0iNPgmRHapKodgmUwymdV5VVwBarAhy2H/0nVNofFMeoB0yxYwioMkW6z2jHelDSPzT64BW3GP0/AL7JKnlEX8w/MAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/29f04079daa64cae0e136f69ca436cc3/89224/LogoJSConco2019.png",srcSet:"/static/29f04079daa64cae0e136f69ca436cc3/acb2b/LogoJSConco2019.png 100w,\n/static/29f04079daa64cae0e136f69ca436cc3/9d27c/LogoJSConco2019.png 200w,\n/static/29f04079daa64cae0e136f69ca436cc3/89224/LogoJSConco2019.png 400w",sizes:"(max-width: 400px) 100vw, 400px"}}}}}},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){}}]);
//# sourceMappingURL=0-545adfd6a211afbb066b.js.map