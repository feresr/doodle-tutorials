"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,75],{7465:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var a=n(7294),r=n(3905),o=n(8790),l=n(2434),i=n(6010),c=n(5450),s=n(5537),u=n(7462);function d(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(5999),p=n(3366),h=n(9960),f=n(3919),v=n(541),b="menuHtmlItem_fVIQ",g=n(2389),y=["item"],k=["item","onItemClick","activePath","level","index"],E=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.item,n=(0,p.Z)(e,y);switch(t.type){case"category":return a.createElement(_,(0,u.Z)({item:t},n));case"html":return a.createElement(N,(0,u.Z)({item:t},n));default:return a.createElement(C,(0,u.Z)({item:t},n))}}function _(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=e.index,s=(0,p.Z)(e,k),d=t.items,f=t.label,v=t.collapsible,b=t.className,y=t.href,E=function(e){var t=(0,g.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),Z=(0,c._F)(t,r),_=(0,c.Mg)(y,r),N=(0,c.uR)({initialState:function(){return!!v&&(!Z&&t.collapsed)}}),C=N.collapsed,T=N.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:Z,collapsed:C,setCollapsed:T});var S=(0,c.fP)(),x=S.expandedItem,L=S.setExpandedItem;function A(e){void 0===e&&(e=!C),L(e?null:l),T(e)}var M=(0,c.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){v&&x&&x!==l&&M&&T(!0)}),[v,x,l,T,M]),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":v&&!y,"menu__link--active":Z}),onClick:v?function(e){null==n||n(t),y?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,href:v?null!=E?E:"#":E},s),f),y&&v&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:f}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),A()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(I,{items:d,tabIndex:C?-1:0,onItemClick:n,activePath:r,level:o+1})))}function N(e){var t=e.item,n=e.level,r=e.index,o=t.value,l=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(n),l&&b+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:o}})}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(e.index,(0,p.Z)(e,E)),s=t.href,d=t.label,m=t.className,b=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},a.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(s)?d:a.createElement("span",null,d,a.createElement(v.Z,null))))}var T=["items"];function S(e){var t=e.items,n=(0,p.Z)(e,T);return a.createElement(c.D_,null,t.map((function(e,t){return a.createElement(Z,(0,u.Z)({key:t,item:e,index:t},n))})))}var I=(0,a.memo)(S),x="sidebar_CW9Y",L="sidebarWithHideableNavbar_FoYL",A="sidebarHidden_D64r",M="sidebarLogo_FJUI",P="menu_SkdO",B="menuWithAnnouncementBar_x19h",w="collapseSidebarButton_cwdi",D="collapseSidebarButtonIcon_xORG";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",w),onClick:t},a.createElement(d,{className:D}))}function F(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,u=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(x,(t={},t[L]=p,t[A]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",P,(n={},n[B]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:o,activePath:r,level:1}))),h&&a.createElement(R,{onClick:l}))}var O=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return a.createElement(c.Cv,{component:O,props:e})}var W=a.memo(F),j=a.memo(H);function z(e){var t=(0,c.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(j,e))}var V=n(5742),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Y={Prism:n(7410).default,theme:U};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},G.apply(this,arguments)}var J=/\r\n|\r|\n/,K=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Q=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},X=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=G({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=G({},n,{backgroundColor:null}),r};function $(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ee=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),q(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?X(e.theme,e.language):void 0;return t.themeDict=n})),q(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=G({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?G({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),q(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),q(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=G({},$(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?G({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),q(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=Q(u,d.type),d.alias&&(u=Q(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(J),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)K(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return K(i),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),te=ee;var ne="codeBlockContainer_I0IT",ae="codeBlockContent_wNvx",re="codeBlockTitle_BvAR",oe="codeBlock_jd64",le="codeBlockStandalone_csWH",ie="copyButton_wuS7",ce="codeBlockLines_mRuA";function se(e){var t,n=e.children,r=e.className,o=void 0===r?"":r,l=e.metastring,s=e.title,d=e.language,p=(0,c.LU)().prism,h=(0,a.useState)(!1),f=h[0],v=h[1],b=(0,a.useState)(!1),g=b[0],y=b[1];(0,a.useEffect)((function(){y(!0)}),[]);var k=(0,c.bc)(l)||s,E=(0,c.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(te,(0,u.Z)({},Y,{key:String(g),theme:E,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,le,"thin-scrollbar",ne,o,c.kM.common.codeBlock),style:r},a.createElement("code",{className:ce},n))}));var Z=Array.isArray(n)?n.join(""):n,_=null!=(t=null!=d?d:(0,c.Vo)(o))?t:p.defaultLanguage,N=(0,c.nZ)(Z,l,_),C=N.highlightLines,T=N.code,S=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(T),v(!0),setTimeout((function(){return v(!1)}),2e3)};return a.createElement(te,(0,u.Z)({},Y,{key:String(g),theme:E,code:T,language:null!=_?_:"text"}),(function(e){var t,n=e.className,r=e.style,l=e.tokens,s=e.getLineProps,d=e.getTokenProps;return a.createElement("div",{className:(0,i.Z)(ne,o,(t={},t["language-"+_]=_&&!o.includes("language-"+_),t),c.kM.common.codeBlock)},k&&a.createElement("div",{style:r,className:re},k),a.createElement("div",{className:(0,i.Z)(ae,_)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(n,oe,"thin-scrollbar"),style:r},a.createElement("code",{className:ce},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return C.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,u.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,u.Z)({key:t},d({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(ie,"clean-btn"),onClick:S},f?a.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var ue=n(9649),de="details_BAp3";function me(e){var t=Object.assign({},e);return a.createElement(c.PO,(0,u.Z)({},t,{className:(0,i.Z)("alert alert--info",de,t.className)}))}var pe=["mdxType","originalType"];var he={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,p.Z)(r,pe));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?a.createElement("code",e):a.createElement(se,e)},a:function(e){return a.createElement(h.Z,e)},pre:function(e){var t;return a.createElement(se,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(me,(0,u.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h1"},e))},h2:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h2"},e))},h3:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h3"},e))},h4:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h4"},e))},h5:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h5"},e))},h6:function(e){return a.createElement(ue.Z,(0,u.Z)({as:"h6"},e))}},fe=n(4608),ve="backToTopButton_RiI4",be="backToTopButtonShow_ssHd";function ge(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function ye(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=ge(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,ve,(e={},e[be]=n,e)),type:"button",onClick:function(){return s()}})}var ke=n(6775),Ee={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function Ze(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,h=e.sidebarName,f=(0,c.Vq)(),v=u.pluginId,b=u.version,g=(0,a.useState)(!1),y=g[0],k=g[1],E=(0,a.useState)(!1),Z=E[0],_=E[1],N=(0,a.useCallback)((function(){Z&&_(!1),k((function(e){return!e}))}),[Z]);return a.createElement(l.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,c.os)(v,b)}},a.createElement("div",{className:Ee.docPage},a.createElement(ye,null),f&&a.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,Ee.docSidebarContainer,(t={},t[Ee.docSidebarContainerHidden]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ee.docSidebarContainer)&&y&&_(!0)}},a.createElement(z,{key:h,sidebar:f,path:s.path,onCollapse:N,isHidden:Z}),Z&&a.createElement("div",{className:Ee.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(d,{className:Ee.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(Ee.docMainContainer,(n={},n[Ee.docMainContainerEnhanced]=y||!f,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,(o={},o[Ee.docItemWrapperEnhanced]=y,o))},a.createElement(r.Zo,{components:he},p)))))}function _e(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,ke.LX)(r.pathname,e)}));if(!l)return a.createElement(fe.default,null);var i=l.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement(Ze,{currentDocRoute:l,versionMetadata:n,sidebarName:i},(0,o.H)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7462),r=n(3366),o=n(7294),l=n(6010),i=n(5999),c=n(5450),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,r.Z)(e,d),h=(0,c.LU)().navbar.hideOnScroll;return m?o.createElement(n,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(t={},t[u]=h,t[s]=!h,t)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(n,p)}function h(e){var t=e.as,n=(0,r.Z)(e,m);return"h1"===t?o.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):o.createElement(p,(0,a.Z)({as:t},n))}},4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r=n(2434),o=n(5999);function l(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);