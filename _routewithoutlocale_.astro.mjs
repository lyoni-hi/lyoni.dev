import { e as createAstro, f as createComponent } from '../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import 'clsx';
import { r as redirectTo404 } from '../chunks/utils_BsPq5D1R.mjs';
import parser from 'accept-language-parser';
import { L as Locales } from '../chunks/index_BeN_NuJi.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro = createAstro("https://vendicated.dev");
const $$routeWithoutLocale = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$routeWithoutLocale;
  const routes = ["about", "contact", "blog"];
  const route = Astro2.params.routeWithoutLocale;
  if (!routes.includes(route))
    return redirectTo404(Astro2.url, Astro2.request.headers);
  const acceptLanguages = Astro2.request.headers.get("Accept-Language");
  if (!acceptLanguages) return Astro2.redirect(`/en/${route}`, 302);
  const lang = parser.pick(Locales, acceptLanguages) || "en";
  return Astro2.redirect(`/${lang}/${route}`, 302);
}, "/Users/lyoni/Documents/prince.site/src/pages/[routeWithoutLocale].astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[routeWithoutLocale].astro";
const $$url = "/[routeWithoutLocale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$routeWithoutLocale,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_routewithoutlocale_.astro.mjs.map
