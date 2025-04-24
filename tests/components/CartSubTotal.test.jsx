import { it, expect, describe, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useOutletContext } from 'react-router-dom';
import CartSubTotal from '@/components/UI/CartSubTotal/CartSubTotal';

vi.mock('react-router-dom', async () => {
  const reactRouterDOM = await vi.importActual('react-router-dom');
  return {
    ...reactRouterDOM,
    useOutletContext: vi.fn(),
  };
});

describe('CartSubTotal component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should display "USD 0.00" when empty itemData is passed in the prop', () => {
    useOutletContext.mockReturnValue({
      cart: [],
    });

    render(<CartSubTotal />);

    expect(screen.getByText(/USD 0.00/)).toBeInTheDocument();
  });

  it('should display "USD 125.00" ', () => {
    useOutletContext.mockReturnValue({
      cart: [
        {
          id: 1,
          title: 'Sweater',
          price: 100,
        },
        {
          id: 2,
          title: 'Tank-Top',
          price: 25,
        },
      ],
    });

    render(<CartSubTotal />);

    expect(screen.getByText(/USD 125.00/)).toBeInTheDocument();
  });
});
