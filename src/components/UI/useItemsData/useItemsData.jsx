import { useState, useEffect } from 'react';
import { filterDataByCategories } from '@/components/utility/organizeData';

function useItemsData(url) {
  const [allData, setAllData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItemsData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error Status ${response.status}`);
        }
        const data = await response.json();
        const cleanedUpData = filterDataByCategories(data, [
          'jewelery',
          "women's clothing",
        ]);
        setAllData(cleanedUpData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setAllData(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItemsData();
  }, [url]);

  return { allData, error, isLoading };
}

export default useItemsData;
