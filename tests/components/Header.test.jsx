import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';

describe('Header component', () => {
  it('should display the menu that is originally collapsed on click of the Menu button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Header itemCount={0} />
      </MemoryRouter>
    );

    const menuBtn = screen.getByRole('button', { name: /open menu/i });
    const menu = screen.getByRole('list');
    expect(menu).toHaveAttribute('data-displayed', 'false');
    await user.click(menuBtn);
    expect(menu).toBeVisible();
  });
});
