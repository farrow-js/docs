"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3008],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4822:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={title:"Why Farrow",authors:["tqma113"],tags:[],sidebar_position:0},c=void 0,l={unversionedId:"tutorial/why",id:"tutorial/why",isDocsHomePage:!1,title:"Why Farrow",description:"The Problem",source:"@site/docs/tutorial/why.mdx",sourceDirName:"tutorial",slug:"/tutorial/why",permalink:"/docs/tutorial/why",editUrl:"https://github.com/farrow-js/docs/docs/tutorial/why.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Why Farrow",authors:["tqma113"],tags:[],sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/tutorial"}},u=[{value:"The Problem",id:"the-problem",children:[],level:2},{value:"The Difference",id:"the-difference",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"Before fully embracing TypeScript, the backend frameworks our team had been using were Express and Koa. After fully embracing TypeScript, our team's requirement dimension increased - type-safety/type-friendliness."),(0,a.kt)("p",null,"We found that a JavaScript-oriented backend framework could not be fully type-safe simply by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"*.d.ts"),"."),(0,a.kt)("p",null,"Other upper-level TypeScript backend frameworks that are wrapped in Express.js or Koa.js still sometimes struggle to circumvent the type issues of the underlying framework."),(0,a.kt)("p",null,"We thought it might be useful to implement a new backend framework that is more type-safe, using a TypeScript-oriented design approach."),(0,a.kt)("p",null,"That's how Farrow was born. We hope you like our design approach as well."),(0,a.kt)("h2",{id:"the-difference"},"The Difference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type-safe: provide runtime-validation in all input/output or JSON.parse parsing data where possible; ensure that the request parameters accepted by the server must meet the type requirements without redundancy or fragmentation; ensure that the data fetched by the client meets the specified type and no longer requires the developer to manually as MyData pretends that the data is of the type we expect."),(0,a.kt)("li",{parentName:"ul"},"Functional: We prioritize the immutable and pure philosophy of functional programming wherever possible, preferring plain functions."),(0,a.kt)("li",{parentName:"ul"},"End-to-end type synchronization: We work to improve the tedious type synchronization nuisance between the front and back ends, pursuing to automate as much as possible the reuse of server-defined contract types on the front end, and providing the code for data types and interface calls to the front end by way of codegen code generation. In projects paired with Farrow-API, front-end projects no longer start from 0, but from inheriting back-end type definitions."),(0,a.kt)("li",{parentName:"ul"},"Progressive: Farrow officially maintains a series of packages from front-end development to back-end development, which can be introduced on demand or with different mainstream technology stacks or tool chains (e.g. react, vite, next.js, etc.) according to project requirements.")))}d.isMDXComponent=!0}}]);