(function(s){function e(e){for(var i,l,n=e[0],d=e[1],o=e[2],u=0,m=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&m.push(t[l][0]),t[l]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(s[i]=d[i]);r&&r(e);while(m.length)m.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var s,e=0;e<c.length;e++){for(var a=c[e],i=!0,n=1;n<a.length;n++){var d=a[n];0!==t[d]&&(i=!1)}i&&(c.splice(e--,1),s=l(l.s=a[0]))}return s}var i={},t={app:0},c=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return s[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=s,l.c=i,l.d=function(s,e,a){l.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:a})},l.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},l.t=function(s,e){if(1&e&&(s=l(s)),8&e)return s;if(4&e&&"object"===typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var i in s)l.d(a,i,function(e){return s[e]}.bind(null,i));return a},l.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return l.d(e,"a",e),e},l.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},l.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var r=d;c.push([0,"chunk-vendors"]),a()})({0:function(s,e,a){s.exports=a("56d7")},"1c83":function(s,e,a){"use strict";a("3a70")},"3a70":function(s,e,a){},4678:function(s,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function t(s){var e=c(s);return a(e)}function c(s){if(!a.o(i,s)){var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return i[s]}t.keys=function(){return Object.keys(i)},t.resolve=c,s.exports=t,t.id="4678"},"56d7":function(s,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23"),t={id:"nav"};function c(s,e,a,c,l,n){var d=Object(i["w"])("NavBar"),o=Object(i["w"])("router-view"),r=Object(i["w"])("Footer");return Object(i["s"])(),Object(i["e"])(i["a"],null,[Object(i["f"])("div",t,[Object(i["i"])(d)]),Object(i["i"])(o),Object(i["i"])(r)],64)}var l={class:"container"},n={class:"section"},d={class:"column is-full"},o={class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},r={class:"navbar-brand"},u=Object(i["f"])("div",{class:"navbar-item has-background-grey-light has-text-weight-semibold"}," Zihao's Fitness Tracker Logo ",-1),m=Object(i["f"])("span",{"aria-hidden":"true"},null,-1),v=Object(i["f"])("span",{"aria-hidden":"true"},null,-1),b=Object(i["f"])("span",{"aria-hidden":"true"},null,-1),f=[m,v,b],h={key:0,class:"navbar-start"},p=Object(i["h"])(" Discover "),g=Object(i["h"])(" HealthPanel "),j={class:"navbar-end"};function O(s,e,a,t,c,m){var v=Object(i["w"])("router-link"),b=Object(i["w"])("login-badge");return Object(i["s"])(),Object(i["e"])("div",l,[Object(i["f"])("section",n,[Object(i["f"])("div",d,[Object(i["f"])("nav",o,[Object(i["f"])("div",r,[u,Object(i["f"])("a",{role:"button",class:Object(i["o"])(["navbar-burger",{"is-active":c.isActive}]),"aria-label":"menu","aria-expanded":"false",onClick:e[0]||(e[0]=function(s){return c.isActive=!c.isActive})},f,2)]),Object(i["f"])("div",{class:Object(i["o"])(["navbar-menu",{"is-active":c.isActive}])},[c.Session.user?(Object(i["s"])(),Object(i["e"])("div",h,[Object(i["i"])(v,{class:"navbar-item is-tab",to:"/discover","active-class":"is-active"},{default:Object(i["C"])((function(){return[p]})),_:1}),Object(i["i"])(v,{class:"navbar-item is-tab",to:"/healthpanel","active-class":"is-active"},{default:Object(i["C"])((function(){return[g]})),_:1})])):Object(i["d"])("",!0),Object(i["f"])("div",j,[Object(i["i"])(b)])],2)])])])])}var x=a("6c02"),w={class:"section"},k={class:"container"},y=Object(i["f"])("div",{class:"column is-full has-text-centered"},[Object(i["f"])("h1",{class:"title"},"Login"),Object(i["f"])("h2",null," username: @zihao password: password ")],-1),P={class:"column is-one-third is-offset-one-third"},S={class:"field"},z={class:"control"},L={class:"field"},M={class:"control"},J=Object(i["f"])("div",{class:"field"},[Object(i["f"])("p",{class:"control has-text-centered"},[Object(i["f"])("button",{class:"button is-success"}," Login ")])],-1),A={class:"column is-one-third is-offset-one-third"},C={class:"box"},_={class:"columns is-multiline"},N={class:"column is-full has-text-centered"},q=Object(i["h"])(" Create a new account"),D={class:"column is-full is-gapless has-text-centered"},E=Object(i["h"])(" Forget password");function U(s,e,a,t,c,l){var n=Object(i["w"])("router-link");return Object(i["s"])(),Object(i["e"])("section",w,[Object(i["f"])("div",k,[y,Object(i["f"])("div",P,[Object(i["f"])("form",{class:"box",onSubmit:e[2]||(e[2]=Object(i["E"])((function(s){return l.login()}),["prevent"]))},[Object(i["f"])("div",S,[Object(i["f"])("p",z,[Object(i["D"])(Object(i["f"])("input",{class:"input",type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=function(e){return s.email=e})},null,512),[[i["A"],s.email]])])]),Object(i["f"])("div",L,[Object(i["f"])("p",M,[Object(i["D"])(Object(i["f"])("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=function(e){return s.password=e})},null,512),[[i["A"],s.password]])])]),J],32)]),Object(i["f"])("div",A,[Object(i["f"])("div",C,[Object(i["f"])("div",_,[Object(i["f"])("div",N,[Object(i["i"])(n,{to:"/signup"},{default:Object(i["C"])((function(){return[q]})),_:1})]),Object(i["f"])("div",D,[Object(i["i"])(n,{to:"/forgetpassword"},{default:Object(i["C"])((function(){return[E]})),_:1})])])])])])])}var F={name:"Login",data:function(){return{email:null,password:null,Session:ie}},methods:{login:function(){this.Session.Login(this.email,this.password)}}},W=(a("83af"),a("6b0d")),T=a.n(W);const R=T()(F,[["render",U]]);var B=R,H={class:"container"},I={class:"section"},Y={class:"container"},Z=Object(i["g"])('<div class="column is-full has-text-centered"><h1 class="title">Sign Up</h1></div><div class="column is-one-third is-offset-one-third"><div class="box"><div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="email" placeholder="Email"><span class="icon is-small is-left"><i class="fas fa-envelope"></i></span><span class="icon is-small is-right"><i class="fas fa-check"></i></span></p></div><div class="field"><p class="control has-icons-left"><input class="input" type="username" placeholder="Username"><span class="icon is-small is-left"><i class="fas fa-user"></i></span></p></div><div class="field"><p class="control has-icons-left"><input class="input" type="password" placeholder="Password"><span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p></div><div class="field"><p class="control has-icons-left"><input class="input" type="password" placeholder="Repeat Password"><span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p></div><div class="column is-full has-text-centered"><button class="button is-black is-centered"> Sign Up </button></div></div></div>',2),V={class:"column is-one-third is-offset-one-third"},$={class:"box"},G={class:"column is-full has-text-centered"},K=Object(i["h"])(" Back To Login Page"),Q=Object(i["f"])("section",{class:"hero is-fullheight"},null,-1);function X(s,e,a,t,c,l){var n=Object(i["w"])("router-link");return Object(i["s"])(),Object(i["e"])("div",H,[Object(i["f"])("section",I,[Object(i["f"])("div",Y,[Z,Object(i["f"])("div",V,[Object(i["f"])("div",$,[Object(i["f"])("div",G,[Object(i["i"])(n,{to:"/"},{default:Object(i["C"])((function(){return[K]})),_:1})])])])])]),Q])}var ss={name:"SignUp"};a("1c83");const es=T()(ss,[["render",X]]);var as=es,is={class:"section"},ts={class:"container"},cs={class:"columns is-multiline"},ls=Object(i["g"])('<div class="column is-full has-text-centered"><div class="box"><div class="columns is-multiline"><div class="column is-full"><figure class="image is-inline-block"><img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></figure></div></div><div class="column"><p><strong>Welcome,</strong> Username</p><a aria-label="report"><span class="icon is-small"><i class="fas fa-pencil-alt" aria-hidden="true"></i></span></a></div><div class="column"><div><strong>Height : </strong> 5&#39;11 feet </div></div><div class="column"><p><strong>Weight: </strong> 200 lb</p></div><div class="column"><p><strong>Age: </strong> 18</p></div><div class="column"><p><strong>Sex: </strong> Male</p></div></div></div><div class="column is-full has-text-centered"><span class="title">Exercise Log</span></div><div class="column is-full"><div class="card has-text-centered"><table class="table is-inline-block"><thead><tr><th>Date</th><th>Working time</th><th>Working type</th><th>calorie burned</th><th>calorie cosumed</th><th>weight(lb)</th></tr></thead><tbody><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr><tr><th>01/01/2021</th><td>45:00</td><td>Running</td><td>400 cal</td><td>2000 cal</td><td>140 lb</td><td><button class="button is-small is-black">edit </button></td></tr></tbody></table><div class="column is-full"><button class="button is-black">Add New Log </button></div></div></div><div class="column is-full has-text-centered"><span class="title">Weight Tracker</span></div>',4),ns={class:"column is-full"};function ds(s,e,a,t,c,l){var n=Object(i["w"])("chart");return Object(i["s"])(),Object(i["e"])("section",is,[Object(i["f"])("div",ts,[Object(i["f"])("div",cs,[ls,Object(i["f"])("div",ns,[Object(i["i"])(n)])])])])}var os=a("3c10"),rs={name:"TrackChart",extends:os["a"],mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July","August","September","October","November","December"],datasets:[{data:[140,139,140,139,139.5,139.8,138,137,136,135,134,140],label:"Weight",borderColor:"#3e95cd",backgroundColor:"#7bb6dd",fill:!1}]})}};const us=rs;var ms=us,vs={name:"HealthPanel",components:{chart:ms}};const bs=T()(vs,[["render",ds]]);var fs=bs,hs={class:"section"},ps={class:"container"},gs=Object(i["g"])('<div class="column is-full has-text-centered"><h1 class="title">Forget Password</h1></div><div class="column is-one-third is-offset-one-third"><div class="box"><div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="email" placeholder="Email"><span class="icon is-small is-left"><i class="fas fa-envelope"></i></span><span class="icon is-small is-right"><i class="fas fa-check"></i></span></p></div><div class="column is-full has-text-centered"><button class="button is-black is-centered"> Send Reset Link </button></div></div></div>',2),js={class:"column is-one-third is-offset-one-third"},Os={class:"box"},xs={class:"columns is-multiline"},ws={class:"column is-full has-text-centered"},ks=Object(i["h"])(" Back to login"),ys={class:"column is-full is-gapless has-text-centered"},Ps=Object(i["h"])(" Sign Up");function Ss(s,e,a,t,c,l){var n=Object(i["w"])("router-link");return Object(i["s"])(),Object(i["e"])("section",hs,[Object(i["f"])("div",ps,[gs,Object(i["f"])("div",js,[Object(i["f"])("div",Os,[Object(i["f"])("div",xs,[Object(i["f"])("div",ws,[Object(i["i"])(n,{to:"/"},{default:Object(i["C"])((function(){return[ks]})),_:1})]),Object(i["f"])("div",ys,[Object(i["i"])(n,{to:"/signup"},{default:Object(i["C"])((function(){return[Ps]})),_:1})])])])])])])}var zs={name:"ForgetPassword"};a("b91e");const Ls=T()(zs,[["render",Ss]]);var Ms=Ls,Js={class:"section"},As={class:"columns is-multiline has-text-centered"},Cs=Object(i["g"])('<div class="column is-full has-text-centered"><div class="box"><div class="columns is-multiline"><div class="column is-full"><figure class="image is-inline-block"><img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></figure></div></div><div class="column"><p><strong>Welcome,</strong> Username</p><a aria-label="report"><span class="icon is-small"><i class="fas fa-pencil-alt" aria-hidden="true"></i></span></a></div><div class="column"><p><strong>Id : </strong> 123456789</p></div><div class="column"><p><strong>Email: </strong> username@gmail.com</p></div><div class="column"><p><strong>Phone Number: </strong> 1234567893</p></div><div class="column"><p><strong>Address: </strong> 18 Address ave <br> NY 12561</p></div></div></div><div class="column is-full"><div class="box"><div class="columns is-multiline"><div class="column is-full"><span class="subtitle has-text-weight-bold">Manage Your Posts</span></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><footer class="card-footer"><a href="#" class="card-footer-item">Share</a><a href="#" class="card-footer-item">Edit</a><a href="#" class="card-footer-item">Delete</a></footer></div></div></div></div></div></div>',2),_s={class:"column is-full has-text-centered"},Ns={class:"box"},qs={class:"columns is-multiline"},Ds=Object(i["g"])('<div class="column is-full"><span class="subtitle has-text-weight-bold"> Manage Your Account</span></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Upload a new Avatar</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Change Your Info</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div><div class="column is-full"><button class="has-text-weight-bold button is-danger"> Change your password</button><div class="modal"><div class="modal-background"></div><div class="modal-content"></div><button class="modal-close is-large" aria-label="close"></button></div></div>',4),Es={class:"column is-full"},Us=Object(i["f"])("div",{class:"modal"},[Object(i["f"])("div",{class:"modal-background"}),Object(i["f"])("div",{class:"modal-content"}),Object(i["f"])("button",{class:"modal-close is-large","aria-label":"close"})],-1);function Fs(s,e,a,t,c,l){return Object(i["s"])(),Object(i["e"])("section",Js,[Object(i["f"])("div",As,[Cs,Object(i["f"])("div",_s,[Object(i["f"])("div",Ns,[Object(i["f"])("div",qs,[Ds,Object(i["f"])("div",Es,[Object(i["f"])("button",{class:"has-text-weight-bold button",onSubmit:e[0]||(e[0]=Object(i["E"])((function(s){return l.logout()}),["prevent"]))}," Log Out",32),Us])])])])])])}var Ws={name:"AccountManage",data:function(){return{Session:ie}},methods:{logout:function(){console.log("log out"),this.Session.Logout()}}};const Ts=T()(Ws,[["render",Fs]]);var Rs=Ts,Bs={class:"section"},Hs=Object(i["g"])('<div class="container"><div class="columns is-multiline"><div class="column is-full has-text-centered"><div class="title">Discover</div></div><div class="column is-one-quarter"><div class="card"><div class="card-content"><div class="media"><div class="media-left"><div class="columns"><div class="column is-one-third"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="column is-one-third"> Name </div><div class="column is-one-third"> Id </div></div></div></div></div></div><div class="card"><div class="card-content"><div class="media"><div class="media-left"><div class="columns"><div class="column is-one-third"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="column is-one-third"> Name </div><div class="column is-one-third"> Id </div></div></div></div></div></div><div class="card"><div class="card-content"><div class="media"><div class="media-left"><div class="columns"><div class="column is-one-third"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="column is-one-third"> Name </div><div class="column is-one-third"> Id </div></div></div></div></div></div></div><div class="column is-one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"><div class="columns is-multiline"><div class="column is-full"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div><div class="column"><nav class="level is-mobile"><div class="level-left"><a class="level-item" aria-label="reply"><span class="icon is-small"><i class="fas fa-reply" aria-hidden="true"></i></span></a><a class="level-item" aria-label="retweet"><span class="icon is-small"><i class="fas fa-retweet" aria-hidden="true"></i></span></a><a class="level-item" aria-label="like"><span class="icon is-small"><i class="fas fa-heart" aria-hidden="true"></i></span></a><a class="level-item" aria-label="report"><span class="icon is-small"><i class="fas fa-exclamation-triangle" aria-hidden="true"></i></span></a></div></nav></div></div></div></div></div><div class="column"></div><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div><div class="column is--one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div><div class="column is--one-quarter"><div class="card"><div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div></div></div></div></div>',1),Is=[Hs];function Ys(s,e,a,t,c,l){return Object(i["s"])(),Object(i["e"])("section",Bs,Is)}var Zs={name:"Discover"};const Vs=T()(Zs,[["render",Ys]]);var $s=Vs,Gs=[{path:"/",name:"Login",component:B},{path:"/signup",name:"SignUp",component:as},{path:"/healthpanel",name:"HealthPanel",meta:{requiresLogin:!0},component:fs},{path:"/forgetpassword",name:"ForgetPassword",component:Ms},{path:"/accountmanage",name:"AccountManage",meta:{requiresLogin:!0},component:Rs},{path:"/discover",name:"Discover",meta:{requiresLogin:!0},component:$s}],Ks=Object(x["a"])({history:Object(x["b"])(""),routes:Gs});Ks.beforeEach((function(s,e,a){s.meta.requiresLogin&&!ie.user?a("/"):a()}));var Qs=Ks,Xs=a("5530"),se=(a("7db0"),a("a434"),[{firstName:"Zihao",lastName:"Wang",handle:"@zihao",user_id:"111111",pic:"",password:"password",isAdmin:!0,emails:["wangz15@newpaltz.edu"],following:[],get name(){return this.firstName+" "+this.lastName}}]);function ee(s,e){console.log({handle:s,password:e});var a=se.find((function(e){return e.handle==s}));if(!a)throw{code:401,msg:"Sorry there is no user with that handle"};if(e!=a.password)throw{code:401,msg:"Wrong Password"};var i=Object(Xs["a"])(Object(Xs["a"])({},a),{},{password:void 0});return{user:i}}var ae={user:null,messages:[],toRoute:"/discover",Login:function(s,e){var a=ee(s,e);this.user=a.user,Qs.push(this.toRoute)}};var ie=ae,te=(a("b0c0"),{key:0,class:"buttons"}),ce=Object(i["f"])("strong",null,"Sign up",-1),le=Object(i["h"])(" Log in "),ne={key:1},de={class:"navbar-item"},oe=Object(i["f"])("strong",null,"Manage Account",-1);function re(s,e,a,t,c,l){var n=Object(i["w"])("router-link");return c.Session.user?(Object(i["s"])(),Object(i["e"])("div",ne,[Object(i["f"])("span",de,[Object(i["f"])("strong",null,"Hello,"+Object(i["y"])(l.name),1)]),Object(i["i"])(n,{class:"navbar-item button is-primary",to:"/accountManage"},{default:Object(i["C"])((function(){return[oe]})),_:1})])):(Object(i["s"])(),Object(i["e"])("div",te,[Object(i["i"])(n,{class:"button is-primary",to:"/signup"},{default:Object(i["C"])((function(){return[ce]})),_:1}),Object(i["i"])(n,{class:"button is-light",to:"/"},{default:Object(i["C"])((function(){return[le]})),_:1})]))}var ue={data:function(){return{Session:ie}},methods:{login:function(){this.$router.push("/login")}},computed:{name:function(){return this.Session.user.firstName+" "+this.Session.user.lastName}}};const me=T()(ue,[["render",re]]);var ve=me,be={name:"NavBar",data:function(){return{isActive:!1,Session:ie}},components:{LoginBadge:ve}};const fe=T()(be,[["render",O]]);var he=fe,pe={class:"section no-"},ge=Object(i["g"])('<footer class="footer"><div class="content has-text-centered"><p><strong>Fitness Tracker</strong> by <a href="www.corgi4ever.com">Zihao Wang</a>. </p><div class="columns"><div class="column"> Send feedback </div><div class="column"> Privacy </div><div class="column"> Terms </div></div></div></footer>',1),je=[ge];function Oe(s,e,a,t,c,l){return Object(i["s"])(),Object(i["e"])("section",pe,je)}var xe={};const we=T()(xe,[["render",Oe]]);var ke=we,ye={components:{NavBar:he,Footer:ke}};const Pe=T()(ye,[["render",c]]);var Se=Pe;a("6597"),a("5ed1");Object(i["c"])(Se).use(Qs).mount("#app")},6089:function(s,e,a){},"83af":function(s,e,a){"use strict";a("6089")},b91e:function(s,e,a){"use strict";a("fa8d")},fa8d:function(s,e,a){}});
//# sourceMappingURL=app.0f71522a.js.map