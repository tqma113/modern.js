(()=>{"use strict";var e={308:e=>{e.exports=e=>{if(typeof e!=="string"){throw new TypeError("Expected a string, got "+typeof e)}if(e.charCodeAt(0)===65279){return e.slice(1)}return e}},57:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.configLoader=t.loadConfig=void 0;var n=r(429);var i=r(17);var a=r(175);function loadConfig(e){if(e===void 0){e=a.options.cwd}return configLoader({cwd:e})}t.loadConfig=loadConfig;function configLoader(e){var t=e.cwd,r=e.explicitParams,a=e.tsConfigLoader,o=a===void 0?n.tsConfigLoader:a;if(r){var s=i.isAbsolute(r.baseUrl)?r.baseUrl:i.join(t,r.baseUrl);return{resultType:"success",configFileAbsolutePath:"",baseUrl:r.baseUrl,absoluteBaseUrl:s,paths:r.paths,mainFields:r.mainFields,addMatchAll:r.addMatchAll}}var u=o({cwd:t,getEnv:function(e){return process.env[e]}});if(!u.tsConfigPath){return{resultType:"failed",message:"Couldn't find tsconfig.json"}}if(!u.baseUrl){return{resultType:"failed",message:"Missing baseUrl in compilerOptions"}}var f=i.dirname(u.tsConfigPath);var c=i.join(f,u.baseUrl);return{resultType:"success",configFileAbsolutePath:u.tsConfigPath,baseUrl:u.baseUrl,absoluteBaseUrl:c,paths:u.paths||{}}}t.configLoader=configLoader},182:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.removeExtension=t.fileExistsAsync=t.readJsonFromDiskAsync=t.readJsonFromDiskSync=t.fileExistsSync=void 0;var n=r(147);function fileExistsSync(e){try{var t=n.statSync(e);return t.isFile()}catch(e){return false}}t.fileExistsSync=fileExistsSync;function readJsonFromDiskSync(e){if(!n.existsSync(e)){return undefined}return require(e)}t.readJsonFromDiskSync=readJsonFromDiskSync;function readJsonFromDiskAsync(e,t){n.readFile(e,"utf8",(function(e,r){if(e||!r){return t()}var n=JSON.parse(r);return t(undefined,n)}))}t.readJsonFromDiskAsync=readJsonFromDiskAsync;function fileExistsAsync(e,t){n.stat(e,(function(e,r){if(e){return t(undefined,false)}t(undefined,r?r.isFile():false)}))}t.fileExistsAsync=fileExistsAsync;function removeExtension(e){return e.substring(0,e.lastIndexOf("."))||e}t.removeExtension=removeExtension},462:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.getAbsoluteMappingEntries=void 0;var n=r(17);function getAbsoluteMappingEntries(e,t,r){var i=sortByLongestPrefix(Object.keys(t));var a=[];for(var o=0,s=i;o<s.length;o++){var u=s[o];a.push({pattern:u,paths:t[u].map((function(t){return n.join(e,t)}))})}if(!t["*"]&&r){a.push({pattern:"*",paths:["".concat(e.replace(/\/$/,""),"/*")]})}return a}t.getAbsoluteMappingEntries=getAbsoluteMappingEntries;function sortByLongestPrefix(e){return e.concat().sort((function(e,t){return getPrefixLength(t)-getPrefixLength(e)}))}function getPrefixLength(e){var t=e.indexOf("*");return e.substr(0,t).length}},29:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.matchFromAbsolutePathsAsync=t.createMatchPathAsync=void 0;var n=r(17);var i=r(306);var a=r(462);var o=r(182);function createMatchPathAsync(e,t,r,n){if(r===void 0){r=["main"]}if(n===void 0){n=true}var i=a.getAbsoluteMappingEntries(e,t,n);return function(e,t,n,a,o){return matchFromAbsolutePathsAsync(i,e,t,n,a,o,r)}}t.createMatchPathAsync=createMatchPathAsync;function matchFromAbsolutePathsAsync(e,t,r,n,a,s,u){if(r===void 0){r=o.readJsonFromDiskAsync}if(n===void 0){n=o.fileExistsAsync}if(a===void 0){a=Object.keys(require.extensions)}if(u===void 0){u=["main"]}var f=i.getPathsToTry(a,e,t);if(!f){return s()}findFirstExistingPath(f,r,n,s,0,u)}t.matchFromAbsolutePathsAsync=matchFromAbsolutePathsAsync;function findFirstExistingMainFieldMappedFile(e,t,r,i,a,o){if(o===void 0){o=0}if(o>=t.length){return a(undefined,undefined)}var tryNext=function(){return findFirstExistingMainFieldMappedFile(e,t,r,i,a,o+1)};var s=e[t[o]];if(typeof s!=="string"){return tryNext()}var u=n.join(n.dirname(r),s);i(u,(function(e,t){if(e){return a(e)}if(t){return a(undefined,u)}return tryNext()}))}function findFirstExistingPath(e,t,r,n,a,o){if(a===void 0){a=0}if(o===void 0){o=["main"]}var s=e[a];if(s.type==="file"||s.type==="extension"||s.type==="index"){r(s.path,(function(u,f){if(u){return n(u)}if(f){return n(undefined,i.getStrippedPath(s))}if(a===e.length-1){return n()}return findFirstExistingPath(e,t,r,n,a+1,o)}))}else if(s.type==="package"){t(s.path,(function(i,u){if(i){return n(i)}if(u){return findFirstExistingMainFieldMappedFile(u,o,s.path,r,(function(i,s){if(i){return n(i)}if(s){return n(undefined,s)}return findFirstExistingPath(e,t,r,n,a+1,o)}))}return findFirstExistingPath(e,t,r,n,a+1,o)}))}else{i.exhaustiveTypeException(s.type)}}},920:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.matchFromAbsolutePaths=t.createMatchPath=void 0;var n=r(17);var i=r(182);var a=r(462);var o=r(306);function createMatchPath(e,t,r,n){if(r===void 0){r=["main"]}if(n===void 0){n=true}var i=a.getAbsoluteMappingEntries(e,t,n);return function(e,t,n,a){return matchFromAbsolutePaths(i,e,t,n,a,r)}}t.createMatchPath=createMatchPath;function matchFromAbsolutePaths(e,t,r,n,a,s){if(r===void 0){r=i.readJsonFromDiskSync}if(n===void 0){n=i.fileExistsSync}if(a===void 0){a=Object.keys(require.extensions)}if(s===void 0){s=["main"]}var u=o.getPathsToTry(a,e,t);if(!u){return undefined}return findFirstExistingPath(u,r,n,s)}t.matchFromAbsolutePaths=matchFromAbsolutePaths;function findFirstExistingMainFieldMappedFile(e,t,r,i){for(var a=0;a<t.length;a++){var o=t[a];var s=e[o];if(s&&typeof s==="string"){var u=n.join(n.dirname(r),s);if(i(u)){return u}}}return undefined}function findFirstExistingPath(e,t,r,n){if(t===void 0){t=i.readJsonFromDiskSync}if(n===void 0){n=["main"]}for(var a=0,s=e;a<s.length;a++){var u=s[a];if(u.type==="file"||u.type==="extension"||u.type==="index"){if(r(u.path)){return o.getStrippedPath(u)}}else if(u.type==="package"){var f=t(u.path);if(f){var c=findFirstExistingMainFieldMappedFile(f,n,u.path,r);if(c){return c}}}else{o.exhaustiveTypeException(u.type)}}return undefined}},175:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.options=void 0;var n=r(227);var i=n(process.argv.slice(2),{string:["project"],alias:{project:["P"]}});var a=i&&i.project;t.options={cwd:a||process.cwd()}},41:function(e,t,r){var n=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++){if(a||!(n in t)){if(!a)a=Array.prototype.slice.call(t,0,n);a[n]=t[n]}}return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});t.register=void 0;var i=r(920);var a=r(57);var o=r(175);var noOp=function(){return void 0};function getCoreModules(e){e=e||["assert","buffer","child_process","cluster","crypto","dgram","dns","domain","events","fs","http","https","net","os","path","punycode","querystring","readline","stream","string_decoder","tls","tty","url","util","v8","vm","zlib"];var t={};for(var r=0,n=e;r<n.length;r++){var i=n[r];t[i]=true}return t}function register(e){var t=(0,a.configLoader)({cwd:o.options.cwd,explicitParams:e});if(t.resultType==="failed"){console.warn("".concat(t.message,". tsconfig-paths will be skipped"));return noOp}var s=(0,i.createMatchPath)(t.absoluteBaseUrl,t.paths,t.mainFields,t.addMatchAll);var u=r(188);var f=u._resolveFilename;var c=getCoreModules(u.builtinModules);u._resolveFilename=function(e,t){var r=c.hasOwnProperty(e);if(!r){var i=s(e);if(i){var a=n([i],[].slice.call(arguments,1),true);return f.apply(this,a)}}return f.apply(this,arguments)};return function(){u._resolveFilename=f}}t.register=register},306:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:true});t.exhaustiveTypeException=t.getStrippedPath=t.getPathsToTry=void 0;var n=r(17);var i=r(17);var a=r(182);function getPathsToTry(e,t,r){if(!t||!r||r[0]==="."){return undefined}var i=[];for(var a=0,o=t;a<o.length;a++){var s=o[a];var u=s.pattern===r?"":matchStar(s.pattern,r);if(u!==undefined){var _loop_1=function(t){var r=t.replace("*",u);i.push({type:"file",path:r});i.push.apply(i,e.map((function(e){return{type:"extension",path:r+e}})));i.push({type:"package",path:n.join(r,"/package.json")});var a=n.join(r,"/index");i.push.apply(i,e.map((function(e){return{type:"index",path:a+e}})))};for(var f=0,c=s.paths;f<c.length;f++){var d=c[f];_loop_1(d)}}}return i.length===0?undefined:i}t.getPathsToTry=getPathsToTry;function getStrippedPath(e){return e.type==="index"?(0,i.dirname)(e.path):e.type==="file"?e.path:e.type==="extension"?(0,a.removeExtension)(e.path):e.type==="package"?e.path:exhaustiveTypeException(e.type)}t.getStrippedPath=getStrippedPath;function exhaustiveTypeException(e){throw new Error("Unknown type ".concat(e))}t.exhaustiveTypeException=exhaustiveTypeException;function matchStar(e,t){if(t.length<e.length){return undefined}if(e==="*"){return t}var r=e.indexOf("*");if(r===-1){return undefined}var n=e.substring(0,r);var i=e.substring(r+1);if(t.substr(0,r)!==n){return undefined}if(t.substr(t.length-i.length)!==i){return undefined}return t.substr(r,t.length-i.length)}},429:function(e,t,r){var n=this&&this.__assign||function(){n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}return e};return n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:true});t.loadTsconfig=t.walkForTsConfig=t.tsConfigLoader=void 0;var i=r(17);var a=r(147);var o=r(278);var s=r(308);function tsConfigLoader(e){var t=e.getEnv,r=e.cwd,n=e.loadSync,i=n===void 0?loadSyncDefault:n;var a=t("TS_NODE_PROJECT");var o=t("TS_NODE_BASEURL");var s=i(r,a,o);return s}t.tsConfigLoader=tsConfigLoader;function loadSyncDefault(e,t,r){var n=resolveConfigPath(e,t);if(!n){return{tsConfigPath:undefined,baseUrl:undefined,paths:undefined}}var i=loadTsconfig(n);return{tsConfigPath:n,baseUrl:r||i&&i.compilerOptions&&i.compilerOptions.baseUrl,paths:i&&i.compilerOptions&&i.compilerOptions.paths}}function resolveConfigPath(e,t){if(t){var r=a.lstatSync(t).isDirectory()?i.resolve(t,"./tsconfig.json"):i.resolve(e,t);return r}if(a.statSync(e).isFile()){return i.resolve(e)}var n=walkForTsConfig(e);return n?i.resolve(n):undefined}function walkForTsConfig(e,t){if(t===void 0){t=a.existsSync}var r=i.join(e,"./tsconfig.json");if(t(r)){return r}var n=i.join(e,"../");if(e===n){return undefined}return walkForTsConfig(n,t)}t.walkForTsConfig=walkForTsConfig;function loadTsconfig(e,t,r){if(t===void 0){t=a.existsSync}if(r===void 0){r=function(e){return a.readFileSync(e,"utf8")}}if(!t(e)){return undefined}var u=r(e);var f=s(u);var c=o.parse(f);var d=c.extends;if(d){if(typeof d==="string"&&d.indexOf(".json")===-1){d+=".json"}var l=i.dirname(e);var p=i.join(l,d);if(d.indexOf("/")!==-1&&d.indexOf(".")!==-1&&!t(p)){p=i.join(l,"node_modules",d)}var v=loadTsconfig(p,t,r)||{};if(v.compilerOptions&&v.compilerOptions.baseUrl){var h=i.dirname(d);v.compilerOptions.baseUrl=i.join(h,v.compilerOptions.baseUrl)}return n(n(n({},v),c),{compilerOptions:n(n({},v.compilerOptions),c.compilerOptions)})}return c}t.loadTsconfig=loadTsconfig},278:e=>{e.exports=require("../json5")},227:e=>{e.exports=require("../minimist")},147:e=>{e.exports=require("fs")},188:e=>{e.exports=require("module")},17:e=>{e.exports=require("path")}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var a=true;try{e[r].call(i.exports,i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:true});e.loadConfig=e.register=e.matchFromAbsolutePathsAsync=e.createMatchPathAsync=e.matchFromAbsolutePaths=e.createMatchPath=void 0;var t=__nccwpck_require__(920);Object.defineProperty(e,"createMatchPath",{enumerable:true,get:function(){return t.createMatchPath}});Object.defineProperty(e,"matchFromAbsolutePaths",{enumerable:true,get:function(){return t.matchFromAbsolutePaths}});var n=__nccwpck_require__(29);Object.defineProperty(e,"createMatchPathAsync",{enumerable:true,get:function(){return n.createMatchPathAsync}});Object.defineProperty(e,"matchFromAbsolutePathsAsync",{enumerable:true,get:function(){return n.matchFromAbsolutePathsAsync}});var i=__nccwpck_require__(41);Object.defineProperty(e,"register",{enumerable:true,get:function(){return i.register}});var a=__nccwpck_require__(57);Object.defineProperty(e,"loadConfig",{enumerable:true,get:function(){return a.loadConfig}})})();module.exports=r})();