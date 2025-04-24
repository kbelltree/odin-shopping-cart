import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  MemoryRouter,
  Routes,
  Route,
  useOutletContext,
} from 'react-router-dom';
import Category from '@/components/Layout/Category/Category';
import { groupDataByCategory } from '@/components/utility/organizeData';

// Mock the useOutletContext returned data while keeping rest of router-dom function intact
vi.mock('react-router-dom', async () => {
  const reactRouterDOM = await vi.importActual('react-router-dom');
  return {
    ...reactRouterDOM,
    useOutletContext: vi.fn(),
  };
});

// Mock the groupDataByCategory utility
vi.mock('@/components/utility/organizeData', () => ({
  groupDataByCategory: vi.fn(),
}));

describe('Category component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('displays "Loading..." when "isLoading" is true', () => {
    useOutletContext.mockReturnValue({
      allData: null,
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/category/all']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
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
      <MemoryRouter initialEntries={['/category/all']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/something went wrong./i)).toBeInTheDocument();
  });

  it('displays "Something went wrong." when no grouped items is returned (undefined)', () => {
    useOutletContext.mockReturnValue({
      allData: null,
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/category/all']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/something went wrong./i)).toBeInTheDocument();
  });
});

describe('Category component', () => {
  beforeEach(() => {
    useOutletContext.mockReturnValue({
      allData: [
        {
          id: 1,
          title: 'Sweater Lorem Ipsum',
          category: "women's clothing",
          image: '',
        },
        {
          id: 2,
          title: 'Tank-Top Etiam suscipit Leo Sed Sem Laoreet',
          category: "women's clothing",
          image: '',
        },
        {
          id: 4,
          title: 'Ring Lorem Ipsum',
          category: 'jewelery',
          image: '',
        },
      ],
      isLoading: false,
      error: null,
    });
    groupDataByCategory.mockReturnValue({
      ["women's clothing"]: [
        {
          id: 1,
          title: 'Sweater Lorem Ipsum',
          category: "women's clothing",
          image: '',
        },
        {
          id: 2,
          title: 'Tank-Top Etiam suscipit Leo Sed Sem Laoreet',
          category: "women's clothing",
          image: '',
        },
      ],
      jewelery: [
        {
          id: 4,
          title: 'Ring Lorem Ipsum',
          category: 'jewelery',
          image: '',
        },
      ],
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders "All Items" in an h1 heading and displays all items when the "all" path is provided in useParams', () => {
    // recreate the route
    render(
      <MemoryRouter initialEntries={['/category/all']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /all items/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/sweater/i)).toBeInTheDocument();
    expect(screen.getByText(/tank-top/i)).toBeInTheDocument();
    expect(screen.getByText(/ring/i)).toBeInTheDocument();
  });

  it('renders "Clothing" in an h1 heading and displays two clothing items when the "women\'s clothing" path is provided in useParams', () => {
    render(
      <MemoryRouter
        initialEntries={[`/category/${encodeURIComponent("women's clothing")}`]}
      >
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /clothing/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/sweater/i)).toBeInTheDocument();
    expect(screen.getByText(/tank-top/i)).toBeInTheDocument();
    expect(screen.queryByText(/ring/i)).not.toBeInTheDocument();
  });

  it('renders "Jewelry" in an h1 heading and displays one jewelry item when the "jewelery" path is provided in useParams', () => {
    render(
      <MemoryRouter initialEntries={['/category/jewelery']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /jewelry/i })
    ).toBeInTheDocument();
    expect(screen.queryByText(/sweater/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/tank-top/i)).not.toBeInTheDocument();
    expect(screen.getByText(/ring/i)).toBeInTheDocument();
  });

  it('does not render any content when there is no matching itemData by the url parameter found', () => {
    render(
      <MemoryRouter initialEntries={['/category/unavailable']}>
        <Routes>
          <Route path="category/:categoryName" element={<Category />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
    expect(screen.queryByText(/sweater/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/ring/i)).not.toBeInTheDocument();
  });
});
