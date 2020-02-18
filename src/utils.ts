function getRandomIndex<T>(array: T[]) {
  /**
   * Math.random returns a random number between 0 and less than 1,
   * so multiply the random number by the array length to get a
   * random number between [0..array.length - 1] then floor to get
   * a whole number.
   */
  return Math.floor(Math.random() * array.length);
}

export function randomPick<T>(items: T[], number: number) {
  let randomItems: T[] = [];
  let unusedItems = items.slice(0);

  for (let remainingItems = number; remainingItems > 0; remainingItems--) {
    let randomIndex = getRandomIndex(unusedItems);
    let randomItem = unusedItems[randomIndex];
    randomItems.push(randomItem);
    unusedItems.splice(randomIndex, 1);

    if (unusedItems.length === 0) {
      unusedItems = items.slice(0);
    }
  }

  return randomItems;
}
