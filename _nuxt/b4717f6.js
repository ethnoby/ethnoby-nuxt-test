(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12],{515:function(t,e){},553:function(t,e,n){"use strict";n.r(e);var o=n(550),r=new o.Client({nodes:[{host:"90ua8e6pk1izdy7wp-1.a1.typesense.net",port:"443",protocol:"https"}],apiKey:"xcbZQ3wYIvHzkZpWypZXfb8O84aUBUN1",connectionTimeoutSeconds:2});e.default=r},758:function(t,e,n){"use strict";n.r(e);var o=n(555),r=n(475),c=n(205),l=n(203),d=n(134),m=n(28),f=n(114),h=n(518),_=(n(30),n(19)),v=(n(63),n(27),n(67),n(553)),w={name:"IndexPage",middleware:"auth",asyncData:function(){return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.default.collections("songs").documents().export({include_fields:"name, id, location"}).then((function(t){return JSON.parse("[".concat(t,"]").replace(/\n/g,","))}));case 2:return t.t0=t.sent,t.abrupt("return",{itemsJSON:t.t0});case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{model:0,items:[],jsonl:"",carouselItems:["https://picsum.photos/750/250","https://picsum.photos/800/250","https://picsum.photos/801/250"]}},computed:{}},y=n(93),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{fluid:""}},[e("h1",[t._v("Песні: "+t._s(t.itemsJSON.length))]),t._v(" "),t.$fetchState.pending?e("div",{staticClass:"cards d-flex flex-wrap align-start align-self-start"},t._l(5,(function(i){return e(h.a,{key:i,staticClass:"ma-2",attrs:{width:"220",type:"card"}})})),1):e(l.a,[t._l(t.itemsJSON,(function(n,i){return[e(d.a,{key:i,attrs:{to:"songs/".concat(n.id||n.document.id),router:"",exact:""}},[e(f.a,[e(c.a,[t._v("mdi-play")])],1),t._v(" "),e(m.a,[e(m.c,[t._v(t._s(n.name||n.document.name))]),t._v(" "),e(m.b,[t._v(t._s(n.location?n.location[0]:n.document.location[0]))])],1)],1),t._v(" "),e(r.a,{key:100+i})]}))],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);