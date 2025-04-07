import { e as createAstro, f as createComponent, j as renderComponent, k as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import { $ as $$CenteredBody } from '../chunks/Footer_CPOEv_Yo.mjs';
import { $ as $$Layout } from '../chunks/Layout_Dl2Oe81r.mjs';
/* empty css                                   */
export { r as renderers } from '../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro = createAstro("https://vendicated.dev");
const prerender = true;
const $$Convert = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Convert;
  Astro2.params.lang = "en";
  return renderTemplate`<!-- this is just a random page to convert Aliucord themes -->${renderComponent($$result, "Layout", $$Layout, { "title": "Aliucord Theme Converter", "description": "A tool that allows you to convert Aliucord Themer themes to Xposed Themer compatible themes", "data-astro-cid-s4vypwdx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-s4vypwdx": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-s4vypwdx>Aliucord Theme Converter</h1> <p data-astro-cid-s4vypwdx>
This tool allows you to convert themes created with the Themer
            plugin to themes compatible with the Xposed module.
</p> <p data-astro-cid-s4vypwdx>
Note that the Xposed module does not have as many features as the
            plugin, so things like backgrounds will not work!
</p> <section data-astro-cid-s4vypwdx> <label for="file" data-astro-cid-s4vypwdx> <input type="file" id="file" name="file" accept="application/json" data-astro-cid-s4vypwdx>
Choose a theme to convert</label> </section> ` })} ` })} ${renderScript($$result, "/Users/lyoni/Documents/prince.site/src/pages/convert.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/lyoni/Documents/prince.site/src/pages/convert.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/convert.astro";
const $$url = "/convert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Convert,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=convert.astro.mjs.map
