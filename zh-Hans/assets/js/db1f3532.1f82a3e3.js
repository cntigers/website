"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[4086],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,k=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={title:"\u7b80\u4ecb",slug:"/"},l="\u7b80\u4ecb",s={unversionedId:"introduction",id:"version-v1.1/introduction",title:"\u7b80\u4ecb",description:"\u6b22\u8fce\u6765\u5230 Koordinator\uff01",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh-Hans/docs/v1.1/",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/introduction.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{title:"\u7b80\u4ecb",slug:"/"},sidebar:"docs",next:{title:"\u5b89\u88c5",permalink:"/zh-Hans/docs/v1.1/installation"}},d={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"Koordinator vs \u5176\u4ed6\u6982\u5ff5",id:"koordinator-vs-\u5176\u4ed6\u6982\u5ff5",level:2},{value:"Koordinator QoS vs Kubernetes QoS",id:"koordinator-qos-vs-kubernetes-qos",level:3},{value:"Koordinator scheduler vs kube-scheduler",id:"koordinator-scheduler-vs-kube-scheduler",level:3},{value:"\u63a5\u4e0b\u6765",id:"\u63a5\u4e0b\u6765",level:2}],p={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u6b22\u8fce\u6765\u5230 Koordinator\uff01"),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"Koordinator \u662f\u4e00\u4e2a\u57fa\u4e8e QoS \u7684 Kubernetes \u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u7cfb\u7edf\u3002\u5b83\u65e8\u5728\u63d0\u9ad8\u5bf9\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u6279\u5904\u7406\u4f5c\u4e1a\u7684\u8fd0\u884c\u65f6\u6548\u7387\u548c\u53ef\u9760\u6027\uff0c\u7b80\u5316\u4e0e\u8d44\u6e90\u76f8\u5173\u7684\u914d\u7f6e\u8c03\u6574\u7684\u590d\u6742\u6027\uff0c\u5e76\u589e\u52a0 Pod \u90e8\u7f72\u5bc6\u5ea6\u4ee5\u63d0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\u3002"),(0,a.kt)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,a.kt)("p",null,"Koordinator \u901a\u8fc7\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\u589e\u5f3a\u4e86\u5728 Kubernetes \u4e2d\u7ba1\u7406\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7528\u6237\u4f53\u9a8c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u4f18\u5148\u7ea7\u548c QoS \u673a\u5236\uff0c\u53ef\u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u6df7\u8dd1\u5728\u96c6\u7fa4\u4e2d\uff0c\u5e76\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u4e0d\u540c\u7c7b\u578b\u7684 Pod \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u8d44\u6e90\u8d85\u5356\u4ee5\u5b9e\u73b0\u9ad8\u8d44\u6e90\u5229\u7528\u7387\uff0c\u4f46\u4ecd\u901a\u8fc7\u5229\u7528\u5e94\u7528\u7a0b\u5e8f\u5206\u6790\u673a\u5236\u6765\u6ee1\u8db3 QoS \u4fdd\u8bc1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ec6\u7c92\u5ea6\u7684\u8d44\u6e90\u534f\u8c03\u548c\u9694\u79bb\u673a\u5236\uff0c\u4ee5\u63d0\u9ad8\u5ef6\u8fdf\u654f\u611f\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u6279\u5904\u7406\u4f5c\u4e1a\u7684\u6548\u7387\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u4f5c\u4e1a\u8c03\u5ea6\u673a\u5236\uff0c\u652f\u6301\u7279\u5b9a\u9886\u57df\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4f8b\u5982\u5927\u6570\u636e\u3001\u4eba\u5de5\u667a\u80fd\u3001\u97f3\u9891\u548c\u89c6\u9891\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6574\u5957\u7528\u4e8e\u76d1\u63a7\u3001\u6545\u969c\u6392\u9664\u548c\u64cd\u4f5c\u7684\u5de5\u5177\u3002")),(0,a.kt)("h2",{id:"koordinator-vs-\u5176\u4ed6\u6982\u5ff5"},"Koordinator vs \u5176\u4ed6\u6982\u5ff5"),(0,a.kt)("h3",{id:"koordinator-qos-vs-kubernetes-qos"},"Koordinator QoS vs Kubernetes QoS"),(0,a.kt)("p",null,"Kubernetes \u63d0\u4f9b\u4e09\u79cd\u7c7b\u578b\u7684 QoS\uff1a Guaranteed/Burstable/BestEffort\uff0c\u5176\u4e2d Guaranteed/Burstable \u88ab\u5e7f\u6cdb\u4f7f\u7528 BestEffort \u5f88\u5c11\u4f7f\u7528\u3002Koordinator \u4e0e Kubernetes QoS \u517c\u5bb9\uff0c\u5e76\u4e14\u5bf9\u6bcf\u79cd\u7c7b\u578b\u90fd\u6709\u8bb8\u591a\u589e\u5f3a\u529f\u80fd\u3002\u4e3a\u4e86\u907f\u514d\u5e72\u6270\u539f\u751f QoS \u8bed\u4e49\uff0cKoordinator \u5f15\u5165\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass")," \u6765\u63cf\u8ff0\u6df7\u90e8 QoS\u3002\u8be5 QoS \u63cf\u8ff0\u4e86\u5728\u6df7\u90e8\u573a\u666f\u4e2d\u8282\u70b9\u4e0a\u8fd0\u884c\u7684 Pod \u7684\u670d\u52a1\u8d28\u91cf\u3002\u5b83\u662f\u6df7\u5408\u7cfb\u7edf\u6700\u5173\u952e\u7684\u8bed\u4e49\u3002"),(0,a.kt)("p",null,"Koordinator \u4e0e Kubernetes QoS \u517c\u5bb9\uff0c\u5e76\u4e14\u5bf9\u6bcf\u79cd\u7c7b\u578b\u90fd\u6709\u8bb8\u591a\u589e\u5f3a\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"koordinator-scheduler-vs-kube-scheduler"},"Koordinator scheduler vs kube-scheduler"),(0,a.kt)("p",null,"Koordinator \u8c03\u5ea6\u5668\u5e76\u975e\u65e8\u5728\u53d6\u4ee3 kube-scheduler\uff0c\u800c\u662f\u4e3a\u4e86\u8ba9\u6df7\u90e8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5728 kubernetes \u4e0a\u8fd0\u884c\u5f97 ",(0,a.kt)("strong",{parentName:"p"},"\u66f4\u597d"),"\u3002"),(0,a.kt)("p",null,"Koordinator \u8c03\u5ea6\u5668\u662f\u57fa\u4e8e schedule-framework \u5f00\u53d1\u7684\uff0c\u5728\u539f\u751f\u8c03\u5ea6\u80fd\u529b\u4e4b\u4e0a\u589e\u52a0\u4e86\u4e0e\u6df7\u90e8\u548c\u4f18\u5148\u7ea7\u62a2\u5360\u76f8\u5173\u7684\u8c03\u5ea6\u63d2\u4ef6\u3002Koordinator \u5c06\u81f4\u529b\u4e8e\u63a8\u52a8\u76f8\u5173\u7684\u589e\u5f3a\u8fdb\u5165 Kubernetes \u7684\u4e0a\u6e38\u793e\u533a\uff0c\u63a8\u52a8\u6df7\u90e8\u6280\u672f\u7684\u6807\u51c6\u5316\u3002"),(0,a.kt)("h2",{id:"\u63a5\u4e0b\u6765"},"\u63a5\u4e0b\u6765"),(0,a.kt)("p",null,"\u63a8\u8350\u540e\u7eed\u6b65\u9aa4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u59cb ",(0,a.kt)("a",{parentName:"li",href:"./installation"},"\u5b89\u88c5 Koordinator "),"."),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Koordinator \u7684 ",(0,a.kt)("a",{parentName:"li",href:"architecture/overview"},"\u67b6\u6784"),".")))}f.isMDXComponent=!0}}]);