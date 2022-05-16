"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[4096],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5444:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={title:"Introspection",authors:["tqma113"],tags:[],sidebar_position:1},s=void 0,l={unversionedId:"guide/rpc-server/introspection",id:"guide/rpc-server/introspection",isDocsHomePage:!1,title:"Introspection",description:"\u4ece\u4e0a\u4e00\u7ae0\u8282\u6211\u4eec\u4e86\u89e3\u5230\u4e86 Farrow RPC API \u8bbe\u8ba1\u7684\u6838\u5fc3\u90e8\u5206\uff0c\u4f46\u5374\u4e0d\u662f\u4ed6\u771f\u6b63\u6709\u9b45\u529b\u7684\u5730\u65b9\uff0c\u8fd9\u4e2a\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5b83\u6700\u6709\u9b45\u529b\u7684\u80fd\u529b \u2014\u2014\u2014 Introspection\u3002",source:"@site/docs/guide/rpc-server/introspection.mdx",sourceDirName:"guide/rpc-server",slug:"/guide/rpc-server/introspection",permalink:"/zh-cn/docs/guide/rpc-server/introspection",editUrl:"https://github.com/farrow-js/docs/docs/guide/rpc-server/introspection.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introspection",authors:["tqma113"],tags:[],sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/zh-cn/docs/guide/rpc-server"},next:{title:"API Federation",permalink:"/zh-cn/docs/guide/rpc-server/federation"}},c=[{value:"\u662f\u4ec0\u4e48",id:"\u662f\u4ec0\u4e48",children:[],level:2},{value:"\u5ba2\u6237\u7aef\u4ee3\u7801\u751f\u6210",id:"\u5ba2\u6237\u7aef\u4ee3\u7801\u751f\u6210",children:[],level:2},{value:"More",id:"more",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ece\u4e0a\u4e00\u7ae0\u8282\u6211\u4eec\u4e86\u89e3\u5230\u4e86 Farrow RPC API \u8bbe\u8ba1\u7684\u6838\u5fc3\u90e8\u5206\uff0c\u4f46\u5374\u4e0d\u662f\u4ed6\u771f\u6b63\u6709\u9b45\u529b\u7684\u5730\u65b9\uff0c\u8fd9\u4e2a\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5b83\u6700\u6709\u9b45\u529b\u7684\u80fd\u529b \u2014\u2014\u2014 Introspection\u3002"),(0,o.kt)("h2",{id:"\u662f\u4ec0\u4e48"},"\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"\u6e90\u81ea\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"GraphQL Introspection"),"\uff0cGraphQL Code Generator\u3001GraphQL Playground \u90fd\u57fa\u4e8e\u8be5\u7279\u6027\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"Farrow Server \u4e2d\u9ed8\u8ba4\u652f\u6301\u901a\u8fc7\u53d1\u9001\u7279\u5b9a\u8bf7\u6c42\u6765\u83b7\u53d6 Schema \u4fe1\u606f"),(0,o.kt)("p",null,"\u5728\u670d\u52a1\u5668\u4e2d\uff0c\u5b8c\u6210 API \u5f00\u53d1\u5e76\u4f5c\u4e3a\u4e2d\u95f4\u4ef6\u6dfb\u52a0\u81f3 Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ID, Struct } from 'farrow-schema'\nimport { Api } from 'farrow-api'\n\nimport { Http } from 'farrow-http'\nimport { ApiService } from 'farrow-api-server'\n\nconst User = Struct({\n    id: ID,\n    name: String,\n})\n\nexport const getUser = Api({\n  description: 'get notes',\n  input: { id: String },\n  output: User,\n})\n\ngetUser.use(({ id }) => {\n  return {\n    id,\n    name: `name of ${id}`\n  }\n})\n\nconst http = Http()\n\nhttp.use(ApiService({ entries: { getUser } }))\n\nhttp.listen(3000, () => {\n  console.log('Listening on localhost:3000')\n})\n")),(0,o.kt)("p",null,"Postman \u4e2d\u53d1\u9001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "type": "Introspection"\n}\n')),(0,o.kt)("p",null,"\u5f97\u5230"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    "type": "ApiSuccessResponse",\n    "output": {\n        "protocol": "Farrow-API",\n        "types": {\n            "0": {\n                "type": "Struct",\n                "fields": {\n                    "id": {\n                        "typeId": 1,\n                        "$ref": "#/types/1"\n                    }\n                }\n            },\n            "1": {\n                "type": "Scalar",\n                "valueType": "string",\n                "valueName": "String"\n            },\n            "2": {\n                "type": "Struct",\n                "fields": {\n                    "id": {\n                        "typeId": 3,\n                        "$ref": "#/types/3"\n                    },\n                    "name": {\n                        "typeId": 1,\n                        "$ref": "#/types/1"\n                    }\n                }\n            },\n            "3": {\n                "type": "Scalar",\n                "valueType": "string",\n                "valueName": "ID"\n            }\n        },\n        "entries": {\n            "type": "Entries",\n            "entries": {\n                "getUser": {\n                    "type": "Api",\n                    "input": {\n                        "typeId": 0,\n                        "$ref": "#/types/0"\n                    },\n                    "output": {\n                        "typeId": 2,\n                        "$ref": "#/types/2"\n                    },\n                    "description": "get notes"\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u8fd9\u4e9b\u5c31\u662f\u90a3\u4e9b API \u7684 Schema \u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u5ba2\u6237\u7aef\u4ee3\u7801\u751f\u6210"},"\u5ba2\u6237\u7aef\u4ee3\u7801\u751f\u6210"),(0,o.kt)("p",null,"\u6709\u4e86\u8fd9\u6837\u7684\u80fd\u529b\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u505a\u5230\uff0c\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u5728\u5ba2\u6237\u7aef\u751f\u6210\u8be5\u63a5\u53e3\u7684\u8c03\u7528\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u8981\u7528\u5230 Farrow \u7684 CLI \u5de5\u5177\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5728\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow.config.js")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { createFarrowConfig } = require('farrow')\n\nmodule.exports = createFarrowConfig({\n  api: [\n    {\n      src: 'http://localhost:3000',\n      // useful for testing api\n      dist: `${__dirname}/api.ts`,\n    },\n  ],\n})\n")),(0,o.kt)("p",null,"\u5728\u542f\u52a8 Server \u4e4b\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow dev")," \u5373\u53ef\u5f97\u5230\u751f\u4ea7\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const api = {\n  /**\n   * @remarks get user\n   */\n  getUser: (input: GetUserInput) =>\n    apiPipeline.invoke(url, {\n      path: ['getUser'],\n      input,\n    }) as Promise<GetUserOutput>,\n}\n")),(0,o.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\u7684\u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u5f15\u5165\u8be5\u6587\u4ef6\u76f4\u63a5\u8c03\u7528\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u65b9\u5f0f\u4e5f\u78e8\u5e73\u4e86 Server \u5230 Client \u7684\u7c7b\u578b\u5272\u88c2\u7684\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"\u5728\u62e5\u6709\u4e86 Introspection \u8fd9\u4e2a\u5f3a\u5927\u7684\u80fd\u529b\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u505a\u5230\u4e00\u4e9b\u66f4\u6709\u60f3\u8c61\u529b\u7684\u4e8b\u60c5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Federation"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u751f\u6210\u6587\u6863"),(0,o.kt)("li",{parentName:"ul"},"Playground"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u751f\u6210\u63a5\u53e3\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,o.kt)("li",{parentName:"ul"},"\u7ed3\u5408 Fakerjs Mock \u63a5\u53e3")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Federation \u5c06\u5728\u4e0b\u4e2a\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,o.kt)("p",{parentName:"div"},"Playground \u53ef\u4ee5\u79fb\u6b65 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farrow-js/playground"},"farrow-js/playground"),"\u3002"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/10-api-base"},"farrow-sample/10-api-base"),": Sample of ",(0,o.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,o.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api.")))))}m.isMDXComponent=!0}}]);