"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[6675],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(k,i(i({ref:t},c),{},{components:o})):r.createElement(k,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5246:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},l="Colocation of Spark Jobs",p={unversionedId:"best-practices/colocation-of-spark-jobs",id:"version-v1.2/best-practices/colocation-of-spark-jobs",title:"Colocation of Spark Jobs",description:"Apache Spark is an analysis engine for large-scale data processing, which is widely used in Big Data, SQL Analysis and Machine Learning scenarios. This tutorial provides a quick practice guide about running Spark jobs in colocation mode with other latency sensitive applications by Koordinator, which is helpful for improving cluster resource utilization. For more details about how to use, compose, and work with Koordinator colocation, please refer to the Introduction",source:"@site/versioned_docs/version-v1.2/best-practices/colocation-of-spark-jobs.md",sourceDirName:"best-practices",slug:"/best-practices/colocation-of-spark-jobs",permalink:"/docs/best-practices/colocation-of-spark-jobs",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/best-practices/colocation-of-spark-jobs.md",tags:[],version:"v1.2",lastUpdatedBy:"zwzhang",lastUpdatedAt:1680861757,formattedLastUpdatedAt:"4/7/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Multi Hierarchy Elastic Quota Management",permalink:"/docs/designs/multi-hierarchy-elastic-quota-management"}},c={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Koordinator Components",id:"koordinator-components",level:3},{value:"Install Kubernetes Operator for Apache Spark",id:"install-kubernetes-operator-for-apache-spark",level:3},{value:"Run Spark Applications with Koordinator",id:"run-spark-applications-with-koordinator",level:2},{value:"Evaluation",id:"evaluation",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colocation-of-spark-jobs"},"Colocation of Spark Jobs"),(0,a.kt)("p",null,"Apache Spark is an analysis engine for large-scale data processing, which is widely used in Big Data, SQL Analysis and Machine Learning scenarios. This tutorial provides a quick practice guide about running Spark jobs in colocation mode with other latency sensitive applications by Koordinator, which is helpful for improving cluster resource utilization. For more details about how to use, compose, and work with Koordinator colocation, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../"},"Introduction")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"koordinator-components"},"Koordinator Components"),(0,a.kt)("p",null,"Before submitting Spark jobs as colocate mode, you need to ensure all Koordinator components have already been successfully installed. Please follow the step in ",(0,a.kt)("a",{parentName:"p",href:"../installation"},"Installation")," guide."),(0,a.kt)("h3",{id:"install-kubernetes-operator-for-apache-spark"},"Install Kubernetes Operator for Apache Spark"),(0,a.kt)("p",null,"To simplify running of Spark jobs in Cluster, we import the Kubernetes Operator for Apache Spark in this practice, which uses Kubernetes custom resource for managing Spark applications."),(0,a.kt)("p",null,"With the help of Helm ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koordinator-sh/koordinator/tree/main/examples/spark-operator-chart"},"chart"),", Kubernetes Operator for Apache Spark can be easily installed using the command below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install koord-spark-operator ./spark-operator-chart/ --namespace spark-operator\n")),(0,a.kt)("p",null,"Installing the chart will create a namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-operator")," and if doesn't exist, besides, helm will create a spark-operator Deployment and set up RBAC role for it. After the installation, you should see the operator in running successfully by checking the status of helm release."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm status --namespace spark-operator koord-spark-operator\n")),(0,a.kt)("h2",{id:"run-spark-applications-with-koordinator"},"Run Spark Applications with Koordinator"),(0,a.kt)("p",null,"Due to the mechanism that Spark driver pod needs a Kubernetes service account to manage executor pods, the service account must be authorized with appropriate permissions. Run the following command to create namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-demo")," and service account ",(0,a.kt)("inlineCode",{parentName:"p"},"spark")," before submitting jobs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f examples/spark-jobs/service-account.yaml\n")),(0,a.kt)("p",null,"Next, run the following command to create Colocation Profile so that all pods submitted following in namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-demo")," will run in colocation mode. See this ",(0,a.kt)("a",{parentName:"p",href:"../user-manuals/colocation-profile"},"tutorial")," to learn more about Colocation Profile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f examples/spark-jobs/cluster-colocation-profile.yaml\n")),(0,a.kt)("p",null,"Submit a Spark TC example job to namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-demo")," with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f examples/spark-jobs/spark-tc-complex.yaml\n")),(0,a.kt)("p",null,"Then, check the status of Spark application by running the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get sparkapplication -n spark-demo spark-tc-complex\n")),(0,a.kt)("p",null,"This will show similar content as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                      STATUS      ATTEMPTS   START                    FINISH                 AGE\nspark-tc-complex          RUNNING     1          2022-03-30T09:11:22Z     <no value>             14s\n")),(0,a.kt)("p",null,"Now, all pods submitted to namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"spark-demo")," will be switched to colocation mode, check spark-driver pod as below for example. We can see the protocols like",(0,a.kt)("inlineCode",{parentName:"p"},"koordinator.sh/qosClass: BE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.io/batch-cpu")," are successfully injected to pod by Colocation Profile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    koordinator.sh/qosClass: BE\n    spark-role: driver\n  ...\nspec:\n  containers:\n  -  args:\n      - driver\n      - --properties-file\n      - /opt/spark/conf/spark.properties\n      - --class\n      - org.apache.spark.examples.SparkTC\n      - local:///opt/spark/examples/jars/spark-examples_2.12-3.2.1-tc1.2.jar\n      resources:\n        limits:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n        requests:\n          kubernetes.io/batch-cpu: "1000"\n          kubernetes.io/batch-memory: 3456Mi\n  ...\n')),(0,a.kt)("h2",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"With the help of Koordinator, when pods resource usage is idle, resources already requested can be reallocated to other colocation pods by the overcommitment model, which can significantly improve the resource utilization of cluster."),(0,a.kt)("p",null,"In our experiment environment, before the Spark job submitted, we can see the cluster allocatable resources run out while the actual resource usage is in low level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl describe node\n    Allocated resources:\n    Resource                 Requests\n    cpu                      7620m (95.25%)\n  \n$ kubectl top node\n    NAME                            CPU(cores)              CPU%\n    cn-hangzhou.your-node-1         1190m                   14.8%\n    cn-hangzhou.your-node-2         1620m                   20.25%\n")),(0,a.kt)("p",null,"After submit the Spark job in colocation mode, those unused resources will be reallocated through ",(0,a.kt)("inlineCode",{parentName:"p"},"batch priority")," to Spark pods, so that we can make the cluster a higher utilization level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl top node\nNAME                            CPU(cores)              CPU%\ncn-hangzhou.your-node-1         4077m                   52%\ncn-hangzhou.your-node-2         3830m                   49%\n")))}m.isMDXComponent=!0}}]);