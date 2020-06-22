(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),i=(r(0),r(160)),a={sidebar_label:"Build",title:"Build"},c={id:"guides/02-best-practices/07-build",title:"Build",description:"Library project will be bundled with use of Rollup that is configured to use ezolenko/rollup-plugin-typescript2 with use of ttypescript in rollup.config.js. To build project use:",source:"@site/docs/guides/02-best-practices/07-build.md",permalink:"/template-test/docs/guides/02-best-practices/07-build",sidebar_label:"Build",sidebar:"guides",previous:{title:"Documentation",permalink:"/template-test/docs/guides/02-best-practices/06-documentation"},next:{title:"Actions",permalink:"/template-test/docs/guides/03-github-actions/01-actions"}},u=[{value:"What&#39;s next?",id:"whats-next",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Library project will be bundled with use of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rollupjs.org/guide/en/"}),"Rollup")," that is configured to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ezolenko/rollup-plugin-typescript2"}),"ezolenko/rollup-plugin-typescript2")," with use of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cevek/ttypescript"}),"ttypescript")," in ",Object(i.b)("inlineCode",{parentName:"p"},"rollup.config.js"),". To build project use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(i.b)("h2",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,"You SHOULD learn more about releasing software with semantic-release and Github actions ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../03-github-actions/01-introduction"}),"here"),"."))}l.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,f=s["".concat(a,".").concat(d)]||s[d]||b[d]||i;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);