import { e as createAstro, f as createComponent, m as maybeRenderHead, s as spreadAttributes, n as renderSlot, r as renderTemplate, j as renderComponent, h as addAttribute, k as renderScript } from './astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import { L as Link } from './Footer_CPOEv_Yo.mjs';

const $$Astro$1 = createAstro("https://vendicated.dev");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const { title, ...svgProps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true"${spreadAttributes(svgProps, void 0, { "class": "astro-uwsf2fbm" })} data-astro-cid-uwsf2fbm> <title>${title}</title> ${renderSlot($$result, $$slots["default"])} </svg> `;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/Icon.astro", void 0);

const $$Codeberg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 24 24", "title": "Codeberg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="var(--color)" d="M12 1A11 11 0 0 0 1 12a11 11 0 0 0 1.7 6.4L12 6l9.3 12.4A11 11 0 0 0 23 12 11 11 0 0 0 12 1Z"></path> <path fill="var(--color-semi-trans)" d="M21.3 18.4 12 6l4.4 16.8a11 11 0 0 0 4.9-4.4Z"></path> ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/Codeberg.astro", void 0);

const $$Email = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 1792 1408", "title": "Email", "class": "email-icon", "data-astro-cid-4mrgas7y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M1792 454v794q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V454q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48T1194 886q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38T639 759q-91-64-262-182.5T172 434q-62-42-117-115.5T0 182q0-78 41.5-130T160 0h1472q65 0 112.5 47t47.5 113z" data-astro-cid-4mrgas7y></path> ` })} `;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/Email.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 496 512", "title": "GitHub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path> ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/GitHub.astro", void 0);

const $$PgpKey = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 512 512", "title": "PGP Key" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path> ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/PgpKey.astro", void 0);

const $$Telegram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 496 512", "title": "Telegram" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path> ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/Telegram.astro", void 0);

const $$Mastodon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "viewBox": "0 0 448 512", "title": "Mastodon" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path fill="currentColor" d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"></path> ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/components/Icons/Mastodon.astro", void 0);

const $$Astro = createAstro("https://vendicated.dev");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Social;
  const { href, text, id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(id, "id")} data-astro-cid-yxtifmrq> ${renderSlot($$result, $$slots["default"], renderTemplate` ${renderSlot($$result, $$slots["icon"])} <h3 data-astro-cid-yxtifmrq>${title}</h3> ${renderComponent($$result, "Link", Link, { "href": href, "class": "content", "rel": "me", "data-astro-cid-yxtifmrq": true }, { "default": ($$result2) => renderTemplate`${text}` })} `)} </li> `;
}, "/Users/lyoni/Documents/prince.site/src/components/Social.astro", void 0);

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-upu6fzxr> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-upu6fzxr": true }, { "default": ($$result2) => renderTemplate` <iframe id="discord-widget" title="User Embed" width="340" height="120" frameborder="0" sandbox="allow-scripts" src="https://widgets.vendicated.dev/user?id=125550059533107200&theme=light&banner=true&full-banner=false&rounded-corners=false&discord-icon=true" data-astro-cid-upu6fzxr></iframe> ` })} ${renderComponent($$result, "Social", $$Social, { "title": "Github", "text": "Lyoni", "href": "https://github.com/lyoni-hi", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "GitHub", $$GitHub, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Codeberg", "text": "Lyoni", "href": "https://codeberg.org/lyoni", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Codeberg", $$Codeberg, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Telegram", "text": "@Non Yet", "href": "https://t.me/", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Telegram", $$Telegram, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Mastodon", "text": "@Lyoni", "href": "https://mastodon.social/@lyoni", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Mastodon", $$Mastodon, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "Email", "text": "Non Yet", "href": "mailto:Vendcated%20<Non Yet>", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Email", $$Email, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} ${renderComponent($$result, "Social", $$Social, { "title": "PGP", "text": "2796F0BF", "href": "/pgp_key.asc.txt", "data-astro-cid-upu6fzxr": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "PgpKey", $$PgpKey, { "slot": "icon", "data-astro-cid-upu6fzxr": true })}` })} </ul> ${renderScript($$result, "/Users/lyoni/Documents/prince.site/src/components/Socials.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/lyoni/Documents/prince.site/src/components/Socials.astro", void 0);

export { $$Socials as $ };
//# sourceMappingURL=Socials_D7iJi5ek.mjs.map
