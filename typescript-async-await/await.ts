import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  const msg = await read('foo/bar.html');
  console.log(elapsed(), 'readOnce:', msg);
}

async function readSeveral(): Promise<void> {
  const msg = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg);
  const msg2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg2);
  const msg3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg3);
}

async function readChained(): Promise<void> {
  const message1 = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', message1);
  const message2 = await read(message1);
  console.log(elapsed(), 'readChained2:', message2);
  const message3 = await read(message2);
  console.log(elapsed(), 'readChained3:', message3);
}

await readOnce();
await readSeveral();
await readChained();
