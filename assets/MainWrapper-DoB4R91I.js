import{s as t,r as a,j as e,R as r,O as o}from"./index-7bCmljKF.js";import{L as l,C as s}from"./Contacts-ijRt2NBB.js";import{S as i,T as n}from"./ButtonElement-CqfkeVGc.js";const c=t.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,d=t.main`
  width: 100%;
  min-width: 320px;
  margin: 72px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,p=t.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  min-width: 320px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid var(--soft-indigo-30);
  background-color: var(--soft-blue-100);
`,x=t.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-right: 32px;
`,m=t.footer`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100vw;
  min-width: 320px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 2px solid var(--soft-indigo-30);
  background-color: var(--soft-blue-100);
`;function h(){return e.jsxs(c,{children:[e.jsx(p,{children:e.jsxs(i,{width:"100%",maxWidth:"1280px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(l,{href:r,sx:{textDecoration:"none",color:"var(--dark-indigo-100)"},"aria-label":"go to facts company homepage",children:e.jsx(n,{variant:"h6",marginLeft:"32px","aria-labelledby":"company-header",children:"Olck Company"})}),e.jsx(x,{"aria-label":"main navigation",children:e.jsx(s,{telegram:!0,phone:!0,vk:!0})})]})}),e.jsx(d,{children:e.jsx(o,{})}),e.jsx(m,{children:e.jsxs(i,{width:"100%",maxWidth:"1280px",display:"flex",flexDirection:"column",justifyContent:"space-center",alignItems:"center",children:[e.jsxs(n,{variant:"h6","aria-labelledby":"company footer",children:["Olck Company ",new Date().getFullYear()]}),e.jsx(n,{variant:"caption","aria-labelledby":"company owner",children:"by Serginza ©"})]})})]})}const f=a.memo(h);function u(){return e.jsx(f,{})}const w=a.memo(u);export{w as default};
