import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ButtonLink from '@components/UI/ButtonLink/ButtonLink';

describe('ButtonLink component', () => {
  it('should render a link including path and button label', () => {
    render(
      <MemoryRouter>
        <ButtonLink toPath="test" label="test" />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /test/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});
