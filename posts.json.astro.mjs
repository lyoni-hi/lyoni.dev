export { r as renderers } from '../../../chunks/_@astro-renderers_CsPQPv2m.mjs';

async function buildPostData(ctx, req) {
  const post = await req();
  const { description, publishDate, section, tags, title, updateDate } = post.frontmatter;
  return {
    url: new URL(post.url, ctx.url.origin).href,
    title,
    description,
    section,
    tags: tags.split(",").map((s) => s.trim()) || [],
    publishDate,
    updateDate: updateDate ?? null
  };
}
const get = async (ctx) => {
  const files = Object.values([() => import('../../../chunks/test_Bo6FNclZ.mjs').then(n => n._)]);
  const posts = await Promise.all(
    Object.values(files).map((file) => buildPostData(ctx, file))
  );
  posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  return { body: JSON.stringify(posts) };
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=posts.json.astro.mjs.map
