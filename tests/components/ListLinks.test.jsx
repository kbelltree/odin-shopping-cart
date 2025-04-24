import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ListLinks from '@components/UI/ListLinks/ListLinks';

describe('ListLinks component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  const contents = [
    {
      title: 'home',
      ariaLabel: 'go to home',
      path: '/',
    },
    {
      title: 'clothing',
      ariaLabel: 'go to clothing',
      path: '/clothing',
    },
  ];
  it('should render all list items correctly including, title, area-label, and path', () => {
    render(
      <MemoryRouter>
        <ListLinks listItemContents={contents} />
      </MemoryRouter>
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(contents.length);
    contents.forEach((content, index) => {
      const listItem = listItems[index];
      expect(listItem).toHaveAttribute('aria-label', content.ariaLabel);
      const link = screen.getByRole('link', { name: content.title });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', content.path);
    });
  });

  it('should render the list with the correct id and data-displayed attribute set to "true" when isOpen is true', () => {
    render(
      <MemoryRouter>
        <ListLinks
          ariaControlsId="testId"
          isOpen={true}
          listItemContents={contents}
        />
      </MemoryRouter>
    );

    const list = screen.getByRole('list');

    expect(list).toHaveAttribute('id', 'testId');
    expect(list).toHaveAttribute('data-displayed', 'true');
  });

  it('should render the list with data-displayed attribute set to "false" when isOpen is false', () => {
    render(
      <MemoryRouter>
        <ListLinks
          ariaControlsId="testId"
          isOpen={false}
          listItemContents={contents}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole('list')).toHaveAttribute('data-displayed', 'false');
  });

  it('should respond onClick event', async () => {
    const mockClick = vi.fn();
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ListLinks listItemContents={contents} linkOnClick={mockClick} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /home/i });

    await user.click(link);
    expect(mockClick).toHaveBeenCalled();
  });
});
