(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1f65"],{"21a1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-lg":""}},t._l(t.events,function(e){return n("v-layout",{key:e.event_id,attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("EventCard",{attrs:{event:e},nativeOn:{click:function(n){t.clickEvent(e)}}})],1)],1)}),1)},c=[],a=n("c93e"),r=n("2f62"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("h2",[t._v(t._s(t.event.name))])]),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("p",[t._v(t._s(t.event.description))])]),n("v-flex",{attrs:{xs12:"","offset-xs1":""}},[n("h3",[t._v(t._s(t.event.startDate))])])],1)},v=[],o={props:["event"]},l=o,u=n("2877"),f=Object(u["a"])(l,i,v,!1,null,null,null);f.options.__file="EventCard.vue";var d=f.exports,h=n("dde5"),p={data:function(){return{events:[]}},computed:Object(a["a"])({},Object(r["c"])("account",["user"])),created:function(){this.fetchEvents()},components:{EventCard:d},methods:Object(a["a"])({},Object(r["b"])("events",["selectEvent"]),{fetchEvents:function(){var t=this;h["b"].getEvents(this.user.id).then(function(e){t.events=e["data"]})},clickEvent:function(t){this.selectEvent(t),this.$router.push({path:"eventdetails"})}})},_=p,x=Object(u["a"])(_,s,c,!1,null,null,null);x.options.__file="EventList.vue";e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0b1f65.0813f2bc.js.map