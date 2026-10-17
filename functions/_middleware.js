// Permanent (301) redirect from the old worleystudio.pages.dev address to worleystudio.dev.
// Keeps the path and query string. Only the exact old hostname is redirected,
// so worleystudio.dev and preview deployments are not affected.
// To undo: delete this file (functions/_middleware.js) and redeploy.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "worleystudio.pages.dev") {
    return Response.redirect("https://worleystudio.dev" + url.pathname + url.search, 301);
  }
  return context.next();
}
