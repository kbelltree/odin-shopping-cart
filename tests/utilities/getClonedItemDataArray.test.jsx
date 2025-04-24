import { it, expect, describe } from 'vitest';
import getClonedItemDataArray from '@/components/utility/getClonedItemDataArray';

describe('getClonedItemDataArray function', () => {
  const mockItemData = {
    id: 1,
    title: 'mock title',
    price: 10,
    description: 'Lorem ipsum',
    category: 'test',
    image: 'https://placehold.co/400',
  };
  it('returns null when "0" is passed in "itemCount"', () => {
    const countZero = getClonedItemDataArray(0, mockItemData);
    expect(countZero).toBeNull();
  });

  it('returns an array containing two copies of mockItemData when "2" is passed in "itemCount" ', () => {
    const countTwo = getClonedItemDataArray(2, mockItemData);
    expect(countTwo.length).toBe(2);
    countTwo.forEach((data) => {
      expect(data).toHaveProperty('id', 1);
      expect(data).toHaveProperty('category', 'test');
    });
  });
});
