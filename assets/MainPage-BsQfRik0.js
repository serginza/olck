import{a as C,b as v,r as c,u as k,e as B,j as e,c as S,g as T,C as w,T as M,d as P,s}from"./index-7bCmljKF.js";import{B as I,S as o,T as a}from"./ButtonElement-CqfkeVGc.js";import{a as A,L as D,C as N}from"./Contacts-ijRt2NBB.js";const $=[{title:"Индивидуальный подход",description:"Мы понимаем, что каждый клиент уникален. Наши решения адаптируются под ваши нужды, чтобы вы получили только лучшие результаты."},{title:"Быстрая доставка (Вами от нас))))",description:"Мы обеспечиваем быструю и надежную доставку ваших товаров, гарантируя, что они будут доставлены в срок и в идеальном состоянии."},{title:"Профессиональная поддержка",description:"Наша команда всегда готова помочь вам. Мы предоставляем круглосуточную поддержку и консультации, чтобы вы могли принять обоснованные решения."},{title:"Эко-продукты",description:"Мы предлагаем экологически чистые товары, которые безопасны для вашего здоровья и окружающей среды, без компромиссов по качеству."},{title:"Технологические новинки",description:"Будь то гаджеты или инновационные устройства, мы предлагаем только лучшие новинки технологий, которые помогут вам быть на шаг впереди."},{title:"Стиль и комфорт",description:"Наши товары для дома и офиса создаются с учетом последних трендов в дизайне, гарантируя стиль и комфорт в вашем пространстве."}];function E(t={}){const{themeId:d,defaultTheme:m,defaultClassName:x="MuiBox-root",generateClassName:h}=t,g=C("div",{shouldForwardProp:n=>n!=="theme"&&n!=="sx"&&n!=="as"})(v);return c.forwardRef(function(u,f){const r=k(m),{className:j,component:b="div",...y}=B(u);return e.jsx(g,{as:b,ref:f,className:S(j,h?h(x):x),theme:d&&r[d]||r,...y})})}const W=T("MuiBox",["root"]),z=P(),i=E({themeId:M,defaultTheme:z,defaultClassName:W.root,generateClassName:w.generate}),F=s.div`
  width: 100%;
`,l=s.section`
  width: 100%;
  display: flex;
  height: ${t=>t.height||"auto"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 0;
  background-color: ${t=>t.backgroundColor||"none"};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${t=>t.backgroundImage||"none"};
    opacity: ${t=>t.opacity||1};
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`,R=s(i)`
  height: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`,p=s(I)`
  width: 300px;
  height: 60px;
  font-size: 1.5rem;
`,G={display:"grid",gridTemplateColumns:"repeat(3, 1fr)","@media (max-width: 1024px)":{gridTemplateColumns:"repeat(2, 1fr)"},"@media (max-width: 480px)":{gridTemplateColumns:"1fr"}},L={width:"100%",maxWidth:"1280px",paddingBottom:"100px",display:"flex",flexDirection:"row",alignItems:"center","@media (max-width: 1024px)":{flexDirection:"column"}},U="/assets/hero-background-Bh20MGki.jpg";function _(){return e.jsxs(F,{children:[e.jsx(l,{backgroundImage:`url(${U})`,opacity:.1,height:"500px",children:e.jsxs(o,{sx:L,children:[e.jsxs(i,{style:{margin:"0 32px"},"aria-labelledby":"fact heading",children:[e.jsxs(a,{variant:"h1",margin:"32px 0",children:["КАЧЕСТВО И УДОБСТВО ",e.jsx("br",{})," ДЛЯ ВАС"]}),e.jsxs(a,{variant:"h5",textAlign:"justify",children:["Добро пожаловать на наш сайт, где качество встречает удобство."," ",e.jsx("br",{}),"Мы предлагаем широкий выбор товаров и услуг, созданных с заботой о ваших потребностях. ",e.jsx("br",{}),"Будь то покупки для дома или профессиональные решения — здесь вы найдете всё, что нужно для вашего комфорта и успеха.",e.jsx("br",{}),"Сделайте свой выбор прямо сейчас и наслаждайтесь отличным обслуживанием и быстрой доставкой (но это не точно)!"]})]}),e.jsxs(R,{children:[e.jsx(p,{variant:"contained",children:"ТОВАРЫ"}),e.jsx(p,{variant:"contained",children:"УСЛУГИ"})]})]})}),e.jsx(l,{backgroundColor:"rgba(255, 205, 149, 60)",children:e.jsxs(o,{p:"0 0 40px",maxWidth:"1280px",display:"flex",justifyContent:"center",alignItems:"center",gap:"24px",children:[e.jsx(a,{variant:"h2",m:"48px 32px",letterSpacing:1.3,textAlign:"center","aria-labelledby":"facts subheading",children:"ВЫБОР УВЕРЕННЫХ В СЕБЕ"}),e.jsx(i,{"aria-labelledby":"facts overstatement",sx:G,children:$.map(t=>e.jsxs(i,{sx:{margin:"0 32px 32px"},children:[e.jsx(a,{fontWeight:600,children:t.title}),e.jsx(a,{variant:"body2",textAlign:"justify",children:t.description})]},t.title))})]})}),e.jsx(l,{height:"250px",children:e.jsxs(o,{maxWidth:"1280px",display:"flex",justifyContent:"center",alignItems:"center",gap:"24px",children:[e.jsx(a,{variant:"h3",letterSpacing:1.3,mt:"32px",mb:"16px",textAlign:"center","aria-labelledby":"more facts heading",children:"ОСТАЛИСЬ ВОПРОСЫ???"}),e.jsx(A,{"aria-label":"contact us"}),e.jsx(D,{href:"#",sx:{textDecorationColor:"var(--dark-indigo-100)","&:hover":{textDecorationColor:"var(--dark-indigo-100)"}},children:e.jsxs(a,{variant:"h3",sx:{cursor:"default"},children:["+7(999)999-99-99"," "]})}),e.jsx(N,{phone:!0,vk:!0,telegram:!0,size:40})]})})]})}const H=c.memo(_);function q(){return e.jsx(H,{})}const V=c.memo(q);export{V as default};
