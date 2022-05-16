"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[1574],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,r,t){var a=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},6396:function(e,r,t){t.d(r,{Z:function(){return m}});var a=t(7462),n=t(7294),o=t(2389),i=t(9443);var p=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(9521),s=t(6010),c="tabItem_vU9c";function u(e){var r,t,a,o=e.lazy,i=e.block,u=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var r=e.props;return{value:r.value,label:r.label}})),k=(0,l.lx)(h,(function(e,r){return e.value===r.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===u?u:null!=(r=null!=u?u:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?r:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=p(),b=N.tabGroupChoices,g=N.setTabGroupChoices,y=(0,n.useState)(w),T=y[0],S=y[1],x=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var A=b[d];null!=A&&A!==T&&h.some((function(e){return e.value===A}))&&S(A)}var E=function(e){var r=e.currentTarget,t=x.indexOf(r),a=h[t].value;a!==T&&(O(r),S(a),null!=d&&g(d,a))},z=function(e){var r,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;t=x[n]||x[x.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:T===r?0:-1,"aria-selected":T===r,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===r}),key:r,ref:function(e){return x.push(e)},onKeyDown:z,onFocus:E,onClick:E},null!=t?t:r)}))),o?(0,n.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==T})}))))}function m(e){var r=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(r)},e))}},9443:function(e,r,t){var a=(0,t(7294).createContext)(void 0);r.Z=a},6112:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),i=t(6396),p=t(8215),l=["components"],s={title:"farrow-api-server",authors:["tqma113"],tags:["Schema","API","Server"],sidebar_position:1},c=void 0,u={unversionedId:"api/rpc/farrow-api-server",id:"api/rpc/farrow-api-server",isDocsHomePage:!1,title:"farrow-api-server",description:"farrow-api adapter for farrow-http.",source:"@site/docs/api/rpc/02-farrow-api-server.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-api-server",permalink:"/zh-cn/docs/api/rpc/farrow-api-server",editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/02-farrow-api-server.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"},{label:"Server",permalink:"/zh-cn/docs/tags/server"}],version:"current",sidebarPosition:1,frontMatter:{title:"farrow-api-server",authors:["tqma113"],tags:["Schema","API","Server"],sidebar_position:1},sidebar:"apiSidebar",previous:{title:"farrow-api",permalink:"/zh-cn/docs/api/rpc/farrow-api"},next:{title:"farrow-api-client",permalink:"/zh-cn/docs/api/rpc/farrow-api-client"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"createApiService",id:"createapiservice",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:m};function f(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," adapter for ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api-server\n"))),(0,o.kt)(p.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api-server\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," just defining API, it's not directly bind to a server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"farrow-api-server")," can convert an ",(0,o.kt)("inlineCode",{parentName:"p"},"api-entries")," to a router of ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,o.kt)("p",null,"In servier-side, we define api/service via ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),", and attach them to ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,o.kt)("p",null,"Integrate api:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// /src/api/todo.ts\nimport { ApiService } from "farrow-api-server";\n\n// assuming addTodo/removeTodo is defined\n\n// combine all api to an object/entries\nexport const entries = {\n  addTodo,\n  removeTodo,\n};\n\n// create service router\nexport const service = ApiService({\n  entries,\n});\n')),(0,o.kt)("p",null,"Attach to ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// /src/api/index.ts\nimport { Response, Router } from "farrow-http";\n// import todo-service\nimport { service as TodoService } from "./todo";\n\nexport const services = Router();\n\n// capture all json response and do something if needed\nservices.capture("json", (body) => {\n  if (typeof body.value === "object") {\n    return Response.json({\n      ...body.value,\n      // ...others\n    });\n  }\n  return Response.json(body.value);\n});\n\n// attach todo api to services\nservices.route("/api/todo").use(TodoService);\n\n// attach user api to services if existed\n// services.route(\'/api/user\').use(UserService)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import path from "path";\nimport { Http } from "farrow-http";\nimport { vite } from "farrow-vite";\n\nimport { services } from "./api";\n\nlet http = Http();\n\n// attach services to http\nhttp.use(services);\n\nhttp.listen(3000, () => {\n  console.log("server started at http://localhost:3002");\n});\n')),(0,o.kt)("p",null,"In client-side, for consuming data we need to use ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// import file codegened by farrow\nimport { api as TodoApi } from "../api/todo";\n\nconst main = async () => {\n  // invoke api\n  let result = await TodoApi.addTodo({\n    content: "todo content",\n  });\n};\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"createapiservice"},"createApiService"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const createApiService: (options: CreateApiServiceOptions) => ApiServiceType;\ntype CreateApiServiceOptions = {\n  entries: ApiEntries;\n  errorStack?: boolean;\n  introspection?: boolean;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { ApiService } from "farrow-api-server";\n\n// combine all api to an object/entries\nexport const entries = {\n  addTodo,\n  removeTodo,\n};\n\nconst service = ApiService({\n  entries,\n});\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"entries: ApiEntries;")),(0,o.kt)("p",{parentName:"li"},"Api entries.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"errorStack?: boolean;")),(0,o.kt)("p",{parentName:"li"},"Should display ",(0,o.kt)("inlineCode",{parentName:"p"},"error.stack")," or not. It will be true if process.env.NODE_ENV === 'production' by default.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"introspection?: boolean;")),(0,o.kt)("p",{parentName:"li"},"Should open ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"introspection")," feature or not. It will be true if process.env.NODE_ENV === 'production' by default."))),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),": Powerful and extensible schema builder library. Create Schema like type of ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeSccript"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),": Schema-based Api builder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),": An client for ",(0,o.kt)("strong",{parentName:"li"},"farrow-api-server"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-deno-api"},"farrow-deno-api"),": A deno server middleware."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-federation"},"farrow-federation"),": A aggregation tool for ",(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),".")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/06-deno-api"},"farrow-sample/06-deno-api"),": Sample of deno api."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/13-api-federation"},"farrow-sample/13-api-federation"),": Sample for api federation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,o.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api.")))))}f.isMDXComponent=!0}}]);