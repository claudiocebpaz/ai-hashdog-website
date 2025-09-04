export async function onRequestPost({ request }: { request: Request }) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "");
  const email = String(form.get("email") ?? "");
  const message = String(form.get("message") ?? "");

  // TODO: integrate MailChannels, KV, or D1 if you want persistence/email.
  return new Response(JSON.stringify({ ok: true, name, email, message }), {
    headers: { "content-type": "application/json" },
  });
}
