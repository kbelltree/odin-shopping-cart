import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonAddToCart from '@/components/UI/ButtonAddToCart/ButtonAddToCart';

// Mock updateCart function passed through useOutletContext. If other router related property is needed, this mock should include the entire copy of router-dom.
const mockFn = vi.fn();
vi.mock('react-router-dom', () => ({
  useOutletContext: () => ({ updateCart: mockFn }),
}));

describe('ButtonAddToCart component', () => {
  beforeEach(() => {
    render(
      <ButtonAddToCart itemData={{ id: 1, title: 'test item', price: '30' }} />
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render with initial count "0"', () => {
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0');
  });

  it('should render increment and decrement buttons with correct aria-labels and handle quantity changes correctly', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    const increaseBtn = screen.getByRole('button', {
      name: /increase quantity/i,
    });
    const decreaseBtn = screen.getByRole('button', {
      name: /decrease quantity/i,
    });

    // Click the increase button and verify the count increments to "1"
    await user.click(increaseBtn);
    expect(input).toHaveValue('1');

    // Click the decrease button and verify the count decrements to "0"
    await user.click(decreaseBtn);
    expect(input).toHaveValue('0');

    // Click the decrease button again and verify the count remains at "0"
    await user.click(decreaseBtn);
    expect(input).toHaveValue('0');
  });

  it('handles quantity changes correctly when a number is manually entered in input box', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, '1');

    expect(input).toHaveValue('1');
  });

  it('returns "0" when the input value is an empty string', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    // mimic an empty input
    await user.clear(input);

    expect(input).toHaveValue('0');
  });

  it('returns "0" when the input value type is not a number', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'abc');

    expect(input).toHaveValue('0');
  });

  it('displays only numbers when the value contains non-number characters', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'a30');

    expect(input).toHaveValue('30');
  });

  it('responds to onClick event when "Add To Bag" button is clicked after quantity changed to more than zero', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.click(
      screen.getByRole('button', {
        name: /increase quantity/i,
      })
    );

    expect(input).toHaveValue('1');

    await user.click(screen.getByText(/add to bag/i));
    expect(mockFn).toHaveBeenCalled();
  });

  it('should not respond to onClick event when "Add To Bag" button is clicked while quantity is zero', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText(/add to bag/i));

    expect(mockFn).not.toHaveBeenCalled();
  });
});
