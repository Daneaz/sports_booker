(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{119:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(97),t(11)),c=t(150),u=t(71),m=t(13),s=t(159),d=t(120),p=t(149),g=t(151),f=t(152),h=t(163),b=t(155),v=t(165),E=t(161),M=t(168),y=t(158),w=t(160),k=t(98).default;k.defaults.baseURL="https://booker.playunitedsg.com",k.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var C=["07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM","09:00 PM"],x=["60","120"],P=[{text:"Badminton Courts",value:31},{text:"Basketball Courts (OCBC Arena)",value:32},{text:"Table Tennis Tables",value:33},{text:"Netball Courts",value:34},{text:"Volleyball Courts",value:35},{text:"Basketball Courts (Sports Hub Hard Courts)",value:42}];function S(){return l.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(p.a,{color:"inherit",href:"https://github.com/Daneaz/BadmintonBooker"},"Eugene Wu")," ",(new Date).getFullYear(),".")}var T=Object(c.a)((function(e){return{paper:{marginTop:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},itemMargin:{marginTop:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:e.spacing(5)},multiSelect:{marginTop:e.spacing(3)}}}));function B(){var e=T(),a=l.a.useState((new Date).setDate((new Date).getDate()+7)),t=Object(i.a)(a,2),n=t[0],r=t[1],o=l.a.useState("02:00 PM"),c=Object(i.a)(o,2),p=c[0],B=c[1],N=l.a.useState(120),W=Object(i.a)(N,2),D=W[0],O=W[1],j=l.a.useState(P[0]),A=Object(i.a)(j,2),q=A[0],F=A[1],H=l.a.useState(""),I=Object(i.a)(H,2),J=I[0],z=I[1],K=l.a.useState(""),L=Object(i.a)(K,2),R=L[0],U=L[1];return l.a.createElement(g.a,{component:"main",maxWidth:"xs"},l.a.createElement(f.a,null),l.a.createElement("div",{className:e.paper},l.a.createElement(d.a,{component:"h1",variant:"h5"},"National Stadium Booker"),l.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),k.post("/book",{email:J,password:R,date:n,time:p,duration:D,type:q}).then((function(e){alert(e.data)})).catch((function(e){alert(e)}))}},l.a.createElement(h.a,{required:!0,className:e.itemMargin,fullWidth:!0,label:"Email:",onChange:function(e){z(e.target.value)}}),l.a.createElement(h.a,{required:!0,type:"password",className:e.itemMargin,fullWidth:!0,label:"Password:",onChange:function(e){U(e.target.value)}}),l.a.createElement(m.a,{className:e.itemMargin,utils:u.a},l.a.createElement(s.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"date-picker-inline",label:"Date:",value:n,autoOk:!0,fullWidth:!0,onChange:function(e){r(e)},KeyboardButtonProps:{"aria-label":"change date"}})),l.a.createElement(b.a,{className:e.itemMargin,fullWidth:!0},l.a.createElement(v.a,null,"Time:"),l.a.createElement(E.a,{value:p,onChange:function(e){B(e.target.value)}},C.map((function(e,a){return l.a.createElement(M.a,{key:a,value:e},e)})))),l.a.createElement(b.a,{className:e.itemMargin,fullWidth:!0},l.a.createElement(v.a,null,"Duration:"),l.a.createElement(E.a,{value:D,onChange:function(e){O(e.target.value)}},x.map((function(e,a){return l.a.createElement(M.a,{key:a,value:e},e," mins")})))),l.a.createElement(b.a,{className:e.itemMargin,fullWidth:!0},l.a.createElement(v.a,null,"Facility Type:"),l.a.createElement(E.a,{value:q,onChange:function(e){F(e.target.value)}},P.map((function(e,a){return l.a.createElement(M.a,{key:a,value:e},e.text)})))),l.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Book"))),l.a.createElement(w.a,{mt:8},l.a.createElement(S,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,a,t){e.exports=t(119)},97:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.e7f8ce54.chunk.js.map