import{C as p,u as g,D as b,E as r,F as f,G as h,I as u,J as v,K as _,L as y,t as w,M as k,N as L,O as E,y as I}from"./template.CTp10Bdc.js";import"./polyfills.Cc8Gd0uS.js";/* empty css                      */const T="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(T);p();function S(t=!1){const e=g,n=e.l.u;if(!n)return;let o=()=>_(e.s);if(t){let s=0,a={};const m=y(()=>{let c=!1;const l=e.s;for(const i in l)l[i]!==a[i]&&(a[i]=l[i],c=!0);return c&&s++,s});o=()=>u(m)}n.b.length&&b(()=>{d(e,o),f(n.b)}),r(()=>{const s=h(()=>n.m.map(v));return()=>{for(const a of s)typeof a=="function"&&a()}}),n.a.length&&r(()=>{d(e,o),f(n.a)})}function d(t,e){if(t.l.s)for(const n of t.l.s)u(n);e()}function x(t=!document.body.classList.contains("dark")){const e=t?"dark":"light";return localStorage.setItem("theme",e),document.body.classList.add("disable-transitions"),document.body.classList.toggle("dark",t),setImmediate(()=>document.body.classList.remove("disable-transitions")),document.dispatchEvent(new Event("themechange")),console.log("Switched theme to",e),t}var C=k('<button aria-label="toggle dark theme" tabindex="0" class="svelte-gsiawk"></button>');function B(t,e){w(e,!1);function n(s){x(),s instanceof PointerEvent&&s.pointerType&&s.target.blur()}S();var o=C();L("click",o,n),E(t,o),I()}export{B as default};
//# sourceMappingURL=ThemeToggle.Clqm78EB.js.map
