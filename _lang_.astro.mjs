import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent, l as Fragment, u as unescapeHTML, k as renderScript } from '../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dl2Oe81r.mjs';
import { $ as $$Socials } from '../chunks/Socials_D7iJi5ek.mjs';
import { $ as $$CenteredBody } from '../chunks/Footer_CPOEv_Yo.mjs';
import 'clsx';
/* empty css                                 */
import { l as loadStrings, g as getStaticPaths } from '../chunks/index_BeN_NuJi.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro$2 = createAstro("https://vendicated.dev");
const $$Fren = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Fren;
  const { name, url, source } = Astro2.props;
  const AVATAR_BASE = source === "cobu" ? "https://codeberg.org" : "https://github.com";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} data-astro-cid-xpc5w4um> <img${addAttribute(name + "'s site", "title")}${addAttribute(`${AVATAR_BASE}/${name}.png?size=256`, "src")} data-astro-cid-xpc5w4um> </a> `;
}, "/Users/lyoni/Documents/prince.site/src/components/Fren.astro", void 0);

const $$Astro$1 = createAstro("https://vendicated.dev");
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Trans;
  const tagsRe = /<([\w\d]+)([^>]*)>/gi;
  const t = await loadStrings(Astro2.params.lang, true);
  const template = t(Astro2.props.i18nKey);
  const html = await Astro2.slots.render("default");
  let result = template;
  for (let i = 0, match = tagsRe.exec(html); match; match = tagsRe.exec(html), i++) {
    const [, name, attrs] = match;
    result = result.replaceAll(`<${i}>`, `<${name}${attrs}>`).replaceAll(`</${i}>`, `</${name}>`);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(result)}` })}`;
}, "/Users/lyoni/Documents/prince.site/src/locales/Trans.astro", void 0);

const $$Astro = createAstro("https://vendicated.dev");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("home.title"), "description": t("home.description"), "data-astro-cid-ct3bgug4": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "data-astro-cid-ct3bgug4": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-ct3bgug4> <h1 data-astro-cid-ct3bgug4> ${renderComponent($$result3, "Trans", $$Trans, { "i18nKey": "home.hello", "data-astro-cid-ct3bgug4": true }, { "default": async ($$result4) => renderTemplate`
Hi, I'm <span data-astro-cid-ct3bgug4>Lyoni!</span> ` })} </h1> <p data-astro-cid-ct3bgug4> ${t("home.about")} <br data-astro-cid-ct3bgug4> ${t("home.about2")} </p> </section> <section id="socials" data-astro-cid-ct3bgug4> <h2 data-astro-cid-ct3bgug4>${t("home.socialsTitle")}</h2> ${renderComponent($$result3, "Socials", $$Socials, { "class": "socials", "data-astro-cid-ct3bgug4": true })} </section> <section id="friends" data-astro-cid-ct3bgug4> <h2 data-astro-cid-ct3bgug4>${t("home.friendsTitle")}</h2> <div id="frens" data-astro-cid-ct3bgug4> ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "source": "cobu", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "source": "cobu", "data-astro-cid-ct3bgug4": true })} ${renderComponent($$result3, "Fren", $$Fren, { "name": "No one yet", "url": "https://discord.gg/qXJEhKxtpk", "data-astro-cid-ct3bgug4": true })} </div> </section> ` })} ` })} ${renderScript($$result, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/index.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_lang_.astro.mjs.map
