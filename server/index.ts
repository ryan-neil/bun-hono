import { Hono } from 'hono';
import bookRouter from './routes/books';
import streamRouter from './routes/stream';
import { logger } from 'hono/logger';

const app = new Hono();

// Middleware
app.use('*', logger());

// Routing
app.get('/hello-world', (ctx) => {
  return ctx.json({ hello: 'World!' });
});

app.route('/books', bookRouter);
app.route('/stream', streamRouter);

// Server
Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
