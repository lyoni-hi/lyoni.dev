export { r as renderers } from '../chunks/_@astro-renderers_CsPQPv2m.mjs';

function getEnv(locals, metaEnv, name) {
  const env = locals.runtime.env ;
  if (!env[name]) throw new Error(`Missing environment variable "${name}"`);
  return env[name];
}

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://vendicated.dev", "SSR": true};
function isNonEmptyString(value) {
  return typeof value === "string" && value.length > 0;
}
const put = async ({ request, locals }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!isNonEmptyString(name) || !isNonEmptyString(message))
    return new Response(null, {
      status: 400
    });
  const header = `**From ${name.trim()} ${isNonEmptyString(email) ? `<${email.trim()}>` : ""}**`;
  const text = message.trim();
  const content = header + "\n\n" + text;
  if (header.length > 2e3 || content.length > 10500)
    return new Response(null, { status: 400 });
  const msgData = {
    allowed_mentions: {
      parse: []
    },
    content: content.length > 2e3 ? header : content
  };
  const payload = new FormData();
  payload.set("payload_json", JSON.stringify(msgData));
  if (text.length > 2e3)
    payload.set(
      "files[0]",
      new Blob([text], { type: "text/plain" }),
      "message.txt"
    );
  const url = new URL(getEnv(locals, Object.assign(__vite_import_meta_env__, { _: process.env._ }), "CONTACT_WEBHOOK"));
  url.searchParams.set("wait", "true");
  const res = await fetch(url, {
    method: "POST",
    body: payload
  });
  if (!res.ok) {
    console.error(
      "Error while executing contact webhook:",
      res.status,
      "\n" + await res.text().catch(() => "Unknown error")
    );
    return new Response("Failed to post message", {
      status: 502
    });
  }
  return new Response(null, {
    status: 201
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    put
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=contact-form.astro.mjs.map
