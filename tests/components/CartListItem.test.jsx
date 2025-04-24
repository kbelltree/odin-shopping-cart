import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useOutletContext } from 'react-router-dom';
import mockData from '../fixtures/mockData';
import CartListItem from '@/components/UI/CartListItem/CartListItem';

// use mock useOutletContext to escape from deleteCartItem null error
vi.mock('react-router-dom', async () => {
  const reactRouterDOM = await vi.importActual('react-router-dom');
  return {
    ...reactRouterDOM,
    useOutletContext: vi.fn(),
  };
});

describe('CartListItem component', () => {
  // run mock deleteCartItem for each test to avoid returned value "null" error
  beforeEach(() => {
    useOutletContext.mockReturnValue({
      deleteCartItem: vi.fn(),
    });
  });

  const mockItemData = mockData[0];

  it('renders the image, title, link, and price correctly when valid data is provided', () => {
    render(
      <MemoryRouter>
        <CartListItem itemData={mockItemData} />
      </MemoryRouter>
    );

    // image and attribute
    screen.getByAltText(mockItemData.title);
    expect(screen.getByRole('img')).toHaveAttribute('src', mockItemData.image);

    // h2 title
    expect(
      screen.getByRole('heading', { level: 2, name: mockItemData.title })
    ).toBeInTheDocument();

    // link and aria-label
    const link = screen.getByRole('link', {
      name: `Go to ${mockItemData.title} page`,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `/category/${mockItemData.category}/${mockItemData.id}`
    );
    expect(link).toHaveAttribute(
      'aria-label',
      `Go to ${mockItemData.title} page`
    );

    // price
    expect(screen.getByText(mockItemData.price)).toBeInTheDocument();
  });

  it('renders fallback image when image src is not provided', () => {
    mockItemData.image = undefined;

    render(
      <MemoryRouter>
        <CartListItem itemData={mockItemData} />
      </MemoryRouter>
    );

    screen.getByAltText(mockItemData.title);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/src/assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp'
    );
  });

  it('renders "/" for href path when id is not provided', () => {
    mockItemData.id = undefined;

    render(
      <MemoryRouter>
        <CartListItem itemData={mockItemData} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('renders "Error" in h2 heading, and does not render aria-label in link when title is not provided', () => {
    mockItemData.title = undefined;
    render(
      <MemoryRouter>
        <CartListItem itemData={mockItemData} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).not.toHaveAttribute('aria-label');

    expect(
      screen.getByRole('heading', { level: 2, name: /error/i })
    ).toBeInTheDocument();
  });

  it('renders "Error" in textContent in price when no price data is provided', () => {
    mockItemData.title = 'test'; // add title back to the object to avoid conflict in finding text (/error/i)
    mockItemData.price = undefined;
    render(
      <MemoryRouter>
        <CartListItem itemData={mockItemData} />
      </MemoryRouter>
    );
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
