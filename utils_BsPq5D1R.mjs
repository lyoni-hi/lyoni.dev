async function redirectTo404(url, headers) {
  const res = await fetch(new URL("/404", url), {
    headers
  });
  return new Response(res.body, {
    status: 404,
    statusText: "Not Found",
    headers: {
      ...res.headers,
      "Content-Type": "text/html"
    }
  });
}

export { redirectTo404 as r };
//# sourceMappingURL=utils_BsPq5D1R.mjs.map
