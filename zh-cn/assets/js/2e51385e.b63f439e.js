"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[8716],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),r=t(7294),o=t(2389),l=t(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(9521),u=t(6010),s="tabItem_vU9c";function d(e){var n,t,a,o=e.lazy,l=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,p.lx)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),b=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,r.useState)(g),C=y[0],O=y[1],x=[],E=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=b[m];null!=j&&j!==C&&h.some((function(e){return e.value===j}))&&O(j)}var T=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==C&&(E(n),O(a),null!=m&&w(m,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":C===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:T,onClick:T},null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},1921:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=t(6396),i=t(8215),p=["components"],u={title:"farrow",authors:["tqma113"],tags:["CLI","Bundler","Development"],sidebar_position:0},s=void 0,d={unversionedId:"api/cli/farrow",id:"api/cli/farrow",isDocsHomePage:!1,title:"farrow",description:"Useful modules for developing and bundling farrow app.",source:"@site/docs/api/cli/01-farrow.mdx",sourceDirName:"api/cli",slug:"/api/cli/farrow",permalink:"/zh-cn/docs/api/cli/farrow",editUrl:"https://github.com/farrow-js/docs/docs/api/cli/01-farrow.mdx",tags:[{label:"CLI",permalink:"/zh-cn/docs/tags/cli"},{label:"Bundler",permalink:"/zh-cn/docs/tags/bundler"},{label:"Development",permalink:"/zh-cn/docs/tags/development"}],version:"current",sidebarPosition:0,frontMatter:{title:"farrow",authors:["tqma113"],tags:["CLI","Bundler","Development"],sidebar_position:0},sidebar:"apiSidebar",previous:{title:"farrow-vite",permalink:"/zh-cn/docs/api/frontend/farrow-vite"},next:{title:"create-farrow-app",permalink:"/zh-cn/docs/api/cli/create-farrow-app"}},c=[{value:"Setup",id:"setup",children:[],level:2},{value:"CLI",id:"cli",children:[{value:"<code>dev</code>",id:"dev",children:[],level:3},{value:"<code>build</code>",id:"build",children:[],level:3},{value:"<code>start</code>",id:"start",children:[],level:3}],level:2},{value:"<code>farrow.config.js</code>",id:"farrowconfigjs",children:[{value:"<code>server</code>",id:"server",children:[],level:3},{value:"<code>api</code>",id:"api",children:[],level:3}],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],m={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Useful modules for developing and bundling farrow app."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --dev farrow\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D farrow\n")))),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"The farrow CLI allows you to dev, build, and start your application."),(0,o.kt)("p",null,"To get a list of the available CLI commands, run the following command inside your project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"farrow -h\n")),(0,o.kt)("p",null,"The output should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage\n  $ farrow <command>\n\nAvailable commands\n  dev, build, start\n\nOptions\n  --version, -v   Version number\n  --help, -h      Displays this message\n\nFor more information run a command with the --help flag\n  $ farrow dev --help\n")),(0,o.kt)("h3",{id:"dev"},(0,o.kt)("inlineCode",{parentName:"h3"},"dev")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"farrow dev")," starts the application in development mode with hot-code reloading, error reporting, and more."),(0,o.kt)("p",null,"The application at ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," will start by default with development mode."),(0,o.kt)("h3",{id:"build"},(0,o.kt)("inlineCode",{parentName:"h3"},"build")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"farrow build")," creates an optimized production build of your application."),(0,o.kt)("h3",{id:"start"},(0,o.kt)("inlineCode",{parentName:"h3"},"start")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"farrow start")," runs the output code of bundler."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Example: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/05-http-todo-app"},"farrow-sample/05-http-todo-app"),"."))),(0,o.kt)("h2",{id:"farrowconfigjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"farrow.config.js")),(0,o.kt)("p",null,"For define the behaviour of farrow, you need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow.config.js")," file in the root of your project directory (next to package.json)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"farrow.config.js")," is a regular Node.js module, not a JSON file."),(0,o.kt)("p",null,"Take a look at the following ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow.config.js")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { defineConfig } = require("farrow");\n\nmodule.exports = defineConfig({\n  /* config options here */\n});\n')),(0,o.kt)("p",null,"Also support TypeScript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } form 'farrow'\n\nexport default defineConfig({\n  /* config options here */\n})\n")),(0,o.kt)("p",null,"It has the type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type Config = {\n  server?: ServerBundlerOptions | ServerBundlerOptions[] | false;\n  api?: ApiClientOptions | ApiClientOptions[] | false;\n};\n")),(0,o.kt)("h3",{id:"server"},(0,o.kt)("inlineCode",{parentName:"h3"},"server")),(0,o.kt)("p",null,"The config of server app(s)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export type ServerBundlerOptions = {\n  entry?: string;\n  src?: string;\n  dist?: string;\n  nodeArgs?: string[];\n  env?: NodeJS.ProcessEnv;\n  esbuild?: Omit<BuildOptions, "entryPoints" | "outdir" | "outbase">;\n  autoExternal?: boolean;\n};\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entry"))),(0,o.kt)("p",null,"Entry of app. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src"))),(0,o.kt)("p",null,"Folder of source code. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"./src"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dist"))),(0,o.kt)("p",null,"Folder of output code. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"./dist"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nodeArgs"))),(0,o.kt)("p",null,"For creating the config value. eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"{ NODE_ENV: 'production' }"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env"))),(0,o.kt)("p",null,"Env value for Node.js. eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"{ NODE_ENV: 'production' }"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV = production")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV = development")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow dev"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"esbuild"))),(0,o.kt)("p",null,"Options for esbuild."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"autoExternal"))),(0,o.kt)("p",null,"Auto add closest package.json dependenties to esbuild external or not."),(0,o.kt)("h3",{id:"api"},(0,o.kt)("inlineCode",{parentName:"h3"},"api")),(0,o.kt)("p",null,"Args for Node.js."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample"},"farrow-sample"),": Samples for farrow.")))))}f.isMDXComponent=!0}}]);