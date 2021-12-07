var x=Object.defineProperty;var T=(s,e,t)=>e in s?x(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var v=(s,e,t)=>(T(s,typeof e!="symbol"?e+"":e,t),t);const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};w();class B{constructor(){v(this,"toastTimeout")}newError(e){const t=e.id,a=e.message;let n=document.getElementById(t);n||(n=document.getElementById("page-allnotes")),n.innerHTML="";const o=document.createElement("div"),i=document.createElement("span"),r=document.createElement("h3"),m=document.createTextNode(a),l=document.createElement("button");l.innerText=e.buttonCaption,l.addEventListener("click",e.buttonAction),i.className="material-icons big-x2",i.innerText=e.materialIcon,o.className="centered-absolute",r.append(m),o.append(i,r,l),n.append(o)}toast(e){clearTimeout(this.toastTimeout),this.hideToast(),setTimeout(()=>{const t=e.title,a=e.text,n=e.delay||0,o=document.getElementById("toast-div"),i=document.getElementById("toast-title"),r=document.getElementById("toast-content");o==null||o.classList.remove("hidden"),i.innerText=t,r.innerText=a,n&&(this.toastTimeout=setTimeout(this.hideToast,n))},250)}init(){const e=document.createElement("div"),t=document.createElement("h3"),a=document.createElement("p");e.className="toast hidden",e.id="toast-div",t.innerText="{{title}}",t.className="nomargin",t.id="toast-title",a.innerText="{{content}}",a.className="nomargin",a.id="toast-content",e.append(t,a),document.body.append(e)}hideToast(){document.getElementById("toast-div").classList.add("hidden")}}const p=new B;class A{addColorClasses(){for(let e in c){const t=c[e],a=`.${t} { color: var(--${t}); }`;try{document.styleSheets[0].insertRule(a,0)}catch{}}}}var c;(function(s){s[s.red=0]="red",s[s.green=1]="green",s[s.yellow=2]="yellow",s[s.blue=3]="blue",s[s.purple=4]="purple",s[s.aqua=5]="aqua",s[s.gray=6]="gray",s[s.orange=7]="orange"})(c||(c={}));const L=new A,f=new Map([["home",{dispName:"Home",materialIcon:"home",onSidebar:!0,color:c.blue,default:!0,addBreak:!0}],["allnotes",{dispName:"All Notes",materialIcon:"apps",onSidebar:!0,color:c.purple}],["pinned",{dispName:"Pinned Notes",materialIcon:"bookmark",onSidebar:!0,color:c.green,addBreak:!0}],["task",{dispName:"All Tasks",materialIcon:"insert_drive_file",onSidebar:!0,color:c.yellow}],["unftasks",{dispName:"Unfinished Tasks",materialIcon:"file_open",onSidebar:!0,color:c.orange}],["fintasks",{dispName:"Finished Tasks",materialIcon:"task",onSidebar:!0,color:c.green}],["settings",{dispName:"Settings",materialIcon:"settings",onSidebar:!1,color:c.gray}],["error",{dispName:"Error",materialIcon:"error",onSidebar:!1,color:c.red}]]);class C{switch(e,t){var r,m,l,u,g;const a=document.getElementById(`page-${e}`),n=document.querySelectorAll("div.sidebar>#pages>button");for(let d=0;d<n.length;d++)if(n[d].className="option page",n[d].classList.add(n[d]==t?"selected":"unselected"),n[d]==t)n[d].children[0].classList.add(c[(r=f.get(e))==null?void 0:r.color]);else for(const y in c)n[d].children[0].classList.remove(c[y]);let o=`Page Not Found: ${((m=f.get(e))==null?void 0:m.dispName)||"Unknown Page"}`,i="var(--red)";if(a&&f.has(e)){const d=document.querySelectorAll("div.page");for(let y=0;y<d.length;y++){if(d[y]!=a){d[y].classList.add("hidden");continue}d[y].classList.remove("hidden")}i=`var(--${c[(l=f.get(e))==null?void 0:l.color]})`,o=(u=f.get(e))==null?void 0:u.dispName,document.title=`vTDx - ${(g=f.get(e))==null?void 0:g.dispName}`}else{this.switch("error");const d={message:"Sorry, that page doesn't seem to exist.",materialIcon:"web_asset_off",buttonCaption:"Go Home",buttonAction:()=>{this.switch("home",document.getElementById("button-page-home"))},id:"page-error"};p.newError(d),document.getElementById("page-dot").style.color=i,document.getElementById("page-disp").innerText=o,document.title="vTDx - Page Not Found"}document.getElementById("page-dot").style.color=i,document.getElementById("page-disp").innerText=o}}const E=new C;class M{populateAllNotes(e,t){t||(t=document.getElementById("page-allnotes")),e&&(t.innerHTML="");const a=this.getNotes();for(let n=0;n<a.length;n++)this.displayNote(n,t);if(!a.length){const n={materialIcon:"description",message:"You have no notes.",id:"page-allnotes",buttonCaption:"Create a note",buttonAction:()=>{N.show(k.note,!0)}};p.newError(n)}}populatePinnedNotes(e,t){t||(t=document.getElementById("page-pinned")),e&&(t.innerHTML="");const a=this.getNotes();let n=0;for(let o=0;o<a.length;o++)console.log(a[o].pinned),a[o].pinned&&(this.displayNote(o,t),n++);if(!n){const o={materialIcon:"bookmark",message:"You have no pinned notes.",id:"page-pinned",buttonCaption:"Goto your notes",buttonAction:()=>{E.switch("allnotes",document.getElementById("button-page-allnotes"))}};p.newError(o)}}refreshAll(){this.populateAllNotes(!0),this.populatePinnedNotes(!0)}createNote(e,t){let a=this.getNotes();const n={title:e,content:t,pinned:!1};a.push(n),localStorage.setItem("notestore",JSON.stringify(a))}deleteNote(e){let t=this.getNotes();e<=t.length&&t.splice(e,1),localStorage.setItem("notestore",JSON.stringify(t))}pinNote(e){let t=this.getNotes();e<=t.length&&(t[e].pinned=!0),localStorage.setItem("notestore",JSON.stringify(t))}unPinNote(e){let t=this.getNotes();e<=t.length&&(t[e].pinned=!1),localStorage.setItem("notestore",JSON.stringify(t))}togglePinnedNote(e){let t=this.getNotes();e<=t.length&&(t[e].pinned?this.unPinNote(e):this.pinNote(e),this.refreshAll())}getNotes(){return JSON.parse(localStorage.getItem("notestore"))||[]}displayNote(e,t){t||(t=document.getElementById("page-allnotes"));const a=this.getNotes(),n=document.createElement("div"),o=document.createElement("h3"),i=document.createTextNode(a[e].title),r=document.createElement("p"),m=document.createTextNode(a[e].content),l=document.createElement("button"),u=document.createElement("span"),g=document.createElement("button"),d=document.createElement("span");o.className="header",r.className="content",l.className="delete",l.title="Delete Note",l.addEventListener("click",()=>{this.deleteNote(e),this.refreshAll()}),g.className=`pin${a[e].pinned?" unpin":""}`,g.title=`${a[e].pinned?"Unpin":"Pin"} this Note`,g.addEventListener("click",()=>{this.togglePinnedNote(e),this.refreshAll()}),u.className="material-icons",u.innerText="delete",d.className="material-icons",d.innerText=`bookmark${a[e].pinned?"_remove":"_add"}`,o.append(i),r.append(m),l.append(u),g.append(d),n.className="note",n.append(o,r,l,g),t.append(n)}}const I=new M;class P{populatetaskPage(e,t){if(t||(t=document.getElementById("page-task")),t){e&&(t.innerHTML="");const a=this.gettasks();for(let n=0;n<a.length;n++)this.displaytask(n,t);if(!a.length){const n={materialIcon:"task",message:"You have no tasks.",id:"page-task",buttonCaption:"Create a task",buttonAction:()=>{N.show(k.task,!0)}};p.newError(n)}}}populateUnFinishedTasksPage(e,t){if(t||(t=document.getElementById("page-unftasks")),t){e&&(t.innerHTML="");const a=this.gettasks();let n=0;for(let o=0;o<a.length;o++)a[o].finished||(this.displaytask(o,t),n++);if(!n){const o={materialIcon:"task",message:"All your tasks are finished!",id:"page-unftasks",buttonCaption:"Goto your tasks",buttonAction:()=>{E.switch("task",document.getElementById("button-page-task"))}};p.newError(o)}}}populateFinishedTasksPage(e,t){if(t||(t=document.getElementById("page-fintasks")),t){e&&(t.innerHTML="");const a=this.gettasks();let n=0;for(let o=0;o<a.length;o++)a[o].finished&&(this.displaytask(o,t),n++);if(!n){const o={materialIcon:"warning",message:"You haven't completed any of your tasks!",id:"page-fintasks",buttonCaption:"Goto your tasks",buttonAction:()=>{E.switch("task",document.getElementById("button-page-task"))}};p.newError(o)}}}createtask(e){let t=this.gettasks();const a={text:e,finished:!1};t.push(a),localStorage.setItem("taskstore",JSON.stringify(t))}displaytask(e,t){const a=this.gettasks();if(e<=a.length){t||(t=document.getElementById("page-task"));const n=document.createElement("div"),o=document.createElement("p"),i=document.createTextNode(a[e].text),r=document.createElement("button"),m=document.createElement("span"),l=document.createElement("button"),u=document.createElement("span");o.className="header",r.className="delete",r.title="Delete task",r.addEventListener("click",()=>{this.deletetask(e),this.refreshAll()}),l.className="finish",l.title=`${a[e].finished?"Mark not done":"Mark done"}`,l.addEventListener("click",()=>{this.toggletaskFinished(e),this.refreshAll()}),u.className="material-icons",u.innerText=`${a[e].finished?"check_box":"check_box_outline_blank"}`,m.className="material-icons",m.innerText="delete",o.append(i),r.append(m),l.append(u),n.className="task",n.append(o,l,r),t.append(n)}}gettasks(){return JSON.parse(localStorage.getItem("taskstore"))||[]}deletetask(e){const t=this.gettasks();e<=t.length&&(t.splice(e,1),p.toast({text:`Task #${e+1} deleted.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}refreshAll(){this.populatetaskPage(!0),this.populateUnFinishedTasksPage(!0),this.populateFinishedTasksPage(!0)}toggletaskFinished(e){const t=this.gettasks();e<=t.length&&(t[e].finished?this.markUnfinished(e):this.markFinished(e))}markUnfinished(e){const t=this.gettasks();e<=t.length&&(t[e].finished=!1,p.toast({text:`Marked task #${e+1} as unfinished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}markFinished(e){const t=this.gettasks();e<=t.length&&(t[e].finished=!0,p.toast({text:`Marked task #${e+1} as finished.`,title:"",delay:3e3})),localStorage.setItem("taskstore",JSON.stringify(t))}completeAll(){const e=this.gettasks();for(let t=0;t<e.length;t++)e[t].finished=!0;p.toast({text:"Marked all tasks as finished.",title:"",delay:3e3}),localStorage.setItem("taskstore",JSON.stringify(e)),this.refreshAll()}}const b=new P;class ${constructor(){v(this,"initDone",!1)}init(){var g;const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("h3"),n=document.createElement("p"),o=document.createElement("p"),i=document.createElement("input"),r=document.createElement("textarea"),m=document.createElement("span"),l=document.createElement("button"),u=document.createElement("button");e.id="create-note-dialog",e.className="hidden",t.id="create-note-dialog-shade",t.className="hidden",a.innerText="Create new {{type}}",n.className="nomargin",n.innerText="Title",o.className="nomargin",o.innerText="Content",i.className="fullwidth",r.className="fullwidth",m.className="bottomright",u.id="cancel-button",l.id="create-button",u.innerText="Cancel",l.innerText="Create {{type}}",u.addEventListener("click",this.hide),m.append(u,l),e.append(a,n,i,o,r,m),(g=document.querySelector("div.content"))==null||g.append(t,e),this.initDone=!0}show(e,t){if(this.initDone){const a=document.querySelector("div#create-note-dialog input"),n=document.querySelector("div#create-note-dialog textarea"),o=document.getElementById("create-note-dialog-shade"),i=document.getElementById("create-note-dialog"),r=document.querySelector("div#create-note-dialog h3"),m=document.querySelector("div#create-note-dialog button#create-button"),l=document.querySelectorAll("div#create-note-dialog p.nomargin"),u=D.get(k[e]);t&&(a.value="",n.value=""),r.innerText=`Create New ${u}`,m.innerText=`Create ${u}`,o.classList.remove("hidden"),i.classList.remove("hidden"),k[e]=="task"?(n.style.display="none",l[1].style.display="none",a.style.marginBottom="50px",m.addEventListener("click",this.processtask),l[0].innerText="Content"):(n.style.display="",l[1].style.display="",a.style.marginBottom="",m.addEventListener("click",this.processNote),l[0].innerText="Title")}}hide(){const e=document.getElementById("create-note-dialog-shade"),t=document.getElementById("create-note-dialog");e.classList.add("hidden"),t.classList.add("hidden")}processNote(){const e=document.querySelector("div#create-note-dialog input"),t=document.querySelector("div#create-note-dialog textarea");e.value&&t.value?(I.createNote(e.value,t.value),N.hide(),p.toast({text:"Note created!",title:"",delay:3e3})):p.toast({text:"title or content fields are not filled out.",title:"Unable to create note",delay:3e3}),I.refreshAll()}processtask(){const e=document.querySelector("div#create-note-dialog input");e.value?(b.createtask(e.value),N.hide()):p.toast({text:"Content field is not filled out.",title:"Unable to create task",delay:3e3}),b.refreshAll()}}const D=new Map([["note","Note"],["task","task"]]);var k;(function(s){s[s.task=0]="task",s[s.note=1]="note"})(k||(k={}));const N=new $;class q{populateHomeButtons(){const e=document.querySelectorAll("#page-home>div.centered-absolute");for(const t of f)if(t[1].onSidebar&&!t[1].default){const a=document.createElement("button"),n=document.createElement("span"),o=document.createElement("span"),i=document.createTextNode(t[1].dispName);n.className="material-icons",n.innerText=t[1].materialIcon,o.className="nomargin",o.append(i),a.append(n,o),a.addEventListener("click",()=>{E.switch(t[0],document.getElementById(`button-page-${t[0]}`))}),e[0].append(a),t[1].addBreak&&e[0].append(document.createElement("hr"))}}}const U=new q,H=new Map([["newnote",{dispName:"New Note",materialIcon:"add_circle",action:()=>{N.show(k.note,!0)},color:c.purple}],["clearall",{dispName:"Clear All Notes",materialIcon:"delete",action:()=>{confirm(`Are you sure you want to clear all notes?

Doing this will clear all notes without return.`)&&(p.toast({title:"",text:"Cleared all notes",delay:3e3}),localStorage.removeItem("notestore"),I.refreshAll())},color:c.red,addBreak:!0}],["newtask",{dispName:"New task",materialIcon:"note_add",action:()=>{N.show(k.task,!0)},color:c.purple}],["clearalltasks",{dispName:"Clear All tasks",materialIcon:"clear_all",action:()=>{confirm(`Are you sure you want to clear all tasks?

Doing this will clear all tasks without return.`)&&(p.toast({title:"",text:"Cleared all tasks",delay:3e3}),localStorage.removeItem("taskstore"),b.refreshAll())},color:c.red}],["finishalltasks",{dispName:"Complete All Tasks",materialIcon:"done_all",action:()=>{b.completeAll()},color:c.green}]]);class _{populatePages(){const e=document.querySelector("div.sidebar>div#pages");for(const t of f)if(t[1].onSidebar){const a=document.createElement("span"),n=document.createElement("button"),o=document.createElement("span");o.innerText=t[1].dispName,a.innerText=t[1].materialIcon,a.className="material-icons",n.className="page unselected option",n.id=`button-page-${t[0]}`,n.title=t[1].dispName,n.append(a),n.append(o),n.addEventListener("click",()=>E.switch(t[0],n)),n.addEventListener("mouseenter",()=>{a.style.color=`var(--${c[t[1].color]})`,o.style.color=`var(--${c[t[1].color]})`}),n.addEventListener("mouseleave",()=>{a.style.color="",o.style.color=""}),e==null||e.append(n),t[1].addBreak&&(e==null||e.append(document.createElement("hr")))}}populateActions(){const e=document.querySelector("div.sidebar>div#actions");for(const t of H){const a=document.createElement("span"),n=document.createElement("button"),o=document.createElement("span"),i=`${Math.floor(Math.random()*32768)}`;o.innerText=t[1].dispName,a.innerText=t[1].materialIcon,a.className="material-icons",a.id=i,n.className="action option",n.title=t[1].dispName,n.append(a),n.append(o),n.addEventListener("click",t[1].action),n.addEventListener("mouseenter",()=>{a.style.color=`var(--${c[t[1].color]})`,o.style.color=`var(--${c[t[1].color]})`}),n.addEventListener("mouseleave",()=>{a.style.color="",o.style.color=""}),e==null||e.append(n),t[1].addBreak&&(e==null||e.append(document.createElement("hr")))}}toggleSidebar(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?h.expandSidebar():h.collapseSidebar()}expandSidebar(){document.body.classList.remove("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","false")}collapseSidebar(){document.body.classList.add("sidebar-collapsed"),localStorage.setItem("sidebar-collapsed","true")}init(){this.syncSidebarState(),document.getElementById("sidebar-toggle").addEventListener("click",()=>{h.toggleSidebar(),h.syncSidebarState()})}syncSidebarState(){(localStorage.getItem("sidebar-collapsed")||"false")=="true"?h.collapseSidebar():h.expandSidebar()}}const h=new _;class O{init(){const e=document.createElement("button"),t=document.createElement("span");e.className="action",e.id="sidebar-toggle",t.className="material-icons",t.innerText="more_vert",e.append(t),document.querySelectorAll("div.headerbar .header")[0].append(e)}}const F=new O;L.addColorClasses();const S="home";F.init();N.init();h.init();p.init();h.populateActions();h.populatePages();I.refreshAll();b.refreshAll();E.switch(S,document.getElementById(`button-page-${S}`));U.populateHomeButtons();
