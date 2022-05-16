"use strict";(self.webpackChunkfarrow_website=self.webpackChunkfarrow_website||[]).push([[2008],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),o=a(2389),l=a(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(9521),s=a(6010),u="tabItem_vU9c";function c(e){var t,a,n,o=e.lazy,l=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,p.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,r.useState)(g),T=y[0],x=y[1],O=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=w[d];null!=E&&E!==T&&v.some((function(e){return e.value===E}))&&x(E)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==T&&(P(t),x(n),null!=d&&N(d,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},v.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},460:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(6396),i=a(8215),p=["components"],s={title:"farrow-koa",authors:["tqma113"],tags:["HTTP","Adapter"],sidebar_position:3},u=void 0,c={unversionedId:"api/http/farrow-koa",id:"api/http/farrow-koa",isDocsHomePage:!1,title:"farrow-koa",description:"Adapter for farrow-http in Koa app.",source:"@site/docs/api/http/04-farrow-koa.mdx",sourceDirName:"api/http",slug:"/api/http/farrow-koa",permalink:"/docs/api/http/farrow-koa",editUrl:"https://github.com/farrow-js/docs/docs/api/http/04-farrow-koa.mdx",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"Adapter",permalink:"/docs/tags/adapter"}],version:"current",sidebarPosition:3,frontMatter:{title:"farrow-koa",authors:["tqma113"],tags:["HTTP","Adapter"],sidebar_position:3},sidebar:"apiSidebar",previous:{title:"farrow-express",permalink:"/docs/api/http/farrow-express"},next:{title:"farrow-react",permalink:"/docs/api/http/farrow-react"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Learn more",id:"learn-more",children:[],level:2}],d={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adapter for ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow-http")," in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/koajs/koa"},"Koa"))," app."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(l.Z,{groupId:"package-tool",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install farrow-koa\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add farrow-koa\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const adapter: (httpPipeline: HttpPipeline) => Middleware;\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"farrow-http")," app first:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Http } from "farrow-http";\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n')),(0,o.kt)("p",null,"And then create a ",(0,o.kt)("strong",{parentName:"p"},"Koa")," app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import Koa from "koa";\n\nconst PORT = 3000;\n\nconst app = new Koa();\n\napp.use(async (ctx) => {\n  ctx.body = "Hello World";\n});\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,o.kt)("p",null,"and combine them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import Koa from "koa";\nimport { Http } from "farrow-http";\nimport { adapter } from "farrow-koa";\n\nconst PORT = 3000;\n\nconst http = Http();\n\nhttp\n  .match({\n    pathname: "/test",\n  })\n  .use((data) => {\n    return Response.text(JSON.stringify(data));\n  });\n\nconst app = new Koa();\n\napp.use(adapter(http));\n\napp.listen(PORT, () => {\n  console.log(`Example app listening at http://localhost:${PORT}`);\n});\n')),(0,o.kt)("p",null,"Then, you can use work with farrow stack in a Koa app."),(0,o.kt)("p",null,"Or, you can combine them by ",(0,o.kt)("inlineCode",{parentName:"p"},"koa-router")," to a specific route path in ",(0,o.kt)("strong",{parentName:"p"},"Koa")," app."),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Relative Module")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/http/farrow-http"},"farrow-http"),": A Type-Friendly Web Framework."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/http/farrow-express"},"farrow-express"),": Adapter for ",(0,o.kt)("inlineCode",{parentName:"li"},"farrow-http")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/expressjs/express"},"Express")," app.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sample")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tqma113/farrow-sample/tree/main/samples/18-http-koa"},"farrow-sample/18-http-koa"),": HTTP Server sample with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/koajs/koa"},"Koa"),".")))))}f.isMDXComponent=!0}}]);