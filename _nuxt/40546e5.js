(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{272:function(t,r,e){var content=e(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("4d6a2e0f",content,!0,{sourceMap:!1})},307:function(t,r,e){"use strict";var n=e(474),o=e(482),c=e(477),l=e(207),v=e(231),_=e(475),d=e(205),m=e(174),f=e(203),h=e(134),y=e(204),w=e(206),k=e(28),x=e(114),N=e(479),U=e(480),D=e(481),O=e(478),E=e(476),A=e(303),I={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!0,fixed:!1,favoriteItems:[{icon:"mdi-playlist-music",title:"Песні",to:"/songs"},{icon:"mdi-violin",title:"Найгрышы",to:"/tunes"},{icon:"mdi-shoe-print",title:"Танцы",to:"/tunes"}],allItems:[{icon:"mdi-music-box-multiple",title:"Аўдыётэка",to:"/audio"},{icon:"mdi-filmstrip-box-multiple",title:"Відэатэка",to:"/video"},{icon:"mdi-image-multiple",title:"Фотатэка",to:"/pictures"},{icon:"mdi-bookshelf",title:"Кнігі",to:"/books"},{icon:"mdi-newspaper-variant-multiple",title:"Прэса",to:"/press"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Ethnoby"}},computed:{currentUser:function(){return this.$store.state.user}},methods:{signOut:function(){this.$fire.auth.signOut(),window.location="/login"}}},T=e(93),component=Object(T.a)(I,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[r(D.a,{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[r(m.a,{attrs:{contain:"","max-height":"60",src:"https://ethno.by/assets/images/ethno.by-logo-c-tr.png",alt:""}}),t._v(" "),r(f.a,[r(h.a,{attrs:{to:"/",router:"",exact:""}},[r(y.a,[r(d.a,[t._v("mdi-home")])],1),t._v(" "),r(k.a,[r(k.c,[t._v("Галоўная")])],1)],1),t._v(" "),r(_.a),t._v(" "),r(E.a,[t._v("\n        Абраныя раздзелы\n      ")]),t._v(" "),t._l(t.favoriteItems,(function(e,i){return r(h.a,{key:i,attrs:{to:e.to,router:"",exact:""}},[r(y.a,[r(d.a,[t._v(t._s(e.icon))])],1),t._v(" "),r(k.a,[r(k.c,[t._v(t._s(e.title))])],1),t._v(" "),t.currentUser?t._e():r(y.a,[r(d.a,{attrs:{color:"grey",title:"Залагіньцеся каб пабачыць змест раздзела"}},[t._v("\n            mdi-lock\n          ")])],1)],1)})),t._v(" "),r(_.a),t._v(" "),r(E.a,[t._v("\n        Усе раздзелы\n      ")]),t._v(" "),t._l(t.allItems,(function(e,i){return r(h.a,{key:20+i,attrs:{to:e.to,router:"",exact:""}},[r(y.a,[r(d.a,[t._v(t._s(e.icon))])],1),t._v(" "),r(k.a,[r(k.c,[t._v(t._s(e.title))])],1)],1)}))],2)],1),t._v(" "),r(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r(c.a,{on:{click:function(r){r.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r(A.a,[t._v(t._s(t.title))]),t._v(" "),r(O.a),t._v(" "),r(v.a,{attrs:{icon:"",to:"/search"}},[r(d.a,[t._v("mdi-magnify")])],1),t._v(" "),r(v.a,{attrs:{icon:""},on:{click:function(r){r.preventDefault(),t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[r(d.a,[t._v("mdi-theme-light-dark")])],1),t._v(" "),r(v.a,{attrs:{icon:""},on:{click:function(r){r.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r(d.a,[t._v("mdi-heart-outline")])],1),t._v(" "),r(U.a,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r(v.a,t._g({attrs:{icon:"",color:"primary",dark:""}},n),[t.currentUser?r(l.a,{attrs:{size:"32"}},[r("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.displayName,title:t.currentUser.displayName}})]):r(d.a,[t._v("\n            mdi-account\n          ")])],1)]}}])},[t._v(" "),t.currentUser?r(f.a,[r(h.a,{attrs:{"two-line":""}},[r(w.a,[r("img",{attrs:{src:t.currentUser.avatar,alt:t.currentUser.displayName,title:t.currentUser.displayName}})]),t._v(" "),r(k.a,[r(k.c,[t._v(t._s(t.currentUser.displayName))]),t._v(" "),r(k.b,[t._v(t._s(t.currentUser.email))])],1)],1),t._v(" "),r(h.a,{attrs:{to:"/"}},[r(x.a,[r(d.a,[t._v("mdi-notebook-heart-outline")])],1),t._v(" "),r(k.c,[t._v("Упадабанае")])],1),t._v(" "),r(h.a,{attrs:{to:"/"}},[r(x.a,[r(d.a,[t._v("mdi-bookmark-box-multiple")])],1),t._v(" "),r(k.c,[t._v("Мае калекцыі")])],1),t._v(" "),r(_.a),t._v(" "),r(h.a,{on:{click:function(r){return r.preventDefault(),t.signOut.apply(null,arguments)}}},[r(x.a,[r(d.a,[t._v("mdi-logout")])],1),t._v(" "),r(k.c,[t._v("Выйсці")])],1)],1):r(f.a,[r(h.a,{attrs:{to:"/signin"}},[r(x.a,[r(d.a,[t._v("mdi-login")])],1),t._v(" "),r(k.c,[t._v("Увайсці")])],1)],1)],1)],1),t._v(" "),r(N.a,[r("Nuxt")],1),t._v(" "),r(D.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(r){t.rightDrawer=r},expression:"rightDrawer"}},[r(f.a,[r(h.a,{nativeOn:{click:function(r){t.right=!t.right}}},[r(y.a,[r(d.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r(k.c,[t._v("Маё абранае")])],1)],1)],1)],1)}),[],!1,null,null,null);r.a=component.exports},317:function(t,r,e){e(318),t.exports=e(319)},356:function(t,r,e){"use strict";e.r(r),r.default=function(t){var r=t.store,e=t.redirect;r.state.user||(console.log("in middleware"),e("/signin"),console.log("routed"))}},368:function(t,r,e){"use strict";e(272)},369:function(t,r,e){var n=e(22)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},433:function(t,r,e){"use strict";e.r(r),e.d(r,"state",(function(){return n})),e.d(r,"mutations",(function(){return o}));var n=function(){return{user:!1}},o={ON_AUTH_STATE_CHANGED_MUTATION:function(t,r){var n=r.authUser;r.claims;if(n){console.log(n);var o=n.uid,c=n.email,l=n.displayName,v=n.photoURL,_=e(434),d=v||"https://www.gravatar.com/avatar/".concat(_(c),"?s=32");t.user={uid:o,email:c,displayName:l,avatar:d}}else t.user=!1}}},83:function(t,r,e){"use strict";var n=e(474),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(368),e(93)),component=Object(c.a)(o,(function(){var t=this,r=t._self._c;return r(n.a,{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);r.a=component.exports}},[[317,26,9,27]]]);