(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c5b643c"],{"21a1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-lg":""}},t._l(t.events,function(e){return n("v-layout",{key:e.eventId,attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("EventCard",{attrs:{event:e},nativeOn:{click:function(n){t.clickEvent(e)}}})],1)],1)}))},c=[],r=n("c93e"),a=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("h2",[t._v(t._s(t.event.name))])]),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("p",[t._v(t._s(t.event.description))])]),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("h3",[t._v(t._s(t.event.startDate))])])],1)},i=[],u={props:["event"]},v=u,l=n("2877"),f=Object(l["a"])(v,o,i,!1,null,null,null);f.options.__file="EventCard.vue";var p=f.exports,d=n("dde5"),h={data:function(){return{events:[]}},computed:Object(r["a"])({},Object(a["c"])("account",["user"])),created:function(){this.fetchEvents()},components:{EventCard:p},methods:Object(r["a"])({},Object(a["b"])("events",["selectEvent"]),{fetchEvents:function(){var t=this;d["b"].getEvents(this.user.id).then(function(e){t.events=e["data"]})},clickEvent:function(t){this.selectEvent(t),this.$router.push({path:"agenda"})}})},b=h,x=Object(l["a"])(b,s,c,!1,null,null,null);x.options.__file="EventList.vue";e["default"]=x.exports},c93e:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var s=n("a322");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},c=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),c.forEach(function(e){Object(s["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=chunk-4c5b643c.d039b629.js.map