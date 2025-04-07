import { e as createAstro, f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import { $ as $$CenteredBody } from '../../chunks/Footer_CPOEv_Yo.mjs';
import { $ as $$Socials } from '../../chunks/Socials_D7iJi5ek.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dl2Oe81r.mjs';
import { l as loadStrings, g as getStaticPaths } from '../../chunks/index_BeN_NuJi.mjs';
/* empty css                                      */
export { r as renderers } from '../../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro = createAstro("https://vendicated.dev");
const prerender = true;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("contact.title"), "description": t("contact.description"), "data-astro-cid-6zvldpif": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "margin": "10%", "data-astro-cid-6zvldpif": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-6zvldpif>${t("contact.title")}</h1> <div class="grid" data-astro-cid-6zvldpif> <section data-astro-cid-6zvldpif> <h2 id="socials" data-astro-cid-6zvldpif>${t("contact.socials")}</h2> ${renderComponent($$result3, "Socials", $$Socials, { "data-astro-cid-6zvldpif": true })} </section>  </div> ` })} ` })} `;
}, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/contact.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=contact.astro.mjs.map
