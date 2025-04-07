import { e as createAstro, f as createComponent, r as renderTemplate, k as renderScript, j as renderComponent, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
/* empty css                        */
import { a as $$Footer, b as $$NavBar, I as ICON, T as THEME_COLOUR, A as AUTHOR } from './Footer_CPOEv_Yo.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vendicated.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon"', "><title>", '</title><meta name="description"', '><meta name="author"', '><meta name="theme-color"', '><meta name="og:type" content="website"><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:image"', '><meta name="darkreader-lock">', '</head> <body> <script>\n            let theme = localStorage.getItem("theme");\n            if (!theme || !["light", "dark"].includes(theme)) {\n                theme = window.matchMedia("(prefers-color-scheme: dark)")\n                    .matches\n                    ? "dark"\n                    : "light";\n            }\n            document.body.classList.add(theme);\n        <\/script> <header> ', " </header> <main> ", " </main> ", " ", "</body></html>"])), addAttribute(Astro2.params.lang, "lang"), addAttribute(ICON, "href"), title, addAttribute(description, "content"), addAttribute(AUTHOR, "content"), addAttribute(THEME_COLOUR, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(ICON, "content"), renderHead(), renderComponent($$result, "NavBar", $$NavBar, { "title": title }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "/Users/lyoni/Documents/prince.site/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/lyoni/Documents/prince.site/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
//# sourceMappingURL=Layout_Dl2Oe81r.mjs.map
