(this["webpackJsonpportafolio-app"]=this["webpackJsonpportafolio-app"]||[]).push([[0],{33:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s(10),i=s.n(c),n=(s(33),s(13)),o=s(0),r=function(){return Object(o.jsxs)("div",{className:"background-conteiner",children:[Object(o.jsx)("div",{className:"background-blur"}),Object(o.jsx)("img",{src:"https://fondosmil.com/fondo/12586.jpg",alt:"background-img",className:"background"})]})},l=function(){return Object(o.jsx)("div",{id:"aboutme",className:"aboutme screen",children:Object(o.jsxs)("div",{className:"aboutme-conteiner center conteiner",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Un poco sobre mi.."}),Object(o.jsx)("div",{className:"image-face ",children:Object(o.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633148060/ouyct1etzybgianjydzo.jpg",alt:"image-face-2"})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"aboutme-text",children:"Egresado como T\xe9cnico Electronico del colegio secundario San Jos\xe9 en Rosario Argentina. Desde mi infancia senti pasi\xf3n por la inform\xe1tica y los avances tecnol\xf3gicos, fue en la escuela secundaria cuando programe por primera vez a los 15 a\xf1os en lenguaje C++ y fue cuando me di cuenta que crear aplicaciones era lo que me gustaba. Luego de graduarme, comence la carrera en Ingenier\xeda en Sistemas de la Informaci\xf3n la cual actualmente estoy cursando 3er a\xf1o."}),Object(o.jsx)("h3",{className:"aboutme-text",children:"La \xe9poca pandemica me hizo adentrarme m\xe1s en otros conocimientos como diferentes lenguajes en los cuales est\xe1n HTML, CSS y JavaScript que son fuertes candidatos hoy en d\xeda en el desarrollo de aplicaciones web."}),Object(o.jsx)("h3",{className:"aboutme-text",children:"Actualmente, ademas de los estudios, trabajo en el sector de Soporte IT para la empresa SerTIC de Rosario, lo que me ayudo a ampliar mis conocimientos en el rubro y ganar experiencia en el \xe1mbito laboral."}),Object(o.jsx)("h3",{className:"aboutme-text",children:"Mi objetivo principal actualmente es adentrarme en el mundo de la programaci\xf3n y ganar experiencia y conocimientos. Me considero apasionado en lo que hago y siempre busco actualizarme en las nuevas tecnolog\xedas que salen d\xeda a d\xeda."})]})]})})},d=s(14),m=s(18),j=s.n(m),b=s(26),h=s(19),p=s.n(h),g="https://portfolio-app-alelalli.herokuapp.com/api/sendemail";console.log("Backend en ".concat(g));var u=function(){var e=Object(b.a)(j.a.mark((function e(a){var s,t,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return s=e.sent,e.next=5,s.json();case 5:(t=e.sent).ok?p.a.fire("Excelente!","Email enviado","success"):(c=t.errors,i=p.a.mixin({toast:!0,position:"top-end",showConfirmButton:!0,timer:3e3,timerProgressBar:!0}),Object.values(c).reverse().map((function(e){i.fire({title:"".concat(e.msg),icon:"error"})})));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),x=s(12),O=s(7),v=JSON.parse(localStorage.getItem("contact-form-data"))||{email:"",title:"",text:""},f=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),s=Object(d.a)(a,2),c=s[0],i=s[1];return[c,function(e){var a=e.target;i(Object(O.a)(Object(O.a)({},c),{},Object(x.a)({},a.name,a.value)))},function(e){i(e)}]}(v),a=Object(d.a)(e,3),s=a[0],c=a[1],i=a[2],r=s.email,l=s.title,m=s.text,j=Object(n.b)();Object(t.useEffect)((function(){localStorage.setItem("contact-form-data",JSON.stringify(s))}),[s]);var b=function(e){var a;e.preventDefault(),u(s),j({type:"sendEmail",payload:{email:(a=s).email,title:a.title,text:a.text}})};return Object(o.jsx)("div",{id:"contact",className:"contact screen",children:Object(o.jsxs)("div",{className:"contact-conteiner conteiner",children:[Object(o.jsx)("h1",{children:"Contacteme"}),Object(o.jsxs)("form",{className:"contact-form",onCharge:b,children:[Object(o.jsx)("input",{value:r,type:"text",className:"contact-item",name:"email",placeholder:"Ingrese el remitente",onChange:c}),Object(o.jsx)("input",{value:l,type:"text",className:"contact-item ",name:"title",placeholder:"Ingrese el titulo",onChange:c}),Object(o.jsx)("textarea",{value:m,className:"contact-item ",name:"text",placeholder:"Ingrese el correo a enviar",onChange:c}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"contact-item hover btn btn-send",onClick:b,children:"Enviar"}),Object(o.jsx)("button",{className:"btn btn-reset contact-item hover",onClick:function(){i({email:"",title:"",text:""})},children:"Reset"})]})]})]})})},N=function(){return Object(o.jsx)("div",{id:"footer",className:"footer",children:Object(o.jsxs)("div",{className:"footer-conteiner",children:[Object(o.jsxs)("div",{className:"footer-box",children:[Object(o.jsx)("a",{title:"facebook",target:"_blank",href:"https://www.facebook.com/ale.lalli11",children:Object(o.jsx)("img",{className:"icon",src:"http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png",alt:"facebook"})}),Object(o.jsx)("a",{title:"linkedin",target:"_blank",href:"https://www.linkedin.com/in/alesandro-lalli-07b3211b2/",children:Object(o.jsx)("img",{className:"icon",src:"http://assets.stickpng.com/images/58e91afdeb97430e81906504.png",alt:"linkedin"})}),Object(o.jsx)("a",{title:"instagram",target:"_blank",href:"https://www.instagram.com/ale.lalli/",children:Object(o.jsx)("img",{className:"icon",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png",alt:"instagram"})})]}),Object(o.jsxs)("div",{className:"footer-box",children:[Object(o.jsx)("h3",{children:"341 349-3683"}),Object(o.jsx)("h3",{children:"Rosario, Argentina"}),Object(o.jsx)("h3",{children:"Lalli, Alesandro"})]})]})})},k=function(){return Object(o.jsx)("div",{id:"home",className:"home screen",children:Object(o.jsxs)("div",{className:"home-conteiner conteiner",children:[Object(o.jsxs)("div",{className:"home-box",children:[Object(o.jsx)("h1",{children:" Hola! "}),Object(o.jsx)("h1",{children:" Soy Alesandro Lalli"}),Object(o.jsx)("h3",{children:" T\xe9cnico El\xe9ctrico en busca de nuevas fronteras en la programaci\xf3n"}),Object(o.jsx)("a",{target:"_blank",className:"btn btn-cv hover",href:"https://drive.google.com/file/d/1Hx1Zsa4Z26xBAhayUscoualvQeeW6_Yv/view",children:"CV"}),Object(o.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/1005/1005141.png",alt:"img-pc"})]}),Object(o.jsx)("div",{className:"image-face",children:Object(o.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633148008/nmtlicxheohbigv83g2u.jpg",alt:"image-face-1"})})]})})},y=function(){return Object(o.jsxs)("div",{id:"proyects",className:"proyects screen",children:[Object(o.jsx)("h1",{className:!0,children:"Proyectos"}),Object(o.jsxs)("div",{className:"proyects-conteiner",children:[Object(o.jsxs)("div",{className:"proyects-item conteiner",children:[Object(o.jsx)("h3",{children:"Basicamente un CandyCrush hecho en JavaScript que posee 5 niveles de dificultad. Uno de mis primeros proyectos en JS por lo que el codigo es bastante dificil de entender."}),Object(o.jsx)("a",{className:"first hover",target:"_blank",href:"https://alela11i.github.io/candyCrush/",children:"CandyCrush"}),Object(o.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/candyCrush.git",children:"Codigo"})]}),Object(o.jsxs)("div",{className:"proyects-item conteiner",children:[Object(o.jsx)("h3",{children:" Uno de mis primeros proyectos en React, lo dise\xf1e en el curso de Fernando Herrera, de Udemy. Es basicamente un buscador de Gifs donde por cada busqueda devuelve los 10 primeros Gifs encontrados. Utilice una API muy famosa para Gifs (utilizada por WhatsApp entre otras aplicaciones).  "}),Object(o.jsx)("a",{className:"first hover",target:"_blank",href:"https://alela11i.github.io/gifapp/",children:"GifApp"}),Object(o.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/gifapp.git",children:"Codigo"})]}),Object(o.jsxs)("div",{className:"proyects-item conteiner",children:[Object(o.jsx)("h3",{children:"Otro de mis proyectos dise\xf1ado en el curso de React. TODOapp es basicamente una app que sirve para agregar tareas que debo realizar. A medida que se van realizando se pueden clickear sobre ellas para tacharlas y/o borrarlas. No se requiri\xf3 Backend. No es un programa complejo en cuanto a lineas de c\xf3digo pero se utilizaron varios Hooks."}),Object(o.jsx)("a",{className:"first hover",target:"_blank",href:"https://alela11i.github.io/TODOapp/",children:"TODOapp"}),Object(o.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/TODOapp.git",children:"Codigo"})]}),Object(o.jsxs)("div",{className:"proyects-item conteiner",children:[Object(o.jsx)("h3",{children:"Uno de mis \xfaltimos proyectos con React. Utilizando Node JS para el backend y Mongo DB como Base de Datos. El proyecto se basa en un calendario (con login validado por backend) donde permite crear eventos y guardarlos. Puedes compartir los eventos con el resto de las personas que se logean en la app pero solo vos podes modificar tus eventos. Al logearse se genera un token con duracion de 2hs que se renueva, lo que matiene la sesion abierta dentro del navegador hasta que se de logout. App desplegada en heroku."}),Object(o.jsx)("a",{className:"first hover",target:"_blank",href:"https://mern-calendar-alelalli.herokuapp.com/",children:"CalendarApp"}),Object(o.jsx)("a",{className:"last hover",target:"_blank",href:"",children:"Codigo"})]})]})]})},w=function(){return Object(o.jsx)("div",{id:"skills",className:"skills screen",children:Object(o.jsxs)("div",{className:"skills-conteiner center conteiner",children:[Object(o.jsx)("h1",{children:" Habilidades "}),Object(o.jsx)("h2",{children:"Principalmente:"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"HTML"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"CSS"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"http://2.bp.blogspot.com/-ybjEsh1Icu0/VqRBzF2lEGI/AAAAAAAAD7k/b0HnKNNbaNc/s640/javascript-logo.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"Javascript"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"NodeJS"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"React"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"SASS"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"Boostrap"})]})]}),Object(o.jsx)("h2",{children:"Conocimientos en:"}),Object(o.jsxs)("div",{className:"skills-images",children:[Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"C++"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"C#"})]}),Object(o.jsxs)("div",{className:"skills-image",children:[Object(o.jsx)("img",{src:"https://4.bp.blogspot.com/-NNF6wg11eKQ/V-BL3PRvsUI/AAAAAAAAGPw/AtqUtauHxJ4_N2KAuhb1_InjrglDy1L0wCPcB/s1600/Other-python-icon.png",alt:"skills-image-1"}),Object(o.jsx)("h3",{children:"Python"})]})]})]})})},C=function(){return Object(o.jsxs)("div",{className:"portafolio-screen",children:[Object(o.jsx)(k,{}),Object(o.jsx)(l,{}),Object(o.jsx)(w,{}),Object(o.jsx)(y,{}),Object(o.jsx)(f,{}),Object(o.jsx)(N,{})]})},_=s(20),A=s(21),S=function(){return Object(o.jsxs)("div",{className:"navbar-conteiner",children:[Object(o.jsxs)("nav",{id:"navbar",className:"navbar",children:[Object(o.jsx)(_.a,{icon:A.b,className:"close",onClick:function(){document.getElementById("navbar").classList.toggle("show-navbar"),document.getElementById("navbar-icon").classList.remove("visible")},style:{display:"none"}}),Object(o.jsx)("a",{activeClassName:"active",className:"nav-item hover nav-home",href:"#home",children:"Inicio"}),Object(o.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#aboutme",children:"Sobre mi"}),Object(o.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#skills",children:"Habilidades"}),Object(o.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#proyects",children:"Proyectos"}),Object(o.jsx)("a",{activeClassName:"active",className:"nav-item hover nav-contact",href:"#contact",children:"Contacteme"})]}),Object(o.jsx)("div",{id:"navbar-icon",className:"navbar-icon",onClick:function(){document.getElementById("navbar").classList.toggle("show-navbar"),document.getElementById("navbar-icon").classList.add("visible")},children:Object(o.jsx)(_.a,{icon:A.a})})]})},E=function(){return Object(o.jsxs)("div",{className:"portafolio-home",children:[Object(o.jsx)(S,{}),Object(o.jsx)(C,{})]})},B=s(28),L=s(23),I={email:null,title:null,text:null},q=Object(L.a)({sendEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;return"sendEmail"===a.type?Object(O.a)({},a.payload):e}}),T=Object(L.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),D=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(B.a,{children:Object(o.jsxs)(n.a,{store:T,children:[Object(o.jsx)(r,{}),Object(o.jsx)(E,{})]})})})};i.a.render(Object(o.jsx)(D,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.58764ab4.chunk.js.map