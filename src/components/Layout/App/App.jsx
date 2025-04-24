import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import useItemsData from '@/components/UI/useItemsData/useItemsData';
import { removeByUniqueId } from '@/components/utility/organizeData';

function App() {
  // Retrieve data using a fetch hook for the specified categoryName
  const { allData, error, isLoading } = useItemsData(
    'https://fakestoreapi.com/products'
  );
  const [cart, setCart] = useState([]);
  const totalItemCount = cart.length;

  function updateCart(item) {
    setCart((prev) => [...prev, ...item]);
  }

  function deleteCartItem(targetUniqueId) {
    setCart((prev) => removeByUniqueId(prev, targetUniqueId));
  }

  return (
    <>
      <Header itemCount={totalItemCount} />
      <Outlet
        context={{
          allData,
          error,
          isLoading,
          updateCart,
          deleteCartItem,
          cart,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
