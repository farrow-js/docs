"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[7348],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5355:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],s={title:"Work in Express/Koa",authors:["tqma113"],tags:[],sidebar_position:6},i=void 0,c={unversionedId:"guide/http-server/express-koa",id:"guide/http-server/express-koa",isDocsHomePage:!1,title:"Work in Express/Koa",description:"Farrow \u73b0\u5728\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 adapter \u590d\u7528 Express/Koa \u7b49\u751f\u6001\u3002",source:"@site/docs/guide/http-server/express-koa.mdx",sourceDirName:"guide/http-server",slug:"/guide/http-server/express-koa",permalink:"/docs/guide/http-server/express-koa",editUrl:"https://github.com/farrow-js/docs/docs/guide/http-server/express-koa.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Work in Express/Koa",authors:["tqma113"],tags:[],sidebar_position:6},sidebar:"guideSidebar",previous:{title:"Testing",permalink:"/docs/guide/http-server/test"},next:{title:"Introduction",permalink:"/docs/guide/rpc-server"}},l=[{value:"farrow-express",id:"farrow-express",children:[],level:2},{value:"farrow-koa",id:"farrow-koa",children:[],level:2}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Farrow \u73b0\u5728\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7 adapter \u590d\u7528 Express/Koa \u7b49\u751f\u6001\u3002"),(0,o.kt)("h2",{id:"farrow-express"},"farrow-express"),(0,o.kt)("p",null,"\u5c06 farrow-http \u8fd0\u884c\u5728 Express App \u4e0a "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import express from "express";\nimport { Http, Response } from "farrow-http";\nimport { adapter } from "farrow-express";\n\nconst PORT = 3000;\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n\nconst app = express();\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.use("/farrow", adapter(http));\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,o.kt)("h2",{id:"farrow-koa"},"farrow-koa"),(0,o.kt)("p",null,"\u5c06 farrow-http \u8fd0\u884c\u5728 Koa App \u4e0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import Koa from "koa";\nimport { Http } from "farrow-http";\nimport { adapter } from "farrow-koa";\n\nconst PORT = 3000;\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n\nconst app = new Koa();\n\napp.use(adapter(http));\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u7684 API \u8bbe\u8ba1\u7ec6\u8282\u53ef\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/http/farrow-express"},"farrow-express"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/api/http/farrow-koa"},"farrow-koa"),"\u3002"))))}f.isMDXComponent=!0}}]);