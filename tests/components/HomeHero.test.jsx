import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeHero from '@components/UI/HomeHero/HomeHero';

describe('SectionHero component', () => {
  it('should link to correct path', () => {
    render(
      <MemoryRouter>
        <HomeHero />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /shop now/i })).toHaveAttribute(
      'href',
      '/category/all'
    );
  });
});
