import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the animated DAASK home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /DAASK Build Ltd \| Registered Building Contractor in Donegal/);
  assert.match(html, /Where engineering meets/);
  assert.match(html, /hero-daask-dusk\.webp/);
  assert.match(html, /hero-scan/);
  assert.match(html, /Live architectural experience/);
  assert.match(html, /Donegal and surrounding areas/);
  assert.match(html, /daaskbuild@gmail\.com/);
  assert.doesNotMatch(html, /Premium redesign preview|Interactive 3D architectural study/);
});

test("keeps every primary page server-renderable", async () => {
  for (const pathname of ["/services", "/projects", "/about", "/how-we-work", "/contact"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, pathname);
  }
});

test("ships one accessible shared motion system", async () => {
  const [motion, css] = await Promise.all([
    readFile(new URL("../app/scroll-reveal.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../public/hero-daask-dusk.webp", import.meta.url)),
  ]);

  assert.match(motion, /prefers-reduced-motion/);
  assert.match(motion, /IntersectionObserver/);
  assert.match(motion, /--scroll-progress/);
  assert.match(motion, /--parallax-shift/);
  assert.match(css, /heroScan/);
  assert.match(css, /site-cursor-glow/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});
