"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[6853],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),r=t(7294),i=t(2389),l=t(9443);var p=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(9521),s=t(6010),c="tabItem_vU9c";function u(e){var n,t,a,i=e.lazy,l=e.block,u=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=p(),N=w.tabGroupChoices,y=w.setTabGroupChoices,b=(0,r.useState)(v),P=b[0],A=b[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=N[d];null!=O&&O!==P&&k.some((function(e){return e.value===O}))&&A(O)}var E=function(e){var n=e.currentTarget,t=x.indexOf(n),a=k[t].value;a!==P&&(T(n),A(a),null!=d&&y(d,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},h)},k.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":P===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:E,onClick:E},null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function m(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},1338:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=t(6396),p=t(8215),o=["components"],s={title:"farrow-api-client",authors:["tqma113"],tags:["Schema","API","Client"],sidebar_position:2},c=void 0,u={unversionedId:"api/rpc/farrow-api-client",id:"api/rpc/farrow-api-client",isDocsHomePage:!1,title:"farrow-api-client",description:"An client for farrow-api-server.",source:"@site/docs/api/rpc/03-farrow-api-client.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-api-client",permalink:"/zh-cn/docs/api/rpc/farrow-api-client",editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/03-farrow-api-client.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"},{label:"Client",permalink:"/zh-cn/docs/tags/client"}],version:"current",sidebarPosition:2,frontMatter:{title:"farrow-api-client",authors:["tqma113"],tags:["Schema","API","Client"],sidebar_position:2},sidebar:"apiSidebar",previous:{title:"farrow-api-server",permalink:"/zh-cn/docs/api/rpc/farrow-api-server"},next:{title:"farrow-deno-api",permalink:"/zh-cn/docs/api/rpc/farrow-deno-api"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"createApiPipeline",id:"createapipipeline",children:[{value:"<code>apiPipeline.invoke</code>",id:"apipipelineinvoke",children:[],level:4},{value:"<code>apiPipeline.setFetcher</code>",id:"apipipelinesetfetcher",children:[],level:4},{value:"<code>apiPipeline.match</code>",id:"apipipelinematch",children:[],level:4}],level:3},{value:"createApiPipelineWithUrl",id:"createapipipelinewithurl",children:[{value:"<code>apiPipeline.invoke</code>",id:"apipipelineinvoke-1",children:[],level:4}],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An client for ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),"."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api-client\n"))),(0,i.kt)(p.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api-client\n")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/cli/farrow"},"farrow")," to codegen the code for client, and config apiPipeline if needed."),(0,i.kt)("p",null,"Simply, we can ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," the file via codegen directly without modification."),(0,i.kt)("p",null,"If we need to touch request/response, there are two ways."),(0,i.kt)("p",null,"The first way only affects one url."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { apiPipeline } from "../api/todo";\n\n/**\n * farrow-api-client is based on farrow-pipeline\n * use pipeline.use(middleware) to do something you want\n */\napiPipeline.use(async (request, next) => {\n  // add extra fileds for post requeset body\n  let body = {\n    ...request.body,\n    token: "abc",\n  };\n\n  // add extra headers for post request\n  let options: RequestInit = {\n    headers: {\n      "x-access-token": "abc",\n    },\n  };\n\n  // pass new request to next and await for the response\n  let response = await next({\n    ...request,\n    body,\n    options,\n  });\n\n  // handle the response if needed\n  return response;\n});\n')),(0,i.kt)("p",null,"The second way only affects all URLs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { apiPipeline } from "farrow-api-client";\n\n// all request performed via farrow-api-client will come here\n// it should be handled carefully\napiPipeline.use(async (request, next) => {\n  let response = await next(request);\n  return response;\n});\n\n/**\n * match(string | regexp, middleware)\n * match the request url and handle it via farrow-pipeline\n * if pass a string, it will be matched by url.endsWith(pattern)\n * if pass a regexp, it will be matched by pattern.test(url)\n */\napiPipeline.match("/todo", async (request, next) => {\n  // add extra fileds for post requeset body\n  let body = {\n    ...request.body,\n    token: "abc",\n  };\n\n  // add extra headers for post request\n  let options: RequestInit = {\n    headers: {\n      "x-access-token": "abc",\n    },\n  };\n\n  // pass new request to next and await for the response\n  let response = await next({\n    ...request,\n    body,\n    options,\n  });\n\n  // handle the response if needed\n  return response;\n});\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"createapipipeline"},"createApiPipeline"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const createApiPipeline: ({ fetcher }?: ApiPipelineOptions) => ApiPipeline;\n\ntype ApiPipeline = AsyncPipeline<ApiRequest, ApiResponse> & {\n  match(\n    pattern: string | RegExp,\n    middleware: MiddlewareInput<ApiRequest, MaybeAsync<ApiResponse>>\n  ): void;\n  invoke(\n    url: string,\n    calling: SingleCalling,\n    options?: ApiInvokeOptions\n  ): Promise<JsonType | Error>;\n  invoke(\n    url: string,\n    calling: BatchCalling,\n    options?: ApiInvokeOptions\n  ): Promise<(JsonType | Error)[]>;\n  invoke(\n    url: string,\n    calling: Calling,\n    options?: ApiInvokeOptions\n  ): Promise<JsonType | Error | (JsonType | Error)[]>;\n  setFetcher(newFetcher: Fetcher): void;\n};\n\nexport type ApiPipelineOptions = {\n  // custom fetcher\n  fetcher?: Fetcher;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApiPipeline } from 'farrow-api-client'\n\ncconst apiPipeline = createApiPipeline()\n")),(0,i.kt)("h4",{id:"apipipelineinvoke"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiPipeline.invoke")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"invoke(url: string, calling: SingleCalling, options?: ApiInvokeOptions): Promise<JsonType | Error>\ninvoke(url: string, calling: BatchCalling, options?: ApiInvokeOptions): Promise<(JsonType | Error)[]>\ninvoke(url: string, calling: Calling, options?: ApiInvokeOptions): Promise<JsonType | Error | (JsonType | Error)[]>\n\ntype ApiInvokeOptions = {\n  fetcher?: Fetcher\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Single",\n  path: ["getTodo"],\n  input: {},\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Batch",\n  callings: [\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    {\n      type: "Single",\n      path: ["getUser"],\n      input: {},\n    },\n  ],\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke("http://localhost:3000/api", {\n  type: "Introspection",\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke(\n  "http://localhost:3000/api",\n  {\n    type: "Single",\n    path: ["getTodo"],\n    input: {},\n  },\n  { fetcher: customFetcher }\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fetcher?: Fetcher")),(0,i.kt)("p",{parentName:"li"},"Custom fetcher."))),(0,i.kt)("h4",{id:"apipipelinesetfetcher"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiPipeline.setFetcher")),(0,i.kt)("p",null,"Custom fetcher."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"setFetcher(newFetcher: Fetcher): void\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"apiPipeline.setFetcher(customFetcher);\n")),(0,i.kt)("h4",{id:"apipipelinematch"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiPipeline.match")),(0,i.kt)("p",null,"Mocking data fro client."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"match(pattern: string | RegExp, middleware: MiddlewareInput<ApiRequest, MaybeAsync<ApiResponse>>): void\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'api.match("/api.foo", () => {\n  // do somethings\n});\n')),(0,i.kt)("h3",{id:"createapipipelinewithurl"},"createApiPipelineWithUrl"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const createApiPipelineWithUrl: (\n  url: string,\n  options?: ApiPipelineOptions\n) => ApiPipelineWithUrl;\n\ntype ApiPipelineWithUrl = AsyncPipeline<ApiRequest, ApiResponse> & {\n  invoke(\n    calling: SingleCalling,\n    options?: ApiWithUrlInvokeOptions\n  ): Promise<JsonType>;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApiPipelineWithUrl } from 'farrow-api-client'\n\ncconst apiPipeline = createApiPipelineWithUrl(\"http://localhost:3000/api\")\n")),(0,i.kt)("h4",{id:"apipipelineinvoke-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"apiPipeline.invoke")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"invoke(calling: SingleCalling, options?: ApiWithUrlInvokeOptions | undefined): Promise<JsonType>\n\ntype ApiWithUrlInvokeOptions = ApiInvokeOptions & {\n  batch?: boolean;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const result = await apiPipeline.invoke({\n  type: "Single",\n  path: ["getTodo"],\n  input: {},\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const [result0, result1] = await Promise.all([\n  apiPipeline.invoke(\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    { batch: true }\n  ),\n  apiPipeline.invoke(\n    {\n      type: "Single",\n      path: ["getTodo"],\n      input: {},\n    },\n    { batch: true }\n  ),\n]);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"batch?: boolean")),(0,i.kt)("p",{parentName:"li"},"If open the batch feature for merging request and date caching. It implement by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"dataloader"),". Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,i.kt)("p",null,"Used for CORS."),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),": Powerful and extensible schema builder library. Create Schema like type of ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeSccript"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),": Schema-based Api builder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," adapter for ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-federation"},"farrow-federation"),": A aggregation tool for ",(0,i.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),".")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/06-deno-api"},"farrow-sample/06-deno-api"),": Sample of deno api."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/13-api-federation"},"farrow-sample/13-api-federation"),": Sample for api federation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,i.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api.")))))}h.isMDXComponent=!0}}]);