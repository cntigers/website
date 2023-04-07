"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[9671],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(k,i(i({ref:t},c),{},{components:o})):n.createElement(k,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},950:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},s="Colocation Profile",p={unversionedId:"user-manuals/colocation-profile",id:"version-v1.2/user-manuals/colocation-profile",title:"Colocation Profile",description:"Motivation",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.2/user-manuals/colocation-profile.md",sourceDirName:"user-manuals",slug:"/user-manuals/colocation-profile",permalink:"/zh-Hans/docs/user-manuals/colocation-profile",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/user-manuals/colocation-profile.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"2023/4/7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"QoS",permalink:"/zh-Hans/docs/architecture/qos"},next:{title:"\u8d1f\u8f7d\u611f\u77e5\u8c03\u5ea6",permalink:"/zh-Hans/docs/user-manuals/load-aware-scheduling"}},c={},u=[{value:"Motivation",id:"motivation",level:2},{value:"\u6784\u67b6",id:"\u6784\u67b6",level:2},{value:"Feature Gates",id:"feature-gates",level:2},{value:"\u89c4\u683c\u5b9a\u4e49",id:"\u89c4\u683c\u5b9a\u4e49",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u521b\u5efa ClusterColocationProfile",id:"\u521b\u5efa-clustercolocationprofile",level:3},{value:"\u9a8c\u8bc1 ClusterColocationProfile \u662f\u5426\u751f\u6548",id:"\u9a8c\u8bc1-clustercolocationprofile-\u662f\u5426\u751f\u6548",level:3}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colocation-profile"},"Colocation Profile"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"\u5982\u679c\u73b0\u6709\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u60f3\u8981\u901a\u8fc7 Koordinator \u8fdb\u884c\u6df7\u5408\u90e8\u7f72\uff0c\u5219\u9700\u8981\u4fee\u6539\u73b0\u6709\u7684 Controller/Operator \u4ee5\u652f\u6301 Koordinator \u5b9a\u4e49\u7684 QoS Class\u3001\u4f18\u5148\u7ea7\u548c\u8d44\u6e90\u6a21\u578b\u7b49\u534f\u8bae\u3002\u4e3a\u4e86\u964d\u4f4e Koordinator \u6df7\u90e8\u7cfb\u7edf\u7684\u4f7f\u7528\u95e8\u69db\uff0c\u8ba9\u5927\u5bb6\u53ef\u4ee5\u7b80\u5355\u5feb\u901f\u7684\u4f7f\u7528\u6df7\u90e8\u6280\u672f\u83b7\u5f97\u6536\u76ca\uff0c\u56e0\u6b64 Koordinator \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," CRD \u548c \u5bf9\u5e94\u7684 Webhook \u4fee\u6539\u548c\u9a8c\u8bc1\u65b0\u521b\u5efa\u7684 Pod\uff0c\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterColocationProfile")," \u4e2d\u63cf\u8ff0\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("h2",{id:"\u6784\u67b6"},"\u6784\u67b6"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"image",src:o(1502).Z,width:"2386",height:"1318"})),(0,a.kt)("h2",{id:"feature-gates"},"Feature Gates"),(0,a.kt)("p",null,"ClusterColocationProfile mutating/validating \u529f\u80fd\u9ed8\u8ba4\u662f\u6253\u5f00\u7684\uff0c\u5982\u679c\u60f3\u8981\u5173\u95ed\uff0c\u8bf7\u8bbe\u7f6e Feature Gates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install koordinator https://... --set featureGates="PodMutatingWebhook=false\\,PodValidatingWebhook=false"\n')),(0,a.kt)("h2",{id:"\u89c4\u683c\u5b9a\u4e49"},"\u89c4\u683c\u5b9a\u4e49"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5bf9 Kubernetes \u8d44\u6e90\u4e0d\u719f\u6089\uff0c\u8bf7\u53c2\u8003\u9875\u9762 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"},"\u4e86\u89e3 Kubernetes \u5bf9\u8c61"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"namespaceSelector"),": \u5982\u679c\u547d\u540d\u7a7a\u95f4\u4e0e\u9009\u62e9\u5668\u5339\u914d\uff0c\u5219\u51b3\u5b9a\u662f\u5426\u6539\u53d8/\u9a8c\u8bc1 Pod\u3002 LabelSelector \u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u5b83\u5c06\u5339\u914d\u6240\u6709 Namespace\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"selector"),": \u5982\u679c Pod \u4e0e\u9009\u62e9\u5668\u5339\u914d\uff0c\u5219\u51b3\u5b9a\u662f\u5426\u6539\u53d8/\u9a8c\u8bc1 Pod\u3002 \u9ed8\u8ba4\u4e3a\u7a7a\u7684 LabelSelector\uff0c\u5b83\u5c06\u5339\u914d\u6240\u6709 Pod\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"qosClass")," (",(0,a.kt)("em",{parentName:"p"},"required"),"): \u63cf\u8ff0\u4e86 Pod \u7684 Koordinator QoSClass\u3002\u8be5\u503c\u4ee5\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass")," \u7684\u5f62\u5f0f\u66f4\u65b0\u5230 Pod \u4e2d\u3002\u5bf9\u5e94\u7684\u9009\u9879\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"LSE"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"LSR"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"LS"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"BE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SYSTEM"),"\u3002 \u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u9875\u9762",(0,a.kt)("a",{parentName:"p",href:"../architecture/qos"},"\u6b64\u5904"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"priorityClassName")," (",(0,a.kt)("em",{parentName:"p"},"required"),"): \u6307\u5b9a\u8981\u5199\u5165\u5230 Pod.Spec.PriorityClassName \u4e2d\u7684 Kubenretes PriorityClass. \u9009\u9879\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-prod"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"koord-mid"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"koord-batch")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"koord-free"),"\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"../architecture/priority"},"\u6b64\u5904"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"koordinatorPriority"),": Koordinator \u8fd8\u63d0\u4f9b\u4e86 Pod \u7ea7\u522b\u7684\u5b50\u4f18\u5148\u7ea7 sub-priority\u3002 \u4f18\u5148\u7ea7\u503c\u5c06\u4f5c\u4e3a\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/priority")," \u66f4\u65b0\u5230 Pod\u3002 \u5404\u4e2a Koordinator \u7ec4\u4ef6\u901a\u8fc7 KoordinatorPriority \u548c PriorityClassName \u4e2d\u7684\u4f18\u5148\u7ea7\u503c\u6765\u786e\u5b9a Koordinator \u4e2d Pod \u7684\u4f18\u5148\u7ea7\uff0c\u503c\u8d8a\u9ad8\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"labels"),": \u63cf\u8ff0\u9700\u8981\u6ce8\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod.Labels")," \u7684 k/v \u952e\u503c\u5bf9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"annotations"),": \u63cf\u8ff0\u4e86\u9700\u8981\u6ce8\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod.Annotations")," \u7684 k/v \u952e\u503c\u5bf9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"schedulerName"),": \u5982\u679c\u6307\u5b9a\uff0c\u5219 Pod \u5c06\u7531\u6307\u5b9a\u7684\u8c03\u5ea6\u5668\u8c03\u5ea6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"patch"),": \u8868\u793a\u7528\u6237\u60f3\u8981\u6ce8\u5165 Pod \u7684 Pod \u6a21\u677f\u8865\u4e01\u3002"))),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("h3",{id:"\u521b\u5efa-clustercolocationprofile"},"\u521b\u5efa ClusterColocationProfile"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"profile.yaml")," \u6587\u4ef6\u63cf\u8ff0\u4e86\u5bf9\u6240\u6709\u542b\u6709\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/enable-colocation=true")," \u7684 Namespace \u4e0b\u7684\u6240\u6709\u542b\u6709\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/enable-colocation=true")," \u7684 Pod \u8fdb\u884c\u4fee\u6539\uff0c\u6ce8\u5165 Koordinator QoSClass\u3001Koordinator Priority \u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.koordinator.sh/v1alpha1\nkind: ClusterColocationProfile\nmetadata:\n  name: colocation-profile-example\nspec:\n  namespaceSelector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  selector:\n    matchLabels:\n      koordinator.sh/enable-colocation: "true"\n  qosClass: BE\n  priorityClassName: koord-batch\n  koordinatorPriority: 1000\n  schedulerName: koord-scheduler\n  labels:\n    koordinator.sh/mutated: "true"\n  annotations: \n    koordinator.sh/intercepted: "true"\n  patch:\n    spec:\n      terminationGracePeriodSeconds: 30\n')),(0,a.kt)("p",null,"\u57fa\u4e8e YAML \u6587\u4ef6\u521b\u5efa ClusterColocationProfile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f profile.yaml\n")),(0,a.kt)("h3",{id:"\u9a8c\u8bc1-clustercolocationprofile-\u662f\u5426\u751f\u6548"},"\u9a8c\u8bc1 ClusterColocationProfile \u662f\u5426\u751f\u6548"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    koordinator.sh/enable-colocation: "true"\n  name: test-pod\nspec:\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          cpu: "1"\n          memory: "3456Mi"\n        requests:\n          cpu: "1"\n          memory: "3456Mi"\n')),(0,a.kt)("p",null,"\u521b\u5efa\u8fd9\u4e2a Pod\uff0c\u73b0\u5728\u4f60\u4f1a\u53d1\u73b0\u8be5 Pod \u88ab\u6ce8\u5165\u4e86 Koordinator QoSClass\u3001Koordinator Priority \u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get pod test-pod -o yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  annotations: \n    koordinator.sh/intercepted: true\n  labels:\n    koordinator.sh/qosClass: BE\n    koordinator.sh/priority: 1000\n    koordinator.sh/mutated: true\n  ...\nspec:\n  terminationGracePeriodSeconds: 30\n  priority: 5000\n  priorityClassName: koord-batch\n  schedulerName: koord-scheduler\n  containers:\n  - name: app\n    image: nginx:1.15.1\n    resources:\n        limits:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n        requests:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n')))}m.isMDXComponent=!0},1502:function(e,t,o){t.Z=o.p+"assets/images/clustercolocationprofile-arch-47abebb6e9a88c95ebce20227485a785.png"}}]);