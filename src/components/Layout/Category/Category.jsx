import { useParams, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemsByCategory from '@/components/UI/ItemsByCategory/ItemsByCategory';
import { groupDataByCategory } from '@/components/utility/organizeData';

function Category() {
  const { categoryName } = useParams();
  const { allData, error, isLoading } = useOutletContext();
  const [groupedItems, setGroupedItems] = useState(null);

  useEffect(() => {
    if (allData) {
      setGroupedItems(groupDataByCategory(allData));
    }
  }, [allData]);

  if (isLoading) return <p>Loading...</p>;
  if (error || !groupedItems) return <p>Something went wrong.</p>;

  return (
    <main>
      {categoryName === 'all' ? (
        // Render all items when the 'all' category is selected
        <ItemsByCategory categoryTitle="All Items" itemsData={allData} />
      ) : (
        // Render items for the selected category when its link is selected
        <ItemsByCategory
          categoryTitle={categoryName}
          itemsData={groupedItems[categoryName]}
        />
      )}
    </main>
  );
}

export default Category;
