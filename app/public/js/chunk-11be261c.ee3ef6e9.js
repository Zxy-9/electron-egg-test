(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11be261c"],{"4b85":function(e,t,a){"use strict";a("6c36")},"6c36":function(e,t,a){},"9cce":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app-demo-software-open"}},[e._m(0),a("div",{staticClass:"one-block-2"},[a("a-list",{attrs:{bordered:"","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{on:{click:function(a){return e.openSoft(t.id)}}},[e._v(" "+e._s(t.content)+" "),a("a-button",{attrs:{type:"link"}},[e._v(" 执行 ")])],1)}}])})],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 1. 调用其它软件（exe、bash等可执行程序） ")]),a("p"),a("span",{staticClass:"sub-content"},[e._v(" 注：请先将【powershell.exe】复制到【electron-egg/build/extraResources】目录中 ")])])}],i=a("a358"),s=[{content:"powershell.exe",id:"powershell"}],c={data:function(){return{data:s}},methods:{openSoft:function(e){var t=this;Object(i["a"])("openSoftware",{id:e}).then((function(e){if(0!==e.code)return t.$message.info(e.msg),!1})).catch((function(e){console.log("err:",e)}))}}},r=c,l=(a("4b85"),a("2877")),p=Object(l["a"])(r,n,o,!1,null,"8d1853f4",null);t["default"]=p.exports},a358:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("b775"),o={openDir:"/api/v1/example/openLocalDir",uploadFile:"/api/v1/example/uploadFile",executeJS:"/api/v1/example/executeJS",setShortcut:"/api/v1/example/setShortcut",autoLaunchEnable:"/api/v1/example/autoLaunchEnable",autoLaunchDisable:"/api/v1/example/autoLaunchDisable",autoLaunchIsEnabled:"/api/v1/example/autoLaunchIsEnabled",openSoftware:"/api/v1/example/openSoftware",selectFileDir:"/api/v1/example/selectFileDir",messageShow:"/api/v1/example/messageShow",messageShowConfirm:"/api/v1/example/messageShowConfirm",dbOperation:"/api/v1/example/dbOperation",testElectronApi:"/api/v1/example/testElectronApi"};function i(e,t){return Object(n["b"])({url:o[e],method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-11be261c.ee3ef6e9.js.map