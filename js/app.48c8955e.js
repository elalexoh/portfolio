(function(t){function e(e){for(var s,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},o={app:0},n=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ecaf8448"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"b578a470"}[t]+".css",o=c.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===s||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],d.parentNode.removeChild(d),a(n)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=o[t]=[e,a]}));e.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",p.name="ChunkLoadError",p.type=s,p.request=r,a[1](p)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0680":function(t,e,a){},"21bb":function(t,e,a){"use strict";var s=a("2dad"),r=a.n(s);r.a},"23eb":function(t,e,a){"use strict";var s=a("9906"),r=a.n(s);r.a},2833:function(t,e,a){t.exports=a.p+"img/compass.8c75215a.jpg"},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main-container",style:t.cssVars,attrs:{id:"app"}},[a("navbar"),a("div",{staticClass:"container"},[a("vue-page-transition",{attrs:{name:"fade-in-right"}},[a("router-view",{attrs:{setColorTheme:t.setColorTheme}})],1)],1),a("customFooter")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar__toggle"},[s("div",{staticClass:"navbar__toggle-btn pointer",class:{active:t.showVerticalMenu},on:{click:t.toggleBtn}},[s("img",{staticClass:"navbar__toggle-img",attrs:{src:a("869f")}})]),s("div",{staticClass:"navbar__toggle-menu-wrapper",class:{active:t.showVerticalMenu}},[s("span",{staticClass:"navbar__toggle-close pointer",on:{click:t.toggleBtn}}),s("ul",{staticClass:"navbar__toggle-items"},t._l(t.menuItems,(function(e,a){return s("li",{key:a,staticClass:"navbar__toggle-item"},[s("a",{staticClass:"navbar__toggle-link",class:e.active?"active":"",attrs:{"data-hash":e.link,href:"#"+e.link},on:{click:function(e){return t.toggleDotActive(e)}}},[t._v(t._s(e.title))])])})),0)])]),s("ul",{staticClass:"navbar__options"},[s("router-link",{staticClass:"navbar__option",attrs:{tag:"li","active-class":"active",to:"/"}},[t._v("Inicio")]),s("router-link",{staticClass:"navbar__option beta",attrs:{tag:"li",exact:"","active-class":"active",to:"/sandbox/"}},[t._v("Sandbox")])],1),t._m(0),s("div",{staticClass:"navbar__dots",class:t.showVerticalMenu?"hide":"show"},t._l(t.menuItems,(function(e,a){return s("a",{key:a,staticClass:"navbar__dots--dot",class:e.active?"active":"",attrs:{href:"#"+e.link,"data-hash":e.link},on:{click:function(e){return t.toggleDotActive(e)}}})})),0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar__up-btn hidden",attrs:{href:"#app"}},[a("i",{staticClass:"fas fa-chevron-up"})])}],c=(a("4160"),a("9911"),a("159b"),{data:function(){return{showVerticalMenu:!1,menuItems:[],themeColor:""}},watch:{$route:function(t){var e=this.menuItems;e.forEach((function(e){"#".concat(e.link)===t.hash&&e.active}))}},methods:{toggleBtn:function(){this.showVerticalMenu=!this.showVerticalMenu},toggleDotActive:function(t){var e=t.target,a=e.className,s="navbar__toggle-link"===a?"navbar__dots--dot":"navbar__toggle-link",r=document.querySelectorAll(".".concat(a)),o=document.querySelectorAll(".".concat(s));r.forEach((function(t,a){t.classList.remove("active"),o[a].classList.remove("active"),o[a].getAttribute("data-hash")===e.getAttribute("data-hash")&&o[a].classList.add("active")})),e.classList.add("active")}},created:function(){var t=this;N.$on("updateMenuOptions",(function(e,a){t.themeColor=a,t.menuItems=e}))}}),l=c,u=(a("c646"),a("2877")),p=Object(u["a"])(l,n,i,!1,null,null,null),d=p.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__copyright"},[a("p",{staticClass:"footer__copyright--text"},[a("span",[t._v("@ 2020")]),a("a",{staticClass:"accent",attrs:{href:""}},[t._v("Deeply_Weird")]),a("span",[t._v("Todos los derechos reservados")])])]),a("div",{staticClass:"footer__social-media"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"https://github.com/elalexoh",target:"_blank"}},[t._v("Github")]),a("a",{staticClass:"btn btn-primary",attrs:{href:"https://codepen.io/Deeply",target:"_blank"}},[t._v("Codepen")])]),a("div",{staticClass:"footer__contact"},[a("a",{staticClass:"footer__contact--email",attrs:{href:"mailto: fred_dev@gmail.com"}},[t._v("Deeply.weird.dev@gmail.com")])])])}],_={},h=_,v=(a("a3a0"),Object(u["a"])(h,m,f,!1,null,null,null)),g=v.exports,b={data:function(){return{themeColor:"white"}},computed:{cssVars:function(){return{"--bg-color":this.themeColor}}},components:{navbar:d,customFooter:g},methods:{setColorTheme:function(t){""!=t&&(this.themeColor=t)}}},C=b,y=(a("5c0b"),Object(u["a"])(C,r,o,!1,null,null,null)),k=y.exports,j=(a("d3b7"),a("8c4f")),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"home"},[t._m(0),s("Projects"),s("article",{staticClass:"about-me",attrs:{id:"about-me"}},[t._m(1),s("img",{staticClass:"img-fluid about-me__img",attrs:{src:a("f0fc"),alt:"hero"}}),s("p",{staticClass:"about-me__description"},[t._v("Soy un apasionado del diseño y el desarrollo web, mis grandes amores el dibujo y el arte siempre van de la mano cuando desarrollo un sitio, y aunque soy completamente capaz de seguir el criterio de un diseñador, siempre añado un poco de mi en los proyectos que participo.")]),s("div",{staticClass:"about-me__skills skills"},[s("h3",{staticClass:"skills__title uppercase text-center"},[t._v("Mis habilidades")]),t._l(t.skills,(function(e){return s("div",{key:e.id,staticClass:"skills__skill"},[s("h4",{staticClass:"skills__skill-title"},[t._v(t._s(e.title))]),s("span",{staticClass:"skills__skill-percent"},[t._v(t._s(e.range))]),s("div",{staticClass:"skills__skill-bar"},[s("div",{staticClass:"skills__skill--active-bar",style:"width: "+t.setSkillBar(e.range)+";"})])])}))],2)]),t._m(2)],1)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"welcome",attrs:{id:"featured"}},[s("section",{staticClass:"featured"},[s("div",{staticClass:"featured__info"},[s("h1",{staticClass:"featured__title uppercase"},[t._v(" Hello "),s("span",{staticClass:"accent"},[t._v("Everyone")])])]),s("div",{staticClass:"featured__wrapper"},[s("img",{staticClass:"featured__wrapper--img",attrs:{src:a("e61c"),alt:"hero"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"about-me__title"},[t._v(" Sobre "),a("span",{staticClass:"accent"},[t._v("Mi")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"contact",attrs:{id:"contact"}},[a("h2",{staticClass:"contact__title beta"},[t._v("Contacto")]),a("div",{staticClass:"contact__info-wrapp"},[a("p",{staticClass:"contact__info"},[t._v("¿Tiene alguna pregunta, o propuesta?")]),a("p",{staticClass:"contact__info"},[t._v("¡Sientete libre de contactarme!")]),a("a",{staticClass:"contact__anchor contact__anchor--email",attrs:{href:"mailto: fred_dev@gmail.com"}},[t._v("Deeply.weird.dev@gmail.com")]),a("a",{staticClass:"contact__anchor contact__anchor--phone",attrs:{href:"#"}},[t._v("+58 424-178-5377")])]),a("div",{staticClass:"contact-form"},[a("input",{staticClass:"contact-form__input",attrs:{placeholder:"Nombre",type:"text",name:"name",id:""}}),a("input",{staticClass:"contact-form__input",attrs:{placeholder:"Correo",type:"email",name:"email",id:""}}),a("textarea",{staticClass:"contact-form__input contact-form__input--textarea",attrs:{name:"message",id:"",rows:"5",placeholder:"Mensaje"}})])])}],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"projects",attrs:{id:"projects"}},[t._m(0),a("section",{staticClass:"projects__wrapper-tag"},t._l(t.projects,(function(e,s){return a("div",{key:s,staticClass:"projects__tag pointer",on:{click:function(a){return t.activeModal(e)}}},[a("h3",[t._v(t._s(e.label))])])})),0),t._l(t.projects,(function(e,s){return a("section",{key:s,staticClass:"project modal hidden",class:t.camelCase(e.label)},[a("section",{staticClass:"project__carousel"},t._l(e.resources[0].content,(function(t,e){return a("img",{key:e,staticClass:"project__img",attrs:{src:t.source}})})),0),a("section",{staticClass:"project__info"},[a("h2",{staticClass:"project__title"},[a("a",{attrs:{href:e.resources[0].link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.resources[0].title))])]),a("div",{staticClass:"project__description"},[a("p",[t._v(t._s(e.resources[0].description))])]),a("ul",{staticClass:"project__techs"},t._l(e.resources[0].techs,(function(e,s){return a("li",{key:s,staticClass:"project__tech"},[t._v(t._s(e.title))])})),0)]),a("div",{staticClass:"close pointer",on:{click:function(a){return t.activeModal(e)}}})])}))],2)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"projects__title--wrapper"},[a("h2",{staticClass:"projects__title"},[t._v("proyectos")])])}],O=(a("ac1f"),a("5319"),{data:function(){return{projectModal:!1,projects:[{label:"spa",resources:[{title:"The Lux Properties",link:"http://dev.theluxproperties.com/",description:"Este es un proyecto del area inmobiliaria, diseñado para ser amigable con el usuario e intuitivo, cuenta con pagina de aterrisaje y un sistema administrativo para la gestion interna de las propiedades.",techs:[{title:"Javascript"},{title:"Bootstrap"},{title:"VueJs"},{title:"NuxtJs"}],content:[{title:"Inicio",source:a("6e93")}]}]},{label:"landing page",resources:[{title:"Compass vital health",link:"http://compass.orugadesarrollo.com/",description:"Desarrollada en Wordpress, Compass Vital Health fue diseñada para una empresa dedicada a vender suplementos alimenticios, y servicios de coaching, enfocada a un público juvenil y contemporaneo.",techs:[{title:"Wordpress"},{title:"Bootstrap"},{title:"Javascript"},{title:"Jquery"},{title:"Sage8"}],content:[{title:"Inicio",source:a("2833")}]}]},{label:"blog",resources:[{title:"Behrens",link:"http://behrens.orugadesarrollo.com/",description:"Behrens es una empresa con más de 115 años de compromiso con la salud del pueblo venezolano, esta pagina fue diseñada para atender a una empresa conservadora pero al mismo tiempo a la vanguardia.",techs:[{title:"Wordpress"},{title:"Bootstrap"},{title:"Jquery"},{title:"Sage8"}],content:[{title:"Inicio",source:a("808d")}]}]},{label:"eCommerce",resources:[{title:"Pick & Fly",link:"http://pickandflyve.com/",description:"E-commerce para prestigiosa empresa Venezolana, donde puedes hacer compras antes de un vuelo, para luego retirar en el aeropuerto Satelite de Maiquetía.",techs:[{title:"Wordpress"},{title:"Woocommerce"},{title:"Bootstrap"},{title:"Jquery"},{title:"Javascript"},{title:"Sage9"}],content:[{title:"Home page",source:a("904d")}]}]}],selectedProject:{}}},watch:{},methods:{activeModal:function(t){var e=document.querySelector(".project.modal.".concat(this.camelCase(t.label)));e.classList.toggle("hidden")},camelCase:function(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(t,e){return 0==e?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")},toggleModal:function(t){this.projectModal=!this.projectModal,console.info(t.label),t&&this.setProject(t)},setProject:function(t){this.selectedProject=t},getContent:function(t,e){return"{}"===JSON.stringify(this.selectedProject)?"hey":this.selectedProject.resources[0][e]}},components:{}}),S=O,P=(a("23eb"),Object(u["a"])(S,E,M,!1,null,null,null)),T=P.exports,A={props:["setColorTheme"],data:function(){return{page:"home",themeColor:"rgb(32, 32, 32)",menuOptions:[{id:1,title:"Welcome",link:"app",active:!0},{id:2,title:"Projects",link:"projects",active:!1},{id:3,title:"About Me",link:"about-me",active:!1},{id:4,title:"Contacts",link:"contact",active:!1}],skills:[{id:1,title:"Front-End",range:"90%"},{id:2,title:"Back-End",range:"70%"}]}},mounted:function(){this.setColorTheme(this.themeColor),N.setMenuOptions(this.menuOptions,this.themeColor)},computed:{route:function(){return window.location.hash}},components:{Projects:T},methods:{setSkillBar:function(t){return t}}},B=A,$=(a("21bb"),Object(u["a"])(B,w,x,!1,null,null,null)),L=$.exports;s["a"].use(j["a"]);var q=[{path:"/",name:"home",component:L},{path:"/sandbox",name:"sandbox",component:function(){return a.e("about").then(a.bind(null,"b602"))}}],J=new j["a"]({mode:"history",base:"/portfolio/",routes:q}),V=J,D=a("f0eb"),I=a("caf9");a.d(e,"bus",(function(){return N})),s["a"].config.productionTip=!1,s["a"].use(D["default"]),s["a"].use(I["a"]);var N=new s["a"]({data:{default:""},methods:{setMenuOptions:function(t,e){this.$emit("updateMenuOptions",t,e)}}});new s["a"]({router:V,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"6e93":function(t,e,a){t.exports=a.p+"img/theluxproperties (1).98eb2529.png"},"760c":function(t,e,a){},"808d":function(t,e,a){t.exports=a.p+"img/behrens (1).0f9274ac.jpg"},"869f":function(t,e,a){t.exports=a.p+"img/menu.c159867d.svg"},"904d":function(t,e,a){t.exports=a.p+"img/pickandfly (1).b4ef27b4.jpg"},9906:function(t,e,a){},"9c0c":function(t,e,a){},a3a0:function(t,e,a){"use strict";var s=a("0680"),r=a.n(s);r.a},c646:function(t,e,a){"use strict";var s=a("760c"),r=a.n(s);r.a},e61c:function(t,e,a){t.exports=a.p+"img/deeply.ad328575.png"},f0fc:function(t,e,a){t.exports=a.p+"img/icon.ebaba799.png"}});
//# sourceMappingURL=app.48c8955e.js.map