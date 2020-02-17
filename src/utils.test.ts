import { randomPick } from './utils';

test('picks a random number of elements from an array', () => {
  const items = [1, 2, 3, 4, 5];

  const randomItems = randomPick(items, 2);

  expect(randomItems.length).toBe(2);
});
