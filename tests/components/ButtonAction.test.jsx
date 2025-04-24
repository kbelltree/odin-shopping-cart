import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonAction from '@components/UI/ButtonAction/ButtonAction';

describe('ButtonAction component', () => {
  it('should render a button including aria-label, children element, and respond onClick event', async () => {
    const mockClick = vi.fn();
    const user = userEvent.setup();

    render(
      <ButtonAction ariaLabel="test" children="test" onClick={mockClick} />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'test');
    expect(button).toHaveTextContent('test');

    await user.click(button);
    expect(mockClick).toHaveBeenCalled();
  });

  it('should render a button including aria-controls and aria-expanded boolean', () => {
    render(
      <ButtonAction
        ariaLabel="test"
        children="test"
        ariaControls="menu"
        ariaExpanded={true}
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-controls', 'menu');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
