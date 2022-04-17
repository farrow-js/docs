"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[5591],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3117),a=t(7294),o=t(2389),i=t(9443);var p=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(9521),s=t(6010),u="tabItem_vU9c";function c(e){var n,t,r,o=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=p(),N=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,a.useState)(k),T=y[0],O=y[1],A=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=N[m];null!=E&&E!==T&&h.some((function(e){return e.value===E}))&&O(E)}var S=function(e){var n=e.currentTarget,t=A.indexOf(n),r=h[t].value;r!==T&&(x(n),O(r),null!=m&&w(m,r))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=A.indexOf(e.currentTarget)+1;t=A[r]||A[0];break;case"ArrowLeft":var a=A.indexOf(e.currentTarget)-1;t=A[a]||A[A.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":T===n}),key:n,ref:function(e){return A.push(e)},onKeyDown:I,onFocus:S,onClick:S},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},9443:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},6643:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(6396),p=t(8215),l=["components"],s={title:"farrow-api",authors:["tqma113"],tags:["Schema","API"],sidebar_position:0},u=void 0,c={unversionedId:"api/rpc/farrow-api",id:"api/rpc/farrow-api",isDocsHomePage:!1,title:"farrow-api",description:"Schema-based Api builder.",source:"@site/docs/api/rpc/01-farrow-api.mdx",sourceDirName:"api/rpc",slug:"/api/rpc/farrow-api",permalink:"/zh-cn/docs/api/rpc/farrow-api",editUrl:"https://github.com/farrow-js/docs/docs/api/rpc/01-farrow-api.mdx",tags:[{label:"Schema",permalink:"/zh-cn/docs/tags/schema"},{label:"API",permalink:"/zh-cn/docs/tags/api"}],version:"current",sidebarPosition:0,frontMatter:{title:"farrow-api",authors:["tqma113"],tags:["Schema","API"],sidebar_position:0},sidebar:"apiSidebar",previous:{title:"farrow-react",permalink:"/zh-cn/docs/api/http/farrow-react"},next:{title:"farrow-api-server",permalink:"/zh-cn/docs/api/rpc/farrow-api-server"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[],level:3},{value:"Complete",id:"complete",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"createApi",id:"createapi",children:[],level:3},{value:"toJSON",id:"tojson",children:[],level:3},{value:"codegen",id:"codegen",children:[],level:3},{value:"controvertEntries",id:"controvertentries",children:[{value:"controvertEntries",id:"controvertentries-1",children:[],level:4}],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Schema-based Api builder."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-api\n"))),(0,o.kt)(p.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-api\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Writing ",(0,o.kt)("strong",{parentName:"p"},"farrow-api")," is just like typing in a higher-order way, we define a api-type via ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),". And then use ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server")," to attach api to a HTTP server."),(0,o.kt)("h3",{id:"simple"},"Simple"),(0,o.kt)("p",null,"Work single."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\nconst add = Api({\n  input: { a: Number, b: Number },\n  output: Number,\n});\n\nconst result = Api.run({ a: 1, b: 2 }); // 3\n')),(0,o.kt)("h3",{id:"complete"},"Complete"),(0,o.kt)("p",null,"Work with HTTP Server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Api } from "farrow-api";\nimport { Int, List, ObjectType, Type, TypeOf } from "farrow-schema";\n\n/**\n * define Todo\n */\nexport class Todo extends ObjectType {\n  id = {\n    description: `Todo id`,\n    [Type]: Int,\n  };\n\n  content = {\n    description: "Todo content",\n    [Type]: String,\n  };\n\n  completed = {\n    description: "Todo status",\n    [Type]: Boolean,\n  };\n}\n\n// infer the type of Todo\nexport type TodoType = TypeOf<Todo>;\n\n// define Todos\nexport const Todos = List(Todo);\n\n// define AddTodoInput\nexport class AddTodoInput extends ObjectType {\n  content = {\n    description: "a content of todo for creating",\n    [Type]: String,\n  };\n}\n\n// define AddTodoInput\nexport class AddTodoOutput extends ObjectType {\n  todos = {\n    description: "Todo list",\n    [Type]: Todos,\n  };\n}\n\n// define an api via input schema and output schema\nexport const addTodo = Api(\n  {\n    description: "add todo",\n    input: AddTodoInput,\n    output: AddTodoOutput,\n  },\n  (input) => {\n    // impl addTodo\n    return {\n      todos: [],\n    };\n  }\n);\n\n// define RemoveTodoInput\nexport class RemoveTodoInput extends ObjectType {\n  id = {\n    description: "Todo id for removing",\n    [Type]: Int,\n  };\n}\n\n// define RemoveTodoOutput\nexport class RemoveTodoOutput extends ObjectType {\n  todos = {\n    description: "Remain todo list",\n    [Type]: Todos,\n  };\n}\n\n// define an api without impl\nexport const removeTodo = Api({\n  description: "remove todo",\n  input: RemoveTodoInput,\n  output: RemoveTodoOutput,\n});\n\n// an api is also a pipeline\nremoveTodo.use((input, next) => {\n  return next(input);\n});\n\n// impl remove todo via pipeline.use\nremoveTodo.use((input) => {\n  state.todos = state.todos.filter((todo) => todo.id !== input.id);\n  return {\n    todos: state.todos,\n  };\n});\n\n// combine all api to an object/entries\nexport const entries = {\n  addTodo,\n  removeTodo,\n};\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"createapi"},"createApi"),(0,o.kt)("p",null,"Creator of Farrow API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function createApi<T extends ApiDefinition<any, any>>(\n  definition: T,\n  impl?: ApiImpl<T> | undefined\n): ApiType<T>;\n\nexport type ApiDefinition<\n  Input extends SchemaCtorInput = any,\n  Output extends SchemaCtorInput = any\n> = {\n  // input schema of api\n  input: Typeable<Input>;\n\n  // output schema of api\n  output: Typeable<Output>;\n\n  // description of api\n  description?: string;\n\n  // depcreated info of api if needed\n  deprecated?: string;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\n\nconst add = Api({\n  input: { a: Number, b: Number },\n  output: Number,\n});\n\nconst result = Api.run({ a: 1, b: 2 }); // 3\n')),(0,o.kt)("h3",{id:"tojson"},"toJSON"),(0,o.kt)("p",null,"Transform API to JSON."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const toJSON: (apiEntries: ApiEntries) => FormatResult;\n\ntype ApiEntries = {\n  [key: string]: ApiType | ApiEntries;\n};\n\ntype FormatResult = {\n  protocol: "Farrow-API";\n  types: FormatTypes;\n  entries: FormatEntries;\n};\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\nimport { toJSON } from "farrow-api/dist/toJSON";\n\nconst incre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst decre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst result = toJSON({\n  incre,\n  decre,\n});\n')),(0,o.kt)("h3",{id:"codegen"},"codegen"),(0,o.kt)("p",null,"Code generation for client with ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const codegen: (\n  formatResult: FormatResult,\n  options?: CodegenOptions | undefined\n) => string;\n\nexport type CodegenOptions = {\n  /**\n   * emit createApiClient or not\n   * if set to false, only types will be codegen\n   */\n  emitApiClient?: boolean;\n\n  /**\n   * a remote address or alias to invoke\n   */\n  url?: string;\n\n  /**\n   * add ts-nocheck or not\n   */\n  noCheck?: boolean | string;\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Api } from "farrow-api";\nimport { toJSON } from "farrow-api/dist/toJSON";\nimport { codegen } from "farrow-api/dist/codegen";\n\nconst incre = Api({\n  input: Number,\n  output: Number,\n});\n\nconst decre = Api({\n  input: Number,\n  output: Number,\n});\nconst formatResult = toJSON(entries);\n\nconst source = codegen(formatResult, {\n  noCheck: "just for testing",\n});\n')),(0,o.kt)("h3",{id:"controvertentries"},"controvertEntries"),(0,o.kt)("h4",{id:"controvertentries-1"},"controvertEntries"),(0,o.kt)("p",null,"Controvert JSON to Farrow API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const controvertEntries: (input: FormatResult) => ApiEntries;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const incre = Api(\n  {\n    input: Int,\n    output: Int,\n  },\n  (input: number): number => {\n    return input + 1;\n  }\n);\n\nconst entries: ApiEntries = {\n  incre,\n};\n\nconst newEntries = controvertEntries(toJSON(entries));\n")),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/general/farrow-schema"},"farrow-schema"),": Powerful and extensible schema builder library. Create Schema like type of ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeSccript"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),": ",(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api"},"farrow-api")," adapter for ",(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-client"},"farrow-api-client"),": An api-client for ",(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/rpc/farrow-api-server"},"farrow-api-server"),".")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/10-api-base"},"farrow-sample/10-api-base"),": Sample of ",(0,o.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/14-api-todo-app"},"farrow-sample/14-api-todo-app"),": Todo App with ",(0,o.kt)("strong",{parentName:"li"},"farrow-api"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/23-api-todo"},"farrow-sample/23-api-todo"),": A template for farrow with rpc api.")))))}f.isMDXComponent=!0}}]);