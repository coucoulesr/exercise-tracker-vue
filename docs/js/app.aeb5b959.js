(function(t){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],d=0,m=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],r=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navigation"),s("router-view",{staticClass:"container"})],1)},o=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"site-nav navbar navbar-expand bg-primary navbar-dark"},[s("div",{staticClass:"container-fluid"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Exercise Log")]),s("div",{staticClass:"navbar-nav ml-auto"},[this.$store.state.loggedIn?s("span",{staticClass:"navbar-text font-italic font-weight-light mr-3"},[t._v(t._s(this.$store.state.user))]):t._e(),this.$store.state.loggedIn?s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/exercise-log"}},[t._v("Exercise Log")]):t._e(),this.$store.state.loggedIn?t._e():s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/login"}},[t._v("Login")]),this.$store.state.loggedIn?t._e():s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/register"}},[t._v("Register")]),this.$store.state.loggedIn?s("a",{staticClass:"nav-item nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]):t._e()],1)],1)])])},a=[],c={name:"navigation",props:[],mounted:function(){this.$store.dispatch("checkAuthorization")},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}},computed:{}},l=c,u=s("2877"),d=Object(u["a"])(l,i,a,!1,null,null,null),m=d.exports,p={name:"app",data:function(){return{user:null,meetings:[],error:null}},methods:{},components:{Navigation:m}},f=p,v=(s("5c0b"),Object(u["a"])(f,n,o,!1,null,null,null)),h=v.exports,g=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3"},[t.user?s("div",{staticClass:"text-secondary text-center"},[t._v(" Welcome back, "),s("span",{staticClass:"font-weight-bold text-info"},[t._v(t._s(t.user.displayName))]),t._v("! ")]):t._e(),s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-10 col-md-10 col-lg-8 col-xl-7"},[s("h1",{staticClass:"display-4 text-primary mt-1 mb-2"},[t._v("Meeting Log")]),t._m(0),t.user?t._e():s("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{to:"/register"}},[t._v("Register")]),t.user?t._e():s("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{to:"/login"}},[t._v("Log In")]),t.user?s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/meetings"}},[s("font-awesome-icon",{attrs:{icon:"random"}}),t._v(" Meetings ")],1):t._e()],1)])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"lead mb-4"},[t._v(" This simple app creates meetings, allows people to check in, and picks random users to award giveaways. It's a good example of a Single Page Application which includes connection to a database and routing. It's a practical way to learn "),s("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" with "),s("a",{attrs:{href:"https://firebase.google.com"}},[t._v("Firebase")]),t._v(". ")])}],b=s("ad3d"),C={name:"home",props:["user"],components:{FontAwesomeIcon:b["a"]}},_=C,y=Object(u["a"])(_,w,x,!1,null,null,null),D=y.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card bg-light"},[s("div",{staticClass:"card-body"},[s("h3",{staticClass:"font-weight-light mb-3"},[t._v("Log in")]),s("section",{staticClass:"form-group"},[t.error?s("div",{staticClass:"col-12 alert alert-danger px-3"},[t._v(t._s(t.error))]):t._e(),s("label",{staticClass:"form-control-label sr-only",attrs:{for:"Username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{required:"",type:"username",id:"username",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("section",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(0)])])])])])]),s("p",{staticClass:"text-center mt-2"},[t._v(" or "),s("router-link",{attrs:{to:"/register"}},[t._v("register")])],1)])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group text-right mb-0"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Log in")])])}],O=s("bc3a"),$=s.n(O),j=s("db49"),I={name:"login",data:function(){return{username:"",password:"",error:""}},methods:{login:function(){var t=this;this.error="",$.a.post(j["BACKEND_URI"]+"/login",{username:this.username,password:this.password}).then((function(e){t.$store.dispatch("login",{token:e.data,username:t.username}),t.$router.push("exercise-log")})).catch((function(e){404===e.response.status?t.error="Invalid username or password":t.error=e}))}},components:{}},T=I,P=Object(u["a"])(T,E,k,!1,null,null,null),N=P.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card bg-light"},[s("div",{staticClass:"card-body"},[s("h3",{staticClass:"font-weight-light mb-3"},[t._v("Register")]),s("div",{staticClass:"form-row"},[t.error?s("div",{staticClass:"col-12 alert alert-danger px-3"},[t._v(t._s(t.error))]):t._e(),s("section",{staticClass:"col-sm-12 form-group"},[s("label",{staticClass:"form-control-label sr-only",attrs:{for:"displayName"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",name:"username",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passOne,expression:"passOne"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.passOne},on:{input:function(e){e.target.composing||(t.passOne=e.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passTwo,expression:"passTwo"}],staticClass:"form-control",attrs:{type:"password",required:"",placeholder:"Repeat Password"},domProps:{value:t.passTwo},on:{input:function(e){e.target.composing||(t.passTwo=e.target.value)}}})])]),t._m(0)])])])])])]),s("p",{staticClass:"text-center mt-2"},[t._v(" or "),s("router-link",{attrs:{to:"/login"}},[t._v("login")])],1)])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group text-right mb-0"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])}],F={name:"register",data:function(){return{username:null,passOne:null,passTwo:null,error:null}},watch:{passTwo:function(){""!==this.passOne&&""!==this.passTwo&&this.passTwo!==this.passOne?this.error="Passwords do not match.":this.error=null}},methods:{register:function(){var t=this;if(this.passOne!==this.passTwo)return null;$.a.post(j["BACKEND_URI"]+"/register",{username:this.username,password:this.passOne}).then((function(e){t.$store.dispatch("login",{username:t.username,token:e.data}),t.$router.push("exercise-log")})).catch((function(e){return t.error=e.response.data}))}},components:{}},B=F,R=Object(u["a"])(B,U,A,!1,null,null,null),L=R.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container mt-4"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-9 col-lg-7"},[s("h1",{staticClass:"text-center mb-3"},[t._v(" Your Exercise Log "),t.addExerciseFormVisible?t._e():s("button",{staticClass:"ml-3 btn btn-primary font-weight-bold",on:{click:function(e){return e.preventDefault(),t.showForm()}}},[t._v("+")])]),t.addExerciseFormVisible?s("div",{staticClass:"card bg-light py-0"},[s("div",{staticClass:"card-body text-center pb-1"},[s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.addExercise(e)}}},[s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDescription,expression:"newDescription"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"Description",name:"description",required:""},domProps:{value:t.newDescription},on:{input:function(e){e.target.composing||(t.newDescription=e.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-6 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDuration,expression:"newDuration"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Duration (min)"},domProps:{value:t.newDuration},on:{input:function(e){e.target.composing||(t.newDuration=e.target.value)}}})]),s("section",{staticClass:"col-sm-6 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})])]),s("div",{staticClass:"form-group text-right mb-0"},[s("input",{staticClass:"btn btn-primary",attrs:{value:"Add Exercise",type:"submit"}}),s("button",{staticClass:"btn btn-secondary ml-2",on:{click:function(e){return e.preventDefault(),t.clearForm()}}},[t._v("Cancel")])])])])]):t._e()])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-11 col-md-8 col-lg-6"},[s("div",{staticClass:"card rounded-0"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.exercises,(function(e){return s("tr",{key:e._id},[s("td",{staticClass:"font-weight-light text-center"},[t._v(t._s(e.description))]),s("td",{staticClass:"font-weight-light text-center"},[t._v(t._s(e.duration))]),s("td",{staticClass:"font-weight-light text-center"},[t._v(t._s(e.date.substr(0,10)))]),s("td",{staticClass:"text-center"},[s("router-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{title:"Edit",to:"/edit/"+e._id}},[s("font-awesome-icon",{attrs:{icon:"edit"}})],1),s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{title:"Delete"},on:{click:function(s){return s.preventDefault(),t.deleteExercise(e._id)}}},[s("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])})),0)])])])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"font-weight-normal text-center",attrs:{scope:"col"}},[t._v("Exercise")]),s("th",{staticClass:"font-weight-normal text-center",attrs:{scope:"col"}},[t._v("Duration (min.)")]),s("th",{staticClass:"font-weight-normal text-center",attrs:{scope:"col"}},[t._v("Date")]),s("th",{staticClass:"font-weight-normal text-center",attrs:{scope:"col"}},[t._v("Actions")])])])}],K={name:"ExerciseLog",props:[],data:function(){return{newDate:new Date,newDuration:"",newDescription:"",addExerciseFormVisible:!1}},methods:{showForm:function(){this.addExerciseFormVisible=!0},clearForm:function(){this.newDate=new Date,this.newDuration="",this.newDescription="",this.addExerciseFormVisible=!1},addExercise:function(){var t=this,e=this.exercises.length;this.$store.dispatch("addExercise",{description:this.newDescription,duration:this.newDuration,date:this.newDate}),setTimeout((function(){t.exercises.length>e&&t.clearForm()}),100)},deleteExercise:function(t){this.$store.dispatch("deleteExerciseById",t)}},computed:{exercises:function(){return this.$store.state.exercises}},components:{FontAwesomeIcon:b["a"]}},M=K,V=Object(u["a"])(M,S,q,!1,null,null,null),z=V.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card bg-light mt-3"},[s("div",{staticClass:"card-body"},[t.renderForm?t._e():s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t.renderForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.editExercise(e)}}},[s("h3",{staticClass:"font-weight-light mb-3 text-center"},[t._v("Edit Exercise")]),t.error?s("div",{staticClass:"col-12 alert alert-danger px-3"},[t._v(t._s(t.error))]):t._e(),s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-12 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDescription,expression:"newDescription"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"Description",name:"description",required:""},domProps:{value:t.newDescription},on:{input:function(e){e.target.composing||(t.newDescription=e.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("section",{staticClass:"col-sm-6 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDuration,expression:"newDuration"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Duration (min)",required:""},domProps:{value:t.newDuration},on:{input:function(e){e.target.composing||(t.newDuration=e.target.value)}}})]),s("section",{staticClass:"col-sm-6 form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})])]),s("div",{staticClass:"form-group text-right mb-0"},[s("input",{staticClass:"btn btn-primary",attrs:{value:"Edit Exercise",type:"submit"}}),s("router-link",{staticClass:"btn btn-secondary ml-2",attrs:{to:"/exercise-log"}},[t._v("Cancel")])],1)]):t._e()])])])])])},W=[],Y=(s("a4d3"),s("e01a"),s("7db0"),{name:"EditExercise",data:function(){return{newDate:null,newDuration:"",newDescription:"",error:"",renderForm:!1}},computed:{exercise:function(){var t=this;return this.$store.state.exercises.find((function(e){return e._id==t.$route.params.id}))},oldDate:function(){return this.exercise.date.substr(0,10)},oldDuration:function(){return this.exercise.duration},oldDescription:function(){return this.exercise.description}},created:function(){var t=this;setTimeout((function(){t.newDate=t.oldDate,t.newDuration=t.oldDuration,t.newDescription=t.oldDescription,t.renderForm=!0}),1e3)},methods:{editExercise:function(){var t=this;this.$store.dispatch("editExercise",{id:this.$route.params.id,exerciseObject:{duration:this.newDuration,description:this.newDescription,date:this.newDate}}),setTimeout((function(){return t.$router.push("/exercise-log")}),1e3)}},components:{}}),G=Y,H=Object(u["a"])(G,J,W,!1,null,null,null),Q=H.exports;r["a"].use(g["a"]);var X=[{path:"/",name:"home",component:D},{path:"/login",name:"login",component:N},{path:"/register",name:"register",component:L},{path:"/exercise-log",name:"exercise-log",component:z},{path:"/edit/:id",name:"edit",component:Q}],Z=new g["a"]({mode:"history",base:"/",routes:X}),tt=Z,et=(s("99af"),s("4de4"),s("c975"),s("1276"),s("2f62"));r["a"].use(et["a"]);var st=new et["a"].Store({state:{token:null,user:null,loggedIn:!1,exercises:[]},mutations:{setUser:function(t,e){t.user=e},auth:function(t,e){t.token=e,t.loggedIn=!0},logout:function(t){t.token="",t.loggedIn=!1},setExercises:function(t,e){t.exercises=e},addExercise:function(t,e){t.exercises.push(e)},removeExerciseById:function(t,e){t.exercises=t.exercises.filter((function(t){return t._id!=e}))},editExerciseById:function(t,e){var s=t.exercises.find((function(t){return t._id==e.id}));s.duration=e.exerciseObject.duration,s.date=e.exerciseObject.date,s.description=e.exerciseObject.description}},actions:{checkAuthorization:function(t){if("undefined"!=typeof document.cookie){var e=function(t){for(var e=t+"=",s=decodeURIComponent(document.cookie),r=s.split(";"),n=0;n<r.length;n++){var o=r[n];while(" "==o.charAt(0))o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}},s=e("token"),r=e("user");"undefined"!=typeof s&&"undefined"!=typeof r&&(t.commit("auth",s),t.commit("setUser",r),$.a.defaults.headers.common["Authorization"]=s,t.dispatch("populateExercises"))}},login:function(t,e){var s=new Date;s.setTime(s.getTime()+36e5),document.cookie="token=".concat(e.token,";expires=").concat(s.toUTCString(),";path=/"),document.cookie="user=".concat(e.username,";expires=").concat(s.toUTCString(),";path=/"),$.a.defaults.headers.common["Authorization"]=e.token,t.commit("auth",e.token),t.commit("setUser",e.username),t.dispatch("populateExercises")},logout:function(t){var e=t.commit;document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",e("logout")},populateExercises:function(t){var e=t.commit;$.a.get(j["BACKEND_URI"]+"/exercises/").then((function(t){e("setExercises",t.data)})).catch((function(t){console.error(t)}))},addExercise:function(t,e){var s=t.commit;$.a.post(j["BACKEND_URI"]+"/exercises/",e).then((function(t){s("addExercise",t.data)})).catch((function(t){console.error(t)}))},deleteExerciseById:function(t,e){var s=t.commit;$.a.delete(j["BACKEND_URI"]+"/exercises/"+e).then((function(t){204==t.status&&s("removeExerciseById",e)})).catch((function(t){console.error(t)}))},editExercise:function(t,e){var s=t.commit,r=e.id,n=e.exerciseObject;console.log(n),$.a.put(j["BACKEND_URI"]+"/exercises/"+r,n).then((function(t){console.log(t),s("editExerciseById",{id:t.data._id,exerciseObject:t.data})})).catch((function(t){console.error(t)}))}},modules:{}}),rt=s("ecee"),nt=s("c074");rt["c"].add(nt["c"],nt["b"],nt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:tt,store:st,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var r=s("9c0c"),n=s.n(r);n.a},"9c0c":function(t,e,s){},db49:function(t,e){e.BACKEND_URI="http://localhost:5000"}});
//# sourceMappingURL=app.aeb5b959.js.map