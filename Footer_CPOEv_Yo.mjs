import { e as createAstro, f as createComponent, ao as defineStyleVars, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, j as renderComponent, l as Fragment } from './astro/server_BCGPJX6i.mjs';
/* empty css                        */
import 'clsx';
import 'kleur/colors';
import { l as loadStrings, L as Locales } from './index_BeN_NuJi.mjs';
import { p as push, a as pop, s as sanitize_props, b as rest_props, c as spread_attributes, d as clsx, e as slot, f as bind_props } from './_@astro-renderers_CsPQPv2m.mjs';

const $$Astro$4 = createAstro("https://vendicated.dev");
const $$CenteredBody = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CenteredBody;
  const { margin } = Astro2.props;
  const $$definedVars = defineStyleVars([{ margin }]);
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-nuwbo64z${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/lyoni/Documents/prince.site/src/components/CenteredBody.astro", void 0);

function ThemeToggle($$payload, $$props) {
	push();

	$$payload.out += `<button aria-label="toggle dark theme" tabindex="0" class="svelte-gsiawk"></button>`;
	pop();
}

const $$Astro$3 = createAstro("https://vendicated.dev");
const $$Language = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Language;
  const { lang, active } = Astro2.props;
  const t = await loadStrings(lang);
  const name = t("name");
  return renderTemplate`${maybeRenderHead()}<div class="lang" data-astro-cid-sischp4d> <img${addAttribute(`/assets/flags/${lang}.svg`, "src")}${addAttribute(name, "alt")} data-astro-cid-sischp4d> <span data-astro-cid-sischp4d>${name}</span> ${active && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sischp4d": true }, { "default": async ($$result2) => renderTemplate` <svg class="dropdown" viewBox="0 0 16 16" data-astro-cid-sischp4d> <polygon fill="currentColor" points="3,5 8,11 13,5 " data-astro-cid-sischp4d></polygon> </svg> <svg class="check" viewBox="0 0 16 16" data-astro-cid-sischp4d> <polyline stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" points="1,9 5,13 15,3" data-astro-cid-sischp4d></polyline> </svg> ` })}`} </div> `;
}, "/Users/lyoni/Documents/prince.site/src/components/locale/Language.astro", void 0);

const $$Astro$2 = createAstro("https://vendicated.dev");
const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const { lang } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-6hjl6qfk> <details data-astro-cid-6hjl6qfk> <summary data-astro-cid-6hjl6qfk> ${renderComponent($$result, "Language", $$Language, { "lang": lang, "active": true, "data-astro-cid-6hjl6qfk": true })} </summary> ${Locales.filter((l) => l !== lang).map((l) => renderTemplate`<a${addAttribute(Astro2.url.pathname.replace(`/${lang}`, `/${l}`), "href")} data-astro-cid-6hjl6qfk> ${renderComponent($$result, "Language", $$Language, { "lang": l, "data-astro-cid-6hjl6qfk": true })} </a>`)} </details> </div> `;
}, "/Users/lyoni/Documents/prince.site/src/components/locale/LanguagePicker.astro", void 0);

const $$Astro$1 = createAstro("https://vendicated.dev");
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  const routes = ["about", "contact", "blog"];
  const { lang } = Astro2.params;
  const t = await loadStrings(lang, true);
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-ymhdp2rl> <div id="btns" data-astro-cid-ymhdp2rl> <ul data-astro-cid-ymhdp2rl> <li data-astro-cid-ymhdp2rl> <a${addAttribute(`/${lang}`, "href")} data-astro-cid-ymhdp2rl>${t("routes.home")}</a> </li> ${routes.map((route) => renderTemplate`<li data-astro-cid-ymhdp2rl> <a${addAttribute(`/${lang}/${route}`, "href")} data-astro-cid-ymhdp2rl>${t(`routes.${route}`)}</a> </li>`)} </ul> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/lyoni/Documents/prince.site/src/components/ThemeToggle.svelte", "client:component-export": "default", "data-astro-cid-ymhdp2rl": true })} ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "data-astro-cid-ymhdp2rl": true })} </div> <div id="oneko" aria-hidden="true" data-astro-cid-ymhdp2rl></div> </nav> `;
}, "/Users/lyoni/Documents/prince.site/src/components/NavBar.astro", void 0);

const AUTHOR = "Lyoni";
const AUTHOR_URL = "https://github.com/lyoni-hi";
const ICON = "https://github.com/lyoni-hi.png?size=256";
const THEME_COLOUR = "#dd7878";
const SOURCE_CODE_URL = "https://discord.gg/qXJEhKxtpk";
new Response("Not Found", { status: 404 });

function Link($$payload, $$props) {
	const $$sanitized_props = sanitize_props($$props);
	const $$restProps = rest_props($$sanitized_props, ['href', 'title', 'class']);
	let href = $$props['href'];
	let title = $$props['title'];
	let className = $$props['class'];

	$$payload.out += `<a${spread_attributes(
		{
			class: clsx(className),
			href,
			title,
			...$$restProps
		},
		'svelte-iyh9p0'
	)}><!---->`;

	slot($$payload, $$props, 'default', {});
	$$payload.out += `<!----></a>`;
	bind_props($$props, { href, title, class: className });
}

const $$Astro = createAstro("https://vendicated.dev");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte> ${t("footer.message")}<span data-astro-cid-sz7xmlte>&nbsp;•&nbsp;</span> ${renderComponent($$result, "Link", Link, { "href": SOURCE_CODE_URL, "data-astro-cid-sz7xmlte": true }, { "default": async ($$result2) => renderTemplate`${t("footer.sourceCode")}` })} </p> </footer> `;
}, "/Users/lyoni/Documents/prince.site/src/components/Footer.astro", void 0);

export { $$CenteredBody as $, AUTHOR as A, ICON as I, Link as L, THEME_COLOUR as T, $$Footer as a, $$NavBar as b, AUTHOR_URL as c };
//# sourceMappingURL=Footer_CPOEv_Yo.mjs.map
