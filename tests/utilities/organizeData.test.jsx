import { it, expect, describe } from 'vitest';
import {
  filterDataByCategories,
  groupDataByCategory,
  removeByUniqueId,
} from '@/components/utility/organizeData';
import mockData from '../fixtures/mockData';

describe('filterDataByCategories utility function', () => {
  const data = mockData;
  it('return an array containing filtered object by categories', () => {
    const filteredData = filterDataByCategories(data, ["women's clothing"]);
    expect(filteredData.length).toBe(3);
    expect(filteredData).toEqual([
      {
        id: 1,
        title: 'Sweater Lorem Ipsum',
        price: 100,
        description:
          'Aliquam consequat dignissim sem viverra auctor. Nulla mattis at odio ac viverra. Morbi sit amet scelerisque diam. Phasellus ultricies dolor arcu, sed accumsan eros bibendum mollis.',
        category: "women's clothing",
        image: 'https://placehold.co/400',
        rating: {
          rate: 3,
          count: 98,
        },
      },
      {
        id: 2,
        title: 'Tank-Top Etiam suscipit Leo Sed Sem Laoreet',
        price: 25,
        description:
          'Vivamus a dapibus mi. Suspendisse potenti. Nullam eu lectus quis justo tincidunt interdum.',
        category: "women's clothing",
        image: 'https://placehold.co/400',
        rating: {
          rate: 4,
          count: 120,
        },
      },
      {
        id: 3,
        title: 'Skirt Integer Tristique Tempor 2stibulum',
        price: 59.5,
        description:
          'Phasellus tristique neque sit amet elit aliquam placerat. Sed mauris felis, tempus ut pulvinar a, venenatis et ante. Phasellus condimentum augue enim, eget ornare erat auctor facilisis. Fusce iaculis mauris elit, et semper quam sollicitudin vitae.',
        category: "women's clothing",
        image: 'https://placehold.co/400',
        rating: {
          rate: 3.8,
          count: 90,
        },
      },
    ]);
  });
});

describe('groupDataByCategory utility function', () => {
  it('return an object containing arrays of objects grouped by category', () => {
    const testData = [
      { title: 'Necklace', category: 'jewelery' },
      { title: 'Dress', category: 'clothing' },
      { title: 'Earrings', category: 'jewelery' },
      { title: 'Sweater', category: 'clothing' },
      { title: 'Bracelet', category: 'jewelery' },
      { title: 'Shorts', category: 'clothing' },
      { title: 'Ring', category: 'jewelery' },
      { title: 'Jacket', category: 'clothing' },
      { title: 'Anklet', category: 'jewelery' },
      { title: 'Tee-Shirt', category: 'clothing' },
    ];

    const groupedData = groupDataByCategory(testData);
    expect(groupedData).toEqual({
      jewelery: [
        { title: 'Necklace', category: 'jewelery' },
        { title: 'Earrings', category: 'jewelery' },
        { title: 'Bracelet', category: 'jewelery' },
        { title: 'Ring', category: 'jewelery' },
        { title: 'Anklet', category: 'jewelery' },
      ],
      clothing: [
        { title: 'Dress', category: 'clothing' },
        { title: 'Sweater', category: 'clothing' },
        { title: 'Shorts', category: 'clothing' },
        { title: 'Jacket', category: 'clothing' },
        { title: 'Tee-Shirt', category: 'clothing' },
      ],
    });
  });
});

describe('removeByUniqueId utility function', () => {
  it('filters out matching item from data by target id', () => {
    const testData = [
      { uniqueId: 'abc11', title: 'Dress', category: 'clothing' },
      { uniqueId: '12abc', title: 'Sweater', category: 'clothing' },
      { uniqueId: 'ab13c', title: 'Shorts', category: 'clothing' },
      { uniqueId: 'a14bc', title: 'Jacket', category: 'clothing' },
    ];

    const filtered = removeByUniqueId(testData, 'ab13c');
    expect(filtered).toEqual([
      { uniqueId: 'abc11', title: 'Dress', category: 'clothing' },
      { uniqueId: '12abc', title: 'Sweater', category: 'clothing' },
      { uniqueId: 'a14bc', title: 'Jacket', category: 'clothing' },
    ]);
  });
});
