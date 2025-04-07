import { e as createAstro, f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import { $ as $$CenteredBody } from '../../chunks/Footer_CPOEv_Yo.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dl2Oe81r.mjs';
import { l as loadStrings, g as getStaticPaths } from '../../chunks/index_BeN_NuJi.mjs';
/* empty css                                  */
export { r as renderers } from '../../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro = createAstro("https://vendicated.dev");
const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("404.title"), "description": t("404.description"), "data-astro-cid-oiktujcs": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-oiktujcs": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-oiktujcs>${t("404.title")}</h1> <h3 data-astro-cid-oiktujcs>${t("404.notFound")}</h3> <p data-astro-cid-oiktujcs>${t("404.lost")}</p> <p data-astro-cid-oiktujcs>${t("404.goHome")}</p> <a href="/" data-astro-cid-oiktujcs> <img src="https://cdn.discordapp.com/emojis/432715085526597634.webp"${addAttribute(t("404.koishiAlt"), "alt")} data-astro-cid-oiktujcs> </a> ` })} ` })} `;
}, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/404.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/404.astro";
const $$url = "/[lang]/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=404.astro.mjs.map
