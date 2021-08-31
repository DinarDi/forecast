(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{218:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),s=(a(218),a(23)),o=a(11),l=a(27),h=a(278),j=a(280),d=a(284),m=a(275),b=a(34),p=Object(m.a)({flex:{display:"flex",justifyContent:"center",alignItems:"center"},innerContainer:{marginTop:"35vh",border:"2px solid ".concat(b.a.blueGrey[700]),padding:"35px"},textFieldMargin:{marginBottom:"15px"},container:{marginTop:"15px"},btnBack:{marginBottom:"15px"},card:{maxWidth:"400px",marginBottom:"25px"},flexColumn:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexDirection:"column"},cardFive:{maxWidth:"350px"},rootGrid:{flexGrow:1,justifyContent:"center"},weatherImg:{maxWidth:"350px",height:"100px",marginBottom:"10px"}}),x=a(84),u=a.n(x),f=a(24),O=a(204),g=a(58),v=a(85),w=a.n(v),C=a(12),y="41ffbc5e9e9ef0b22bf62573ed68a6c2",k=new function e(){var t=this;Object(g.a)(this,e),this.currentWeather=[],this.fiveDayForecast=[],this.loading=!1,this.error=!1,this.errorText="",this.fetchWeather=function(){var e=Object(O.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.fiveDayForecast=[],t.loading=!0,t.error=!1,t.errorText="",e.next=7,w.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:a,units:"metric",appid:y}});case 7:return n=e.sent,e.next=10,w.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:a,units:"metric",appid:y}}).then((function(e){return e.data.list}));case 10:r=e.sent,Object(C.g)((function(){t.currentWeather=[n.data];for(var e=0;e<r.length;e+=8)t.fiveDayForecast=[].concat(Object(f.a)(t.fiveDayForecast),[r[e]]);t.loading=!1})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),Object(C.g)((function(){t.error=!0,t.errorText="Something went wrong. Try again."}));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),Object(C.d)(this)},N=a(5),B=Object(s.a)((function(){var e=k.fetchWeather,t=Object(o.g)(),a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1],s=p(),m=s.flex,b=s.innerContainer,x=s.textFieldMargin;return Object(N.jsx)(h.a,{className:m,children:Object(N.jsx)(h.a,{maxWidth:"sm",className:b,children:Object(N.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(a){a.preventDefault(),e(c),t.push("/weather")},children:[Object(N.jsx)(j.a,{label:"City name",variant:"outlined",color:"primary",fullWidth:!0,className:x,value:c,onChange:function(e){return i(e.target.value)}}),Object(N.jsx)(d.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"Search"})]})})})})),F=a(65),W=a(285),T=a(286),D=a(287),S=a.p+"static/media/Clear.4330d4cc.png",I=a.p+"static/media/Clouds.18bde210.png",M=a.p+"static/media/Drizzle.3220db8f.png",_=a.p+"static/media/Rain.b11b9227.png",z=a.p+"static/media/Thunderstorm.056e8d26.png",G=a.p+"static/media/Snow.06e3adc0.png",q=function(e){var t,a=e.main,n=p().weatherImg;switch(a){case"Clouds":t=I;break;case"Thunderstorm":t=z;break;case"Drizzle":t=M;break;case"Rain":t=_;break;case"Snow":t=G;break;case"Clear":default:t=S}return Object(N.jsx)("img",{src:t,alt:"weather",className:n})},J=Object(s.a)((function(){var e=k.currentWeather,t=p().card;return Object(N.jsxs)(W.a,{elevation:7,className:t,children:[Object(N.jsx)(T.a,{title:e[0].name,subheader:"Current weather"}),Object(N.jsxs)(D.a,{children:[Object(N.jsx)(q,{main:e[0].weather[0].main}),Object(N.jsxs)(F.a,{variant:"h5",component:"h5",children:["Temperature: ",e[0].main.temp," \xb0C"]}),Object(N.jsxs)(F.a,{variant:"h5",component:"h5",children:["Feels like: ",e[0].main.feels_like," \xb0C"]})]})]})})),R=a(288),A=Object(s.a)((function(){var e=k.fiveDayForecast,t=p(),a=t.cardFive,n=t.rootGrid;return Object(N.jsx)(R.a,{container:!0,className:n,spacing:2,children:e.map((function(e){return Object(N.jsx)(R.a,{item:!0,lg:2,children:Object(N.jsxs)(W.a,{elevation:7,className:a,children:[Object(N.jsx)(T.a,{title:e.dt_txt.split(" ")[0]}),Object(N.jsxs)(D.a,{children:[Object(N.jsx)(q,{main:e.weather[0].main}),Object(N.jsxs)(F.a,{variant:"h5",component:"h5",children:["Min: ",e.main.temp_min," \xb0C"]}),Object(N.jsxs)(F.a,{variant:"h5",component:"h5",children:["Max: ",e.main.temp_max," \xb0C"]})]})]})},e.dt_txt)}))})})),E=Object(s.a)((function(){var e=k.loading,t=k.error,a=k.errorText,n=Object(o.g)(),r=p(),c=r.container,i=r.btnBack,s=r.flexColumn;return t?Object(N.jsxs)(h.a,{className:c,children:[Object(N.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return n.goBack()},className:i,children:"Back"}),Object(N.jsx)(F.a,{variant:"h1",component:"h1",children:a})]}):Object(N.jsxs)(h.a,{className:c,children:[Object(N.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return n.goBack()},className:i,children:"Back"}),Object(N.jsx)(h.a,{className:s,children:e?Object(N.jsx)(F.a,{variant:"h1",component:"h1",children:"Loading..."}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsx)(A,{})]})})]})})),L=Object(s.a)((function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{exact:!0,path:"/",component:B}),Object(N.jsx)(o.b,{path:"/weather",component:E}),Object(N.jsx)(o.a,{to:"/"})]})})})),V=a(48);i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(V.a,{children:Object(N.jsx)(L,{})})}),document.getElementById("root"))}},[[247,1,2]]]);
//# sourceMappingURL=main.978226e9.chunk.js.map