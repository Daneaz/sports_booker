(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{86:function(e,t,a){e.exports=a(97)},91:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(91),a(31)),i=a.n(l),u=a(40),s=a(11),m=a(128),p=a(65),d=a(13),b=a(138),f=a(98),h=a(127),v=a(129),g=a(130),k=a(142),y=a(133),E=a(144),w=a(140),x=a(147),M=a(137),C=a(136),S=a(139),N=a(55),O=a.n(N),P=function(e,t,a){var n={method:e,headers:{"Content-Type":"application/json"},timeout:3e4};return a&&(n.headers.Authorization="Bearer ".concat(a)),t&&(n.body=JSON.stringify(t)),n},T=function(){var e=Object(u.a)(i.a.mark((function e(t,a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(u.a)(i.a.mark((function e(r,c){var o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch((i=a,"".concat("https://booker.playunitedsg.com").concat(i.startsWith("/")?"":"/").concat(i)),P(t,n));case 3:return o=e.sent,e.prev=4,e.next=7,o.json();case 7:l=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),l=o;case 13:e.t1=o.status,e.next=200===e.t1||201===e.t1||202===e.t1||204===e.t1?16:400===e.t1?18:401===e.t1?20:403===e.t1?22:404===e.t1?24:406===e.t1?26:409===e.t1?28:500===e.t1?30:32;break;case 16:return r(l),e.abrupt("break",34);case 18:case 20:return c(l),e.abrupt("break",34);case 22:return c("Permission denied. ".concat(l)),e.abrupt("break",34);case 24:return c("Error 404. ".concat(l.message,", url: ").concat(l.url)),e.abrupt("break",34);case 26:return c("Request content error. ".concat(l)),e.abrupt("break",34);case 28:return c("Conflict... ".concat(l)),e.abrupt("break",34);case 30:return c("Internal server error, ".concat(l)),e.abrupt("break",34);case 32:return c("Unknown status: ".concat(o.status,", Error: ").concat(JSON.stringify(l),"}")),e.abrupt("break",34);case 34:e.next=39;break;case 36:e.prev=36,e.t2=e.catch(0),"TypeError: Network request failed"===e.t2.toString()?c("Network error, please check your network connection and retry. If error still exist, please contact administrator for help"):c("Unknown Response ".concat(e.t2));case 39:case"end":return e.stop()}var i}),e,null,[[0,36],[4,10]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=["07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM","09:00 PM"],W=["60","120"],B=[{text:"Badminton Courts",value:31},{text:"Basketball Courts (OCBC Arena)",value:32},{text:"Table Tennis Tables",value:33},{text:"Netball Courts",value:34},{text:"Volleyball Courts",value:35},{text:"Basketball Courts (Sports Hub Hard Courts)",value:42}];function D(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://github.com/Daneaz/sports_booker"},"Eugene Wu")," ",(new Date).getFullYear(),".")}var A=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},itemMargin:{marginTop:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},submit:{marginTop:e.spacing(5)},multiSelect:{marginTop:e.spacing(3)}}}));function I(){var e=A(),t=r.a.useState(O()(new Date).add(7,"days")),a=Object(s.a)(t,2),n=a[0],c=a[1],o=r.a.useState("02:00 PM"),l=Object(s.a)(o,2),m=l[0],h=l[1],N=r.a.useState(120),P=Object(s.a)(N,2),I=P[0],q=P[1],J=r.a.useState(B[0]),z=Object(s.a)(J,2),F=z[0],H=z[1],R=r.a.useState(""),U=Object(s.a)(R,2),K=U[0],V=U[1],Y=r.a.useState(""),$=Object(s.a)(Y,2),_=$[0],G=$[1],L=r.a.useState(!1),Q=Object(s.a)(L,2),X=Q[0],Z=Q[1],ee=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),t.preventDefault(),e.prev=2,e.next=5,T("POST","book",{email:K,password:_,date:n,time:m,duration:I,type:F});case 5:a=e.sent,alert(a),Z(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),alert(e.t0),Z(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(f.a,{component:"h1",variant:"h5"},"National Stadium Booker"),r.a.createElement("form",{className:e.form,onSubmit:ee},r.a.createElement(k.a,{required:!0,className:e.itemMargin,fullWidth:!0,label:"Email:",onChange:function(e){V(e.target.value)}}),r.a.createElement(k.a,{required:!0,type:"password",className:e.itemMargin,fullWidth:!0,label:"Password:",onChange:function(e){G(e.target.value)}}),r.a.createElement(d.a,{className:e.itemMargin,utils:p.a},r.a.createElement(b.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",minDate:O()(new Date).add(1,"days"),id:"date-picker-inline",label:"Date:",value:n,autoOk:!0,fullWidth:!0,onChange:function(e){c(e)},KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{className:e.itemMargin,fullWidth:!0},r.a.createElement(E.a,null,"Time:"),r.a.createElement(w.a,{value:m,onChange:function(e){h(e.target.value)}},j.map((function(e,t){return r.a.createElement(x.a,{key:t,value:e},e)})))),r.a.createElement(y.a,{className:e.itemMargin,fullWidth:!0},r.a.createElement(E.a,null,"Duration:"),r.a.createElement(w.a,{value:I,onChange:function(e){q(e.target.value)}},W.map((function(e,t){return r.a.createElement(x.a,{key:t,value:e},e," mins")})))),r.a.createElement(y.a,{className:e.itemMargin,fullWidth:!0},r.a.createElement(E.a,null,"Facility Type:"),r.a.createElement(w.a,{value:F,onChange:function(e){H(e.target.value)}},B.map((function(e,t){return r.a.createElement(x.a,{key:t,value:e},e.text)})))),X?r.a.createElement(M.a,{className:e.submit}):r.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Book"))),r.a.createElement(S.a,{mt:8},r.a.createElement(D,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.8af62eb7.chunk.js.map