import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardCategory from '@components/UI/CardCategory/CardCategory';

describe('CardCategory component', () => {
  it('renders the correct h3, link, and link title when categoryTitle is provided', () => {
    render(
      <MemoryRouter>
        <CardCategory categoryTitle="test" path="test" linkTitle="test" />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /test/i })).toHaveAttribute(
      'href',
      '/test'
    );

    expect(
      screen.getByRole('heading', { level: 3, name: /test/i })
    ).toBeInTheDocument();
  });

  it('does not render an h3 when categoryTitle is not provided', () => {
    render(
      <MemoryRouter>
        <CardCategory path="test" linkTitle="test" />
      </MemoryRouter>
    );

    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });
});
