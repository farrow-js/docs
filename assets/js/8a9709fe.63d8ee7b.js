"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[3017],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),p=n(6010),c="tabItem_vU9c";function u(e){var t,n,r,o=e.lazy,l=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),C=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,a.useState)(N),w=b[0],x=b[1],T=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=C[m];null!=j&&j!==w&&g.some((function(e){return e.value===j}))&&x(j)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==w&&(S(t),x(r),null!=m&&y(m,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},h)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:P,onClick:P},null!=n?n:t)}))),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},2035:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=n(6396),i=n(8215),s=["components"],p={title:"farrow-next",authors:["tqma113"],tags:["Framework","Injection"],sidebar_position:0},c=void 0,u={unversionedId:"api/frontend/farrow-next",id:"api/frontend/farrow-next",isDocsHomePage:!1,title:"farrow-next",description:"An upper-level business framework based on the Next.js package.",source:"@site/docs/api/frontend/01-farrow-next.mdx",sourceDirName:"api/frontend",slug:"/api/frontend/farrow-next",permalink:"/docs/api/frontend/farrow-next",editUrl:"https://github.com/farrow-js/docs/docs/api/frontend/01-farrow-next.mdx",tags:[{label:"Framework",permalink:"/docs/tags/framework"},{label:"Injection",permalink:"/docs/tags/injection"}],version:"current",sidebarPosition:0,frontMatter:{title:"farrow-next",authors:["tqma113"],tags:["Framework","Injection"],sidebar_position:0},sidebar:"apiSidebar",previous:{title:"farrow-federation",permalink:"/docs/api/rpc/farrow-federation"},next:{title:"farrow-next-server",permalink:"/docs/api/frontend/farrow-next-server"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Step 1: Define the Controller",id:"step-1-define-the-controller",children:[],level:3},{value:"Step 2: Defining View",id:"step-2-defining-view",children:[],level:3},{value:"Step 3: Create the Page component",id:"step-3-create-the-page-component",children:[],level:3},{value:"Step 4: Expose the Page component",id:"step-4-expose-the-page-component",children:[],level:3}],level:2},{value:"API",id:"api",children:[{value:"React Hooks API",id:"react-hooks-api",children:[{value:"Controller.use",id:"controlleruse",children:[],level:4},{value:"Controller.useState",id:"controllerusestate",children:[],level:4},{value:"usePageInfo",id:"usepageinfo",children:[],level:4},{value:"useQueryChangedEffect",id:"usequerychangedeffect",children:[],level:4}],level:3},{value:"Controller API",id:"controller-api",children:[{value:"controller.initialState",id:"controllerinitialstate",children:[],level:4},{value:"controller.reducers",id:"controllerreducers",children:[],level:4},{value:"controller.store",id:"controllerstore",children:[],level:4},{value:"controller.state",id:"controllerstate",children:[],level:4},{value:"controller.actions",id:"controlleractions",children:[],level:4},{value:"controller.page",id:"controllerpage",children:[],level:4},{value:"controller.devtools",id:"controllerdevtools",children:[],level:4},{value:"controller.logger",id:"controllerlogger",children:[],level:4},{value:"controller.fetch",id:"controllerfetch",children:[],level:4},{value:"controller.getJson",id:"controllergetjson",children:[],level:4},{value:"controller.postJson",id:"controllerpostjson",children:[],level:4},{value:"controller.getCookie",id:"controllergetcookie",children:[],level:4},{value:"controller.setCookie",id:"controllersetcookie",children:[],level:4},{value:"controller.removeCookie",id:"controllerremovecookie",children:[],level:4},{value:"controller.redirect",id:"controllerredirect",children:[],level:4},{value:"controller.isClient",id:"controllerisclient",children:[],level:4},{value:"controller.isServer",id:"controllerisserver",children:[],level:4},{value:"controller.userAgent",id:"controlleruseragent",children:[],level:4},{value:"controller.use",id:"controlleruse-1",children:[],level:4}],level:3},{value:"Controller Life-Cycle",id:"controller-life-cycle",children:[{value:"controller.preload",id:"controllerpreload",children:[],level:4}],level:3},{value:"Page Api",id:"page-api",children:[],level:3},{value:"Dependency Injection",id:"dependency-injection",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An upper-level business framework based on the ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," package."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Contains")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A conceptual architecture based on the classic ",(0,o.kt)("inlineCode",{parentName:"p"},"MVC"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-based")," state management.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Based on the model of ",(0,o.kt)("inlineCode",{parentName:"p"},"Inverse of Control")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Dependency Injection")," to manage business code.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Provides a friendly ",(0,o.kt)("inlineCode",{parentName:"p"},"React-Hooks api"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Wraps ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie|fetch|userAgent")," and other convenient isomorphic methods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Based on ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeScript")," development, providing good type derivation capabilities."))))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-next next.js\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-pipeline next.js\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Each page consists of 3 parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Model"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Model")," manages the state of the application and its changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"View")," manages the interface of the application and its event binding"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controller")," manages the asynchronous interaction of the application (e.g. requesting data)")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow-next"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," and each ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," has its own ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," that it maintains."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers/actions"),", which can be understood as a ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-store"),"."),(0,o.kt)("p",null,"There is only one ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),", but there can be multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," accesses the ",(0,o.kt)("inlineCode",{parentName:"p"},"state, actions")," and other properties or methods inside each ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," through the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks api"),"."),(0,o.kt)("h3",{id:"step-1-define-the-controller"},"Step 1: Define the Controller"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," can be defined as many times as needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// counter/Controller.ts\nimport { Controller } from "farrow-next";\n\n// Define state type\nexport type CounterState = {\n  count: number;\n};\n\n// Define Controller\nexport class Counter extends Controller {\n  // add the initial state\n  initialState: CounterState = {\n    count: 0,\n  };\n\n  // Define reducers\n  // expresses the actions to update the state\n  reducers = {\n    incre(state: CounterState, step = 1) {\n      return {\n        ...state,\n        count: state.count + step,\n      };\n    },\n    decre(state: CounterState, step = 1) {\n      return {\n        ...state,\n        count: state.count - step,\n      };\n    },\n  };\n\n  // Whether to enable redux-devtools\n  // default is true\n  devtools = true;\n\n  // Whether to enable redux-logger\n  // default is false\n  logger = false;\n\n  // Declare the preload lifecycle function\n  // This function is called before the component is rendered and corresponds to the timing of the execution of getInitialProps\n  // In this function, asynchronous processing is done to call actions to update the store\n  async preload() {\n    /*\n     * Access to the latest state\n     * internally execute this.store.getState()\n     */\n    this.state;\n\n    /**\n     * Call action\n     * this.actions has the same key as this.reducers\n     * but it is bound to this.store, which will automatically update the state in store when called\n     */\n    this.actions.incre(10);\n\n    /**\n     * Access the uesr-agent string\n     * On the server side, it is automatically retrieved from req.headers[\'user-agent\'].\n     * On the client side it is retrieved from window.navigator.userAgent\n     This.userAgent \n     */\n    this.userAgent;\n\n    /*\n     * Access to cookies\n     * Internally, it automatically coordinates the server/client to break different cookie sources\n     */\n    this.getCookie("a");\n    this.setCookie("a", "b");\n\n    /**\n     * Send a GET request\n     * The first parameter is the request address\n     * The second parameter is the requested query string\n     * internally it will be spliced as /pathname?a=1&b=abc\n     * Return an asynchronous json object\n     */\n    let json = await this.getJson("/pathname", {\n      a: 1,\n      b: "abc",\n    });\n\n    /**\n     * Send a POST request\n     * The first parameter is the request address\n     * The second parameter is the body\n     * returns an asynchronous json object\n     */\n    let json = await this.postJson("/pathname", {\n      a: 1,\n      b: "abc",\n    });\n  }\n}\n')),(0,o.kt)("h3",{id:"step-2-defining-view"},"Step 2: Defining View"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"React Component"),", and in any function component, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller.use()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pull state data from ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller.useState(selector?)"),", and automatically update the view when the state changes"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// counter/View.tsx\nimport React from "react";\nimport { Counter } from ". /controllers/Counter";\n\nexport const View = () => {\n  // Get the instance\n  const counter = Counter.use();\n  // Get and listen for state changes\n  const count = Counter.useState((state) => state.count);\n  return (\n    <>\n      <h1>count: {count}</h1>\n      <button type="button" onClick={() => counter.actions.incre(10)}>\n        incre\n      </button> <button type="button" onClick={() => counter.actions.decre()}>\n        decre\n      </button>\n    </>\n  );\n};\n')),(0,o.kt)("h3",{id:"step-3-create-the-page-component"},"Step 3: Create the Page component"),(0,o.kt)("p",null,"After completing the two steps, we need to bind them together to create a page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// counter/index.tsx\nimport { page } from "farrow-next";\nimport { Counter } from ". /controllers/Counter";\nimport { View } from ". /View";\n\n/**\n * page(options) create Page component\n */\nexport default page({\n  View: View,\n  /**\n   * Bind the Controllers that the view depends on\n   * Only the bound Controllers are accessible via hooks in the component\n   */\n  Controllers: {\n    counter: Counter,\n  },\n\n  /**\n   * preload callback\n   * It will be executed after all controller.preload() executions are finished\n   * Instances with parameters in the page#Controllers field can access their data and call their methods.\n   */\n  async preload({ counter }) {\n    counter.actions.incre();\n  },\n});\n')),(0,o.kt)("h3",{id:"step-4-expose-the-page-component"},"Step 4: Expose the Page component"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/xxx.ts"),", expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," component to be accessible via url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// pages/counter.ts\nexport { default } from ". /src/pages/counter";\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"react-hooks-api"},"React Hooks API"),(0,o.kt)("h4",{id:"controlleruse"},"Controller.use"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," instance in the ",(0,o.kt)("inlineCode",{parentName:"p"},"React Function Component"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.use<T extends Controller>(this: ControllerCtor<T>): T\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let ctrl = Controller.use();\n")),(0,o.kt)("h4",{id:"controllerusestate"},"Controller.useState"),(0,o.kt)("p",null,"Get and listen to ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"React Function Component")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Selector (optional) with ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," as argument returns the result of the state selected from it, default is state => state"),(0,o.kt)("li",{parentName:"ul"},"Compare (optional), with ",(0,o.kt)("inlineCode",{parentName:"li"},"(currState, prevState)"),", returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," if the component needs to be re-rendered, or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," if it is not. The default is ",(0,o.kt)("inlineCode",{parentName:"li"},"shallowEqual")," which is shallow compared two object.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.useState<T extends Controller, TSelected = StateType<T[\"store\"]>>(this: ControllerCtor<T>, selector?: ((state: StateType<T['store']>) => TSelected) | undefined, compare?: ((curr: TSelected, prev: TSelected) => boolean) | undefined): TSelected\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"let state = Controller.useState((state) => state, shallowEqual);\n")),(0,o.kt)("h4",{id:"usepageinfo"},"usePageInfo"),(0,o.kt)("p",null,"Access current page info."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"usePageInfo: () => PageInfo;\n\ninterface PageInfo {\n  /**\n   * Error object if encountered during rendering\n   */\n  err?:\n    | (Error & {\n        statusCode?: number;\n      })\n    | null;\n  /**\n   * `HTTP` request object.\n   */\n  req?: IncomingMessage;\n  /**\n   * `HTTP` response object.\n   */\n  res?: ServerResponse;\n  /**\n   * Path section of `URL`.\n   */\n  pathname: string;\n  /**\n   * Query string section of `URL` parsed as an object.\n   */\n  query: ParsedUrlQuery;\n  /**\n   * `String` of the actual path including query.\n   */\n  asPath?: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { usePageInfo } from "farrow-next";\n\nconst App = () => {\n  let pageInfo = usePageInfo();\n  // ...\n};\n')),(0,o.kt)("h4",{id:"usequerychangedeffect"},"useQueryChangedEffect"),(0,o.kt)("p",null,"Perform effect when query was changed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useQueryChangedEffect: (effect: QueryChangedEffectCallback) => void;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useQueryChangedEffect } from "farrow-next";\n\nconst App = () => {\n  useQueryChangedEffect((currQuery, prevQuery) => {\n    // do something\n  });\n};\n')),(0,o.kt)("h3",{id:"controller-api"},"Controller API"),(0,o.kt)("h4",{id:"controllerinitialstate"},"controller.initialState"),(0,o.kt)("p",null,"Initial state of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," to initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux store")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(property) Controller.initialState?: T\n")),(0,o.kt)("h4",{id:"controllerreducers"},"controller.reducers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," object of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," function to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," is an object ",(0,o.kt)("inlineCode",{parentName:"p"},"{ [key: string]: Reducer }")," whose ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," is its ",(0,o.kt)("inlineCode",{parentName:"p"},"action-type"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Controller.reducers: Reducers<this["initialState"]>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"reducers = {\n  incre(state: CounterState, step = 1) {\n    return {\n      ...state,\n      count: state.count + step,\n    };\n  },\n  decre(state: CounterState, step = 1) {\n    return {\n      ...state,\n      count: state.count - step,\n    };\n  },\n};\n")),(0,o.kt)("h4",{id:"controllerstore"},"controller.store"),(0,o.kt)("p",null,"Access the ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-store")," constructed from ",(0,o.kt)("inlineCode",{parentName:"p"},"initialState/reducers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"")),(0,o.kt)("h4",{id:"controllerstate"},"controller.state"),(0,o.kt)("p",null,"Accesses the current ",(0,o.kt)("inlineCode",{parentName:"p"},"this.store.getState()")," latest state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Controller.store: Store<this["initialState"], this["reducers"]>\n')),(0,o.kt)("h4",{id:"controlleractions"},"controller.actions"),(0,o.kt)("p",null,"Accesses the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," update function of ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-store"),", with the same structure as ",(0,o.kt)("inlineCode",{parentName:"p"},"this.reducers"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'Controller.actions: ReducersToActions<this["reducers"]>\n')),(0,o.kt)("h4",{id:"controllerpage"},"controller.page"),(0,o.kt)("p",null,"Access the data associated with ",(0,o.kt)("inlineCode",{parentName:"p"},"NextPageContext"),", structured roughly as follows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.page: PageInfo\n")),(0,o.kt)("h4",{id:"controllerdevtools"},"controller.devtools"),(0,o.kt)("p",null,"Whether to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-devtools"),", default is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Supports ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean | string"),", if it is ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", it will be displayed as the name in ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-devtools"),", which can be displayed normally even after compressing the code (the default name is the class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller.name"),", which becomes a single letter after compressing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.devtools: string | boolean\n")),(0,o.kt)("h4",{id:"controllerlogger"},"controller.logger"),(0,o.kt)("p",null,"Whether to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"redux-logger"),", default is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.logger: boolean\n")),(0,o.kt)("h4",{id:"controllerfetch"},"controller.fetch"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," method wrapper, automatically handles ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie")," passing internally, interface is consistent with global variable ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.io/fetch/"},"documentation")," for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.fetch(url: string, options?: RequestInit | undefined): ReturnType<typeof fetch>\n")),(0,o.kt)("h4",{id:"controllergetjson"},"controller.getJson"),(0,o.kt)("p",null,"Based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.fetch")," wrapper to make it easier to send get requests."),(0,o.kt)("p",null,"The url parameters are handled in the same way as the ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.fetch")," method."),(0,o.kt)("p",null,"The params parameter will be internally querystring.stringify and spliced after the url."),(0,o.kt)("p",null,"The options parameter will be passed as options for the fetch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.getJson<Query extends {}>(url: string, query?: Query | undefined, init?: RequestInit | undefined): Promise<any>\n")),(0,o.kt)("h4",{id:"controllerpostjson"},"controller.postJson"),(0,o.kt)("p",null,"Based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.fetch")," wrapper method, and is a simpler way to send post requests."),(0,o.kt)("p",null,"The url parameter is handled in the same way as the ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.fetch")," method."),(0,o.kt)("p",null,"If the data is an object, it will be internally JSON.stringify and then sent to the server as a request payload"),(0,o.kt)("p",null,"The options parameter will be passed as options for the fetch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.postJson<Body extends {}>(url: string, body?: Body | undefined, init?: RequestInit | undefined): Promise<any>\n")),(0,o.kt)("h4",{id:"controllergetcookie"},"controller.getCookie"),(0,o.kt)("p",null,"Used to get the value of the cookie corresponding to the key parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.getCookie(name: string): string | undefined\n")),(0,o.kt)("h4",{id:"controllersetcookie"},"controller.setCookie"),(0,o.kt)("p",null,"Used to set the value of the cookie corresponding to the key parameter. The third parameter options is an object, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-cookie/js-cookie#cookie-attributes"},"documentation")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.setCookie(name: string, value: string, options?: CookieSerializeOptions | undefined): string | undefined\n")),(0,o.kt)("h4",{id:"controllerremovecookie"},"controller.removeCookie"),(0,o.kt)("p",null,"Used to remove the value of the cookie corresponding to the key parameter. The third parameter options is an object, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-cookie/js-cookie#cookie-attributes"},"documentation")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.removeCookie(name: string, options?: CookieSerializeOptions | undefined): string | undefined\n")),(0,o.kt)("h4",{id:"controllerredirect"},"controller.redirect"),(0,o.kt)("p",null,"Used to redirect, it will take care the ",(0,o.kt)("inlineCode",{parentName:"p"},"server/client"),", and chose the right way to redirect."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.redirect(url: string): Promise<void>\n")),(0,o.kt)("h4",{id:"controllerisclient"},"controller.isClient"),(0,o.kt)("p",null,"A boolean value that determines whether the client is currently on the server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.isClient: boolean\n")),(0,o.kt)("h4",{id:"controllerisserver"},"controller.isServer"),(0,o.kt)("p",null,"The boolean value that determines whether the client is currently on the server side."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.isServer: boolean\n")),(0,o.kt)("h4",{id:"controlleruseragent"},"controller.userAgent"),(0,o.kt)("p",null,"Gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"userAgent")," string, which can be used to construct other properties or methods such as ",(0,o.kt)("inlineCode",{parentName:"p"},"controller.isWeixin"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.userAgent: string\n")),(0,o.kt)("h4",{id:"controlleruse-1"},"controller.use"),(0,o.kt)("p",null,"Used to implement dependency injection and returns the instance of the used class."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#dependency-injection"},"Dependency Injection")," for more on this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.use<T extends Controller>(this: ControllerCtor<T>): T\n")),(0,o.kt)("h3",{id:"controller-life-cycle"},"Controller Life-Cycle"),(0,o.kt)("h4",{id:"controllerpreload"},"controller.preload"),(0,o.kt)("p",null,"Call on preload phase(before component rendering), you can fetch ",(0,o.kt)("inlineCode",{parentName:"p"},"SSR")," related data in this method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Controller.preload?(): Promise<void>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Test extends Controller {\n  // Preload data\n  async preload() {\n    let json = await this.postJson(url, this.state.body);\n    this.actions.updateJson(json);\n  }\n}\n")),(0,o.kt)("h3",{id:"page-api"},"Page Api"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { page } from 'farrow-next'\n\nexport default page({\n  View, // React Component for Page\n  Controllers: {...}, // Controllers for Page\n  Providers: [...], // Optional Providers for Controllers above\n  async preload(ctrls) {}, // preload life-cycle method triggered after all controller.preload() finished\n})\n\n")),(0,o.kt)("h3",{id:"dependency-injection"},"Dependency Injection"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller class")," implements dependency injection, meaning that within a ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),", instances of other controllers can be injected via ",(0,o.kt)("inlineCode",{parentName:"p"},"this.use(Controller)"),", and can even refer to each other."),(0,o.kt)("p",null,"This mechanism facilitates modularity by giving preference to combinations over inheritance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Define User controllers\nclass UserCtrl extends Controller {\n  // Login method\n  async login() {\n    await this.getJson("/login");\n  }\n  // login on preload\n  async preload() {\n    await this.login();\n  }\n}\n\n// Define the Product controller\nclass ProductCtrl extends Controller {\n  // Inject user\n  user = this.use(UserCtrl);\n}\n\n// Define Order controller\nclass OrderCtrl extends Controller {\n  // inject user, which is the same instance as the product controller\n  user = this.use(UserCtrl);\n}\n\n// Define the page controller\nclass HomePageCtrl extends Controller {\n  // Inject the other controllers needed for the page\n  user = this.use(UserCtrl);\n  product = this.use(ProductCtrl);\n  order = this.use(OrderCtrl);\n}\n')),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js"),": The React Framework for Production."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/general/farrow-module"},"farrow-module"),": A module abstraction providing dependencies management.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/farrow-js/farrow/tree/master/examples/next-app"},"next-app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/blob/main/samples/11-next-react"},"farrow-sample/11-next-react"))))))}h.isMDXComponent=!0}}]);