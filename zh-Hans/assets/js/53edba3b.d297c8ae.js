"use strict";(self.webpackChunkkoordinator_sh=self.webpackChunkkoordinator_sh||[]).push([[166],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=n,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return o?i.createElement(g,a(a({ref:t},p),{},{components:o})):i.createElement(g,a({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8353:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var i=o(7462),n=o(3366),r=(o(7294),o(3905)),a=["components"],s={},d="PodMigrationJob",l={unversionedId:"designs/pod-migration-job",id:"version-v1.1/designs/pod-migration-job",title:"PodMigrationJob",description:"Summary",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-v1.1/designs/pod-migration-job.md",sourceDirName:"designs",slug:"/designs/pod-migration-job",permalink:"/zh-Hans/docs/v1.1/designs/pod-migration-job",editUrl:"https://github.com/koordinator-sh/koordinator.sh/edit/main/docs/designs/pod-migration-job.md",tags:[],version:"v1.1",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1672728732,formattedLastUpdatedAt:"2023/1/3",frontMatter:{},sidebar:"docs",previous:{title:"Resource Reservation",permalink:"/zh-Hans/docs/v1.1/designs/resource-reservation"},next:{title:"Descheduler Framework",permalink:"/zh-Hans/docs/v1.1/designs/descheduler-framework"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals/Future Work",id:"non-goalsfuture-work",level:3},{value:"Proposal",id:"proposal",level:2},{value:"User Stories",id:"user-stories",level:3},{value:"Story 1",id:"story-1",level:4},{value:"Story 2",id:"story-2",level:4},{value:"Story 3",id:"story-3",level:4},{value:"Basic Migration API",id:"basic-migration-api",level:3},{value:"Pod Migration Job CRD",id:"pod-migration-job-crd",level:3},{value:"Migration Job Spec",id:"migration-job-spec",level:4},{value:"Migration Job Status",id:"migration-job-status",level:4},{value:"Implementation Details/Notes/Constraints",id:"implementation-detailsnotesconstraints",level:3},{value:"PodMigrationJob Controller",id:"podmigrationjob-controller",level:4},{value:"Group PodMigrationJob",id:"group-podmigrationjob",level:5},{value:"Filter PodMigrationJob",id:"filter-podmigrationjob",level:5},{value:"Sort PodMigrationJob",id:"sort-podmigrationjob",level:5},{value:"Execute PodMigrationJob",id:"execute-podmigrationjob",level:5},{value:"Migration Stability mechanism",id:"migration-stability-mechanism",level:5},{value:"Controller Configuration",id:"controller-configuration",level:4}],m={toc:c};function u(e){var t=e.components,o=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"podmigrationjob"},"PodMigrationJob"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This proposal defines a CRD-based Pod migration API, through which the descheduler or other automatic fault recovery components can evict or delete Pods more safely. At the same time, the proposal also describes the specific implementation details of the API."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Migrating Pods is an important capability that many components (such as deschedulers) rely on, and can be used to optimize scheduling or help resolve workload runtime quality issues. We believe that pod migration is a complex process, involving steps such as auditing, resource allocation, and application startup, and is mixed with application upgrading, scaling scenarios, and resource operation and maintenance operations by cluster administrators. Therefore, how to manage the stability risk of this process to ensure that the application does not fail due to the migration of Pods is a very critical issue that must be resolved."),(0,r.kt)("p",null,"Therefore, it is necessary to realize a final state-oriented migration capability based on CRD, track the status of each process in the migration, and perceive scenarios such as upgrading and scaling of the application."),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Defines a CRD-based Pod Migration Job API, through which the descheduler can evict or delete Pods more safely."),(0,r.kt)("li",{parentName:"ol"},"Describe in detail the design details behind the API.")),(0,r.kt)("h3",{id:"non-goalsfuture-work"},"Non-Goals/Future Work"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A new descheduler framework"),(0,r.kt)("li",{parentName:"ol"},"Descheduling capability for different scenarios such as load-aware descheduling, defragemention, etc."),(0,r.kt)("li",{parentName:"ol"},"The details about Deterministic preemption that preempts other Pods for Reservation.")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("h3",{id:"user-stories"},"User Stories"),(0,r.kt)("h4",{id:"story-1"},"Story 1"),(0,r.kt)("p",null,"The descheduler in the K8s community evicts pods to be rescheduled according to different strategies. However, it does not guarantee whether the evicted Pod has resources available after re-creation. If a large number of new Pods are in the Pending state when the resources in the cluster are tight, may lower the application availabilities."),(0,r.kt)("h4",{id:"story-2"},"Story 2"),(0,r.kt)("p",null,"The descheduler evicts the Pod through the Eviction API, and the Eviction API decides whether to delete the Pod according to the PDB status. However, it is unable to perceive workload upgrades, scaling and other scenarios in which Pods are deleted, which will also bring security risks."),(0,r.kt)("h4",{id:"story-3"},"Story 3"),(0,r.kt)("p",null,"The Pod migration capability itself can be provided to users as a service. Users can integrate this API in their own systems to achieve safe migration, and are no longer limited to deschedulers."),(0,r.kt)("h3",{id:"basic-migration-api"},"Basic Migration API"),(0,r.kt)("p",null,"These APIs provide cluster administrators with more fine-grained migration control capabilities, which can better reduce risks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheduling.koordinator.sh/eviction-cost")," indicates the eviction cost. It can be used to set to an int32. The implicit eviction cost for pods that don't set the annotation is 0, negative values are permitted. If set the cost ith ",(0,r.kt)("inlineCode",{parentName:"li"},"math.MaxInt32"),", it means the Pod will not be evicted. Pods with lower eviction cost are preferred to be evicted before pods with higher eviction cost. If a batch of Pods to be evicted have the same priority, they will be sorted by cost, and the Pod with the smallest cost will be evicted. Although the K8s community has ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/issues/2255"},"Pod Deletion Cost #2255"),", it is not a general mechanism. To avoid conflicts with components that use ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod Deletion Cost"),", users can individually mark the eviction cost for Pods. ")),(0,r.kt)("h3",{id:"pod-migration-job-crd"},"Pod Migration Job CRD"),(0,r.kt)("p",null,"In order to support the above user stories, a Custom Resource Definition(CRD) named ",(0,r.kt)("inlineCode",{parentName:"p"},"PodMigrationJob")," is proposed to ensure the migration process safely.  "),(0,r.kt)("h4",{id:"migration-job-spec"},"Migration Job Spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\n// PodMigrationJob is the Schema for the PodMigrationJob API\n// +k8s:openapi-gen=true\n// +kubebuilder:resource:scope=Cluster\ntype PodMigrationJob struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n    Spec              PodMigrationJobSpec   `json:"spec,omitempty"`\n    Status            PodMigrationJobStatus `json:"status,omitempty"`\n}\n\ntype PodMigrationJobSpec struct {\n    // Paused indicates whether the PodMigrationJob should to work or not.\n    // Default is false\n    // +optional\n    Paused bool `json:"paused,omitempty"`\n\n    // TTL controls the PodMigrationJob timeout duration.\n    // +optional\n    TTL *metav1.Duration `json:"ttl,omitempty"`\n\n    // Mode represents the operating mode of the Job\n    // Default is PodMigrationJobModeReservationFirst\n    // +optional\n    Mode PodMigrationJobMode `json:"mode,omitempty"`\n\n    // PodRef represents the Pod that be migrated\n    // +required\n    PodRef *corev1.ObjectReference `json:"podRef"`\n\n    // ReservationOptions defines the Reservation options for migrated Pod\n    // +optional\n    ReservationOptions *PodMigrateReservationOptions `json:"reservationOptions,omitempty"`\n\n    // DeleteOptions defines the deleting options for the migrated Pod and preempted Pods\n    // +optional\n    DeleteOptions *metav1.DeleteOptions `json:"deleteOptions,omitempty"`\n}\n\ntype PodMigrationJobMode string\n\nconst (\n    PodMigrationJobModeReservationFirst PodMigrationJobMode = "ReservationFirst"\n    PodMigrationJobModeEvictionDirectly PodMigrationJobMode = "EvictDirectly"\n)\n\ntype PodMigrateReservationOptions struct {\n    // ReservationRef if specified, PodMigrationJob will check if the status of Reservation is available.\n    // ReservationRef if not specified, PodMigrationJob controller will create Reservation by Template,\n    // and update the ReservationRef to reference the Reservation\n    // +optional\n    ReservationRef *corev1.ObjectReference `json:"reservationRef,omitempty"`\n\n    // Template is the object that describes the Reservation that will be created if not specified ReservationRef\n    // +optional\n    Template *ReservationTemplateSpec `json:"template,omitempty"`\n\n    // PreemptionOption decides whether to preempt other Pods.\n    // The preemption is safe and reserves resources for preempted Pods.\n    // +optional\n    PreemptionOptions *PodMigrationJobPreemptionOptions `json:"preemptionOptions,omitempty"`\n}\n\ntype PodMigrationJobPreemptionOptions struct {\n    // Reserved object.\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Paused")," indicates whether the PodMigrationJob should to work or not. In some scenarios, the user does not expect the PodMigrationJob Controller to process the PodMigrationJob immediately, but rather to decide whether to execute it after completing some operations similar to auditing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TimeoutInSeconds")," controls the PodMigrationJob timeout duration."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJob")," support two modes defined by the field ",(0,r.kt)("inlineCode",{parentName:"li"},"Mode"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJobModeReservationFirst")," means that before migrating a Pod, try to reserve resources through the ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," API, delete the Pod to be migrated after successfully reserved, and observe the status of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," to ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," is consumed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJobModeEvictionDirectly")," indicates that the user clearly knows the risk of evicting the Pod and decides to evict the Pod directly."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"Mode")," is not specified, ",(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJobModeReservationFirst")," is used by default"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PodRef")," represents the Pod that be migrated.  The field is required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReservationOptions")," defines options for how to reserve resource through ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," API:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReservationRef")," if is specified, the referenced ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," instance is used first. In some scenarios, such as defragmentation, in order to ensure the reliability of the upper-layer logic, resources may have been reserved on the target node. In this case, the specified ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation")," can be used directly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Template")," describes the spec of ",(0,r.kt)("inlineCode",{parentName:"li"},"Reservation"),". It is often not necessary to set this field. When neither ",(0,r.kt)("inlineCode",{parentName:"li"},"ReservationRef")," nor ",(0,r.kt)("inlineCode",{parentName:"li"},"Template")," is specified, the ",(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJob controller")," will construct the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReservationSpec")," reserved resources according to the Spec of the migrated Pod. If ",(0,r.kt)("inlineCode",{parentName:"li"},"Template")," is set, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReservationTemplateSpec")," and the Spec of the migrated Pod will be merged to construct the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReservationSpec")," reserved resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PreemptionOptions")," decides whether to preempt other Pods if reserved resources failed. The specific details of preemption will be submitted in a separate proposal description in future work, and will not be expanded here for the time being."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeleteOptions")," defines the options of delete operation. Whether to delete a Pod through the ",(0,r.kt)("inlineCode",{parentName:"li"},"K8s Delete API")," or evict a Pod through the ",(0,r.kt)("inlineCode",{parentName:"li"},"K8s Eviction API")," depends on how the user configures the parameters of the ",(0,r.kt)("inlineCode",{parentName:"li"},"PodMigrationJob Controller"),". Users only need to set ",(0,r.kt)("inlineCode",{parentName:"li"},"DeleteOptions")," according to the workload in their own cluster.")),(0,r.kt)("h4",{id:"migration-job-status"},"Migration Job Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type PodMigrationJobStatus struct {\n    // PodMigrationJobPhase represents the phase of a PodMigrationJob is a simple, high-level summary of where the PodMigrationJob is in its lifecycle.\n    // e.g. Pending/Running/Failed\n    Phase PodMigrationJobPhase `json:"phase,omitempty"`\n    // Status represents the current status of PodMigrationJob\n    // e.g. ReservationCreated\n    Status string `json:"status,omitempty"`\n    // Reason represents a brief CamelCase message indicating details about why the PodMigrationJob is in this state.\n    Reason string `json:"reason,omitempty"`\n    // Message represents a human-readable message indicating details about why the PodMigrationJob is in this state.\n    Message string `json:"message,omitempty"`\n    // Conditions records the stats of PodMigrationJob\n    Conditions []PodMigrationJobCondition `json:"conditions,omitempty"`\n    // NodeName represents the node\'s name of migrated Pod\n    NodeName string `json:"nodeName,omitempty"`\n    // PodRef represents the newly created Pod after being migrated\n    PodRef *corev1.ObjectReference `json:"podRef,omitempty"`\n    // PreemptedPodsRef represents the Pods that be preempted\n    PreemptedPodsRef []corev1.ObjectReference `json:"preemptedPodsRef,omitempty"`\n    // PreemptedPodsReservations records information about Reservations created due to preemption\n    PreemptedPodsReservations []PodMigrationJobPreemptedReservation `json:"preemptedPodsReservation,omitempty"`\n}\n\ntype PodMigrationJobPreemptedReservation struct {\n    // Namespace represents the namespace of Reservation\n    Namespace string `json:"namespace,omitempty"`\n    // Name represents the name of Reservation\n    Name string `json:"name,omitempty"`\n    // NodeName represents the assigned node for Reservation by scheduler\n    NodeName string `json:"nodeName,omitempty"`\n    // Phase represents the Phase of Reservation\n    Phase string `json:"phase,omitempty"`\n    // PreemptedPodRef represents the Pod that be preempted\n    PreemptedPodRef *corev1.ObjectReference `json:"preemptedPodRef,omitempty"`\n    // PodsRef represents the newly created Pods after being preempted\n    PodsRef []corev1.ObjectReference `json:"podsRef,omitempty"`\n}\n\ntype PodMigrationJobCondition struct {\n    // Type is the type of the condition.\n    Type PodMigrationJobConditionType `json:"type"`\n    // Status is the status of the condition.\n    // Can be True, False, Unknown.\n    Status PodMigrationJobConditionStatus `json:"status"`\n    // Last time we probed the condition.\n    // +nullable\n    LastProbeTime metav1.Time `json:"lastProbeTime,omitempty"`\n    // Last time the condition transitioned from one status to another.\n    // +nullable\n    LastTransitionTime metav1.Time `json:"lastTransitionTime,omitempty"`\n    // Unique, one-word, CamelCase reason for the condition\'s last transition.\n    Reason string `json:"reason,omitempty"`\n    // Human-readable message indicating details about last transition.\n    Message string `json:"message,omitempty"`\n}\n\ntype PodMigrationJobPhase string\n\nconst (\n    // PodMigrationJobPending represents the initial status\n    PodMigrationJobPending PodMigrationJobPhase = "Pending"\n    // PodMigrationJobRunning represents the PodMigrationJob is being processed\n    PodMigrationJobRunning PodMigrationJobPhase = "Running"\n    // PodMigrationJobSucceed represents the PodMigrationJob processed successfully\n    PodMigrationJobSucceed PodMigrationJobPhase = "Succeed"\n    // PodMigrationJobFailed represents the PodMigrationJob process failed caused by Timeout, Reservation failed, etc.\n    PodMigrationJobFailed PodMigrationJobPhase = "Failed"\n    // PodMigrationJobAborted represents the user forcefully aborted the PodMigrationJob.\n    PodMigrationJobAborted PodMigrationJobPhase = "Aborted"\n)\n\n// These are valid conditions of PodMigrationJob.\nconst (\n    PodMigrationJobConditionReservationCreated             PodMigrationJobConditionType = "ReservationCreated"\n    PodMigrationJobConditionReservationScheduled           PodMigrationJobConditionType = "ReservationScheduled"\n    PodMigrationJobConditionPreemption                     PodMigrationJobConditionType = "Preemption"\n    PodMigrationJobConditionEviction                       PodMigrationJobConditionType = "Eviction"\n    PodMigrationJobConditionPodScheduled                   PodMigrationJobConditionType = "PodScheduled"\n    PodMigrationJobConditionReservationPodBoundReservation PodMigrationJobConditionType = "PodBoundReservation"\n    PodMigrationJobConditionReservationBound               PodMigrationJobConditionType = "ReservationBound"\n)\n\n// These are valid reasons of PodMigrationJob.\nconst (\n    PodMigrationJobReasonTimeout                   = "Timeout"\n    PodMigrationJobReasonFailedCreateReservation   = "FailedCreateReservation"\n    PodMigrationJobReasonUnschedulable             = "Unschedulable"\n    PodMigrationJobReasonMissingPod                = "MissingPod"\n    PodMigrationJobReasonMissingReservation        = "MissingReservation"\n    PodMigrationJobReasonPreempting                = "Preempting"\n    PodMigrationJobReasonPreemptComplete           = "PreemptComplete"\n    PodMigrationJobReasonEvicting                  = "Evicting"\n    PodMigrationJobReasonFailedEvict               = "FailedEvict"\n    PodMigrationJobReasonEvictComplete             = "EvictComplete"\n    PodMigrationJobReasonWaitForPodBindReservation = "WaitForPodBindReservation"\n)\n\ntype PodMigrationJobConditionStatus string\n\nconst (\n    PodMigrationJobConditionStatusTrue    PodMigrationJobConditionStatus = "True"\n    PodMigrationJobConditionStatusFalse   PodMigrationJobConditionStatus = "False"\n    PodMigrationJobConditionStatusUnknown PodMigrationJobConditionStatus = "Unknown"\n)\n')),(0,r.kt)("h3",{id:"implementation-detailsnotesconstraints"},"Implementation Details/Notes/Constraints"),(0,r.kt)("h4",{id:"podmigrationjob-controller"},"PodMigrationJob Controller"),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"PodMigrationJobController")," and general controller is that ",(0,r.kt)("inlineCode",{parentName:"p"},"PodMigrationJobController")," will evaluate all pending PodMigrationJobs together (ie PodMigrationJob.Phase is Pending) and select a batch of PodMigrationJob and reconcile them. This selection process is called the arbitration mechanism. The reason why the arbitration mechanism is introduced is mainly to control the stability risk and control the cost of migrating Pods. The arbitration mechanism includes three stages: ",(0,r.kt)("inlineCode",{parentName:"p"},"Group"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sort"),"."),(0,r.kt)("h5",{id:"group-podmigrationjob"},"Group PodMigrationJob"),(0,r.kt)("p",null,"Aggregate according to different workloads to facilitate the processing of subsequent processes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aggregate PodMigrationJob by workload"),(0,r.kt)("li",{parentName:"ul"},"Aggregate PodMigrationJob by Node"),(0,r.kt)("li",{parentName:"ul"},"Aggregate PodMigrationJob by Namespace")),(0,r.kt)("h5",{id:"filter-podmigrationjob"},"Filter PodMigrationJob"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check how many PodMigrationJob of each workload are in the Running state, and record them as ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"migratingReplicas")),". If the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"migratingReplicas"))," reach a certain threshold, they will be excluded. The detailed algorithm of this threshold is described later."),(0,r.kt)("li",{parentName:"ul"},"Check the number of ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"unavailableReplicas"))," of each workload, and determine whether the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"unavailableReplicas + migratingReplicas"))," conform to the corresponding ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"},"PDB(Pod Disruption Budget)")," or ",(0,r.kt)("a",{parentName:"li",href:"https://openkruise.io/docs/user-manuals/podunavailablebudget"},"PUB(Pod Unavailable Budget)"),". If there is no PDB or PUB, use the algorithm to calculate dynamically. If not, exclude the corresponding PodMigrationJob."),(0,r.kt)("li",{parentName:"ul"},"Check the number of Pods being migrated on the node where each target Pod is located. If it exceeds the maximum migration amount for a single node, exclude it."),(0,r.kt)("li",{parentName:"ul"},"Check the number of Pods being migrated in the Namespace where each target Pod is located. If it exceeds the maximum migration amount for a single Namespace, exclude it")),(0,r.kt)("p",null,"The detailed algorithm of Workload Max Migrating/Unavailable Replicas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func GetMaxMigrating(replicas int, intOrPercent *intstr.IntOrString) (int, error) {\n    return GetMaxUnavailable(replicas, intOrPercent)\n}\n\nfunc GetMaxUnavailable(replicas int, intOrPercent *intstr.IntOrString) (int, error) {\n    if intOrPercent == nil {\n        if replicas > 10 {\n            s := intstr.FromString("10%")\n            intOrPercent = &s\n        } else if replicas >= 4 && replicas <= 10 {\n            s := intstr.FromInt(2)\n            intOrPercent = &s\n        } else {\n            s := intstr.FromInt(1)\n            intOrPercent = &s\n        }\n    }\n    return intstr.GetValueFromIntOrPercent(intOrPercent, replicas, true)\n}\n')),(0,r.kt)("h5",{id:"sort-podmigrationjob"},"Sort PodMigrationJob"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pods with higher QoS requirements are given priority, LSE > LSR > LS > BE"),(0,r.kt)("li",{parentName:"ul"},"Pods with higher priority will be processed first"),(0,r.kt)("li",{parentName:"ul"},"The higher migration priority will be processed first"),(0,r.kt)("li",{parentName:"ul"},"If the Pod has already initiated a migration job in the past and it fails, sort by the number of times. The lower the number of times, the priority will be given to processing"),(0,r.kt)("li",{parentName:"ul"},"If the workload where the Pod is located has been descheduled for a certain number of times in the past, it is sorted according to the number of times. The lower the number of times, the priority will be processed."),(0,r.kt)("li",{parentName:"ul"},"Sort by the number of replicas being migrated by the workload. The lower the number of replicas being migrated, the priority will be given to processing.")),(0,r.kt)("h5",{id:"execute-podmigrationjob"},"Execute PodMigrationJob"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update PodMigrationJobStatus.Phase to Running to trigger the PodMigrationJob controller reconcile these jobs"),(0,r.kt)("li",{parentName:"ul"},"PodMigrationJob controller reconciles process:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the mode of PodMigrationJob is ",(0,r.kt)("inlineCode",{parentName:"li"},"EvictionDirectly"),", just delete the Pod through the delete method that configured in PodMigrationJob controller. And update the phase of PodMigrationJob to Success."),(0,r.kt)("li",{parentName:"ul"},"If not specified ReservationOptions.ReservationRef, create the Reservation instance by the reservation template or Pod  spec to reserve resources. And updates the created Reservation instance to the ReservationOptions.ReservationRef."),(0,r.kt)("li",{parentName:"ul"},"Check the status of Reservation to determine whether reserve resource successfully."),(0,r.kt)("li",{parentName:"ul"},"If failed to reserve, abort the PodMigrationJob and update the phase of PodMigrationJob to Fail"),(0,r.kt)("li",{parentName:"ul"},"If successfully reserve, delete the Pod through the delete method that configured in PodMigrationJob controller."),(0,r.kt)("li",{parentName:"ul"},"Check the Reservation status to determine whether the Reservation consumed."),(0,r.kt)("li",{parentName:"ul"},"If Reservation consumed, tracks the status of Reservation and update the status to PodMigrationJob"),(0,r.kt)("li",{parentName:"ul"},"Update phase of PodMigrationJob to Success.")))),(0,r.kt)("h5",{id:"migration-stability-mechanism"},"Migration Stability mechanism"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for disabling this capability by configuration "),(0,r.kt)("li",{parentName:"ul"},"Supports a simple central flow control mechanism to limit the number of migrations over a period of time. ")),(0,r.kt)("p",null,"See the Configuration section for more details"),(0,r.kt)("h4",{id:"controller-configuration"},"Controller Configuration"),(0,r.kt)("p",null,"User can configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationControllerArgs")," through Koordinator Descheduler ConfigMap. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// MigrationControllerArgs holds arguments used to configure the MigrationController\ntype MigrationControllerArgs struct {\n    metav1.TypeMeta\n\n    // DryRun means only execute the entire migration logic except create Reservation or Delete Pod\n    // Default is false\n    DryRun bool `json:"dryRun,omitempty"`\n\n    // EvictFailedBarePods allows pods without ownerReferences and in failed phase to be evicted.\n    EvictFailedBarePods bool `json:"evictFailedBarePods"`\n\n    // EvictLocalStoragePods allows pods using local storage to be evicted.\n    EvictLocalStoragePods bool `json:"evictLocalStoragePods"`\n\n    // EvictSystemCriticalPods allows eviction of pods of any priority (including Kubernetes system pods)\n    EvictSystemCriticalPods bool `json:"evictSystemCriticalPods"`\n\n    // IgnorePVCPods prevents pods with PVCs from being evicted.\n    IgnorePvcPods bool `json:"ignorePvcPods"`\n\n    // LabelSelector sets whether to apply label filtering when evicting.\n    // Any pod matching the label selector is considered evictable.\n    LabelSelector *metav1.LabelSelector `json:"labelSelector,omitempty"`\n\n    // FlowControlQPS controls the number of arbitrations per second\n    FlowControlQPS string `json:"flowControlQPS,omitempty"`\n    // FlowControlBurst is the maximum number of tokens\n    FlowControlBurst int32 `json:"flowControlBurst,omitempty"`\n\n    // MaxMigratingPerNode represents he maximum number of pods that can be migrating during migrate per node.\n    MaxMigratingPerNode *int32 `json:"maxMigratingPerNode,omitempty"`\n\n    // MaxMigratingPerNamespace represents he maximum number of pods that can be migrating during migrate per namespace.\n    MaxMigratingPerNamespace *int32 `json:"maxMigratingPerNamespace,omitempty"`\n\n    // MaxMigratingPerWorkload represents he maximum number of pods that can be migrating during migrate per workload.\n    // Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\n    MaxMigratingPerWorkload *intstr.IntOrString `json:"maxMigratingPerWorkload,omitempty"`\n\n    // MaxUnavailablePerWorkload represents he maximum number of pods that can be unavailable during migrate per workload.\n    // The unavailable state includes NotRunning/NotReady/Migrating/Evicting\n    // Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\n    MaxUnavailablePerWorkload *intstr.IntOrString `json:"maxUnavailablePerWorkload,omitempty"`\n\n    // EvictionPolicy represents how to delete Pod, support "Delete" and "Eviction", default value is "Eviction"\n    EvictionPolicy string `json:"evictionPolicy,omitempty"`\n    // DefaultDeleteOptions defines options when deleting migrated pods and preempted pods through the method specified by EvictionPolicy\n    DefaultDeleteOptions *metav1.DeleteOptions `json:"defaultDeleteOptions,omitempty"`\n}\n\n')))}u.isMDXComponent=!0}}]);