import { sleep } from '../../src';

describe('Function', () => {
  test('sleep', async () => {
    await expect(sleep()).resolves.not.toThrow();
    await expect(sleep(0)).resolves.not.toThrow();
    await expect(sleep(10)).resolves.not.toThrow();
  });
});
