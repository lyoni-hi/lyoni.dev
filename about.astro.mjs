import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent } from '../../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import { $ as $$CenteredBody } from '../../chunks/Footer_CPOEv_Yo.mjs';
import 'clsx';
/* empty css                                    */
import { $ as $$Layout } from '../../chunks/Layout_Dl2Oe81r.mjs';
import { l as loadStrings } from '../../chunks/index_BeN_NuJi.mjs';
import { r as redirectTo404 } from '../../chunks/utils_BsPq5D1R.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro$1 = createAstro("https://vendicated.dev");
const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechStack;
  const stack = {
    Backend: [
      {
        name: "Go",
        url: "https://go.dev"
      },
      {
        name: "Crystal",
        url: "https://crystal-lang.org/"
      },
      {
        name: "Node.js",
        url: "https://nodejs.dev"
      },
      {
        name: "Java",
        url: "https://www.java.com"
      },
      {
        name: "Python",
        url: "https://www.python.org"
      }
    ],
    Frontend: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org"
      },
      {
        name: "SCSS",
        url: "https://sass-lang.com"
      },
      {
        name: "Astro",
        url: "https://astro.build"
      },
      {
        name: "React",
        url: "https://react.dev"
      },
      {
        name: "Svelte",
        url: "https://svelte.dev"
      }
    ],
    Native: [
      {
        name: "Electron",
        url: "https://www.electronjs.org"
      },
      {
        name: "Android",
        url: "https://www.android.com"
      },
      {
        name: "Kotlin",
        url: "https://kotlinlang.org"
      },
      {
        name: "Flutter",
        url: "https://flutter.dev"
      }
    ],
    Databases: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org"
      },
      {
        name: "SQLite",
        url: "https://www.sqlite.org"
      }
    ],
    Linux: [
      {
        name: "Docker",
        url: "https://www.docker.com"
      },
      {
        name: "Bash",
        url: "https://www.gnu.org/software/bash"
      },
      {
        name: "Debian",
        url: "https://www.debian.org"
      },
      {
        name: "Fedora",
        url: "https://fedoraproject.org"
      },
      {
        name: "Caddy",
        url: "https://caddyserver.com"
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-lfow52u2> ${Object.entries(stack).map(([name, items]) => renderTemplate`<section data-astro-cid-lfow52u2> <h3 data-astro-cid-lfow52u2>${name}</h3> <div class="items" data-astro-cid-lfow52u2> ${items.map(({ name: name2, url }) => renderTemplate`<a${addAttribute(url, "href")} data-astro-cid-lfow52u2> <img${addAttribute(`/assets/stack/${name2.toLowerCase()}.svg`, "src")}${addAttribute(name2, "title")} data-astro-cid-lfow52u2> </a>`)} </div> </section>`)} </div> `;
}, "/Users/lyoni/Documents/prince.site/src/components/TechStack.astro", void 0);

const SECONDS = 1;
const MINUTES = 60 * SECONDS;
function cache(res, seconds) {
  res.headers.set(
      "Cache-Control",
      `public, max-age=${seconds}, s-maxage=${seconds}`
    );
  return res;
}

const $$Astro = createAstro("https://vendicated.dev");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  cache(Astro2.response, 20 * MINUTES);
  const t = await loadStrings(Astro2.params.lang);
  if (!t) return await redirectTo404(Astro2.url, Astro2.request.headers);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("about.title"), "description": t("about.description") }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, { "margin": "10%" }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>${t("about.title")}</h1> <p>${t("about.intro")}</p> <h2 id="tech-stack">${t("about.stack")}</h2> ${renderComponent($$result3, "TechStack", $$TechStack, {})}` })}` })}`;
}, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/about.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=about.astro.mjs.map
