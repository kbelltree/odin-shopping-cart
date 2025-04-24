import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonCartLink from '@components/UI/ButtonCartLink/ButtonCartLink';

describe('ButtonCartLink component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ButtonCartLink itemCount="1" />
      </MemoryRouter>
    );
  });
  it('should render a link and a span containing aria-label', () => {
    const link = screen.getByRole('link', { name: /go to shopping cart/i });
    expect(link).toHaveAttribute('href', '/cart');
  });
  it('should render the hidden text and the correct count passed in the prop', () => {
    expect(screen.getByText(/current cart items count/i)).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
