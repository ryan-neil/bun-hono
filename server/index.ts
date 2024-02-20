import { Hono } from 'hono';

const app = new Hono();

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
