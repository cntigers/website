"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[2141],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=l,s=m["".concat(u,".").concat(g)]||m[g]||d[g]||a;return n?r.createElement(s,i(i({ref:e},c),{},{components:n})):r.createElement(s,i({ref:e},c))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6707:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={title:"\u9f99\u8725 plugsched \u795e\u5668\u52a9\u529b Koordinator \u4e91\u539f\u751f\u5355\u673a\u6df7\u90e8\u2014\u2014 \u5185\u6838 CPU QoS \u63ed\u79d8",authors:"Dengerwei"},u=void 0,p={permalink:"/zh-Hans/blog/anolis-CPU-Co-location",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/blog/anolis-CPU-Co-location/index.md",source:"@site/blog/anolis-CPU-Co-location/index.md",title:"\u9f99\u8725 plugsched \u795e\u5668\u52a9\u529b Koordinator \u4e91\u539f\u751f\u5355\u673a\u6df7\u90e8\u2014\u2014 \u5185\u6838 CPU QoS \u63ed\u79d8",description:"\u4ec0\u4e48\u662f CPU \u6df7\u90e8",date:"2023-02-28T02:59:03.000Z",formattedDate:"2023\u5e742\u670828\u65e5",tags:[],readingTime:9.84,truncated:!1,authors:[{name:"Erwei Deng",title:"Openanolis developer",url:"https://github.com/Dengerwei",imageURL:"https://github.com/Dengerwei.png",key:"Dengerwei"}],frontMatter:{title:"\u9f99\u8725 plugsched \u795e\u5668\u52a9\u529b Koordinator \u4e91\u539f\u751f\u5355\u673a\u6df7\u90e8\u2014\u2014 \u5185\u6838 CPU QoS \u63ed\u79d8",authors:"Dengerwei"},prevItem:{title:"Koordinator v1.2: \u652f\u6301\u8282\u70b9\u8d44\u6e90\u9884\u7559\uff0c\u517c\u5bb9\u793e\u533a\u91cd\u8c03\u5ea6\u7b56\u7565",permalink:"/zh-Hans/blog/release-v1.2.0"},nextItem:{title:"Koordinator v1.1: \u8ba9\u8c03\u5ea6\u611f\u77e5\u8d1f\u8f7d\u4e0e\u5e72\u6270\u68c0\u6d4b\u91c7\u96c6",permalink:"/zh-Hans/blog/release-v1.1.0"}},c={authorsImageUrls:[void 0]},d=[{value:"\u4ec0\u4e48\u662f CPU \u6df7\u90e8",id:"\u4ec0\u4e48\u662f-cpu-\u6df7\u90e8",level:2},{value:"\u5185\u6838 CPU \u6df7\u90e8\u6280\u672f",id:"\u5185\u6838-cpu-\u6df7\u90e8\u6280\u672f",level:2},{value:"\u9f99\u8725 CPU \u6df7\u90e8\u63d2\u4ef6",id:"\u9f99\u8725-cpu-\u6df7\u90e8\u63d2\u4ef6",level:2},{value:"Plugsched SDK \u795e\u5668",id:"plugsched-sdk-\u795e\u5668",level:3},{value:"CPU \u6df7\u90e8\u63d2\u4ef6\u6d4b\u8bd5",id:"cpu-\u6df7\u90e8\u63d2\u4ef6\u6d4b\u8bd5",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],m={toc:d};function g(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-cpu-\u6df7\u90e8"},"\u4ec0\u4e48\u662f CPU \u6df7\u90e8"),(0,a.kt)("p",null,"CPU \u6df7\u90e8\u662f\u6307\u5c06\u4e0d\u540c\u7c7b\u578b\u7684\u4e1a\u52a1\u90e8\u7f72\u5230\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u8fd0\u884c\uff0c\u8ba9\u5b83\u4eec\u5171\u4eab\u673a\u5668\u4e0a\u7684 CPU \u8d44\u6e90\u4ee5\u63d0\u5347 CPU \u5229\u7528\u7387\uff0c\u4ece\u800c\u964d\u4f4e\u673a\u5668\u7684\u91c7\u8d2d\u548c\u8fd0\u8425\u6210\u672c\u3002\u4f46\u662f\uff0c\u5bf9\u4e8e\u6709\u4e9b\u7c7b\u578b\u7684\u4efb\u52a1\u6765\u8bf4\uff0c\u5b83\u4eec\u5bf9\u5ef6\u65f6\u975e\u5e38\u7684\u654f\u611f\uff0c\u6bd4\u5982\u7535\u5546\u3001\u641c\u7d22\u6216 web \u670d\u52a1\u7b49\uff0c\u8fd9\u7c7b\u4efb\u52a1\u7684\u5b9e\u65f6\u6027\u5f88\u9ad8\uff0c\u4f46\u662f\u901a\u5e38\u5bf9\u8d44\u6e90\u7684\u6d88\u8017\u5374\u4e0d\u662f\u5f88\u591a\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u5728\u7ebf\u4efb\u52a1\uff1b\u8fd8\u6709\u4e00\u7c7b\u4efb\u52a1\uff0c\u5b83\u4eec\u66f4\u591a\u7684\u5173\u6ce8\u8ba1\u7b97\u6216\u8005\u6279\u5904\u7406\uff0c\u5bf9\u5ef6\u65f6\u6ca1\u6709\u8981\u6c42\uff0c\u4f46\u662f\u6d88\u8017\u7684\u8d44\u6e90\u76f8\u5bf9\u8f83\u591a\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u79bb\u7ebf\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u5f53\u8fd9\u4e24\u7c7b\u4efb\u52a1\u540c\u65f6\u90e8\u7f72\u5230\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u65f6\uff0c\u7531\u4e8e\u79bb\u7ebf\u4efb\u52a1\u5bf9\u8d44\u6e90\u7684\u5360\u7528\u8f83\u591a\uff0c\u8d44\u6e90\u7ade\u4e89\u5bfc\u81f4\u5728\u7ebf\u4efb\u52a1\u7684\u5ef6\u65f6\u53d7\u5230\u4e86\u5f88\u5927\u7684\u5f71\u54cd\uff0c\u800c\u4e14\uff0c\u5728\u8d85\u7ebf\u7a0b\u67b6\u6784\u7684\u673a\u5668\u4e0a\uff0c\u5373\u4f7f\u79bb\u7ebf\u4efb\u52a1\u548c\u5728\u7ebf\u4efb\u52a1\u8dd1\u5728\u4e0d\u540c\u7684\u8d85\u7ebf\u7a0b CPU \u4e0a\uff0c\u6d41\u6c34\u7ebf\u548c cache \u7684\u7ade\u4e89\u4e5f\u4f1a\u5bfc\u81f4\u5728\u7ebf\u4efb\u52a1\u7684\u8fd0\u884c\u53d7\u5230\u5f71\u54cd\u3002\u4e8e\u662f\uff0cCPU \u6df7\u90e8\u6280\u672f\u8bde\u751f\u4e86\uff0c\u6765\u89e3\u51b3\u79bb\u7ebf\u4efb\u52a1\u5bf9\u5728\u7ebf\u4efb\u52a1\u5ef6\u65f6\u7684\u5f71\u54cd\uff0c\u540c\u65f6\u8fd8\u80fd\u8fdb\u4e00\u6b65\u63d0\u5347 CPU \u8d44\u6e90\u7684\u5229\u7528\u7387\u3002"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/33253760/221129910-b68705ae-5906-4294-8bb0-e01d2a6ed849.png"})),(0,a.kt)("p",{align:"center"},"\u56fe1 \u5355\u673a\u6df7\u90e8 CPU \u5229\u7528\u7387\u793a\u610f\u56fe"),(0,a.kt)("h2",{id:"\u5185\u6838-cpu-\u6df7\u90e8\u6280\u672f"},"\u5185\u6838 CPU \u6df7\u90e8\u6280\u672f"),(0,a.kt)("p",null,"CPU \u6df7\u90e8\u6280\u672f\uff0c\u4e3b\u8981\u662f\u901a\u8fc7\u5355\u673a\u64cd\u4f5c\u7cfb\u7edf\u8c03\u5ea6\u5668\u6765\u5b9e\u73b0\u7684\uff0c\u901a\u8fc7\u4efb\u52a1\u7c7b\u578b\u6765\u51b3\u5b9a\u6240\u5206\u914d\u5230\u7684 CPU \u8d44\u6e90\u3002Koordinator \u793e\u533a\u4e3b\u8981\u4f7f\u7528\u7684\u5355\u673a\u64cd\u4f5c\u7cfb\u7edf\u53d1\u884c\u7248\u6709 Alibaba Cloud Linux 2/3\uff08\u7b80\u79f0 Alinux2/3\uff09 \u548c CentOS7.9\u3002\u5bf9\u4e8e Alinux2/3\uff0c\u5b83\u4f7f\u7528\u7684\u662f\u9f99\u8725\u793e\u533a\u7684 Group Identity CPU \u6df7\u90e8\u6280\u672f\uff0c\u5728\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u4e2d\u63d0\u4f9b\u4e86 CPU \u6df7\u90e8\u80fd\u529b\u3002Group Identity \u5728\u539f\u6709\u7684 CFS \u8c03\u5ea6\u5668\u4e2d\u65b0\u589e\u4e86\u53e6\u4e00\u4e2a\u8fd0\u884c\u961f\u5217\u6765\u533a\u5206\u5728\u7ebf\u548c\u79bb\u7ebf\u4efb\u52a1\uff0c\u800c\u4e14\uff0c\u4e3a\u4e86\u907f\u514d\u5bf9\u7aef CPU\uff08\u8d85\u7ebf\u7a0b\u67b6\u6784\uff09\u4e0a\u79bb\u7ebf\u4efb\u52a1\u7684\u5e72\u6270\uff0cGroup Identity \u4f1a\u5bf9\u5176\u8fdb\u884c\u9a71\u9010\u3002\u9f99\u8725\u7684 Group Identity \u6280\u672f\u5df2\u7ecf\u7ecf\u8fc7\u963f\u91cc\u53cc\u5341\u4e00\u7b49\u5927\u578b\u6d3b\u52a8\u4ee5\u53ca\u5927\u89c4\u6a21\u5546\u4e1a\u5316\u7684\u9a8c\u8bc1\uff0c\u5176 CPU \u6df7\u90e8\u80fd\u529b\u4e5f\u5f97\u5230\u5e7f\u5927\u7528\u6237\u548c\u5f00\u53d1\u8005\u7684\u8ba4\u53ef\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e CentOS \u53d1\u884c\u7248\u6765\u8bf4\uff0c\u5230\u76ee\u524d\u4e3a\u6b62\u8fd8\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55 CPU \u6df7\u90e8\u76f8\u5173\u7684\u6280\u672f\u548c\u80fd\u529b\u3002\u5bf9\u4e8e CentOS CPU \u6df7\u90e8\u80fd\u529b\u7684\u7f3a\u5931\uff0c\u53ef\u80fd\u6709\u4ee5\u4e0b\u51e0\u79cd\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5236\u4f5c CentOS \u7684\u884d\u751f\u7248\u7cfb\u7edf\uff0c\u5e76\u5305\u542b CPU \u6df7\u90e8\u6280\u672f\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8fc1\u79fb\u5230 Alibaba Cloud Linux 2/3 \u64cd\u4f5c\u7cfb\u7edf\u53d1\u884c\u7248\uff1b")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7b2c\u4e00\u79cd\u65b9\u6848\uff0c\u9700\u8981\u4ece CentOS \u955c\u50cf\u7ad9\u4e2d\u4e0b\u8f7d\u5176\u5185\u6838\u6e90\u7801\uff0c\u5c06 CPU \u6df7\u90e8\u6280\u672f\u79fb\u690d\u5230\u5185\u6838\uff0c\u7f16\u8bd1\u540e\u5b89\u88c5\uff0c\u7136\u540e\u91cd\u542f\u7cfb\u7edf\u4fbf\u53ef\u4ee5\u4f7f\u7528\u8be5\u6280\u672f\uff0c\u4f46\u8fd9\u4f1a\u6d89\u53ca\u5230\u4e1a\u52a1\u8fc1\u79fb\u548c\u505c\u673a\uff0c\u52bf\u5fc5\u4f1a\u7ed9\u4e1a\u52a1\u65b9\u5e26\u6765\u6602\u8d35\u7684\u4ee3\u4ef7\u3002\n\u5bf9\u4e8e\u7b2c\u4e8c\u79cd\u65b9\u6848\uff0c\u867d\u7136\u8fc1\u79fb\u5de5\u4f5c\u4f1a\u6709\u4e00\u5b9a\u7684\u5de5\u4f5c\u91cf\uff0c\u4f46\u662f\uff0cAlinux2/3 \u6216 Anolis OS \u5305\u542b\u4e86\u5b8c\u6574\u7684\u6df7\u90e8\u8d44\u6e90\u9694\u79bb\u65b9\u6848\uff08CPU \u6df7\u90e8\u4ec5\u4ec5\u662f\u5176\u4e2d\u4e00\u70b9\uff09\uff0c\u6280\u672f\u7ea2\u5229\u6240\u5e26\u6765\u7684\u6536\u76ca\u8fdc\u6bd4\u8fc1\u79fb\u4ee3\u4ef7\u8981\u5927\u5f97\u591a\u3002\u800c\u4e14 CentOS \u5373\u5c06\u505c\u670d\uff0c\u4e3a\u4e86\u89e3\u51b3 CentOS \u505c\u670d\u95ee\u9898\uff0c\u9f99\u8725\u793e\u533a\u63a8\u51fa\u4e86 Anolis OS \u53d1\u884c\u7248\u64cd\u4f5c\u7cfb\u7edf\uff0c\u8be5\u53d1\u884c\u7248\u7cfb\u7edf\u5b8c\u5168\u517c\u5bb9 CentOS\uff0c\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u65e0\u7f1d\u8fc1\u79fb\u3002"),(0,a.kt)("h2",{id:"\u9f99\u8725-cpu-\u6df7\u90e8\u63d2\u4ef6"},"\u9f99\u8725 CPU \u6df7\u90e8\u63d2\u4ef6"),(0,a.kt)("p",null,"\u9488\u5bf9 Koordinator \u4e91\u539f\u751f CentOS \u5355\u673a\u64cd\u4f5c\u7cfb\u7edf CPU \u6df7\u90e8\u80fd\u529b\u7684\u7f3a\u5931\uff0c\u9f99\u8725\u793e\u533a\u5f00\u53d1\u4eba\u5458\u7ed9\u51fa\u4e86\u53e6\u4e00\u79cd\u65b9\u6848\uff0c\u5229\u7528 plugsched \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\u6280\u672f\u63d0\u4f9b\u4e00\u79cd CPU \u6df7\u90e8\u6280\u672f\u7684\u8c03\u5ea6\u5668\u63d2\u4ef6\u5305\uff0c\u8be5\u63d2\u4ef6\u5305\u542b\u4e86\u963f\u91cc\u4e91\u65e9\u671f\uff082017\u5e74\uff09\u7684 CPU \u6df7\u90e8\u6280\u672f bvt + noise clean\uff0c\u8be5\u6280\u672f\u91c7\u7528\u7684\u662f throttle \u673a\u5236\uff0c\u5f53\u8c03\u5ea6\u5668\u9009\u62e9\u4e0b\u4e00\u4e2a\u4efb\u52a1\u65f6\uff0c\u5b83\u4f1a\u68c0\u6d4b\u5bf9\u7aef CPU \u4e0a\u7684\u4efb\u52a1\u7c7b\u578b\u4ee5\u53ca\u5f53\u524d CPU \u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1\u7c7b\u578b\uff0c\u5982\u679c\u5728\u3001\u79bb\u7ebf\u4efb\u52a1\u540c\u65f6\u5b58\u5728\uff0c\u5219\u4f1a\u5c06\u79bb\u7ebf\u4efb\u52a1 throttle \u6389\uff0c\u7136\u540e\u7ee7\u7eed\u9009\u62e9\u4e0b\u4e00\u4e2a\u4efb\u52a1\u8fdb\u884c\u8c03\u5ea6\uff0c\u4fdd\u8bc1\u5728\u7ebf\u4efb\u52a1\u4f18\u5148\u6267\u884c\u4e14\u4e0d\u88ab\u5bf9\u7aef CPU \u4e0a\u7684\u79bb\u7ebf\u5e72\u6270\u3002\u8be5 CPU \u6df7\u90e8\u8c03\u5ea6\u5668\u63d2\u4ef6\u53ef\u76f4\u63a5\u5b89\u88c5\u5230 CentOS7.9\uff0c\u4e0d\u9700\u8981\u505c\u673a\u548c\u4e1a\u52a1\u8fc1\u79fb\u7b49\u5de5\u4f5c\u3002"),(0,a.kt)("h3",{id:"plugsched-sdk-\u795e\u5668"},"Plugsched SDK \u795e\u5668"),(0,a.kt)("p",null,"Plugsched \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\uff0c\u662f\u9f99\u8725\u793e\u533a\u63a8\u51fa\u7684 plugsched SDK \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\u5f00\u53d1\u5de5\u5177\uff0c\u5b83\u53ef\u4ece Linux \u5185\u6838\u4e2d\u5c06\u8c03\u5ea6\u5668\u89e3\u8026\uff0c\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\uff0c\u7136\u540e\u5c06 CPU \u6df7\u90e8\u6280\u672f\u79fb\u690d\u5230\u8c03\u5ea6\u5668\u6a21\u5757\uff0c\u5f62\u6210\u4e00\u4e2a\u8c03\u5ea6\u5668\u63d2\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u76f4\u63a5\u5b89\u88c5\u5230\u8fd0\u884c\u7684\u7cfb\u7edf\u4e2d\u5c31\u53ef\u4ee5\u4f7f\u7528 CPU \u6df7\u90e8\u6280\u672f\u3002Plugsched\uff0c\u53ef\u4ee5\u5bf9\u5185\u6838\u8c03\u5ea6\u5668\u7279\u6027\u52a8\u6001\u7684\u8fdb\u884c\u589e\u3001\u5220\u3001\u6539\uff0c\u6765\u6ee1\u8db3\u4e1a\u52a1\u7684\u9700\u6c42\uff0c\u4e14\u65e0\u9700\u8fdb\u884c\u4e1a\u52a1\u8fc1\u79fb\u548c\u505c\u673a\u5347\u7ea7\uff0c\u8fd8\u53ef\u4ee5\u56de\u6eda\u3002\u5185\u6838\u5f00\u53d1\u4eba\u5458\u53ef\u901a\u8fc7 plugsched SDK \u751f\u4ea7\u51fa\u5404\u79cd\u7c7b\u578b\u7684\u8c03\u5ea6\u5668\u63d2\u4ef6\u6765\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u3002"),(0,a.kt)("p",null,"Plugsched \u8c03\u5ea6\u5668\u70ed\u5347\u7ea7\u8bba\u6587\u300aEfficient Scheduler Live Update for Linux Kernel with Modularization\u300b\u5df2\u88ab ASPLOS \u9876\u4f1a\u6536\u5f55\uff0c\u91cc\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e86 plugsched \u6280\u672f\u539f\u7406\u548c\u5e94\u7528\u4ef7\u503c\uff0c\u4ee5\u53ca\u5168\u9762\u7684\u6d4b\u8bd5\u548c\u8bc4\u4f30\u3002\u76ee\u524d\uff0cplugsched \u751f\u4ea7\u7684\u63d2\u4ef6\u5df2\u5728\u8682\u8681\u96c6\u56e2\u3001\u963f\u91cc\u4e91\u548c\u56fd\u5185\u67d0\u5927\u578b\u4e92\u8054\u7f51\u4f01\u4e1a\u89c4\u6a21\u90e8\u7f72\u3002"),(0,a.kt)("p",null,"Plugsched \u5f00\u6e90\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/anolis/plugsched"},"https://gitee.com/anolis/plugsched")),(0,a.kt)("h3",{id:"cpu-\u6df7\u90e8\u63d2\u4ef6\u6d4b\u8bd5"},"CPU \u6df7\u90e8\u63d2\u4ef6\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u5bf9\u8be5\u8c03\u5ea6\u5668\u63d2\u4ef6\u8fdb\u884c\u4e86 CPU \u6df7\u90e8\u7684\u6d4b\u8bd5\uff0c\u670d\u52a1\u7aef\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u673a\u5668\uff1a\u963f\u91cc\u4e91\u795e\u9f99\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\uff0c104 CPU\uff0c384 GB \u5185\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u914d\u7f6e\uff1aCentOS 7.9 \u53d1\u884c\u7248\uff0c\u5185\u6838\u7248\u672c 3.10\uff0c\u5b89\u88c5 CPU \u6df7\u90e8\u8c03\u5ea6\u5668\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u5185\u5bb9\uff1a\u5728\u7ebf\u4efb\u52a1\u662f Nginx \u670d\u52a1\uff0c\u5bb9\u5668\u914d\u7f6e\u4e3a 80C 10GB\uff0cNginx workers \u6570\u91cf\u4e3a 80\uff1b\u79bb\u7ebf\u4efb\u52a1\u662f ffmpeg \u89c6\u9891\u8f6c\u7801\uff0c\u5bb9\u5668\u914d\u7f6e\u4e3a 50C 20GB\uff0c\u7ebf\u7a0b\u6570\u91cf\u4e3a 50\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5case\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u7ebf\uff1a\u5355\u72ec\u542f\u52a8 Nginx \u5bb9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u7167\u7ec4\uff1a\u540c\u65f6\u542f\u52a8 Nginx \u5bb9\u5668\u548c ffmpeg \u5bb9\u5668\uff0c\u4f46\u4e0d\u8bbe\u7f6e\u4f18\u5148\u7ea7\uff08\u4e0d\u542f\u7528\u6df7\u90e8\u529f\u80fd\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u9a8c\u7ec4\uff1a\u540c\u65f6\u542f\u52a8 Nginx \u5bb9\u5668\u548c ffmpeg \u5bb9\u5668\uff0c\u7ed9 Nginx \u8bbe\u7f6e\u5728\u7ebf\u9ad8\u4f18\u5148\u7ea7\uff0cffmpeg \u4e3a\u79bb\u7ebf\u4f4e\u4f18\u5148\u7ea7\uff08\u542f\u7528\u6df7\u90e8\u529f\u80fd\uff09")))),(0,a.kt)("p",null,"\u5728\u53e6\u4e00\u53f0\u538b\u6d4b\u673a\u4e0a\u4f7f\u7528 wrk \u5de5\u5177\u5411 Nginx \u670d\u52a1\u53d1\u8d77\u8bf7\u6c42\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a\uff08\u5355\u4f4d\uff1ams\uff09"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"\u57fa\u7ebf"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5bf9\u7167\u7ec4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9e\u9a8c\u7ec4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RT-P50"),(0,a.kt)("td",{parentName:"tr",align:null},"0.223"),(0,a.kt)("td",{parentName:"tr",align:null},"0.245\uff08+9.86%\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"0.224\uff08+0.44%\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RT-P75"),(0,a.kt)("td",{parentName:"tr",align:null},"0.322"),(0,a.kt)("td",{parentName:"tr",align:null},"0.387\uff08+20.18%\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"0.338\uff08+4.96%\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RT-P90"),(0,a.kt)("td",{parentName:"tr",align:null},"0.444"),(0,a.kt)("td",{parentName:"tr",align:null},"0.575\uff08+29.50)"),(0,a.kt)("td",{parentName:"tr",align:null},"0.504\uff08+13.51%\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RT-P99"),(0,a.kt)("td",{parentName:"tr",align:null},"0.706"),(0,a.kt)("td",{parentName:"tr",align:null},"1.7\uff08+140.79)"),(0,a.kt)("td",{parentName:"tr",align:null},"0.88\uff08+24.64%\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU%"),(0,a.kt)("td",{parentName:"tr",align:null},"25.15%"),(0,a.kt)("td",{parentName:"tr",align:null},"71.7%"),(0,a.kt)("td",{parentName:"tr",align:null},"49.15%")))),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ed3\u679c\u6765\u770b\uff0c\u6ca1\u6709 CPU \u6df7\u90e8\u63d2\u4ef6\uff0c\u79bb\u7ebf\u4efb\u52a1\u5bf9\u5728\u7ebf\u4efb\u52a1\u7684\u5f71\u54cd\u5f88\u5927\uff0cP99 \u5ef6\u65f6\u589e\u957f\u4e86\u4e00\u500d\u591a\uff0c\u800c\u5b89\u88c5 CPU \u6df7\u90e8\u63d2\u4ef6\u540e\uff0cP99 \u957f\u5c3e\u5ef6\u65f6\u7684\u5f71\u54cd\u663e\u8457\u964d\u4f4e\uff0cCPU \u5229\u7528\u7387\u4e5f\u63a5\u8fd150%\u3002"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u867d\u7136\u80fd\u663e\u8457\u964d\u4f4e\u79bb\u7ebf\u5bf9\u5728\u7ebf\u4efb\u52a1\u7684\u5e72\u6270\uff0c\u4f46\u8fd8\u662f\u900a\u8272\u4e8e\u9f99\u8725\u793e\u533a\u7684 Group Identity \u6280\u672f\u3002\u9f99\u8725\u7684 Group Identity \u6280\u672f\u80fd\u8ba9\u5728\u7ebf\u53d7\u5230\u7684\u5e72\u6270\u5c0f\u4e8e 5%\uff0c\u800c\u4e14\u6574\u673a\u5229\u7528\u7387\u7684\u63d0\u5347\u4e5f\u6bd4\u8be5\u63d2\u4ef6\u8981\u66f4\u591a\u4e00\u4e9b\uff0c\u8fbe\u5230 60% \u4ee5\u4e0a\uff08\u53ef\u67e5\u9605\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/450006.html"},"koordinator \u6df7\u90e8\u6700\u4f73\u5b9e\u8df5\u624b\u518c"),"\uff09\u3002\u8fd9\u4e9b\u5dee\u5f02\u7684\u539f\u56e0\u5728\u4e8e\uff0c1\uff09\u5185\u6838\u81ea\u8eab\u7684\u5dee\u5f02\uff0cCentOS 7.9 \u4f7f\u7528\u7684\u662f\u6bd4\u8f83\u65e9\u7684 3.10 \u5185\u6838\uff0c\u800c\u9f99\u8725\u4f7f\u7528\u7684\u662f 4.19/5.10 \u5185\u6838\uff0c3.10 \u5185\u6838\u8c03\u5ea6\u5668\u6027\u80fd\u672c\u8eab\u5c31\u4e0d\u53ca 4.19/5.10\uff1b2\uff09Group Identity \u7684\u5b9e\u73b0\u539f\u7406\u76f8\u6bd4 noise clean \u66f4\u9002\u5408 CPU \u6df7\u90e8\u573a\u666f\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6b22\u8fce\u5e7f\u5927\u6280\u672f\u4eba\u5458\u3001\u5f00\u6e90\u7231\u597d\u8005\u548c\u8bfb\u8005\u7528\u6237\u52a0\u5165 Koordinator\u3001openanolis \u793e\u533a\uff0c\u4eab\u53d7\u793e\u533a\u5e26\u6765\u7684\u6280\u672f\uff0c\u4e0d\u8bba\u662f Group Identity \u8fd8\u662f Plugsched \u795e\u5668\uff0c\u4e00\u5b9a\u4f1a\u7ed9\u5927\u5bb6\u5e26\u6765\u610f\u60f3\u4e0d\u5230\u7684\u6536\u76ca\u548c\u4ef7\u503c\uff0c\u6b22\u8fce\u5927\u5bb6\u5171\u5efa\u793e\u533a\uff0c\u4e0e\u793e\u533a\u5171\u540c\u4ea4\u6d41\u3001\u6210\u957f\u548c\u53d1\u5c55\u3002"))}g.isMDXComponent=!0}}]);