(this["webpackJsonpmal-importer"]=this["webpackJsonpmal-importer"]||[]).push([[0],{146:function(e,t,n){},150:function(e,t){},152:function(e,t){},162:function(e,t){},164:function(e,t){},191:function(e,t){},193:function(e,t){},194:function(e,t){},199:function(e,t){},201:function(e,t){},220:function(e,t){},232:function(e,t){},235:function(e,t){},270:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(36),r=n.n(a),s=(n(146),n(12)),o=n(35),l=n(7),u=n(285),d=n(135),h=n.n(d);function j(e){return"undefined"===e||"null"===e||""===e||"undefined"===typeof e||void 0===e||null===e}function m(e){return e.toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}var p=n(286),b=n(1),f=Object(l.f)((function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){j(e.userToken)&&e.history.push("/")}),[e.userToken]),Object(b.jsxs)("div",{className:"import-list-view",children:[Object(b.jsx)("div",{className:"description",children:Object(b.jsx)("h4",{children:"Select a text file (.txt) with one title per line."})}),Object(b.jsx)("div",{className:"file-browser",children:Object(b.jsx)("input",{type:"file",onChange:function(e){return function(e){e.preventDefault(),a(e.target.files[0])}(e)}})}),Object(b.jsx)("div",{className:"process-button",children:Object(b.jsx)(u.a,{disabled:j(i),variant:"contained",color:"default",onClick:function(){var t=new FileReader;t.onload=function(t){var n=t.target.result.split("\n"),c=new Map;n.forEach((function(e){if(!j(e)&&13!==e.charCodeAt(0)){var t={id:Object(p.a)(),sourceTitle:e,malTitle:[],selected:{},import:!0};c.set(t.id,t)}})),e.populateAnimes(c),e.history.push("Import-MAL")},t.readAsText(i)},children:"Process Animes"})})]})})),O=n(137),x=n(50),v=n.n(x),g=n(83),A=n(28),T=n(138),y=n.n(T),N=function(e){return Object(b.jsxs)("div",{className:"anime-import-card",children:[Object(b.jsx)("div",{className:"checkbox-import",children:Object(b.jsx)("input",{type:"checkbox",disabled:j(e.anime.malTitle[0]),checked:e.anime.import,onChange:function(){return e.handleImportCheckBox(e.anime.id)}})}),Object(b.jsxs)("div",{className:"right-content",children:[Object(b.jsx)("div",{className:"source-title",children:Object(b.jsxs)("span",{children:[Object(b.jsx)("b",{children:"Input title"}),": ",e.anime.sourceTitle,"\xa0"]})}),Object(b.jsx)("div",{className:"mal-title",children:j(e.anime.selected)?Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"No title found on MAL"})}):Object(b.jsxs)("label",{children:[Object(b.jsx)("b",{children:"MAL title"}),":",Object(b.jsx)("select",{value:j(e.anime.selected)?"":JSON.stringify(e.anime.selected),onChange:function(t){return e.handleSelectedChange(e.anime.id,t.target.value)},children:e.anime.malTitle.map((function(e){return Object(b.jsx)("option",{value:JSON.stringify(e),children:"MAL ID "+e.id+": "+e.title},e.id)}))}),Object(b.jsx)("div",{className:"anime-picture",children:Object(b.jsx)("a",{href:"https://myanimelist.net/anime/"+e.anime.selected.id,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:e.anime.selected.picture,alt:"Anime"})})})]})})]})]})},M="194e0811df1955e98ce8c7594b114989",k="https://myanimelist.net/v1",I="https://shrouded-savannah-10975.herokuapp.com/https://api.myanimelist.net/v2",w="https://shengz94.github.io/MAL-Importer/";function S(e){return fetch("https://shrouded-savannah-10975.herokuapp.com/https://api.myanimelist.net/v2/users/@me",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},method:"get"}).then((function(e){return e.json()})).then((function(e){return{id:e.id,name:e.name,picture:e.picture}}))}function E(e,t){var n=new URLSearchParams;n.append("q",e),n.append("limit",10);var c=I+"/anime?"+n.toString();return fetch(c,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},method:"get"}).then((function(e){return e.json()})).then((function(e){var t=[];return e.data.forEach((function(e){var n=e.node,c={id:n.id,title:n.title,picture:n.main_picture.medium};t.push(c)})),t}))}function Y(e,t,n,c){var i=new URLSearchParams;return j(n)||i.append("status",n),j(c)||i.append("score",c),fetch(I+"/anime/"+t+"/my_list_status",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+e},body:i,method:"put"}).then((function(e){return e.json()})).then((function(e){return j(e.status)}))}var C=Object(l.f)((function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(),o=Object(s.a)(r,2),l=o[0],d=o[1],h=Object(c.useState)(!1),m=Object(s.a)(h,2),p=m[0],f=m[1],x=Object(c.useState)("completed"),T=Object(s.a)(x,2),M=T[0],k=T[1];function I(){return(I=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],e.animes.forEach((function(t){var c=t;n.push(E(c.sourceTitle,e.userToken))})),t.next=4,Promise.allSettled(n).then((function(t){e.updateAnimes(t)}));case 4:f(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(g.a)(v.a.mark((function t(){var n,c,i,a,r,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(j(e.animes)){t.next=11;break}n=[],c=[],f(!0),a=Object(O.a)(e.animes.values());try{for(a.s();!(r=a.n()).done;)!(s=r.value).import||j(s.selected)||j(s.selected.id)||(c.push(s.selected.id),n.push(Y(e.userToken,s.selected.id,M)))}catch(o){a.e(o)}finally{a.f()}return t.next=8,Promise.allSettled(n).then((function(e){j(e)||(i={animes:c,result:e})}));case 8:f(!1),e.fillLog(i),e.history.push("/Result");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){f(!0),function(){I.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){d(Object(A.a)(e.animes.values()))}),[e.animes]),Object(c.useEffect)((function(){!j(l)&&l.length>=0&&a(!0)}),[l]),Object(c.useEffect)((function(){j(e.userToken)&&e.history.push("/")}),[e.userToken]),(j(e.animes)||e.animes.size<=0)&&e.history.push("/Home"),Object(b.jsxs)("div",{className:"import-mal-view",children:[p?Object(b.jsx)("div",{className:"loading-screen",children:Object(b.jsx)(y.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})}):Object(b.jsx)(c.Fragment,{}),i&&!j(e.animes)?Object(b.jsxs)(c.Fragment,{children:[Object(b.jsxs)("div",{className:"anime-list",children:[Object(b.jsx)("div",{className:"status-select",children:Object(b.jsx)("select",{value:M,onChange:function(e){return k(e.target.value)},children:["completed","watching","on_hold","dropped","plan_to_watch"].map((function(e,t){return Object(b.jsx)("option",{value:e,children:e.replaceAll("_"," ")},t)}))})}),l.map((function(t){return Object(b.jsx)(N,{anime:t,updateAnime:e.updateAnime,handleImportCheckBox:e.handleImportCheckBox,handleSelectedChange:e.handleSelectedChange},t.id)}))]}),Object(b.jsx)("div",{className:"import-button",children:Object(b.jsx)(u.a,{variant:"contained",color:"default",onClick:function(){return w.apply(this,arguments)},children:"Import Animes"})})]}):Object(b.jsx)(c.Fragment,{})]})})),z=Object(l.f)((function(e){return j(e.userToken)||e.history.push("/Home"),Object(b.jsx)("div",{className:"login-view",children:Object(b.jsx)(u.a,{size:"large",variant:"contained",onClick:function(){var e=m(h.a.randomBytes(32)),t=m(e);localStorage.setItem("codeVerifier",e),window.location.href=function(e){var t=new URLSearchParams;return t.append("response_type","code"),t.append("client_id",M),t.append("redirect_uri",w),t.append("code_challenge",e),t.append("code_challenge_method","plain"),k+"/oauth2/authorize?"+t.toString()}(t)},children:"Log in"})})})),B=Object(l.f)((function(e){function t(e){if(e.indexOf("///end///")>0){var t=e.split("///end///"),n=t[1],c=t[0].split("///startTitle///"),i=c[0],a=c[1];return Object(b.jsxs)("p",{children:[i," ",Object(b.jsx)("a",{href:n,children:a})," "]})}return Object(b.jsx)("p",{children:e})}return Object(c.useEffect)((function(){j(e.userToken)&&e.history.push("/")}),[e.userToken]),Object(b.jsxs)("div",{className:"result-view",children:[Object(b.jsx)("div",{className:"log",children:e.log.map((function(e){return Object(b.jsx)(c.Fragment,{children:t(e)},Math.random())}))}),Object(b.jsx)("div",{className:"back-button",children:Object(b.jsx)(u.a,{variant:"contained",color:"default",onClick:function(){e.history.push("/Home")},children:"Back"})})]})})),V=n(139),Z=n.n(V),J=n.p+"static/media/mal_logo.5f586ff1.png",R=function(e){return Object(b.jsx)("div",{className:"top-bar",children:Object(b.jsxs)("div",{className:"user-info",children:[Object(b.jsxs)("div",{className:"left-content",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("a",{href:"https://myanimelist.net/",children:Object(b.jsx)("img",{id:"mal",src:J,alt:"MAL"})})}),Object(b.jsx)("div",{className:"app-title",children:Object(b.jsx)("p",{children:"MyAnimeList Importer"})}),Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("a",{href:"https://github.com/Shengz94",children:Object(b.jsx)("img",{id:"github",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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",alt:"GitHub"})})})]}),j(e.user)?Object(b.jsx)(c.Fragment,{}):Object(b.jsxs)("div",{className:"right-content",children:[Object(b.jsx)("div",{className:"logout",children:Object(b.jsx)(Z.a,{size:"small",onClick:e.logout})}),Object(b.jsx)("div",{className:"user-avatar",children:Object(b.jsx)("a",{href:"https://myanimelist.net/profile/"+e.user.name,children:Object(b.jsx)("img",{src:e.user.picture,alt:"Avatar"})})}),Object(b.jsx)("div",{className:"user-name",children:Object(b.jsx)("a",{href:"https://myanimelist.net/profile/"+e.user.name,children:Object(b.jsx)("span",{children:e.user.name})})})]})]})})},F=function(){var e=Object(c.useState)(new Map),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(s.a)(a,2),u=r[0],d=r[1],h=Object(c.useState)(),m=Object(s.a)(h,2),p=m[0],O=m[1],x=Object(c.useState)(localStorage.getItem("userToken")),v=Object(s.a)(x,2),g=v[0],A=v[1];function T(e,t){var c=new Map(n);c.set(e,t),i(c)}function y(e){var t=new Map(n),c=0;t.forEach((function(t){t.malTitle=e[c].value,t.selected=e[c].value[0],j(e[c].value[0])&&(t.import=!1),c++})),i(t)}function N(e,t){var c=n.get(e);c.selected=JSON.parse(t),T(e,c)}function k(e){var t=n.get(e);t.import=!t.import,T(e,t)}function I(e){var t=new Set(e.animes),c=[];n.forEach((function(n){var i="-";i=n.import?j(n.selected)?n.sourceTitle+" NOT found in MAL. ":!j(e)&&t.has(n.selected.id)?n.sourceTitle+" imported to MAL as ///startTitle///"+n.selected.title+" (ID:"+n.selected.id+"). ///end///https://myanimelist.net/anime/"+n.selected.id:"There were a problem importing "+n.sourceTitle+" to MAL. ":n.sourceTitle+" NOT imported to MAL. ",c.push(i)})),d(c)}return Object(c.useEffect)((function(){localStorage.setItem("userToken",g),j(g)||S(g).then((function(e){O(e)}))}),[g]),Object(c.useEffect)((function(){if(j(g)){var e=new URLSearchParams(window.location.search).get("code");if(!j(e))(function(e,t){var n=new URLSearchParams;return n.append("client_id",M),n.append("client_secret","b1d22172346c467dcec1ce6d5dab8fc9c8caad25f26a43279f99771dba0da9f9"),n.append("grant_type","authorization_code"),n.append("code",e),n.append("redirect_uri",w),n.append("code_verifier",t),fetch("https://myanimelist.net/v1/oauth2/token",{header:{"Content-Type":"application/x-www-form-urlencoded"},body:n,method:"post"}).then((function(e){return e.json()})).then((function(e){return{access_token:e.access_token,expireIn:e.expires_in,refreshToken:e.refresh_token}}))})(e,localStorage.getItem("codeVerifier")).then((function(e){A(e.access_token)}))}else S(g).then((function(e){O(e)}))}),[]),Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(R,{user:p,logout:function(){A(void 0),O(void 0)}}),Object(b.jsx)(o.a,{basename:"/MAL-Importer",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(z,{userToken:g})}),Object(b.jsx)(l.a,{exact:!0,path:"/Home",children:Object(b.jsx)(f,{userToken:g,populateAnimes:function(e){return function(e){i(e)}(e)}})}),Object(b.jsx)(l.a,{exact:!0,path:"/Import-MAL",render:function(){return Object(b.jsx)(C,{animes:n,userToken:g,log:u,updateAnimes:y,fillLog:I,handleSelectedChange:N,handleImportCheckBox:k})}}),Object(b.jsx)(l.a,{exact:!0,path:"/Result",render:function(){return Object(b.jsx)(B,{userToken:g,log:u})}})]})})]})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[270,1,2]]]);
//# sourceMappingURL=main.574e3193.chunk.js.map