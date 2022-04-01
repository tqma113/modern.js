"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7445],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73094:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(49231);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},75440:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(14380),a=n(49231),o=n(54920),i=n(8161),l=n(1506),u="tabItem_tmCO";function c(e){var t,n,o,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(h),O=N[0],T=N[1],x=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&T(E)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(j(t),T(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},48783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(14380),a=n(8240),o=(n(49231),n(54852)),i=n(75440),l=n(73094),u=["components"],c={title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},s=void 0,p={unversionedId:"guides/tutorials/c11-container/11.4-testing",id:"guides/tutorials/c11-container/11.4-testing",title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6",description:"\u8ddf\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002",source:"@site/docs/guides/tutorials/c11-container/11.4-testing.md",sourceDirName:"guides/tutorials/c11-container",slug:"/guides/tutorials/c11-container/11.4-testing",permalink:"/docs/guides/tutorials/c11-container/11.4-testing",tags:[],version:"current",frontMatter:{title:"\u200b\u6d4b\u8bd5\u5bb9\u5668\u7ec4\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u200b\u4f7f\u7528 Loader",permalink:"/docs/guides/tutorials/c11-container/11.3-use-loader"},next:{title:"\u6982\u89c8",permalink:"/docs/guides/usages/overview"}},d={},m=[],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ddf",(0,o.kt)("a",{parentName:"p",href:"../c06-css-and-component/6.6-testing"},"\u6d4b\u8bd5\u7ec4\u4ef6\u200b\u200b\u200b"),"\u4e2d\u4e00\u6837\uff0c\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed9Model \u5199\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,o.kt)("p",null,"\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"containers/Contacts.tsx")," \u4e3a\u4f8b\uff0c\u6211\u4eec\u521b\u5efa\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".test")," \u6587\u4ef6\uff1a"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/contacts/containers/contacts.test.tsx\n"))),(0,o.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"ni src/contacts/containers/contacts.test.tsx\n")))),(0,o.kt)("p",null,"\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u53ef\u4ee5\u4f7f\u7528 Modern.js \u63d0\u4f9b\u7684 API \u8fdb\u884c\u6e32\u67d3\uff0c\u5e76\u901a\u8fc7 API \u8fd4\u56de\u7684\u5de5\u5177\u51fd\u6570\u8fdb\u884c\u65ad\u8a00\u3002"),(0,o.kt)("p",null,"\u6d4b\u8bd5\u7528\u4f8b\u6587\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { renderApp, waitFor } from '@modern-js/runtime/testing';\nimport ContactContainer from './Contacts';\n\ndescribe('test contracts model', () => {\n  it('actions works well', async () => {\n    const { getByText } = renderApp(<ContactContainer source=\"items\" />);\n\n    await waitFor(() => {\n      expect(getByText('Pending...')).toBeInTheDocument();\n    });\n  });\n});\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/runtime/testing/renderApp"},"Test API"),"\u3002"))),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u62a5\u544a\u3002"),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern-4"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}v.isMDXComponent=!0}}]);