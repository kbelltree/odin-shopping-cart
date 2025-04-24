import { it, expect, describe, afterEach, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import useItemsData from '@/components/UI/useItemsData/useItemsData';
import mockData from '../fixtures/mockData';

describe('useItemData hook', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('initially returns null for "allData" and "error", and true for "isLoading"', () => {
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      });
    });

    const { result } = renderHook(() =>
      useItemsData('https://fakestoreapi.com/products')
    );
    // These tests are intentionally kept synchronous to verify the initial states before data fetching begins
    expect(result.current.allData).toBe(null);
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(true);
  });

  it('fetches data successfully, returning filtered data for "allData", null for "error", and false for "isLoading"', async () => {
    //   This mocks successful data fetching
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      });
    });

    const { result } = renderHook(() =>
      useItemsData('https://fakestoreapi.com/products')
    );

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');

    await waitFor(() => {
      expect(result.current.allData.length).toBe(6);
      expect(result.current.error).toBeNull();
      expect(result.current.isLoading).toBe(false);
    });
  });

  it('returns error message with status code when HTTP response is not ok, and null for allData', async () => {
    // This mocks unsuccessful data fetching returned with a status code
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: false,
        status: 404,
      });
    });

    const { result } = renderHook(() =>
      useItemsData('https://fakestoreapi.com/products')
    );

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
      // The "throw new Error" creates an error instance, including a "message" property to access the error details
      expect(result.current.error.message).toBe('HTTP Error Status 404');
      expect(result.current.allData).toBeNull();
    });
  });

  it('returns "mock error!" for "error", and null for "allData" when data fetching fails', async () => {
    // mocked error code
    const mockedError = new Error('mock error!');

    // This mocks request failure returning error message
    globalThis.fetch = vi.fn(() => Promise.reject(mockedError));

    const { result } = renderHook(() =>
      useItemsData('https://fakestoreapi.com/products')
    );

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
      expect(result.current.error).toBe(mockedError);
      expect(result.current.allData).toBeNull();
    });
  });
});
