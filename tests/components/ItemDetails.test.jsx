import { it, expect, describe, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  MemoryRouter,
  Routes,
  Route,
  useOutletContext,
} from 'react-router-dom';
import ItemDetails from '@/components/UI/ItemDetails/ItemDetails';

// create mock useOutletContext
vi.mock('react-router-dom', async () => {
  const reactRouterDOM = await vi.importActual('react-router-dom');
  return {
    ...reactRouterDOM,
    useOutletContext: vi.fn(),
  };
});

describe('ItemDetails Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders h1 title, price, image, description when allData have the data with matching "id"', () => {
    // create mock return value containing actual property keys
    useOutletContext.mockReturnValue({
      allData: [
        {
          id: 1,
          title: 'Mock Item',
          price: 100,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'test',
          image: 'https://placehold.co/400',
        },
      ],
      isLoading: false,
      error: null,
    });

    // recreate the route
    render(
      <MemoryRouter initialEntries={['/category/test/1']}>
        <Routes>
          <Route path="category/:categoryName/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /mock item/i })
    ).toBeInTheDocument();

    expect(screen.getByText('USD 100')).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://placehold.co/400'
    );

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      )
    ).toBeInTheDocument();
  });

  it('displays "Loading..." when "isLoading" is true', () => {
    useOutletContext.mockReturnValue({
      allData: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/category/test/1']}>
        <Routes>
          <Route path="category/:categoryName/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('displays "Something went wrong." when "error" message is returned', () => {
    useOutletContext.mockReturnValue({
      allData: null,
      isLoading: false,
      error: 'error',
    });

    render(
      <MemoryRouter initialEntries={['/category/test/1']}>
        <Routes>
          <Route path="category/:categoryName/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/something went wrong./i)).toBeInTheDocument();
  });

  it('displays "Something went wrong." when there is no data with matching "id"', () => {
    useOutletContext.mockReturnValue({
      allData: [
        {
          id: 2,
          title: 'Mock Item',
          price: 100,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'test',
          image: 'https://placehold.co/400',
        },
      ],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/category/test/1']}>
        <Routes>
          <Route path="category/:categoryName/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/something went wrong./i)).toBeInTheDocument();
  });

  it('renders fallback image when no imgSrc path is provided', () => {
    useOutletContext.mockReturnValue({
      allData: [
        {
          id: 1,
          title: 'Mock Item',
          price: 100,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'test',
          image: '',
        },
      ],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/category/test/1']}>
        <Routes>
          <Route path="category/:categoryName/:id" element={<ItemDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/src/assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp'
    );
  });
});
