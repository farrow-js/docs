"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[7318],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),c=n(6010),p="tabItem_vU9c";function u(e){var t,n,r,o=e.lazy,i=e.block,u=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,a.useState)(k),O=y[0],x=y[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=w[d];null!=T&&T!==O&&h.some((function(e){return e.value===T}))&&x(T)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==O&&(E(t),x(r),null!=d&&N(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},4487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],c={title:"farrow-deno-api",authors:["tqma113"],tags:["Schema","API","Deno"],sidebar_position:3},p=void 0,u={unversionedId:"api/rpc/farrow-deno-api",id:"api/rpc/farrow-deno-api",isDocsHomePage:!1,title:"farrow-deno-api",description:"A deno server middleware.",source:"@site/docs/api/rpc/04-farrow-deno-api.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-deno-api",permalink:"/zh-cn/docs/api/rpc/farrow-deno-api",editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/04-farrow-deno-api.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"},{label:"Deno",permalink:"/zh-cn/docs/tags/deno"}],version:"current",sidebarPosition:3,frontMatter:{title:"farrow-deno-api",authors:["tqma113"],tags:["Schema","API","Deno"],sidebar_position:3},sidebar:"apiSidebar",previous:{title:"farrow-api-client",permalink:"/zh-cn/docs/api/rpc/farrow-api-client"},next:{title:"farrow-federation",permalink:"/zh-cn/docs/api/rpc/farrow-federation"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"entries",id:"entries",children:[],level:3},{value:"namespace",id:"namespace",children:[],level:3},{value:"codegen",id:"codegen",children:[],level:3},{value:"transform",id:"transform",children:[],level:3},{value:"format",id:"format",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A deno server middleware."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-deno-api\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-deno-api\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// server\nimport { Http } from 'farrow-http'\nimport { DenoService } from from 'farrow-deno-api'\n\n// api definition\n...\n\nconst entries = {\n  getCount,\n  setCount,\n  triggerError,\n}\n\nconst CounterService = DenoService({\n  entries,\n})\nconst http = Http()\nconst server = http.server()\n\nhttp.route('/counter').use(CounterService)\n\nhttp.listen(3000)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// client\nimport { api } from "http://localhost:3000/counter/client.ts";\n\napi.getCount({}).then(console.log);\n')),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type CreateDenoServiceOptions = {\n  entries: ApiEntries;\n  namespace?: string;\n  codegen?: CodegenOptions;\n  transform?: (source: string) => string;\n  format?: (source: string) => string;\n};\n")),(0,o.kt)("h3",{id:"entries"},"entries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"entries: ApiEntries;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow-api/src/api.ts#L111"},"ApiEntries")),(0,o.kt)("p",null,"Set the api entries of all services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { DenoService } from from 'farrow-deno-api'\n\nconst CounterService = DenoService({\n  entries,\n})\n")),(0,o.kt)("h3",{id:"namespace"},"namespace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'namespace: string = "client";\n')),(0,o.kt)("p",null,"It affect the path of file in client. Like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { api } from "http://localhost:3000/counter/client.ts";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// server\nconst CounterService = DenoService({\n  entries,\n  namespace: "todo",\n});\n\n// client\nimport { api } from "http://localhost:3000/counter/todo.ts";\n')),(0,o.kt)("h3",{id:"codegen"},"codegen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"codegen?: CodegenOptions\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow-api/src/codegen.ts#L126"},"CodegenOptions")),(0,o.kt)("p",null,"Set the code generation option."),(0,o.kt)("h3",{id:"transform"},"transform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"transform?: (source: string) => string\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow/src/api-client/index.ts#L51"},"transform")),(0,o.kt)("p",null,"Transform source code received from server, it's useful when need to attach custom code snippet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// server\nconst CounterService = DenoService({\n  entries,\n  namespace: \"todo\",\n  transform: (code) => (code += `\\nexport const test = 'test success'`),\n});\n\n// client\nimport { api, test } from \"http://localhost:3000/counter/todo.ts\";\ntest; // 'test success'\n")),(0,o.kt)("h3",{id:"format"},"format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"format?: (source: string) => string\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow/src/api-client/index.ts#L55"},"format")),(0,o.kt)("p",null,"Format source code via codegen. Could format with prettier."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api"),": Schema-based Api builder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": farrow-api adapter for farrow-http."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),": an api-client for ",(0,o.kt)("inlineCode",{parentName:"li"},"farrow-api-server"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/06-deno-api"},"farrow-sample/06-deno-api"))))))}f.isMDXComponent=!0}}]);