(this["webpackJsonpportafolio-app"]=this["webpackJsonpportafolio-app"]||[]).push([[0],{33:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(10),n=t.n(s),o=(t(33),t(13)),i=t(0),r=function(){return Object(i.jsxs)("div",{className:"background-conteiner",children:[Object(i.jsx)("div",{className:"background-blur"}),Object(i.jsx)("img",{src:"https://fondosmil.com/fondo/12586.jpg",alt:"background-img",className:"background"})]})},l=function(){return Object(i.jsx)("div",{id:"aboutme",className:"aboutme screen",children:Object(i.jsxs)("div",{className:"aboutme-conteiner center conteiner",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Un poco sobre mi.."}),Object(i.jsx)("div",{className:"image-face ",children:Object(i.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633148060/ouyct1etzybgianjydzo.jpg",alt:"image-face-2"})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:"aboutme-text",children:"Egresado como T\xe9cnico Electronico del colegio secundario San Jos\xe9 en Rosario Argentina. Desde mi infancia senti pasi\xf3n por la inform\xe1tica y los avances tecnol\xf3gicos, fue en la escuela secundaria cuando programe por primera vez a los 15 a\xf1os en lenguaje C++ y fue cuando me di cuenta que crear aplicaciones era lo que me gustaba. Luego de graduarme, comence la carrera en Ingenier\xeda en Sistemas de la Informaci\xf3n la cual actualmente estoy cursando 3er a\xf1o."}),Object(i.jsx)("h3",{className:"aboutme-text",children:"La \xe9poca pandemica me hizo adentrarme m\xe1s en otros conocimientos como diferentes lenguajes en los cuales est\xe1n HTML, CSS y JavaScript que son fuertes candidatos hoy en d\xeda en el desarrollo de aplicaciones web. Sumado a algunos frameworks como React y Node Js."}),Object(i.jsx)("h3",{className:"aboutme-text",children:"Actualmente, ademas de los estudios, trabajo en el sector de Soporte IT para la empresa SerTIC de Rosario, lo que me ayudo a ampliar mis conocimientos en el rubro y ganar experiencia en el \xe1mbito laboral, y como freelancer creando p\xe1ginas web en lo que queda de mi tiempo libre. Dentro de SerTIC estuve involucrado en varios proyectos de desarrollo Web como por ejemplo una landing page o mails con handlebars en la plataforma VTEX."}),Object(i.jsx)("h3",{className:"aboutme-text",children:"Mi objetivo principal actualmente es adentrarme mucho m\xe1s en el mundo de la inform\xe1tica y seguir creciendo adquiriendo mas experiencia y conocimientos. Me considero apasionado en lo que hago y siempre busco actualizarme en las nuevas tecnolog\xedas que salen d\xeda a d\xeda."})]})]})})},d=t(14),m=t(18),j=t.n(m),b=t(26),h=t(19),u=t.n(h),p="https://portfolio-app-alelalli.herokuapp.com/api/sendemail";console.log("Backend en ".concat(p));var g=function(){var e=Object(b.a)(j.a.mark((function e(a){var t,c,s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent).ok?u.a.fire("Excelente!","Email enviado","success"):(s=c.errors,n=u.a.mixin({toast:!0,position:"top-end",showConfirmButton:!0,timer:3e3,timerProgressBar:!0}),Object.values(s).reverse().map((function(e){n.fire({title:"".concat(e.msg),icon:"error"})})));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=t(12),x=t(7),O=JSON.parse(localStorage.getItem("contact-form-data"))||{email:"",title:"",text:""},f=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),t=Object(d.a)(a,2),s=t[0],n=t[1];return[s,function(e){var a=e.target;n(Object(x.a)(Object(x.a)({},s),{},Object(v.a)({},a.name,a.value)))},function(e){n(e)}]}(O),a=Object(d.a)(e,3),t=a[0],s=a[1],n=a[2],r=t.email,l=t.title,m=t.text,j=Object(o.b)();Object(c.useEffect)((function(){localStorage.setItem("contact-form-data",JSON.stringify(t))}),[t]);var b=function(e){var a;e.preventDefault(),g(t),j({type:"sendEmail",payload:{email:(a=t).email,title:a.title,text:a.text}})};return Object(i.jsx)("div",{id:"contact",className:"contact screen",children:Object(i.jsxs)("div",{className:"contact-conteiner conteiner",children:[Object(i.jsx)("h1",{children:"Contacteme"}),Object(i.jsxs)("form",{className:"contact-form",onCharge:b,children:[Object(i.jsx)("input",{value:r,type:"text",className:"contact-item",name:"email",placeholder:"Ingrese el remitente",onChange:s}),Object(i.jsx)("input",{value:l,type:"text",className:"contact-item ",name:"title",placeholder:"Ingrese el titulo",onChange:s}),Object(i.jsx)("textarea",{value:m,className:"contact-item ",name:"text",placeholder:"Ingrese el correo a enviar",onChange:s}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"contact-item hover btn btn-send",onClick:b,children:"Enviar"}),Object(i.jsx)("button",{className:"btn btn-reset contact-item hover",onClick:function(e){e.preventDefault(),n({email:"",title:"",text:""})},children:"Blanquear campos"})]})]})]})})},y=function(){return Object(i.jsx)("div",{id:"footer",className:"footer",children:Object(i.jsxs)("div",{className:"footer-conteiner",children:[Object(i.jsxs)("div",{className:"footer-box",children:[Object(i.jsx)("a",{title:"facebook",target:"_blank",href:"https://www.facebook.com/ale.lalli11",children:Object(i.jsx)("img",{className:"icon",src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633742117/o60nxjpcqahsttztgwmx.png",alt:"facebook"})}),Object(i.jsx)("a",{title:"linkedin",target:"_blank",href:"https://www.linkedin.com/in/alesandro-lalli-07b3211b2/",children:Object(i.jsx)("img",{className:"icon",src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633742198/urcrem1tzp4v93kynq0o.png",alt:"linkedin"})}),Object(i.jsx)("a",{title:"instagram",target:"_blank",href:"https://www.instagram.com/ale.lalli/",children:Object(i.jsx)("img",{className:"icon",src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633742176/osmlcy9wkan7jdhlczij.png",alt:"instagram"})}),Object(i.jsx)("a",{title:"github",target:"_blank",href:"https://github.com/aleLa11i",children:Object(i.jsx)("img",{className:"icon",src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633742289/eltpaovangh1mbxstxn8.png",alt:"github"})})]}),Object(i.jsx)("hr",{style:{height:"100px"}}),Object(i.jsxs)("div",{className:"footer-box",children:[Object(i.jsx)("h3",{children:"341 349-3683"}),Object(i.jsx)("h3",{children:"Rosario, Argentina"}),Object(i.jsx)("h3",{children:"Lalli, Alesandro"})]})]})})},N=function(){return Object(i.jsx)("div",{id:"home",className:"home screen",children:Object(i.jsxs)("div",{className:"home-conteiner conteiner",children:[Object(i.jsxs)("div",{className:"home-box",children:[Object(i.jsx)("h1",{children:" Hola! "}),Object(i.jsx)("h1",{children:" Soy Alesandro Lalli"}),Object(i.jsx)("h3",{children:" T\xe9cnico Electr\xf3nico - Full Stack Developer"}),Object(i.jsx)("a",{target:"_blank",className:"btn btn-cv hover",href:"https://drive.google.com/file/d/1YQ72ky4ic1ofs3sjhbJTvJnhzKFmRQA9/view?usp=sharing",children:"CV"}),Object(i.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1634078458/kjeycctakluagocmvjwi.png",alt:"img-logo"})]}),Object(i.jsx)("div",{className:"image-face",children:Object(i.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1633148008/nmtlicxheohbigv83g2u.jpg",alt:"image-face-1"})})]})})},k=function(){return Object(i.jsxs)("div",{id:"proyects",className:"proyects screen",children:[Object(i.jsx)("h1",{className:!0,children:"Proyectos"}),Object(i.jsxs)("div",{className:"proyects-conteiner",children:[Object(i.jsxs)("div",{className:"proyects-item conteiner",children:[Object(i.jsx)("h3",{className:"text",children:"Basicamente un CandyCrush hecho en JavaScript que posee 5 niveles de dificultad. Uno de mis primeros proyectos en JS por lo que todav\xeda no pose\xeda mucha experiencia en c\xf3digos y por lo tanto est\xe1 bastante desordenado."}),Object(i.jsx)("a",{className:"hover",target:"_blank",href:"https://alela11i.github.io/candyCrush/",children:"CandyCrush"}),Object(i.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/candyCrush.git",children:"Codigo"})]}),Object(i.jsxs)("div",{className:"proyects-item conteiner",children:[Object(i.jsx)("h3",{className:"text",children:" Uno de mis primeros proyectos en React, lo dise\xf1e en un curso de Udemy. Es basicamente un buscador de Gifs donde por cada busqueda devuelve los 10 primeros Gifs encontrados. Utilice una API muy famosa para Gifs (utilizada por WhatsApp entre otras aplicaciones).  "}),Object(i.jsx)("a",{className:"hover",target:"_blank",href:"https://alela11i.github.io/gifapp/",children:"GifApp"}),Object(i.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/gifapp.git",children:"Codigo"})]}),Object(i.jsxs)("div",{className:"proyects-item conteiner",children:[Object(i.jsx)("h3",{className:"text",children:"Otro de mis proyectos dise\xf1ado en el curso de React. TODOapp es basicamente una app que sirve para agregar tareas que debo realizar. A medida que se van realizando se pueden clickear sobre ellas para tacharlas y/o borrarlas. No se requiri\xf3 Backend. No es un programa complejo en cuanto a lineas de c\xf3digo pero se utilizaron varios Hooks."}),Object(i.jsx)("a",{className:"hover",target:"_blank",href:"https://alela11i.github.io/TODOapp/",children:"TODOapp"}),Object(i.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/TODOapp.git",children:"Codigo"})]}),Object(i.jsxs)("div",{className:"proyects-item conteiner",children:[Object(i.jsx)("h3",{className:"text",children:"Uno de mis primeros proyectos con React complementado con Backend. Utilizando Node JS para el backend y Mongo DB como Base de Datos. El proyecto se basa en un calendario (con login validado por backend) donde permite crear eventos y guardarlos. Puedes compartir los eventos con el resto de las personas que se logean en la app pero solo vos podes modificar tus eventos. Al logearse se genera un token con duracion de 2hs que se renueva, lo que matiene la sesion abierta dentro del navegador hasta que se de logout. App desplegada en heroku."}),Object(i.jsx)("a",{className:"hover",target:"_blank",href:"https://mern-calendar-alelalli.herokuapp.com/",children:"CalendarApp"}),Object(i.jsx)("a",{className:"hover",target:"_blank",href:"https://github.com/aleLa11i/mern-calendar-frontend.git",children:"Codigo frontend"}),Object(i.jsx)("a",{className:"last hover",target:"_blank",href:"https://github.com/aleLa11i/mern-calendar-backend.git",children:"Codigo backend"})]})]})]})},C=function(e){var a=e.name,t=e.img;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"skills-image",children:[Object(i.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/"+t,alt:"skills-image"}),Object(i.jsxs)("h3",{children:[" ",a," "]})]})})},q=function(){return Object(i.jsx)("div",{id:"skills",className:"skills screen",children:Object(i.jsxs)("div",{className:"skills-conteiner center conteiner",children:[Object(i.jsx)("h1",{children:" Habilidades "}),Object(i.jsx)("h2",{children:"Principalmente:"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(C,{name:"HTML",img:"v1633743644/cwmzv6yted23xb0zjudk.png"}),Object(i.jsx)(C,{name:"CSS",img:"v1633743576/rikhwq96tscxgm9bo9lm.png"}),Object(i.jsx)(C,{name:"Javascript",img:"v1633745658/gx7eg06bqwyo5xh6veg7.png"}),Object(i.jsx)(C,{name:"NodeJS",img:"v1633743225/xpzjk4p6ywfkdzihskqh.png"}),Object(i.jsx)(C,{name:"React",img:"v1633742339/wmcoslgcvokzy92dyr7f.png"}),Object(i.jsx)(C,{name:"Git",img:"v1633742584/bpgrq09eqkxapfdskaih.png"}),Object(i.jsx)(C,{name:"MongoDB",img:"v1633742963/m1bqjamypf4i16x3ca9i.png"}),Object(i.jsx)(C,{name:"SASS",img:"v1633742618/koddr0votogm7ovc1vsl.png"}),Object(i.jsx)(C,{name:"Boostrap",img:"v1633742658/gf4pdw0ohitshsrpatfk.png"})]})]})})},w=function(){return Object(i.jsxs)("div",{className:"portafolio-screen",onClick:function(){document.getElementById("navbar").classList.remove("show-navbar"),document.getElementById("navbar-icon").classList.remove("visible")},children:[Object(i.jsx)(N,{}),Object(i.jsx)(l,{}),Object(i.jsx)(q,{}),Object(i.jsx)(k,{}),Object(i.jsx)(f,{}),Object(i.jsx)(y,{})]})},S=t(20),z=t(21),E=function(){var e=function(){document.getElementById("navbar").classList.remove("show-navbar"),document.getElementById("navbar-icon").classList.remove("visible")};return Object(i.jsxs)("div",{className:"navbar-conteiner",children:[Object(i.jsxs)("nav",{id:"navbar",className:"navbar",children:[Object(i.jsx)(S.a,{icon:z.b,className:"close",onClick:e,style:{display:"none"}}),Object(i.jsx)("a",{activeClassName:"active",className:"nav-item hover nav-home",href:"#home",onClick:e,children:"Inicio"}),Object(i.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#aboutme",onClick:e,children:"Sobre mi"}),Object(i.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#skills",onClick:e,children:"Habilidades"}),Object(i.jsx)("a",{activeClassName:"active",className:"nav-item hover",href:"#proyects",onClick:e,children:"Proyectos"}),Object(i.jsx)("a",{activeClassName:"active",className:"nav-item hover nav-contact",href:"#contact",onClick:e,children:"Contacteme"})]}),Object(i.jsxs)("div",{id:"navbar-icon",className:"navbar-icon",children:[Object(i.jsx)("img",{src:"https://res.cloudinary.com/dxzcqv92g/image/upload/v1634078458/kjeycctakluagocmvjwi.png",alt:"img-logo"}),Object(i.jsx)(S.a,{icon:z.a,className:"navbar-icon-image",onClick:function(){document.getElementById("navbar").classList.add("show-navbar"),document.getElementById("navbar-icon").classList.add("visible")}})]})]})},_=function(){return Object(i.jsxs)("div",{className:"portafolio-home",children:[Object(i.jsx)(E,{}),Object(i.jsx)(w,{})]})},I=t(28),L=t(23),B={email:null,title:null,text:null},T=Object(L.a)({sendEmail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;return"sendEmail"===a.type?Object(x.a)({},a.payload):e}}),D=Object(L.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),J=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(I.a,{children:Object(i.jsxs)(o.a,{store:D,children:[Object(i.jsx)(r,{}),Object(i.jsx)(_,{})]})})})};n.a.render(Object(i.jsx)(J,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.16d0ef29.chunk.js.map