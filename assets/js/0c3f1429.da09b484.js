"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[8004],{54852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21657:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(14380),o=t(8240),i=(t(49231),t(54852)),a=["components"],c={title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a"},s=void 0,u={unversionedId:"guides/tutorials/c03-ide/3.2-hints-in-ide",id:"guides/tutorials/c03-ide/3.2-hints-in-ide",title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a",description:"\u6253\u5f00\u4efb\u610f JS/TS \u6587\u4ef6\uff08\u6bd4\u5982 src/App.jsx\uff09\uff0c\u5e95\u90e8\u72b6\u6001\u680f\u53f3\u4fa7\u5e94\u8be5\u6709\u663e\u793a ESLint\uff0c\u70b9\u51fb\u53ef\u4ee5\u770b\u5230\u8fd0\u884c log\uff0c\u5e94\u8be5\u6ca1\u6709\u62a5\u9519\u3002",source:"@site/docs/guides/tutorials/c03-ide/3.2-hints-in-ide.md",sourceDirName:"guides/tutorials/c03-ide",slug:"/guides/tutorials/c03-ide/3.2-hints-in-ide",permalink:"/docs/guides/tutorials/c03-ide/3.2-hints-in-ide",tags:[],version:"current",frontMatter:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u63d0\u793a"},sidebar:"guidesSidebar",previous:{title:"\u200b\u521d\u59cb\u5316 IDE\u200b\u200b\u200b\u200b",permalink:"/docs/guides/tutorials/c03-ide/3.1-setting-up"},next:{title:"IDE \u4e2d\u7684\u81ea\u52a8\u4fee\u590d",permalink:"/docs/guides/tutorials/c03-ide/3.3-autofix-in-ide"}},p={},l=[],d={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6253\u5f00\u4efb\u610f JS/TS \u6587\u4ef6\uff08\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/App.jsx"),"\uff09\uff0c\u5e95\u90e8\u72b6\u6001\u680f\u53f3\u4fa7\u5e94\u8be5\u6709\u663e\u793a ESLint\uff0c\u70b9\u51fb\u53ef\u4ee5\u770b\u5230\u8fd0\u884c log\uff0c\u5e94\u8be5\u6ca1\u6709\u62a5\u9519\u3002"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"App.jsx")," \u4ee3\u7801\u505a\u5982\u4e0b\u4fee\u6539\uff08\u4fee\u6539\u8fc7\u7a0b\u4e2d\u4e0d\u8981\u4fdd\u5b58\uff09\uff0c\u589e\u52a0\u65e0\u7528\u7684\u51fd\u6570\u53c2\u6570\u3001\u53bb\u6389\u6362\u884c\u3001\u5355\u5f15\u53f7\u6539\u6210\u53cc\u5f15\u53f7\u3001\u589e\u52a0\u7f29\u8fdb\uff08\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u7684\u4ee3\u7801\u66ff\u6362 App.jsx \u7684\u5185\u5bb9\uff09\uff0c\u6ce8\u610f\u4fee\u6539\u8fc7\u7a0b\u4e2d",(0,i.kt)("strong",{parentName:"p"},"\u5148\u4e0d\u8981\u4fdd\u5b58\u6587\u4ef6"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Switch, Route } from \'@modern-js/runtime/router\';\n\nimport \'./App.css\';\n\nconst App = (a) => (\n  <Switch>\n    <Route exact={true} path="/">\n            <div className="container">\n        <main>\n          <div className=\'logo\'>\n            <img\n              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylaelkeh7nuhfnuhf/modernjs-cover.png"\n              width="300"\n              alt="Modern.js Logo"\n            />\n          </div>\n          <p className="description">\n            Get started by editing <code className="code">src/App.tsx</code>\n          </p>\n          <div className="grid">\n            <a href="#" className="card">\n              <h2>Quick Start</h2>\n            </a>\n            <a href="#" className="card">\n              <h2>Handbook</h2>\n            </a>\n            <a href="#" className="card">\n              <h2>API Reference </h2>\n            </a>\n            <a\n              href="#"\n              target="_blank"\n              rel="noopener noreferrer"\n              className="card">\n              <h2>Community </h2>\n            </a>\n          </div>\n        </main>\n        <footer className="footer">\n          <a href="#" target="_blank" rel="noopener noreferrer">\n            Powered by Modern.JS\n          </a>\n        </footer>\n      </div>\n    </Route>\n    <Route path="*">\n      <div>404</div>\n    </Route>\n  </Switch>\n);\n\nexport default App;\n')),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728 VSCode \u4e2d\u770b\u5230\u4fee\u6539\u8fc7\u7684\u4ee3\u7801\u51fa\u73b0\u4e86\u95ee\u9898\u63d0\u793a\uff0c\u70b9\u51fb\u5e95\u90e8\u754c\u9762\u4e2d\u7684 Problems \u4e00\u680f\uff0c\u53ef\u4ee5\u770b\u5230\u95ee\u9898\u5217\u8868\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/vsc-with-error.png",alt:"vsc-with-error"})))}f.isMDXComponent=!0}}]);