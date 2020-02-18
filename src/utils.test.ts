import { randomPick } from './utils';

test('picks a random number of elements from an array', () => {
  const items = [1, 2, 3, 4, 5];

  const randomItems = randomPick(items, 2);

  expect(randomItems.length).toBe(2);
});

test('reuses the original array if the number of items is larger than the items to pick from', () => {
  const items = [1, 2];

  const randomItems = randomPick(items, 20);

  expect(randomItems.length).toBeGreaterThan(items.length);
});
