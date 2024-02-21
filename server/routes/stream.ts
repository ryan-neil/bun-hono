import { Hono } from 'hono';
import { streamText } from 'hono/streaming';

const stream = new Hono();

stream.get('/', (c) => {
  return streamText(c, async (str) => {
    for (let i = 0; i < 5; i++) {
      await str.write(`Hello\n`);
      await str.sleep(1000);
      await str.write(`World ${i}\n`);
    }
  });
});

export default stream;
