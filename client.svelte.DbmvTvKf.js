import{i as E,g as S,H as D,a as H,b as $,s as h,c as R,h as L,d as v,e as I,f as M,j as P,k as j,l as C,m as Y,r as x,n as V,o as y,p as W,q,t as z,u as B,v as m,w as N,x as F,y as G,z as J,A as K,B as Q}from"./template.CTp10Bdc.js";const U=["touchstart","touchmove"];function X(e){return U.includes(e)}function O(e,t){return k(e,t)}function Z(e,t){E(),t.intro=t.intro??!1;const n=t.target,d=m,s=v;try{for(var r=S(n);r&&(r.nodeType!==8||r.data!==D);)r=H(r);if(!r)throw $;h(!0),R(r),L();const a=k(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==I)throw M(),$;return h(!1),a}catch(a){if(a===$)return t.recover===!1&&P(),E(),j(n),h(!1),O(e,t);throw a}finally{h(d),R(s)}}const p=new Map;function k(e,{target:t,anchor:n,props:d={},events:s,context:r,intro:a=!0}){E();var o=new Set,u=c=>{for(var f=0;f<c.length;f++){var l=c[f];if(!o.has(l)){o.add(l);var b=X(l);t.addEventListener(l,y,{passive:b});var A=p.get(l);A===void 0?(document.addEventListener(l,y,{passive:b}),p.set(l,1)):p.set(l,A+1)}}};u(C(Y)),x.add(u);var i=void 0,_=V(()=>{var c=n??t.appendChild(W());return q(()=>{if(r){z({});var f=B;f.c=r}s&&(d.$$events=s),m&&N(c,null),i=e(c,d)||{},m&&(F.nodes_end=v),r&&G()}),()=>{for(var f of o){t.removeEventListener(f,y);var l=p.get(f);--l===0?(document.removeEventListener(f,y),p.delete(f)):p.set(f,l)}x.delete(u),c!==n&&c.parentNode?.removeChild(c)}});return T.set(i,_),i}let T=new WeakMap;function ee(e,t){const n=T.get(e);return n?(T.delete(e),n(t)):Promise.resolve()}function g(e){return(t,...n)=>{var d=e(...n),s;if(m)s=v,L();else{var r=d.render().trim(),a=J(r);s=S(a),t.before(s)}const o=d.setup?.(s);N(s,s),typeof o=="function"&&K(o)}}const w=new WeakMap,se=e=>async(t,n,d,{client:s})=>{if(!e.hasAttribute("ssr"))return;let r,a,o={};for(const[i,_]of Object.entries(d))a??={},i==="default"?(a.default=!0,r=g(()=>({render:()=>`<astro-slot>${_}</astro-slot>`}))):a[i]=g(()=>({render:()=>`<astro-slot name="${i}">${_}</astro-slot>`})),i==="default"?o.children=g(()=>({render:()=>`<astro-slot>${_}</astro-slot>`})):o[i]=g(()=>({render:()=>`<astro-slot name="${i}">${_}</astro-slot>`}));const u={...n,children:r,$$slots:a,...o};if(w.has(e))w.get(e).setProps(u);else{const i=te(t,e,u,s!=="only");w.set(e,i),e.addEventListener("astro:unmount",()=>i.destroy(),{once:!0})}};function te(e,t,n,d){let s=Q(n);const r=d?Z:O;d||(t.innerHTML="");const a=r(e,{target:t,props:s});return{setProps(o){Object.assign(s,o);for(const u in s)u in o||delete s[u]},destroy(){ee(a)}}}export{se as default};
//# sourceMappingURL=client.svelte.DbmvTvKf.js.map
