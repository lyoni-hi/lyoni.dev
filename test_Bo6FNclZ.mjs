import { e as createAstro, f as createComponent, h as addAttribute, m as maybeRenderHead, o as renderHead, j as renderComponent, k as renderScript, r as renderTemplate, n as renderSlot, an as __astro_tag_component__, v as createVNode, l as Fragment } from './astro/server_BCGPJX6i.mjs';
import 'kleur/colors';
/* empty css                        */
import { I as ICON, A as AUTHOR, T as THEME_COLOUR, c as AUTHOR_URL, b as $$NavBar, $ as $$CenteredBody, a as $$Footer } from './Footer_CPOEv_Yo.mjs';
import { B as BlogFrontmatterSchema } from './types_BmQDp-_R.mjs';
/* empty css                        */
import 'clsx';

const $$Astro = createAstro("https://vendicated.dev");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, publishDate, updateDate, section, tags } = BlogFrontmatterSchema.parse(Astro2.props.frontmatter);
  return renderTemplate`<html lang="en" data-astro-cid-4dqtj3le> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon"${addAttribute(ICON, "href")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(AUTHOR, "content")}><meta name="theme-color"${addAttribute(THEME_COLOUR, "content")}><meta name="og:type" content="article"><meta name="og:title"${addAttribute(title, "content")}><meta name="og:description"${addAttribute(description, "content")}><meta name="og:url"${addAttribute(Astro2.url, "content")}><meta name="og:image"${addAttribute(ICON, "content")}><meta property="article:author"${addAttribute(AUTHOR_URL, "content")}><meta property="article:published_time"${addAttribute(publishDate.toISOString(), "content")}>${updateDate != null && renderTemplate`<meta property="article:modified_time"${addAttribute(updateDate.toISOString(), "content")}>`}<meta property="article:section"${addAttribute(section, "content")}>${tags.split(",").map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag.trim(), "content")}>`)}${maybeRenderHead()}<noscript><link id="prism-theme" rel="stylesheet" href="/styles/prism-one-light.css"></noscript>${renderHead()}</head> <body data-astro-cid-4dqtj3le> <header data-astro-cid-4dqtj3le> ${renderComponent($$result, "NavBar", $$NavBar, { "title": "Lyoni's Blog", "data-astro-cid-4dqtj3le": true })} </header> ${renderComponent($$result, "CenteredBody", $$CenteredBody, { "data-astro-cid-4dqtj3le": true }, { "default": ($$result2) => renderTemplate` <article id="blog-body" data-astro-cid-4dqtj3le> <h1 data-astro-cid-4dqtj3le>${title}</h1> <p data-astro-cid-4dqtj3le>${description}</p> ${renderSlot($$result2, $$slots["default"])} </article> ` })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-4dqtj3le": true })}  ${renderScript($$result, "/Users/lyoni/Documents/prince.site/src/layouts/BlogLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/Users/lyoni/Documents/prince.site/src/layouts/BlogLayout.astro", void 0);

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../../layouts/BlogLayout.astro",
  "title": "epic test",
  "description": "super epic",
  "tags": "read, if, cute",
  "section": "Technology",
  "publishDate": "2022-12-26T23:04:18.855Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    del: "del",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.pre, {
      class: "language-js",
      "data-language": "js",
      children: createVNode(_components.code, {
        "is:raw": "",
        class: "language-js",
        children: [createVNode(_components.span, {
          class: "token keyword",
          children: "import"
        }), " owo ", createVNode(_components.span, {
          class: "token keyword",
          children: "from"
        }), " ", createVNode(_components.span, {
          class: "token string",
          children: "\"foo\""
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ";"
        }), "\n\nconsole", createVNode(_components.span, {
          class: "token punctuation",
          children: "."
        }), createVNode(_components.span, {
          class: "token function",
          children: "log"
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: "("
        }), "owo", createVNode(_components.span, {
          class: "token template-string",
          children: [createVNode(_components.span, {
            class: "token template-punctuation string",
            children: "`"
          }), createVNode(_components.span, {
            class: "token string",
            children: "owo"
          }), createVNode(_components.span, {
            class: "token template-punctuation string",
            children: "`"
          })]
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ")"
        }), createVNode(_components.span, {
          class: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "bold"
      }), " and ", createVNode(_components.em, {
        children: "italic"
      }), " and ", createVNode(_components.del, {
        children: "strikethrough"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "unstyled blockquote whaaa"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["aaaa\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "awa"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/[lang]/blog/test";
const file = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/blog/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lyoni/Documents/prince.site/src/pages/[lang]/blog/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
//# sourceMappingURL=test_Bo6FNclZ.mjs.map
