import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeCategorySection from '@/components/UI/HomeCategorySection/HomeCategorySection';

describe('HomeCategorySection component', () => {
  it('renders heading "Shop by Category"', () => {
    render(
      <MemoryRouter>
        <HomeCategorySection />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /shop by category/i })
    ).toBeInTheDocument();
  });

  it('renders two CardCategory components', () => {
    render(
      <MemoryRouter>
        <HomeCategorySection />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link', { name: /shop/i })).lengthOf(2);
  });

  it('renders correct category titles "clothing" and "jewelry"', () => {
    render(
      <MemoryRouter>
        <HomeCategorySection />
      </MemoryRouter>
    );
    expect(screen.getByText(/clothing/i)).toBeInTheDocument();
    expect(screen.getByText(/jewelry/i)).toBeInTheDocument();
  });
});
