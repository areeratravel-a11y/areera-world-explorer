export function renderErrorPage(errorDetail?: string): string {
  const safeDetail = errorDetail ? errorDetail.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0f172a; color: #f8fafc; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 34rem; width: 100%; text-align: center; padding: 2rem; background: #1e293b; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); }
      h1 { font-size: 1.5rem; margin: 0 0 0.5rem; font-weight: 700; }
      p { color: #94a3b8; margin: 0 0 1.5rem; font-size: 0.95rem; }
      .error-box { text-align: left; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; padding: 0.75rem 1rem; border-radius: 0.5rem; font-family: monospace; font-size: 0.8rem; max-height: 12rem; overflow: auto; margin-bottom: 1.5rem; white-space: pre-wrap; word-break: break-all; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.25rem; border-radius: 0.5rem; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #3b82f6; color: #fff; }
      .secondary { background: rgba(255,255,255,0.05); color: #f8fafc; border-color: rgba(255,255,255,0.15); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end.</p>
      ${safeDetail ? `<div class="error-box">${safeDetail}</div>` : ""}
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
