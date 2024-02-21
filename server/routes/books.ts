import { Hono } from 'hono';

const books = new Hono();

books.get('/', (ctx) => {
  return ctx.text('Queried all books');
});

books.get('/:id', (ctx) => {
  const id = ctx.req.param('id');
  return ctx.text(`Queried book with id: ${id}`);
});

export default books;
