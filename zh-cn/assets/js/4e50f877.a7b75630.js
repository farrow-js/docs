"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[4365],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),o=t(2389),i=t(9443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(9521),c=t(6010),s="tabItem_vU9c";function u(e){var n,t,a,o=e.lazy,i=e.block,u=e.defaultValue,m=e.values,d=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,p.lx)(f,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(n=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),x=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,r.useState)(v),b=C[0],y=C[1],P=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=x[d];null!=T&&T!==b&&f.some((function(e){return e.value===T}))&&y(T)}var I=function(e){var n=e.currentTarget,t=P.indexOf(n),a=f[t].value;a!==b&&(O(n),y(a),null!=d&&w(d,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},k)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":b===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:E,onFocus:I,onClick:I},null!=t?t:n)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}function m(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},6628:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(6396),l=t(8215),p=["components"],c={title:"farrow-pipeline",authors:["tqma113"],tags:["Pipeline"],sidebar_position:0},s=void 0,u={unversionedId:"api/general/farrow-pipeline",id:"api/general/farrow-pipeline",isDocsHomePage:!1,title:"farrow-pipeline",description:"Type-Friendly middleware library.",source:"@site/docs/api/general/01-farrow-pipeline.mdx",sourceDirName:"api/general",slug:"/api/general/farrow-pipeline",permalink:"/zh-cn/docs/api/general/farrow-pipeline",editUrl:"https://github.com/farrow-js/docs/docs/api/general/01-farrow-pipeline.mdx",tags:[{label:"Pipeline",permalink:"/zh-cn/docs/tags/pipeline"}],version:"current",sidebarPosition:0,frontMatter:{title:"farrow-pipeline",authors:["tqma113"],tags:["Pipeline"],sidebar_position:0},sidebar:"apiSidebar",previous:{title:"Introduction",permalink:"/zh-cn/docs/api"},next:{title:"farrow-schema",permalink:"/zh-cn/docs/api/general/farrow-schema"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"Context",id:"context",children:[{value:"<code>createContext</code>",id:"createcontext",children:[],level:4},{value:"<code>Context</code>",id:"context-1",children:[],level:4},{value:"<code>isContext</code>",id:"iscontext",children:[],level:4},{value:"<code>assertContext</code>",id:"assertcontext",children:[],level:4},{value:"<code>ContextStorage</code>",id:"contextstorage",children:[],level:4}],level:3},{value:"Container",id:"container",children:[{value:"<code>createContainer</code>",id:"createcontainer",children:[],level:4},{value:"<code>Container</code>",id:"container-1",children:[],level:4},{value:"<code>isContainer</code>",id:"iscontainer",children:[],level:4},{value:"<code>assertContainer</code>",id:"assertcontainer",children:[],level:4}],level:3},{value:"Pipeline",id:"pipeline",children:[{value:"<code>createPipeline</code>",id:"createpipeline",children:[],level:4},{value:"<code>Pipeline</code>",id:"pipeline-1",children:[],level:4},{value:"<code>Middleware</code>",id:"middleware",children:[],level:4},{value:"<code>useContainer</code>",id:"usecontainer",children:[],level:4},{value:"<code>createAsyncPipeline</code>",id:"createasyncpipeline",children:[],level:4},{value:"<code>AsyncPipeline</code>",id:"asyncpipeline",children:[],level:4}],level:3},{value:"Async Hook",id:"async-hook",children:[{value:"<code>enable</code>",id:"enable",children:[],level:4},{value:"<code>disable</code>",id:"disable",children:[],level:4}],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Type-Friendly middleware library."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-pipeline\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-pipeline\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createPipeline } from "farrow-pipeline";\n\n// 1. create\nconst pipeline = createPipeline<number, number>();\n\n// 2. attach functions\npipeline.use((count, next) => {\n  return next(count + 1);\n});\npipeline.use((count, next) => {\n  return count * 2;\n});\n\n// 3. run\nconsole.log(pipeline.run(1)); // 4 = (1 + 1) * 2\nconsole.log(pipeline.run(5)); // 12 = (5 + 1) * 2\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("h4",{id:"createcontext"},(0,o.kt)("inlineCode",{parentName:"h4"},"createContext")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const createContext: <T>(value: T) => Context<T>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContext } from "farrow-pipeline";\n\nconst context0 = createContext(0);\nconst context1 = createContext<{ limit?: number }>({});\n')),(0,o.kt)("h4",{id:"context-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"Context")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Context<T = any> = {\n  id: symbol;\n  [ContextSymbol]: T;\n  // create a new context equipped a new value\n  create: (value: T) => Context<T>;\n  // get context ref { value } for accessing context in current container of pipeline\n  use: () => {\n    value: T;\n  };\n  // get context value\n  get: () => T;\n  // set context value\n  set: (value: T) => void;\n  // assert context value is not null or undefined and return context value\n  assert: () => Exclude<T, undefined | null>;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContext } from "farrow-pipeline";\n\nconst context = createContext<number | null>(0);\n\ncontext.use(); // { value: 0 }\ncontext.get(); // 0\n\ncontext.set(1);\ncontext.use(); // { value: 1 }\ncontext.get(); // 1\n\ncontext.set(null);\ncontext.use(); // { value: null }\ncontext.get(); // null\ncontext.assert(); // throw error\n\nconst newContext = context.create(2);\nnewContext.use(); // { value: 2 }\nnewContext.get(); // 2\n')),(0,o.kt)("h4",{id:"iscontext"},(0,o.kt)("inlineCode",{parentName:"h4"},"isContext")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const isContext: (input: any) => input is Context<any>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContext, isContext } from "farrow-pipeline";\n\nconst context = createContext(0);\n\nisContext(context); // true\nisContext(context.get()); // false\nisContext(0); // false\n')),(0,o.kt)("h4",{id:"assertcontext"},(0,o.kt)("inlineCode",{parentName:"h4"},"assertContext")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const assertContext: (input: any) => asserts input is Context;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContext, assertContext } from "farrow-pipeline";\n\nconst context = createContext(0);\n\nassertContext(context); // safe\nassertContext(context.get()); // throw error\nassertContext(0); // throw error\n')),(0,o.kt)("h4",{id:"contextstorage"},(0,o.kt)("inlineCode",{parentName:"h4"},"ContextStorage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ContextStorage = {\n  [key: string]: Context;\n};\n")),(0,o.kt)("h3",{id:"container"},"Container"),(0,o.kt)("h4",{id:"createcontainer"},(0,o.kt)("inlineCode",{parentName:"h4"},"createContainer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const createContainer: (ContextStorage?: ContextStorage) => Container;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContainer, createContext } from "farrow-pipeline";\n\nconst container0 = createContainer();\n\nconst limit = createContext(10);\nconst container1 = createContainer({ limit });\n')),(0,o.kt)("h4",{id:"container-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"Container")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Container = {\n  read: <V>(Context: Context<V>) => V;\n  write: <V>(Context: Context<V>, value: V) => void;\n  [ContainerSymbol]: true;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContainer, createContext } from "farrow-pipeline";\n\nconst container0 = createContainer();\n\nconst limit = createContext(10);\nconst container1 = createContainer({ limit: limit.create(20) });\n\ncontainer0.read(limit); // 10\ncontainer1.read(limit); // 20\n\ncontainer0.write(limit, 30);\ncontainer0.read(limit); // 30\n')),(0,o.kt)("h4",{id:"iscontainer"},(0,o.kt)("inlineCode",{parentName:"h4"},"isContainer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const isContainer: (input: any) => input is Container;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContainer, isContainer } from "farrow-pipeline";\n\nconst container = createContainer();\n\nisContainer(container); // true\nisContainer(0); // false\nisContainer({}); // false\n')),(0,o.kt)("h4",{id:"assertcontainer"},(0,o.kt)("inlineCode",{parentName:"h4"},"assertContainer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const assertContainer: (input: any) => asserts input is Container;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createContainer, assertContainer } from "farrow-pipeline";\n\nconst container = createContainer();\n\nassertContainer(container); // safe\nassertContainer({}); // throw error\nassertContainer(0); // throw error\n')),(0,o.kt)("h3",{id:"pipeline"},"Pipeline"),(0,o.kt)("h4",{id:"createpipeline"},(0,o.kt)("inlineCode",{parentName:"h4"},"createPipeline")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const createPipeline: <I, O>(\n  options?: PipelineOptions | undefined\n) => Pipeline<I, O>;\n\ntype PipelineOptions = {\n  // contexts for injecting to the pipeline\n  contexts?: ContextStorage;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createPipeline } from "farrow-pipeline";\n\nconst pipeline = createPipeline<number, number>();\n')),(0,o.kt)("p",null,"Create with contexts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createPipeline, createContext } from "farrow-pipeline";\n\nconst limit = createContext(10);\n\nconst pipeline = createPipeline<number, number>({\n  contexts: {\n    limit,\n  },\n});\n')),(0,o.kt)("h4",{id:"pipeline-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"Pipeline")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Pipeline<I = unknown, O = unknown> = {\n  // add middlewares to pipeline and return pipeline\n  use: (...inputs: MiddlewareInput<I, O>[]) => Pipeline<I, O>;\n  // run a pipeline by input and received its output\n  run: (input: I, options?: RunPipelineOptions<I, O>) => O;\n  // pipeline.middleware can use in another pipeline.use(...) if their type is matched\n  middleware: Middleware<I, O>;\n};\n\ntype RunPipelineOptions<I = unknown, O = unknown> = {\n  // container which store some contexts.if container is not given, pipeline will use its internal container\n  container?: Container;\n  // if all middleware called next, then onLast would be called\n  onLast?: (input: I) => O;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createPipeline } from "farrow-pipeline";\n\n// 1. create\nconst foo = createPipeline<number, number>();\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  return next(count + 1);\n});\nfoo.use((count, next) => {\n  return count * 2;\n});\n\n// 3. run\nconsole.log(foo.run(1)); // 4 = (1 + 1) * 2\nconsole.log(foo.run(5)); // 12 = (5 + 1) * 2\n')),(0,o.kt)("p",null,"Run with ",(0,o.kt)("strong",{parentName:"p"},"Container"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5,6,13,20}","{5,6,13,20}":!0},'import {\n  createPipeline,\n  createContext,\n  createContainer,\n} from "farrow-pipeline";\n\n// 1. create\nconst foo = createPipeline<number, number>();\nconst limit = createContext(10);\nconst container = createContainer({ limit });\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  return next(count + 1);\n});\nfoo.use((count, next) => {\n  if (count > 10) return count;\n  return count * 2;\n});\n\n// 3. run\nconsole.log(foo.run(1, { container })); // 4 = (1 + 1) * 2\nconsole.log(foo.run(5, { container })); // 12 = (5 + 1) * 2\nconsole.log(foo.run(10, { container })); // 11 = (10 + 1) > 10 ? 10 + 1 : (10 + 1) * 2\n')),(0,o.kt)("p",null,"Run with ",(0,o.kt)("inlineCode",{parentName:"p"},"onLast"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"onLast")," will run when all middleware called the ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{11,18}","{11,18}":!0},'import { createPipeline } from "farrow-pipeline";\n\n// 1. create\nconst foo = createPipeline<number, number>();\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  return next(count + 1);\n});\nfoo.use((count, next) => {\n  if (count > 10) return next(count);\n  return count * 2;\n});\n\n// 3. run\nconsole.log(foo.run(1)); // 4 = (1 + 1) * 2\nconsole.log(foo.run(5)); // 12 = (5 + 1) * 2\nconsole.log(foo.run(10, { onLast: (count) => count + 5 })); // 16 = (10 + 1) > 10 ? 10 + 1 + 5 : (10 + 1) * 2\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pipeline")," as middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{14-19}","{14-19}":!0},'import { createPipeline } from "farrow-pipeline";\n\n// 1. create\nconst foo = createPipeline<number, number>();\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  return next(count + 1);\n});\nfoo.use((count, next) => {\n  return count * 2;\n});\n\nconst bar = createPipeline<number, number>();\n\nbar.use(foo);\n\nconsole.log(bar.run(1)); // 4 = (1 + 1) * 2\nconsole.log(bar.run(5)); // 12 = (5 + 1) * 2\n')),(0,o.kt)("h4",{id:"middleware"},(0,o.kt)("inlineCode",{parentName:"h4"},"Middleware")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type Middleware<I = unknown, O = unknown> = (input: I, next: Next<I, O>) => O;\n\ntype Middlewares<I = unknown, O = unknown> = Middleware<I, O>[];\n\ntype MiddlewareInput<I = unknown, O = unknown> =\n  | Middleware<I, O>\n  | { middleware: Middleware<I, O> };\n")),(0,o.kt)("h4",{id:"usecontainer"},(0,o.kt)("inlineCode",{parentName:"h4"},"useContainer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useContainer: () => Container;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10,11}","{10,11}":!0},'import {\n  createPipeline,\n  createContext,\n  createContainer,\n  useContainer,\n} from "farrow-pipeline";\n\n// 1. create\nconst foo = createPipeline<number, number>();\nconst limit = createContext(10);\nconst container = createContainer({ limit });\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  const innerContainer = useContainer();\n  innerContainer === container; // true\n  return next(count + 1);\n});\n\n// 3. run\nconsole.log(foo.run(1, { container })); // 4 = (1 + 1) * 2\n')),(0,o.kt)("h4",{id:"createasyncpipeline"},(0,o.kt)("inlineCode",{parentName:"h4"},"createAsyncPipeline")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const createAsyncPipeline: <I, O>(\n  options?: PipelineOptions | undefined\n) => AsyncPipeline<I, O>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createAsyncPipeline } from "farrow-pipeline";\n\nconst pipeline = createAsyncPipeline<number, number>();\n')),(0,o.kt)("p",null,"Create with contexts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { createAsyncPipeline, createContext } from "farrow-pipeline";\n\nconst limit = createContext(10);\n\nconst pipeline = createAsyncPipeline<number, number>({\n  contexts: {\n    limit,\n  },\n});\n')),(0,o.kt)("h4",{id:"asyncpipeline"},(0,o.kt)("inlineCode",{parentName:"h4"},"AsyncPipeline")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type AsyncPipeline<I = unknown, O = unknown> = Pipeline<I, MaybeAsync<O>> & {\n  useLazy: (thunk: ThunkMiddlewareInput<I, O>) => AsyncPipeline<I, O>;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{10-12,15-16}","{10-12,15-16}":!0},'import { createAsyncPipeline } from "farrow-pipeline";\n\n// 1. create\nconst foo = createAsyncPipeline<number, number>();\n\n// 2. attach middleware\nfoo.use((count, next) => {\n  return next(count + 1);\n});\nfoo.useLazy((count, next) => {\n  return () => count * 2;\n});\n\n// 3. run\nconsole.log(await foo.run(1)); // 4 = (1 + 1) * 2\nconsole.log(await foo.run(5)); // 12 = (5 + 1) * 2\n')),(0,o.kt)("h3",{id:"async-hook"},"Async Hook"),(0,o.kt)("p",null,"Open/close the feature: Async Hook with function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { enable, disable } from "farrow-pipeline/asyncHooks.node";\n')),(0,o.kt)("h4",{id:"enable"},(0,o.kt)("inlineCode",{parentName:"h4"},"enable")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const enable: () => void;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { enable } from "farrow-pipeline/asyncHooks.node";\n\nenable();\n')),(0,o.kt)("h4",{id:"disable"},(0,o.kt)("inlineCode",{parentName:"h4"},"disable")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const disable: () => void;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { disable } from "farrow-pipeline/asyncHooks.node";\n\ndisable();\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Node.js performance will be worse with this on, with Promise taking two to three times longer to run, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bmeurer/async-hooks-performance-impact"},"bmeurer/async-hooks-performance-impact")," for details."))),(0,o.kt)("h4",{id:""}),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework based on ",(0,o.kt)("strong",{parentName:"li"},"farrow-pipeline"),".")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/01-pipeline-base"},"farrow-sample/01-pipeline-base"),": Base usage of ",(0,o.kt)("strong",{parentName:"li"},"farrow-pipeline"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/02-pipeline-more"},"farrow-sample/02-pipeline-more"),": More compelex sample of ",(0,o.kt)("strong",{parentName:"li"},"farrow-pipeline"),".\n:::")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/toolkit/plugin"},"@modern-js/plugin"))),(0,o.kt)("p",null,":::"))}k.isMDXComponent=!0}}]);