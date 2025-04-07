const LocaleStrings = {
  // de: () => import("./de"),
  en: () => import('./en_BW81mMpJ.mjs')
};
const Locales = Object.keys(LocaleStrings);
const getStaticPaths = () => Object.keys(LocaleStrings).map((lang) => ({ params: { lang } }));
async function loadStrings(locale, throwIfMissing = false) {
  if (!locale || !LocaleStrings[locale]) {
    if (throwIfMissing) throw new Error("Invalid locale " + locale);
    return null;
  }
  const { default: strings } = await LocaleStrings[locale]();
  return function(trans, params) {
    let v = strings;
    for (const path of trans.split(".")) {
      v = v[path];
      if (!v) throw new Error("Missing translation " + trans);
    }
    if (typeof v !== "string")
      throw new Error("Missing translation " + trans);
    if (params)
      for (const [key, value] of Object.entries(params)) {
        v = v.replaceAll(`{{${key}}}`, value);
      }
    return v;
  };
}

export { Locales as L, getStaticPaths as g, loadStrings as l };
//# sourceMappingURL=index_BeN_NuJi.mjs.map
