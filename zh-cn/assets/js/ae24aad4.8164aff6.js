"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[6131],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6396:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3117),a=r(7294),o=r(2389),i=r(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(9521),p=r(6010),c="tabItem_vU9c";function u(e){var t,r,n,o=e.lazy,i=e.block,u=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,a.useState)(g),x=y[0],T=y[1],O=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=w[f];null!=S&&S!==x&&h.some((function(e){return e.value===S}))&&T(S)}var P=function(e){var t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==x&&(E(t),T(n),null!=f&&N(f,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},m)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:P,onClick:P},null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},217:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=r(6396),l=r(8215),s=["components"],p={title:"farrow-federation",authors:["tqma113"],tags:["HTTP","Federation","Server"],sidebar_position:4},c=void 0,u={unversionedId:"api/rpc/farrow-federation",id:"api/rpc/farrow-federation",isDocsHomePage:!1,title:"farrow-federation",description:"A aggregation tool for farrow-api.",source:"@site/docs/api/rpc/05-farrow-federation.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-federation",permalink:"/zh-cn/docs/api/rpc/farrow-federation",editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/05-farrow-federation.mdx",tags:[{label:"HTTP",permalink:"/zh-cn/docs/tags/http"},{label:"Federation",permalink:"/zh-cn/docs/tags/federation"},{label:"Server",permalink:"/zh-cn/docs/tags/server"}],version:"current",sidebarPosition:4,frontMatter:{title:"farrow-federation",authors:["tqma113"],tags:["HTTP","Federation","Server"],sidebar_position:4},sidebar:"apiSidebar",previous:{title:"farrow-deno-api",permalink:"/zh-cn/docs/api/rpc/farrow-deno-api"},next:{title:"farrow-next",permalink:"/zh-cn/docs/api/frontend/farrow-next"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Frist Look",id:"frist-look",children:[],level:2},{value:"Services",id:"services",children:[],level:2},{value:"Options",id:"options",children:[{value:"fetch",id:"fetch",children:[],level:3},{value:"fetcher",id:"fetcher",children:[],level:3},{value:"polling",id:"polling",children:[],level:3},{value:"pollingInterval",id:"pollinginterval",children:[],level:3},{value:"errorStack",id:"errorstack",children:[],level:3},{value:"strict",id:"strict",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],f={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A aggregation tool for ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),"."),(0,o.kt)("p",null,"It expands from farrow-api-service and get them together to a new and fully-cover services."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-federation\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-federation\n")))),(0,o.kt)("h2",{id:"frist-look"},"Frist Look"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Http } from "farrow-http";\nimport { Federation } from "farrow-federation";\n\nconst http = Http();\n\nconst service = await Federation([\n  {\n    // anthor farrow-api-server entry\n    url: "http://localhost:3001/api/todo",\n    namespace: "todo",\n  },\n]);\n\nhttp.use(service);\n\nhttp.listen(3000);\n')),(0,o.kt)("p",null,"In this demo, the federation service only group one service that is at http://localhost:3001/api/todo. But as you might expect, it can group more service created by farrow-api-service. It also be a service, so it can group themselves."),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type ApiService = {\n  url: string;\n  namespace: string;\n};\n\nexport type ApiServices = ApiService[];\n")),(0,o.kt)("p",null,"this option for you to pass the all service you want to get together."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," is the service entry and the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," is the namespace of this service entry in current federation."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"fetch"},"fetch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetch?: (input: RequestInfo, init?: RequestInit | undefined) => Promise<globalThis.Response>\n")),(0,o.kt)("p",null,"For customing fetch."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/node-fetch/node-fetch"},"node-fetch"),"."),(0,o.kt)("h3",{id:"fetcher"},"fetcher"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetcher?: ((request: ApiSingleRequest) => Promise<ApiResponseSingle>) &\n((request: ApiIntrospectionRequest) => Promise<ApiResponseSingle>) &\n((request: ApiBatchRequest) => Promise<ApiResponseBatch>)\n")),(0,o.kt)("p",null,"For customing the function which sends the calling request."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tqma113/farrow-federation/blob/59c824aa5ecaedfa28d37127e727b2a354cb371d/src/helpers.ts#L6"},"createFetcher")),(0,o.kt)("h3",{id:"polling"},"polling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"polling?: boolean\n")),(0,o.kt)("p",null,"Polling switch."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"pollinginterval"},"pollingInterval"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pollingInterval?: number\n")),(0,o.kt)("p",null,"Polling interval time(ms)."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,o.kt)("h3",{id:"errorstack"},"errorStack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"errorStack?: boolean\n")),(0,o.kt)("p",null,"Should display error.stack or not."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV !== 'production'"),"."),(0,o.kt)("h3",{id:"strict"},"strict"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"strict: true;\n")),(0,o.kt)("p",null,"Should throw error when connect to services or not."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"Suggestion: ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in development, ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in production."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),": Schema-based Api builder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": farrow-api adapter for farrow-http."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),": an api-client for ",(0,o.kt)("inlineCode",{parentName:"li"},"farrow-api-server"),".")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/13-api-federatio"},"farrow-sample/13-api-federation"))))))}m.isMDXComponent=!0}}]);