import { e as createAstro, f as createComponent } from '../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import 'clsx';
import parser from 'accept-language-parser';
import { L as Locales } from '../chunks/index_BeN_NuJi.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro = createAstro("https://vendicated.dev");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguages = Astro2.request.headers.get("Accept-Language");
  if (!acceptLanguages) return Astro2.redirect("/en", 302);
  const lang = parser.pick(Locales, acceptLanguages) || "en";
  return Astro2.redirect(`/${lang}`, 302);
}, "/Users/lyoni/Documents/prince.site/src/pages/index.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
