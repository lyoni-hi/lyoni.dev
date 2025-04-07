import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent } from '../../chunks/astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
import 'clsx';
import { B as BlogFrontmatterSchema } from '../../chunks/types_BmQDp-_R.mjs';
/* empty css                                    */
import { $ as $$CenteredBody } from '../../chunks/Footer_CPOEv_Yo.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Dl2Oe81r.mjs';
import { l as loadStrings, g as getStaticPaths } from '../../chunks/index_BeN_NuJi.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CsPQPv2m.mjs';

const $$Astro$1 = createAstro("https://vendicated.dev");
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { url, frontmatter } = Astro2.props.post;
  const { description, title, publishDate, tags, section } = BlogFrontmatterSchema.parse(frontmatter);
  const dateString = publishDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-f45vxlzk> <a${addAttribute(url, "href")} data-astro-cid-f45vxlzk> <div class="card" data-astro-cid-f45vxlzk> <h2 data-astro-cid-f45vxlzk>${title}</h2> <p data-astro-cid-f45vxlzk>${description}</p> <div class="footer" data-astro-cid-f45vxlzk> <span class="date" data-astro-cid-f45vxlzk>${dateString}</span> <span data-astro-cid-f45vxlzk>·</span> <span class="section" data-astro-cid-f45vxlzk>${section}</span> </div> </div> </a> </section> `;
}, "/Users/lyoni/Documents/prince.site/src/components/BlogPostCard.astro", void 0);

const $$Astro = createAstro("https://vendicated.dev");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = [];
  const t = await loadStrings(Astro2.params.lang, true);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("blog.title"), "description": t("blog.description") }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CenteredBody", $$CenteredBody, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>${t("blog.title")}</h1> <p>${t("blog.teehee")}</p> <div> ${posts.map((p) => renderTemplate`${renderComponent($$result3, "BlogPostCard", $$BlogPostCard, { "post": p })}`)} </div> ` })} ` })}`;
}, "/Users/lyoni/Documents/prince.site/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

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
//# sourceMappingURL=blog.astro.mjs.map
