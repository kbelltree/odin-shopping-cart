import App from '@/components/Layout/App/App';
import ErrorPage from '@/components/Layout/ErrorPage/ErrorPage';
import Home from '@/components/Layout/Home/Home';
import Category from '@/components/Layout/Category/Category';
import ItemDetails from '@/components/UI/ItemDetails/ItemDetails';
import Cart from '@/components/Layout/Cart/Cart';
import UnderConstruction from '@/components/Layout/UnderConstruction/UnderConstruction';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'category/:categoryName',
        element: <Category />,
      },
      {
        path: 'category/:categoryName/:id',
        element: <ItemDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'under-construction',
        element: <UnderConstruction />,
      },
    ],
  },
];

export default routes;
