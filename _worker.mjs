import { r as renderers } from './chunks/_@astro-renderers_CsPQPv2m.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Caj3ImLI.mjs';
import { manifest } from './manifest_Cfo8jcjh.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/contact-form.astro.mjs');
const _page3 = () => import('./pages/convert.astro.mjs');
const _page4 = () => import('./pages/_lang_/404.astro.mjs');
const _page5 = () => import('./pages/_lang_/about.astro.mjs');
const _page6 = () => import('./pages/_lang_/blog/posts.json.astro.mjs');
const _page7 = () => import('./pages/_lang_/blog/test.astro.mjs');
const _page8 = () => import('./pages/_lang_/blog.astro.mjs');
const _page9 = () => import('./pages/_lang_/contact.astro.mjs');
const _page10 = () => import('./pages/_lang_.astro.mjs');
const _page11 = () => import('./pages/_routewithoutlocale_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/contact-form.ts", _page2],
    ["src/pages/convert.astro", _page3],
    ["src/pages/[lang]/404.astro", _page4],
    ["src/pages/[lang]/about.astro", _page5],
    ["src/pages/[lang]/blog/posts.json.ts", _page6],
    ["src/pages/[lang]/blog/test.mdx", _page7],
    ["src/pages/[lang]/blog/index.astro", _page8],
    ["src/pages/[lang]/contact.astro", _page9],
    ["src/pages/[lang]/index.astro", _page10],
    ["src/pages/[routeWithoutLocale].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
//# sourceMappingURL=_worker.mjs.map
