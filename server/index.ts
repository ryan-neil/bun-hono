console.log('Hello via Bun!');

Bun.serve({
  fetch: (request) => {
    return new Response('Hello, world!');
  },
  port: 3000,
});
