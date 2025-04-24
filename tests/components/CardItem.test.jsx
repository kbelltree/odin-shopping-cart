import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardItem from '@/components/UI/CardItem/CardItem';

describe('CardItem component', () => {
  it('renders h2 and p when itemTitle and itemPrice are provided', () => {
    render(
      <MemoryRouter>
        <CardItem
          toPath="test"
          linkTitle="test"
          itemTitle="test"
          itemPrice={20}
        />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 2, name: /test/i })
    ).toBeInTheDocument();

    expect(screen.getByText('USD 20')).toBeInTheDocument();
  });

  it('renders fallback image when no imgSrc path is provided, and does not render h2 and p when no itemTitle and itemPrice provided', () => {
    render(
      <MemoryRouter>
        <CardItem toPath="test" linkTitle="test" />
      </MemoryRouter>
    );

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/src/assets/images/fallback-img-OLS2VJ0-Designed-by-Articular-Freepik.webp'
    );

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();

    expect(screen.queryByText('USD 20')).not.toBeInTheDocument();
  });
});
