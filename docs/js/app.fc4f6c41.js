(function(e){function t(t){for(var a,i,l=t[0],r=t[1],o=t[2],u=0,b=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(b.length)b.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,l=1;l<s.length;l++){var r=s[l];0!==c[r]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},c={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var d=r;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"30a1":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=n,e.exports=c,c.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c=(s("15f5"),s("6597"),s("8918")),n=s("c43d"),i=(s("4624"),{class:"container"}),l={class:"columns"},r={class:"column"};function o(e,t,s,c,n,o){var d=Object(a["C"])("Navbar"),u=Object(a["C"])("router-view");return Object(a["v"])(),Object(a["g"])("div",i,[Object(a["h"])("div",l,[Object(a["h"])("div",r,[Object(a["k"])(d),Object(a["k"])(u)])])])}var d={class:"container"},u={class:"section"},b={class:"column is-full"},h={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},j={class:"navbar-brand"},f=Object(a["h"])("div",{class:"navbar-item has-background-grey-light has-text-weight-semibold"}," Zihao's Fitness Tracker Logo ",-1),m=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),p=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),v=Object(a["h"])("span",{"aria-hidden":"true"},null,-1),O=[m,p,v],g={key:0,class:"navbar-start"},k=Object(a["h"])("strong",null,"Share With Your Friend",-1),w=Object(a["h"])("strong",null,"Exercise Log",-1),x=Object(a["h"])("strong",null,"Manage Account",-1),y={class:"navbar-end"};function S(e,t,s,c,n,i){var l=Object(a["C"])("router-link"),r=Object(a["C"])("login-badge");return Object(a["v"])(),Object(a["g"])("div",d,[Object(a["h"])("section",u,[Object(a["h"])("div",b,[Object(a["h"])("nav",h,[Object(a["h"])("div",j,[f,Object(a["h"])("a",{role:"button",class:Object(a["r"])(["navbar-burger",{"is-active":n.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(e){return n.isActive=!n.isActive})},O,2)]),Object(a["h"])("div",{class:Object(a["r"])(["navbar-menu",{"is-active":n.isActive}])},[n.Session.user?(Object(a["v"])(),Object(a["g"])("div",g,[Object(a["k"])(l,{class:"navbar-item is-tab",to:"/discover","active-class":"is-active"},{default:Object(a["M"])((function(){return[k]})),_:1}),Object(a["k"])(l,{class:"navbar-item is-tab",to:"/healthpanel","active-class":"is-active"},{default:Object(a["M"])((function(){return[w]})),_:1}),Object(a["k"])(l,{class:"navbar-item is-tab",to:"/accountManage","active-class":"is-active"},{default:Object(a["M"])((function(){return[x]})),_:1})])):Object(a["f"])("",!0),Object(a["h"])("div",y,[Object(a["k"])(r)])],2)])])])])}var P=s("53ca"),N=s("1da1"),R=(s("96cf"),s("6c02")),F={class:"section"},L=Object(a["h"])("h1",{class:"title has-text-centered"},"Login",-1),C={class:"column is-one-third is-offset-one-third"},E={class:"box"},U={class:"field"},J={class:"control has-icons-left has-icons-right"},z=Object(a["h"])("span",{class:"icon is-small is-left"},[Object(a["h"])("i",{class:"fas fa-envelope"})],-1),A={class:"field"},M={class:"control has-icons-left"},_=Object(a["h"])("span",{class:"icon is-small is-left"},[Object(a["h"])("i",{class:"fas fa-lock"})],-1),D=Object(a["h"])("div",{class:"field has-text-centered"},[Object(a["h"])("p",{class:"control"},[Object(a["h"])("button",{class:"button is-black"},"Login")])],-1);function V(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",F,[L,Object(a["h"])("form",{class:"",onSubmit:t[2]||(t[2]=Object(a["O"])((function(e){return i.login()}),["prevent"]))},[Object(a["h"])("div",C,[Object(a["h"])("div",E,[Object(a["h"])("div",U,[Object(a["h"])("p",J,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[a["J"],e.email]]),z])]),Object(a["h"])("div",A,[Object(a["h"])("p",M,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[a["J"],e.password]]),_])]),D])])],32)])}var q={data:function(){return{email:null,password:null,Session:Ys}},methods:{login:function(){this.Session.Login(this.email,this.password)}}},T=s("6b0d"),W=s.n(T);const H=W()(q,[["render",V]]);var I=H,Y={class:"container"},B={class:"section"},$={class:"container"},Z=Object(a["h"])("div",{class:"column is-full has-text-centered"},[Object(a["h"])("h1",{class:"title"},"Register")],-1),G={class:"column is-one-third is-offset-one-third"},K={class:"field"},Q={class:"control"},X={class:"field"},ee={class:"control"},te={class:"field"},se={class:"control"},ae={class:"field"},ce={class:"control has-icons-left"},ne=Object(a["h"])("span",{class:"icon is-small is-left"},[Object(a["h"])("i",{class:"fas fa-user"})],-1),ie={class:"field"},le={class:"control has-icons-left"},re=Object(a["h"])("span",{class:"icon is-small is-left"},[Object(a["h"])("i",{class:"fas fa-lock"})],-1),oe={class:"field"},de={class:"control has-icons-left"},ue=Object(a["h"])("span",{class:"icon is-small is-left"},[Object(a["h"])("i",{class:"fas fa-lock"})],-1),be=Object(a["h"])("div",{class:"column is-full has-text-centered"},[Object(a["h"])("button",{type:"submit",class:"button is-black is-centered"}," Sign Up ")],-1);function he(e,t,s,c,n,i){var l=Object(a["C"])("Footer");return Object(a["v"])(),Object(a["g"])("div",Y,[Object(a["h"])("section",B,[Object(a["h"])("div",$,[Z,Object(a["h"])("div",G,[Object(a["h"])("form",{class:"box",onSubmit:t[6]||(t[6]=Object(a["O"])((function(e){return i.register()}),["prevent"]))},[Object(a["h"])("div",K,[Object(a["h"])("p",Q,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"firstName","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.user.firstName=t}),placeholder:"First name"},null,512),[[a["J"],e.user.firstName]])])]),Object(a["h"])("div",X,[Object(a["h"])("p",ee,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"lastName","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.user.lastName=t}),placeholder:"Last name"},null,512),[[a["J"],e.user.lastName]])])]),Object(a["h"])("div",te,[Object(a["h"])("p",se,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"email","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.user.emails=t}),placeholder:"Email "},null,512),[[a["J"],e.user.emails]])])]),Object(a["h"])("div",ae,[Object(a["h"])("p",ce,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"username","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.user.handle=t}),placeholder:"Username"},null,512),[[a["J"],e.user.handle]]),ne])]),Object(a["h"])("div",ie,[Object(a["h"])("p",le,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"password","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.user.password=t}),placeholder:"Password"},null,512),[[a["J"],e.user.password]]),re])]),Object(a["h"])("div",oe,[Object(a["h"])("p",de,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"password","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.cpassword=t}),placeholder:"Confirm Password"},null,512),[[a["J"],e.cpassword]]),ue])]),be],32)])])]),Object(a["k"])(l)])}var je={class:"section"},fe=Object(a["i"])('<footer class="footer"><div class="content has-text-centered"><p><strong>Fitness Tracker</strong> by <a href="www.corgi4ever.com">Zihao Wang</a>. </p><div class="columns"><div class="column"> Send feedback </div><div class="column"> Privacy </div><div class="column"> Terms </div></div></div></footer>',1),me=[fe];function pe(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("section",je,me)}var ve={};s("cdc5");const Oe=W()(ve,[["render",pe]]);var ge=Oe,ke={components:{Footer:ge},name:"SignUp",data:function(){return{Session:Ys,cpassword:"",user:{firstName:"",lastName:"",handle:"",pic:"https://bulma.io/images/placeholders/128x128.png",password:"",isAdmin:!1,country:"Unknown",emails:[""],following:[{}],healthProfile:{Height:"0",Weight:"0",Age:"0",Sex:"Unknown"}}}},methods:{register:function(){this.user.password!==this.cpassword?alert("Password does not match"):this.Session.Register(this.user)}}};const we=W()(ke,[["render",he]]);var xe=we,ye={class:"section"},Se={class:"container"},Pe={class:"columns is-multiline"},Ne={class:"column is-full has-text-centered"},Re={class:"box"},Fe=Object(a["h"])("div",{class:"columns is-multiline"},[Object(a["h"])("div",{class:"column is-full"},[Object(a["h"])("figure",{class:"image is-inline-block"},[Object(a["h"])("img",{class:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})])])],-1),Le={class:"column"},Ce=Object(a["h"])("strong",null,"Welcome,",-1),Ee=Object(a["h"])("a",{"aria-label":"report"},[Object(a["h"])("span",{class:"icon is-small"},[Object(a["h"])("i",{class:"fas fa-pencil-alt","aria-hidden":"true"})])],-1),Ue={class:"column"},Je=Object(a["h"])("strong",null,"Height : ",-1),ze={class:"column"},Ae=Object(a["h"])("strong",null,"Weight: ",-1),Me={class:"column"},_e=Object(a["h"])("strong",null,"Age: ",-1),De={class:"column"},Ve=Object(a["h"])("strong",null,"Sex: ",-1),qe=Object(a["i"])('<div class="column is-full has-text-centered"><span class="title">Exercise Log</span></div><div class="column is-full"><div class="card has-text-centered"><table class="table is-inline-block"><thead><tr><th>Date</th><th>Working time</th><th>Working type</th><th>calorie burned</th><th>calorie cosumed</th><th>weight(lb)</th></tr></thead><tbody><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr></tbody></table><div class="column is-full"><button class="button is-black">Add New Log </button></div></div></div><div class="column is-full has-text-centered"><span class="title">Weight Tracker</span></div>',3),Te={class:"column is-full"};function We(e,t,s,c,n,i){var l=Object(a["C"])("chart");return Object(a["v"])(),Object(a["g"])("section",ye,[Object(a["h"])("div",Se,[Object(a["h"])("div",Pe,[Object(a["h"])("div",Ne,[Object(a["h"])("div",Re,[Fe,Object(a["h"])("div",Le,[Object(a["h"])("p",null,[Ce,Object(a["j"])(" "+Object(a["F"])(e.Session.user.firstName)+" "+Object(a["F"])(e.Session.user.lastName),1)]),Ee]),Object(a["h"])("div",Ue,[Object(a["h"])("div",null,[Je,Object(a["j"])(" "+Object(a["F"])(e.Session.user.healthProfile.Height)+" feet ",1)])]),Object(a["h"])("div",ze,[Object(a["h"])("p",null,[Ae,Object(a["j"])(" "+Object(a["F"])(e.Session.user.healthProfile.Weight)+" lb",1)])]),Object(a["h"])("div",Me,[Object(a["h"])("p",null,[_e,Object(a["j"])(" "+Object(a["F"])(e.Session.user.healthProfile.Age),1)])]),Object(a["h"])("div",De,[Object(a["h"])("p",null,[Ve,Object(a["j"])(" "+Object(a["F"])(e.Session.user.healthProfile.Sex),1)])])])]),qe,Object(a["h"])("div",Te,[Object(a["k"])(l)])])])])}var He=s("3c10"),Ie={name:"TrackChart",extends:He["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{data:[140,139,140,139,139.5,139.8,138,137,136,135,134,140],label:"Weight",borderColor:"#3e95cd",backgroundColor:"#7bb6dd",fill:!1}]})}};const Ye=Ie;var Be=Ye,$e={name:"HealthPanel",components:{chart:Be},data:function(){return{Session:Ys}}};const Ze=W()($e,[["render",We]]);var Ge=Ze,Ke={class:"section"},Qe={class:"container"},Xe=Object(a["i"])('<div class="column is-full has-text-centered"><h1 class="title">Forget Password</h1></div><div class="column is-one-third is-offset-one-third"><div class="box"><div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="email" placeholder="Email"><span class="icon is-small is-left"><i class="fas fa-envelope"></i></span><span class="icon is-small is-right"><i class="fas fa-check"></i></span></p></div><div class="column is-full has-text-centered"><button class="button is-black is-centered"> Send Reset Link </button></div></div></div>',2),et={class:"column is-one-third is-offset-one-third"},tt={class:"box"},st={class:"columns is-multiline"},at={class:"column is-full has-text-centered"},ct=Object(a["j"])(" Back to login"),nt={class:"column is-full is-gapless has-text-centered"},it=Object(a["j"])(" Sign Up");function lt(e,t,s,c,n,i){var l=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["g"])("section",Ke,[Object(a["h"])("div",Qe,[Xe,Object(a["h"])("div",et,[Object(a["h"])("div",tt,[Object(a["h"])("div",st,[Object(a["h"])("div",at,[Object(a["k"])(l,{to:"/"},{default:Object(a["M"])((function(){return[ct]})),_:1})]),Object(a["h"])("div",nt,[Object(a["k"])(l,{to:"/signup"},{default:Object(a["M"])((function(){return[it]})),_:1})])])])])])])}var rt={name:"ForgetPassword"};s("b91e");const ot=W()(rt,[["render",lt]]);var dt=ot,ut={class:"section"},bt={class:"columns is-multiline has-text-centered"},ht={class:"column is-full has-text-centered"},jt={class:"box"},ft=Object(a["h"])("div",{class:"columns is-multiline"},[Object(a["h"])("div",{class:"column is-full"},[Object(a["h"])("figure",{class:"image is-inline-block"},[Object(a["h"])("img",{class:"is-rounded",src:"{{Session.user}}"})])])],-1),mt={class:"column"},pt=Object(a["h"])("strong",null,"Welcome,",-1),vt=Object(a["h"])("a",{"aria-label":"report"},[Object(a["h"])("span",{class:"icon is-small"},[Object(a["h"])("i",{class:"fas fa-pencil-alt","aria-hidden":"true"})])],-1),Ot={class:"column"},gt=Object(a["h"])("strong",null,"Id : ",-1),kt={class:"column"},wt=Object(a["h"])("strong",null,"Email: ",-1),xt={class:"column"},yt=Object(a["h"])("strong",null,"Country: ",-1),St=Object(a["i"])('<div class="column is-full"><div class="box"><div class="columns is-multiline"><div class="column is-full"><span class="subtitle has-text-weight-bold">Manage Your Posts</span></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div></div></div></div>',1),Pt={class:"column is-full has-text-centered"},Nt={class:"box"},Rt={class:"columns is-multiline"},Ft=Object(a["i"])('<div class="column is-full"><span class="subtitle has-text-weight-bold"> Manage Your Account</span></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Upload a new Avatar</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Change Your Info</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Change your password</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div>',4),Lt={class:"column is-full"},Ct=Object(a["h"])("div",{class:"modal"},[Object(a["h"])("div",{class:"modal-background"}),Object(a["h"])("div",{class:"modal-content"}),Object(a["h"])("button",{class:"modal-close is-large","aria-label":"close"})],-1);function Et(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("section",ut,[Object(a["h"])("div",bt,[Object(a["h"])("div",ht,[Object(a["h"])("div",jt,[ft,Object(a["h"])("div",mt,[Object(a["h"])("p",null,[pt,Object(a["j"])(" "+Object(a["F"])(n.Session.user.firstName)+" "+Object(a["F"])(n.Session.user.lastName),1)]),vt]),Object(a["h"])("div",Ot,[Object(a["h"])("p",null,[gt,Object(a["j"])(" "+Object(a["F"])(n.Session.user.handle),1)])]),Object(a["h"])("div",kt,[Object(a["h"])("p",null,[wt,Object(a["j"])(" "+Object(a["F"])(n.Session.user.emails),1)])]),Object(a["h"])("div",xt,[Object(a["h"])("p",null,[yt,Object(a["j"])(Object(a["F"])(n.Session.user.country),1)])])])]),St,Object(a["h"])("div",Pt,[Object(a["h"])("div",Nt,[Object(a["h"])("div",Rt,[Ft,Object(a["h"])("div",Lt,[Object(a["h"])("button",{class:"has-text-weight-bold button",onClick:t[0]||(t[0]=function(e){return i.logout()})}," Log Out"),Ct])])])])])])}var Ut={name:"AccountManage",data:function(){return{Session:Ys}},methods:{logout:function(){console.log("log out"),this.$router.push("/login"),this.Session.Logout()}}};const Jt=W()(Ut,[["render",Et]]);var zt=Jt,At={class:"section"},Mt=Object(a["h"])("h1",{class:"title has-text-centered"}," Share With Your Friend ",-1),_t={class:"columns"},Dt={class:"column"};function Vt(e,t,s,c,n,i){var l=Object(a["C"])("post-edit"),r=Object(a["C"])("post");return Object(a["v"])(),Object(a["g"])("div",At,[Mt,Object(a["h"])("div",_t,[Object(a["h"])("div",Dt,[Object(a["k"])(l,{"new-post":e.newPost,onAdd:t[0]||(t[0]=function(e){return i.add()})},null,8,["new-post"]),(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["A"])(e.posts,(function(e,t){return Object(a["v"])(),Object(a["g"])("div",{class:"post",key:e.src},[Object(a["k"])(r,{post:e,onRemove:function(s){return i.remove(e,t)}},null,8,["post","onRemove"])])})),128))]),Object(a["k"])(r,{post:e.newPost},null,8,["post"])])])}s("a434");var qt={class:"column is-half"},Tt={class:"card"},Wt={class:"card-image"},Ht={class:"image is-4by3"},It=["src","alt"],Yt={class:"card-content"},Bt={class:"media"},$t={class:"media-left"},Zt={class:"image is-48x48"},Gt=["src"],Kt={class:"media-content"},Qt={class:"title is-4"},Xt={class:"subtitle is-6"},es=["datetime"],ts={class:"content"},ss=Object(a["i"])('<footer class="card-footer"><a href="#" class="card-footer-item"><i class="fas fa-flag"></i>Like</a><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Dislike</a></footer>',1);function as(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("div",qt,[Object(a["h"])("div",Tt,[Object(a["h"])("div",Wt,[Object(a["h"])("figure",Ht,[Object(a["h"])("img",{src:s.post.src,alt:s.post.alt},null,8,It),Object(a["h"])("button",{class:"delete",onClick:t[0]||(t[0]=function(t){return e.$emit("remove")})})])]),Object(a["h"])("div",Yt,[Object(a["h"])("div",Bt,[Object(a["h"])("div",$t,[Object(a["h"])("figure",Zt,[Object(a["h"])("img",{src:s.post.user.pic,alt:"Placeholder image"},null,8,Gt)])]),Object(a["h"])("div",Kt,[Object(a["h"])("p",Qt,Object(a["F"])(s.post.user.firstName)+" "+Object(a["F"])(s.post.user.lastName),1),Object(a["h"])("p",Xt,[Object(a["j"])(Object(a["F"])(s.post.user.handle)+" ",1),Object(a["h"])("time",{datetime:s.post.time},Object(a["F"])(i.prettyDate),9,es)])])]),Object(a["h"])("div",ts,Object(a["F"])(s.post.caption),1)]),ss])])}var cs={props:{post:Object},computed:{prettyDate:function(){return this.post.time&&this.post.time.toDateString?this.post.time.toDateString():"Never"}}};s("b543");const ns=W()(cs,[["render",as]]);var is,ls=ns,rs=(s("d3b7"),null!==(is=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_ROOT)&&void 0!==is?is:"http://localhost:3100/");function os(e){return ds.apply(this,arguments)}function ds(){return ds=Object(N["a"])(regeneratorRuntime.mark((function e(t){var s,a,c,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=n.length>1&&void 0!==n[1]?n[1]:null,a=n.length>2&&void 0!==n[2]?n[2]:null,e.prev=2,!s){e.next=9;break}return e.next=6,fetch(rs+t,{method:null!==a&&void 0!==a?a:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 6:c=e.sent,e.next=12;break;case 9:return e.next=11,fetch(rs+t);case 11:c=e.sent;case 12:if(c.ok){e.next=16;break}return e.next=15,c.json();case 15:throw e.sent;case 16:return e.next=18,c.json();case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t0=e["catch"](2),Ys.Error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),ds.apply(this,arguments)}function us(e){return os("posts/feed/"+e)}function bs(e){return os("posts",e)}function hs(e){return os("posts/"+e,{},"DELETE")}var js={class:"card-content"},fs={class:"content"},ms={class:"field"},ps=Object(a["h"])("label",{class:"label"},"Picture",-1),vs={class:"control"},Os={class:"field"},gs=Object(a["h"])("label",{class:"label"},"Alt",-1),ks={class:"control"},ws={class:"field"},xs=Object(a["h"])("label",{class:"label"},"Caption",-1),ys={class:"control"},Ss={class:"field"},Ps={class:"control"},Ns={class:"radio"},Rs=Object(a["j"])(" Public "),Fs={class:"radio"},Ls=Object(a["j"])(" Private "),Cs=Object(a["h"])("footer",{class:"card-footer"},[Object(a["h"])("button",{class:"button is-link card-footer-item",type:"submit"},"Submit"),Object(a["h"])("button",{class:"button is-link is-light card-footer-item",type:"reset"},"Cancel")],-1);function Es(e,t,s,c,n,i){return Object(a["v"])(),Object(a["g"])("form",{class:"card",onSubmit:t[5]||(t[5]=Object(a["O"])((function(t){return e.$emit("add")}),["prevent"]))},[Object(a["h"])("div",js,[Object(a["h"])("div",fs,[Object(a["h"])("div",ms,[ps,Object(a["h"])("div",vs,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"url",placeholder:"Input a URL to a picture","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.post.src=e})},null,512),[[a["J"],n.post.src]])])]),Object(a["h"])("div",Os,[gs,Object(a["h"])("div",ks,[Object(a["N"])(Object(a["h"])("input",{class:"input",type:"text",placeholder:"Some alternate text for this picture","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.post.alt=e})},null,512),[[a["J"],n.post.alt]])])]),Object(a["h"])("div",ws,[xs,Object(a["h"])("div",ys,[Object(a["N"])(Object(a["h"])("textarea",{class:"textarea",placeholder:"Some text to explain this picture","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.post.caption=e})},null,512),[[a["J"],n.post.caption]])])]),Object(a["h"])("div",Ss,[Object(a["h"])("div",Ps,[Object(a["h"])("label",Ns,[Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.post.isPublic=e}),value:!0},null,512),[[a["I"],n.post.isPublic]]),Rs]),Object(a["h"])("label",Fs,[Object(a["N"])(Object(a["h"])("input",{type:"radio",name:"question","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.post.isPublic=e}),value:!1},null,512),[[a["I"],n.post.isPublic]]),Ls])])])])]),Cs],32)}var Us={props:{newPost:Object},data:function(){return{post:this.newPost}},watch:{newPost:function(){this.post=this.newPost}}};const Js=W()(Us,[["render",Es]]);var zs=Js,As=function(){return{user:Ys.user,user_handle:Ys.user.handle}},Ms={components:{Post:ls,PostEdit:zs},data:function(){return{posts:[],newPost:As()}},mounted:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,us(Ys.user.handle);case 2:e.posts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{remove:function(e,t){var s=this;return Object(N["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log({post:e}),a.next=3,hs(e._id);case 3:c=a.sent,c.deleted&&s.posts.splice(t,1);case 5:case"end":return a.stop()}}),a)})))()},add:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Adding new post at "+new Date),t.next=3,bs(e.newPost);case 3:s=t.sent,console.log({response:s}),s&&(e.posts.unshift(s),e.newPost=As());case 6:case"end":return t.stop()}}),t)})))()}}};s("87b6");const _s=W()(Ms,[["render",Vt]]);var Ds=_s,Vs=[{path:"/",name:"Home Page",component:I},{path:"/login",name:"Login",component:I},{path:"/signup",name:"SignUp",component:xe},{path:"/healthpanel",name:"HealthPanel",meta:{requiresLogin:!0},component:Ge},{path:"/forgetpassword",name:"ForgetPassword",component:dt},{path:"/accountmanage",name:"AccountManage",meta:{requiresLogin:!0},component:zt},{path:"/discover",name:"Discover",meta:{requiresLogin:!0},component:Ds}],qs=Object(R["a"])({history:Object(R["b"])(""),routes:Vs});qs.beforeEach((function(e,t,s){e.meta.requiresLogin&&!Ys.user?s("/"):s()}));var Ts=qs;function Ws(e,t){return os("users/login",{handle:e,password:t})}function Hs(e){return os("users/register",{user:e})}var Is={user:null,messages:[],toRoute:"/Discover",Register:function(e){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Hs(e);case 3:a=s.sent,"object"===Object(P["a"])(a)&&(Ts.push(t.toRoute),t.messages.push({text:"Successfully Registed for username: "+e.handle,type:"success"}),c["a"].open({duration:5e3,message:"Successfully Registed for username"+e.handle,variant:"success",type:"success",closable:!0})),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),t.Error(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})))()},Login:function(e,t){var s=this;return Object(N["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Ws(e,t);case 3:c=a.sent,s.user=c.user,console.log(s.user),Ts.push(s.toRoute),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),s.Error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},Logout:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.user=null}catch(s){e.Error(s)}case 1:case"end":return t.stop()}}),t)})))()},Error:function(e){var t;console.error(e);var s=null!==(t=e.msg)&&void 0!==t?t:e;this.messages.push({text:s,type:"warning"}),c["a"].open({duration:2e3,message:s,variant:"danger",type:"danger",closable:!0})}},Ys=Is,Bs=(s("b0c0"),{key:0,class:"buttons"}),$s=Object(a["h"])("strong",null,"Sign up",-1),Zs={key:1},Gs={class:"navbar-item is-tab"};function Ks(e,t,s,c,n,i){var l=Object(a["C"])("router-link");return n.Session.user?(Object(a["v"])(),Object(a["g"])("div",Zs,[Object(a["h"])("span",Gs,[Object(a["h"])("strong",null,"Hello,"+Object(a["F"])(i.name),1)])])):(Object(a["v"])(),Object(a["g"])("div",Bs,[Object(a["k"])(l,{class:"button is-black",to:"/signup"},{default:Object(a["M"])((function(){return[$s]})),_:1}),Object(a["h"])("a",{class:"button is-light",onClick:t[0]||(t[0]=function(){return i.login&&i.login.apply(i,arguments)})}," Log in ")]))}var Qs={data:function(){return{Session:Ys}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}};const Xs=W()(Qs,[["render",Ks]]);var ea=Xs,ta={name:"NavBar",data:function(){return{isActive:!1,Session:Ys}},components:{LoginBadge:ea}};const sa=W()(ta,[["render",S]]);var aa=sa,ca={components:{Navbar:aa}};const na=W()(ca,[["render",o]]);var ia=na;Object(a["d"])(ia).use(Ts).use(c["b"]).use(n["a"],{iconPack:"fas"}).mount("#app")},"87b6":function(e,t,s){"use strict";s("f26d")},b543:function(e,t,s){"use strict";s("30a1")},b91e:function(e,t,s){"use strict";s("fa8d")},bf62:function(e,t,s){},cdc5:function(e,t,s){"use strict";s("bf62")},f26d:function(e,t,s){},fa8d:function(e,t,s){}});
//# sourceMappingURL=app.fc4f6c41.js.map