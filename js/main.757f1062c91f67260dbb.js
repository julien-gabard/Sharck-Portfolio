(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){t(18),e.exports=t(41)},function(e,a,t){},,,,,,,,,,function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t(5),i=t(6),s=t(15);function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var u={displayBoard:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"MENU_BUTTON_ACTION":return m(m({},e),{},{displayBoard:!e.displayBoard});default:return e}};function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){f(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function f(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var N={lastName:"",firstName:"",phone:"",email:"",message:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_FIELD":var t=a.identifier;return E(E({},e),{},f({},t,a.value));case"REGISTRATION_SUBMIT":return E(E({},e),{},{lastName:"",firstName:"",phone:"",email:"",message:""});default:return e}};function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){h(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function h(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var j={showIcons:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CLICK_SHOW_ICONS":return g(g({},e),{},{showIcons:!e.showIcons});default:return e}},y=Object(i.combineReducers)({menu:_,contact:b,footer:k}),O=Object(i.createStore)(y,Object(s.devToolsEnhancer)()),w=t(16),C=t.n(w),S=(t(27),t(1)),P=t.n(S),A=(t(28),t(2)),I=t(4),q=function(e){var a=e.handleChange,t=e.registrationSubmit,n=e.lastName,c=e.firstName,r=e.phone,i=e.email,s=e.message,o=function(e){a(e.target.name,e.target.value)};return l.a.createElement("div",{className:"contact",id:"contact"},l.a.createElement("div",{className:"contact__title"},l.a.createElement("h2",{className:"contact__title-content"},"Contact"),l.a.createElement("div",{className:"contact__title-line"})),l.a.createElement("p",{className:"contact__detail"},"Les champs précédés d'un astérisque (*) sont obligatoires."),l.a.createElement("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine"},l.a.createElement("form",{className:"contact__form",onSubmit:function(e){e.preventDefault(),t()}},l.a.createElement("label",{htmlFor:"lastName",className:"contact__form-label"},"Nom de famille *",l.a.createElement("input",{className:"contact__form-input",type:"text",name:"lastName",id:"lastName",placeholder:"Nom",autoComplete:"on",pattern:"([ a-zA-Z---áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)",onChange:o,value:n})),l.a.createElement("label",{htmlFor:"firstName",className:"contact__form-label"},"Prénom *",l.a.createElement("input",{className:"contact__form-input",type:"text",name:"firstName",id:"firstName",placeholder:"Prénom",autoComplete:"on",pattern:"([ a-zA-Z---áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)",onChange:o,value:c})),l.a.createElement("label",{htmlFor:"phone",className:"contact__form-label"},"Téléphone",l.a.createElement("input",{className:"contact__form-input",type:"tel",name:"phone",id:"phone",placeholder:"0* ** ** ** **",autoComplete:"on",pattern:"([ 0-9-/-]*)",onChange:o,value:r})),l.a.createElement("label",{htmlFor:"email",className:"contact__form-label"},"Adresse Email *",l.a.createElement("input",{className:"contact__form-input",type:"email",name:"email",id:"email",placeholder:"exemple@gmail.com",autoComplete:"on",pattern:"([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$)",onChange:o,value:i})),l.a.createElement("label",{htmlFor:"message",className:"contact__form-label"},"Message *",l.a.createElement("textarea",{rows:"10",className:"contact__form-input",name:"message",id:"message",placeholder:"Votre message ...",autoComplete:"off",pattern:"([ a-zA-Z-0-9-,-.---_?!:()áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)",onChange:o,value:s})),l.a.createElement("button",{type:"submit",className:"contact__form-button"},"Envoyer",l.a.createElement(A.a,{icon:I.f,className:"contact__form-button-icone"})))))};q.propTypes={handleChange:P.a.func.isRequired,registrationSubmit:P.a.func.isRequired,lastName:P.a.string.isRequired,firstName:P.a.string.isRequired,phone:P.a.string.isRequired,email:P.a.string.isRequired,message:P.a.string.isRequired};var R=q,T=Object(r.b)((function(e){return{lastName:e.contact.lastName,firstName:e.contact.firstName,phone:e.contact.phone,email:e.contact.email,message:e.contact.message}}),(function(e){return{handleChange:function(a,t){e(function(e,a){return{type:"CHANGE_FIELD",identifier:e,value:a}}(a,t))},registrationSubmit:function(){e({type:"REGISTRATION_SUBMIT"})}}}))(R),B=(t(32),t(3)),x=function(e){var a=e.showIcons,t=e.clickShowIcons,n="footer__list-link-linkedin",c="",r="footer__list-link-github",i="",s="footer__list-link-facebook",o="";return!0===a&&(n="footer__list-link-linkedin show__linkedin",c="https://www.linkedin.com/in/julien-gabard",r="footer__list-link-github show__github",i="https://github.com/julien-gabard",s="footer__list-link-facebook show__facebook",o="https://www.facebook.com/julien.gabard.3/"),l.a.createElement("div",{className:"footer"},l.a.createElement("h4",{className:"footer__title"},"Julien Gabard ",l.a.createElement("span",{className:"footer__title-copy"},"©")),l.a.createElement("div",{className:"footer__user",onClick:function(){t()}},l.a.createElement(A.a,{icon:I.g,className:"footer__user-icone"})),l.a.createElement("div",{className:"footer__list"},l.a.createElement("a",{href:c,className:n},l.a.createElement(A.a,{icon:B.i,className:"footer__list-link-icone"})),l.a.createElement("a",{href:i,className:r},l.a.createElement(A.a,{icon:B.e,className:"footer__list-link-icone github"})),l.a.createElement("a",{href:o,className:s},l.a.createElement(A.a,{icon:B.c,className:"footer__list-link-icone"}))))};x.propTypes={showIcons:P.a.bool.isRequired,clickShowIcons:P.a.func.isRequired};var D=x,L=Object(r.b)((function(e){return{showIcons:e.footer.showIcons}}),(function(e){return{clickShowIcons:function(){e({type:"CLICK_SHOW_ICONS"})}}}))(D),z=(t(33),function(e){var a=e.displayBoard,t=e.clickBoardLink,n="board",c="board__li";!0===a&&(n="board board-open",c="board__li li-open");var r=function(){t()};return l.a.createElement("div",{className:n},l.a.createElement("ul",{className:"board__ul"},l.a.createElement("li",{className:c},l.a.createElement("a",{href:"#about",className:"board__li-link",onClick:r},"A propos")),l.a.createElement("li",{className:c},l.a.createElement("a",{href:"#skill",className:"board__li-link",onClick:r},"Compétences")),l.a.createElement("li",{className:c},l.a.createElement("a",{href:"#training",className:"board__li-link",onClick:r},"Formation")),l.a.createElement("li",{className:c},l.a.createElement("a",{href:"#project",className:"board__li-link",onClick:r},"Projets")),l.a.createElement("li",{className:c},l.a.createElement("a",{href:"#contact",className:"board__li-link",onClick:r},"Contact"))))});z.propTypes={displayBoard:P.a.bool,clickBoardLink:P.a.func.isRequired},z.defaultProps={displayBoard:P.a.bool};var F=z,M=Object(r.b)((function(e){return{displayBoard:e.menu.displayBoard}}),(function(e){return{clickBoardLink:function(){e({type:"MENU_BUTTON_ACTION"})}}}))(F);t(34);function H(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,l=!1,c=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(e){l=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(l)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return J(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var U=function(e){var a=e.displayBoard,t=e.onHandleClick,c="nav-icon",r="menu__link-up",i=H(Object(n.useState)(0),2),s=i[0],o=i[1],m=function(){o(window.pageYOffset)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}})),!0===a&&(c="nav-icon open"),0===s&&(r="menu__link-up visible"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu",onScroll:m},l.a.createElement("button",{type:"button",className:"menu__button",onClick:function(){t()}},l.a.createElement("div",{className:c},l.a.createElement("div",null))),l.a.createElement("a",{href:"#home",className:r},l.a.createElement(A.a,{icon:I.a,className:"menu__link-up-icone"})),l.a.createElement("ul",{className:"menu__list-link-ul"},l.a.createElement("li",{className:"menu__list-link-li"},l.a.createElement("a",{href:"#about",className:"menu__list-link-a"},"A propos")),l.a.createElement("li",{className:"menu__list-link-li"},l.a.createElement("a",{href:"#skill",className:"menu__list-link-a"},"Compétences")),l.a.createElement("li",{className:"menu__list-link-li"},l.a.createElement("a",{href:"#training",className:"menu__list-link-a"},"Formation")),l.a.createElement("li",{className:"menu__list-link-li"},l.a.createElement("a",{href:"#project",className:"menu__list-link-a"},"Projets")),l.a.createElement("li",{className:"menu__list-link-li"},l.a.createElement("a",{href:"#contact",className:"menu__list-link-a"},"Contact")))),l.a.createElement(M,null))};U.propTypes={displayBoard:P.a.bool.isRequired,onHandleClick:P.a.func.isRequired};var G=U,V=Object(r.b)((function(e){return{displayBoard:e.menu.displayBoard}}),(function(e){return{onHandleClick:function(){e({type:"MENU_BUTTON_ACTION"})}}}))(G),W=(t(35),function(){return l.a.createElement("div",{className:"background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}))}),Y=t.p+"images/b5bf60ab228ad7e5288c260406707cca.png",Q=(t(36),function(){return l.a.createElement("div",{className:"home",id:"home"},l.a.createElement("img",{src:Y,alt:"logo-planet",className:"home__logo"}),l.a.createElement("h1",{className:"home__name"},"Julien Gabard"),l.a.createElement("p",{className:"home__content"},"Développeur web"))}),Z=(t(37),t.p+"images/353785fb6903b827a934882b409ec796.jpg"),K=function(){return l.a.createElement("div",{className:"about",id:"about"},l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{className:"about-content__title"},l.a.createElement("h2",{className:"about-content__title-content"},"A propos"),l.a.createElement("div",{className:"about-content__title-line"})),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200"},l.a.createElement("p",{className:"about-content__content"},"Bonjour moi c'est Julien, développeur web curieux, rigoureux et autonome.")),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200"},l.a.createElement("p",{className:"about-content__content"},"En novembre 2019, j'ai entamé une reconversion dans le domaine du développement web en suivant une formation intensive chez",l.a.createElement("a",{href:"https://oclock.io/?gclid=EAIaIQobChMIkoOAtvX56gIVCPhRCh1QLAvnEAAYASAAEgJ7afD_BwE",className:"about-content__content-link"}," O'clock "),"qui ces terminer en mai 2020.")),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200"},l.a.createElement("p",{className:"about-content__content"},"Après, de nombreuse années dans la mécanique auto et dans la vente commerciale, il était temps pour moi de me tourner vers un domaine qui me passionne depuis de nombreuse années et où j'allais m'épanouir.")),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200"},l.a.createElement("p",{className:"about-content__content"},"Passionné par l'univers du web, j'ai naturellement choisi de me spécialiser dans les langages axés UI plus particulièrement React.js."))),l.a.createElement("div",{className:"about-author"},l.a.createElement("div",{"data-aos":"flip-left","data-aos-offset":"200","data-aos-easing":"linear","data-aos-duration":"1000"},l.a.createElement("div",{className:"about-picture"},l.a.createElement("img",{src:Z,alt:"julien",className:"about-picture__img"}))),l.a.createElement("div",{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"1500"},l.a.createElement("div",{className:"about__link-list"},l.a.createElement("a",{href:"https://www.linkedin.com/in/julien-gabard"},l.a.createElement(A.a,{icon:B.i,className:"about__link-list-icone"})),l.a.createElement("a",{href:"https://github.com/julien-gabard"},l.a.createElement(A.a,{icon:B.e,className:"about__link-list-icone github"})),l.a.createElement("a",{href:"https://www.facebook.com/julien.gabard.3/"},l.a.createElement(A.a,{icon:B.c,className:"about__link-list-icone"}))))))},$=(t(38),function(){return l.a.createElement("div",{className:"skill",id:"skill"},l.a.createElement("div",{className:"skill__title"},l.a.createElement("div",{className:"skill__title-line"}),l.a.createElement("h2",{className:"skill__title-content"},"Compétences")),l.a.createElement("div",{"data-aos":"flip-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"},l.a.createElement("div",{className:"skill__list"},l.a.createElement("h3",{className:"skill__list-title"},"Technologies & Outils"),l.a.createElement("div",{className:"skill__list-seperate"}),l.a.createElement("div",{className:"skill__list-content"},l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.f,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"HTML 5")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.b,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"CSS 3")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.g,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"JavaScript")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.j,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"PHP")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.k,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"React")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.d,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"Github")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.l,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"Sass")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.m,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"Yarn")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.a,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"Bootstrap")),l.a.createElement("div",{className:"skill__list-item"},l.a.createElement(A.a,{icon:B.h,className:"skill__list-item-logo"}),l.a.createElement("p",{className:"skill__list-item-name"},"Laravel")))),l.a.createElement("div",{className:"skill__personality"},l.a.createElement("h3",{className:"skill__personality-title"},"Personnalité"),l.a.createElement("div",{className:"skill__personality-seperate"}),l.a.createElement("p",{className:"skill__personality-content"},"Autonome"),l.a.createElement("p",{className:"skill__personality-content"},"Travail en équipe"),l.a.createElement("p",{className:"skill__personality-content"},"Curieux"),l.a.createElement("p",{className:"skill__personality-content"},"Rigoureux"),l.a.createElement("p",{className:"skill__personality-content"},"Ambitieux"))))}),X=(t(39),t.p+"images/ac7e1890cc57e54a1cf36213cc36ff2c.png"),ee=t.p+"images/10b6d4d86a7da34057d8c4cf814d94ec.svg",ae=function(){return l.a.createElement("div",{className:"training",id:"training"},l.a.createElement("div",{className:"training__title"},l.a.createElement("h2",{className:"training__title-content"},"Formation"),l.a.createElement("div",{className:"training__title-line"})),l.a.createElement("div",{className:"training__detail"},l.a.createElement(A.a,{icon:I.b,className:"training__detail-icone"}),l.a.createElement("p",{className:"training__detail-p"},"Formation de 6 mois en téléprésentiel du 15/11/19 au 01/05/20 chez",l.a.createElement("a",{href:"https://oclock.io/formations/developpeur-web",className:"training__detail-p-link"},"O'clock"),".")),l.a.createElement("div",{className:"training__detail"},l.a.createElement(A.a,{icon:I.c,className:"training__detail-icone"}),l.a.createElement("p",{className:"training__detail-p"},"3 mois de socle HTML5, CSS3, PHP et JavaScipt.")),l.a.createElement("div",{className:"training__detail"},l.a.createElement(A.a,{icon:I.c,className:"training__detail-icone"}),l.a.createElement("p",{className:"training__detail-p"},"1 mois de spécialisation React, Redux.")),l.a.createElement("div",{className:"training__detail"},l.a.createElement(A.a,{icon:I.c,className:"training__detail-icone"}),l.a.createElement("p",{className:"training__detail-p"},"1 mois de projet en conditions professionnelles")),l.a.createElement("div",{className:"training__detail"},l.a.createElement(A.a,{icon:I.d,className:"training__detail-icone"}),l.a.createElement("p",{className:"training__detail-p"},"Titre Professionnel Développeur Web et Web mobile de Niveau V ( bac +2 )")),l.a.createElement("div",{className:"training__content"},l.a.createElement("p",{className:"training__content-p"},"Cette formation m'a permis d'acquérir les bonnes pratiques : écrire un code propre, lisible, créer des sites entièrement responcive, savoir chercher les réponses à un problème, et finalement, j'ai appris à apprendre."),l.a.createElement("p",{className:"training__content-p"},"Le dernier mois de formation était consacré à la réalisation d'un projet en équipe, en suivant la méthode Agile et en conditions professionnelles."),l.a.createElement("p",{className:"training__content-p"},"Au-delà des compétences purement techniques, j'ai appris à mener un projet de bout en bout, préparer les documents de conception tels que le cahier des charges, les wireframes, définir un MVP, créer les Users stories avec Trello, ainsi que les documents propres à la base de données (MCD et dictionnaire de données).")),l.a.createElement("div",{"data-aos":"fade-down","data-aos-duration":"2000"},l.a.createElement("div",{className:"training__logo"},l.a.createElement("a",{href:"https://oclock.io/?gclid=EAIaIQobChMIpMzH5uSB6wIVF4jVCh2BFgsREAAYASAAEgI9nfD_BwE"},l.a.createElement("img",{src:X,alt:"logo",className:"training__logo-img"})),l.a.createElement("a",{href:"https://directory.opquast.com/fr/certificat/SRDTJA/"},l.a.createElement("img",{src:ee,alt:"logo",className:"training__logo-img"})))))},te=(t(40),function(){return l.a.createElement("div",{className:"project",id:"project"},l.a.createElement("div",{className:"project__title"},l.a.createElement("div",{className:"project__title-line"}),l.a.createElement("h2",{className:"project__title-content"},"Projets")),l.a.createElement("div",{className:"project__content"},l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200","data-aos-duration":"1000"},l.a.createElement("div",{className:"project__card"},l.a.createElement("h3",{className:"project__card-title"},"Snake"),l.a.createElement("p",{className:"project__card-content"},"Le projet est un petit jeu Snake sur navigateur. Je prévois un système de score, de difficultés et d'un historique des scores avec le pseudo de la personne."),l.a.createElement("div",{className:"project__card-list__label"},l.a.createElement("p",{className:"project__card-label"},"React"),l.a.createElement("p",{className:"project__card-label"},"Webpack"),l.a.createElement("p",{className:"project__card-label"},"Babel")),l.a.createElement("div",{className:"project__card-list-icone"},l.a.createElement("a",{href:"https://github.com/julien-gabard/Snake-Game"},l.a.createElement(A.a,{icon:B.d,className:"project__card-icone"})),l.a.createElement(A.a,{icon:I.e,className:"project__card-icone"})))),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200","data-aos-duration":"1000"},l.a.createElement("div",{className:"project__card project__jeveuxpermuter"},l.a.createElement("h3",{className:"project__card-title"},"jeveuxpermuter.com"),l.a.createElement("p",{className:"project__card-content"},"Le site permet à un agent de la fonction publique de pouvoirs trouvé un permutant facilement dans toute la France. Pour l'instant, il est orienté pour la police, on a le projet de l'ouvrir a plus de corps de métiers de la fonction publique comme par exemple les hôpitaux, la gendarmerie..."),l.a.createElement("div",{className:"project__card-list__label"},l.a.createElement("p",{className:"project__card-label"},"React"),l.a.createElement("p",{className:"project__card-label"},"Axios"),l.a.createElement("p",{className:"project__card-label"},"React-router"),l.a.createElement("p",{className:"project__card-label"},"symfony 5")),l.a.createElement("div",{className:"project__card-list-icone"},l.a.createElement("a",{href:"https://github.com/O-clock-Atlantis/projet-permutation-front"},l.a.createElement(A.a,{icon:B.d,className:"project__card-icone"})),l.a.createElement("a",{href:"https://jeveuxpermuter.com/"},l.a.createElement(A.a,{icon:I.e,className:"project__card-icone"}))))),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200","data-aos-duration":"1000"},l.a.createElement("div",{className:"project__card project__todolist"},l.a.createElement("h3",{className:"project__card-title"},"TodoList"),l.a.createElement("p",{className:"project__card-content"},"C'est un petit site permettant de gérer ses tâches, quel que soit leur sujet. Il ne contient qu'une seule et unique page permettant de réaliser toutes les actions nécessaires. Cette page va lister toutes les tâches déjà saisies, ainsi que leurs catégories respectives. Seuls les tâches actives (non archivées) sont affichées par défaut."),l.a.createElement("div",{className:"project__card-list__label"},l.a.createElement("p",{className:"project__card-label"},"JavaScript"),l.a.createElement("p",{className:"project__card-label"},"Lumen")),l.a.createElement("div",{className:"project__card-list-icone"},l.a.createElement("a",{href:"https://github.com/julien-gabard/Todolist"},l.a.createElement(A.a,{icon:B.d,className:"project__card-icone"})),l.a.createElement(A.a,{icon:I.e,className:"project__card-icone"})))),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200","data-aos-duration":"1000"},l.a.createElement("div",{className:"project__card project__oshop"},l.a.createElement("h3",{className:"project__card-title"},"Oshop (back-end)"),l.a.createElement("p",{className:"project__card-content"},"Back-end de l'application Oshop réalisé en cours. Possibilité de créer un compte, de se connecter et gestion des comptes en admin. Créer, éditer et sdownprimer des produits, catégories, etc."),l.a.createElement("div",{className:"project__card-list__label"},l.a.createElement("p",{className:"project__card-label"},"Lumen")),l.a.createElement("div",{className:"project__card-list-icone"},l.a.createElement("a",{href:"https://github.com/julien-gabard/Oshop-backend"},l.a.createElement(A.a,{icon:B.d,className:"project__card-icone"}))))),l.a.createElement("div",{"data-aos":"zoom-in","data-aos-offset":"200","data-aos-duration":"1000"},l.a.createElement("div",{className:"project__card project__portfolio"},l.a.createElement("h3",{className:"project__card-title"},"Portfolio v1.0"),l.a.createElement("p",{className:"project__card-content"},"Protfolio développer avec React / Redux. Animation faite en SCSS et avec la librairie AOS."),l.a.createElement("div",{className:"project__card-list__label"},l.a.createElement("p",{className:"project__card-label"},"React"),l.a.createElement("p",{className:"project__card-label"},"Redux"),l.a.createElement("p",{className:"project__card-label"},"Librairie AOS"),l.a.createElement("p",{className:"project__card-label"},"PHP")),l.a.createElement("div",{className:"project__card-list-icone"},l.a.createElement("a",{href:"https://github.com/julien-gabard/Todolist"},l.a.createElement(A.a,{icon:B.d,className:"project__card-icone"})),l.a.createElement(A.a,{icon:I.e,className:"project__card-icone"}))))))}),ne=function(){return Object(n.useEffect)((function(){C.a.init()})),l.a.createElement("div",{className:"app"},l.a.createElement(W,null),l.a.createElement(V,null),l.a.createElement(Q,null),l.a.createElement(K,null),l.a.createElement($,null),l.a.createElement(ae,null),l.a.createElement(te,null),l.a.createElement(T,null),l.a.createElement(L,null))},le=l.a.createElement(r.a,{store:O},l.a.createElement(ne,null)),ce=document.getElementById("root");Object(c.render)(le,ce)}],[[17,1,2]]]);