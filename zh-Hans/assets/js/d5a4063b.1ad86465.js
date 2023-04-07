"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[7959],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),k=o,m=c["".concat(u,".").concat(k)]||c[k]||p[k]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4374:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},u="\u4f18\u5148\u7ea7",s={unversionedId:"architecture/priority",id:"version-v1.1/architecture/priority",title:"\u4f18\u5148\u7ea7",description:"Koordinator \u5728 Kubernetes \u4f18\u5148\u7ea7\u7c7b\u578b\u7684\u57fa\u7840\u4e0a\u5b9a\u4e49\u4e86\u4e00\u5957\u89c4\u8303\uff0c\u5e76\u6269\u5c55\u4e86\u4f18\u5148\u7ea7\u7684\u4e00\u4e2a\u7ef4\u5ea6\u4ee5\u5bf9\u6df7\u90e8\u573a\u666f\u7684\u7ec6\u7c92\u5ea6\u652f\u6301\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/architecture/priority.md",sourceDirName:"architecture",slug:"/architecture/priority",permalink:"/zh-Hans/docs/v1.1/architecture/priority",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/architecture/priority.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{},sidebar:"docs",previous:{title:"\u8d44\u6e90\u6a21\u578b",permalink:"/zh-Hans/docs/v1.1/architecture/resource-model"},next:{title:"QoS",permalink:"/zh-Hans/docs/v1.1/architecture/qos"}},d={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u7ea6\u675f",id:"\u7ea6\u675f",level:2},{value:"Koordinator \u4f18\u5148\u7ea7\u4e0e Kubernetes\u4f18\u5148\u7ea7\u7684\u5bf9\u6bd4",id:"koordinator-\u4f18\u5148\u7ea7\u4e0e-kubernetes\u4f18\u5148\u7ea7\u7684\u5bf9\u6bd4",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",level:2}],c={toc:p};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4f18\u5148\u7ea7"},"\u4f18\u5148\u7ea7"),(0,a.kt)("p",null,"Koordinator \u5728 Kubernetes \u4f18\u5148\u7ea7\u7c7b\u578b\u7684\u57fa\u7840\u4e0a\u5b9a\u4e49\u4e86\u4e00\u5957\u89c4\u8303\uff0c\u5e76\u6269\u5c55\u4e86\u4f18\u5148\u7ea7\u7684\u4e00\u4e2a\u7ef4\u5ea6\u4ee5\u5bf9\u6df7\u90e8\u573a\u666f\u7684\u7ec6\u7c92\u5ea6\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u4f18\u5148\u7ea7\u7528\u6570\u5b57\u8868\u793a\uff0c\u76ee\u524d\u5b9a\u4e49\u4e86\u56db\u4e2a\u7c7b:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PriorityClass"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7\u8303\u56f4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koord-prod"),(0,a.kt)("td",{parentName:"tr",align:null},"[9000, 9999]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u63d0\u524d\u89c4\u5212\u8d44\u6e90\u914d\u989d\uff0c\u5e76\u4e14\u4fdd\u8bc1\u5728\u914d\u989d\u5185\u6210\u529f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koord-mid"),(0,a.kt)("td",{parentName:"tr",align:null},"[7000, 7099]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u63d0\u524d\u89c4\u5212\u8d44\u6e90\u914d\u989d\uff0c\u5e76\u4e14\u4fdd\u8bc1\u5728\u914d\u989d\u5185\u6210\u529f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koord-batch"),(0,a.kt)("td",{parentName:"tr",align:null},"[5000, 5999]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u63d0\u524d\u89c4\u5212\u8d44\u6e90\u914d\u989d\uff0c\u4e00\u822c\u5141\u8bb8\u501f\u7528\u914d\u989d\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"koord-free"),(0,a.kt)("td",{parentName:"tr",align:null},"[3000, 3999]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u4fdd\u8bc1\u8d44\u6e90\u914d\u989d\uff0c\u53ef\u5206\u914d\u7684\u8d44\u6e90\u603b\u91cf\u53d6\u51b3\u4e8e\u96c6\u7fa4\u7684\u603b\u95f2\u7f6e\u8d44\u6e90\u3002")))),(0,a.kt)("p",null,"PriorityClass \u76ee\u524d\u7559\u6709\u4e00\u4e9b\u6682\u672a\u4f7f\u7528\u7684\u533a\u95f4\uff0c\u4ee5\u652f\u6301\u672a\u6765\u53ef\u80fd\u7684\u6269\u5c55\u3002"),(0,a.kt)("h2",{id:"\u7ea6\u675f"},"\u7ea6\u675f"),(0,a.kt)("p",null,"Koordinator \u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5339\u914d\u5230\u4e0d\u540c\u7684\u4f18\u5148\u7ea7:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'koord-prod\uff0c\u8fd0\u884c\u5178\u578b\u7684\u5ef6\u8fdf\u654f\u611f\u578b\u670d\u52a1\uff0c\u4e00\u822c\u662f\u6307\u9700\u8981 "\u5b9e\u65f6 "\u54cd\u5e94\u7684\u670d\u52a1\u7c7b\u578b\uff0c\u6bd4\u5982\u901a\u8fc7\u70b9\u51fb\u79fb\u52a8APP\u4e2d\u7684\u6309\u94ae\u8c03\u7528\u7684\u5178\u578b\u670d\u52a1\u3002'),(0,a.kt)("li",{parentName:"ul"},"koord-mid\uff0c\u5bf9\u5e94\u4e8e\u957f\u5468\u671f\u7684\u53ef\u7528\u8d44\u6e90\uff0c\u4e00\u822c\u7528\u4e8e\u8fd0\u884c\u4e00\u4e9b\u5b9e\u65f6\u8ba1\u7b97\u3001\u4eba\u5de5\u667a\u80fd\u8bad\u7ec3\u4efb\u52a1/\u4f5c\u4e1a\uff0c\u5982 tensorflow/pytorch \u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"koord-batch\uff0c\u5bf9\u5e94\u4e8e\u7684\u77ed\u5468\u671f\u53ef\u7528\u8d44\u6e90\uff0c\u8fd0\u884c\u5178\u578b\u7684\u79bb\u7ebf\u6279\u5904\u7406\u4f5c\u4e1a\uff0c\u4e00\u822c\u6307\u79bb\u7ebf\u5206\u6790\u7c7b\u4f5c\u4e1a\uff0c\u5982\u65e5\u7ea7\u5927\u6570\u636e\u62a5\u544a\u3001\u975e\u4ea4\u4e92\u5f0f SQL \u67e5\u8be2\u3002"),(0,a.kt)("li",{parentName:"ul"},"koord-free\uff0c\u8fd0\u884c\u4f4e\u4f18\u5148\u7ea7\u7684\u79bb\u7ebf\u6279\u5904\u7406\u4f5c\u4e1a\uff0c\u4e00\u822c\u6307\u4e0d\u505a\u8d44\u6e90\u9884\u7b97\uff0c\u5229\u7528\u95f2\u7f6e\u8d44\u6e90\u5c3d\u91cf\u5b8c\u6210\uff0c\u5982\u5f00\u53d1\u4eba\u5458\u4e3a\u6d4b\u8bd5\u76ee\u63d0\u4ea4\u7684\u4f5c\u4e1a\u3002")),(0,a.kt)("h2",{id:"koordinator-\u4f18\u5148\u7ea7\u4e0e-kubernetes\u4f18\u5148\u7ea7\u7684\u5bf9\u6bd4"},"Koordinator \u4f18\u5148\u7ea7\u4e0e Kubernetes\u4f18\u5148\u7ea7\u7684\u5bf9\u6bd4"),(0,a.kt)("p",null,"Koordinator \u5728 Kubernetes \u96c6\u7fa4\u4e2d\u90e8\u7f72\u65f6\u4f1a\u521d\u59cb\u5316\u8fd9\u56db\u4e2a PriorityClass\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-prod\nvalue: 9000\ndescription: "This priority class should be used for prod service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-mid\nvalue: 7000\ndescription: "This priority class should be used for mid service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-batch\nvalue: 5000\ndescription: "This priority class should be used for batch service pods only."\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: koord-free\nvalue: 3000\ndescription: "This priority class should be used for free service pods only."\n')),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2a PriorityClass \u5185\uff0cKoordinator \u5141\u8bb8\u7528\u6237\u4e3a\u7cbe\u7ec6\u5316\u8d44\u6e90\u8c03\u5ea6\u8bbe\u7f6e\u6df7\u90e8 Pod \u7684\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684 YAML \u662f\u4e00\u4e2a Pod \u914d\u7f6e\u7684\u4f8b\u5b50\uff0c\u5b83\u4f7f\u7528\u4e86\u524d\u9762\u4f8b\u5b50\u4e2d\u521b\u5efa\u7684 PriorityClass \u548c\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    env: test\n    koordinator.sh/priority: "5300"\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    imagePullPolicy: IfNotPresent\n  priorityClassName: koord-batch\n')),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u63a8\u8350\u4e0b\u4e00\u6b65\u9605\u8bfb\u7684\u5185\u5bb9:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,a.kt)("a",{parentName:"li",href:"./resource-model"},"\u8d44\u6e90\u6a21\u578b"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684",(0,a.kt)("a",{parentName:"li",href:"./qos"},"QoS"),"\u3002")))}k.isMDXComponent=!0}}]);