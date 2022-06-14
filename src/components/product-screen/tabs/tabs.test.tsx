import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Tabs from './tabs';
import { makeFakeProductData } from '../../../utils/mocks';

describe('Component: Tabs', () => {
  const tabsProps = {
    guitar: makeFakeProductData(),
  };

  it('Должен быть корректный рендер', () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <Tabs
          guitar={ tabsProps.guitar }
        />,
      </Router>,
    );

    const characteristicsButton = screen.getByRole('button', { name: 'Характеристики' });
    const descriptionButton = screen.getByRole('button', { name: 'Описание' });

    expect(characteristicsButton).toBeInTheDocument();
    expect(descriptionButton).toBeInTheDocument();
    expect(screen.getByText(/Артикул:/)).toBeInTheDocument();
  });

  it('Должен быть редирект когда пользователь нажал кнопку "Описание"', () => {
    const history = createMemoryHistory();

    const { rerender } = render(
      <Router location={ history.location } navigator={ history }>
        <Tabs
          guitar={ tabsProps.guitar }
        />,
      </Router>,
    );

    const descriptionButton = screen.getByRole('button', { name: 'Описание' });

    expect(history.location.search).not.toBe('?tabs=description');
    expect(screen.queryByTestId('characteristics')).not.toHaveClass('hidden');
    expect(screen.getByText(tabsProps.guitar.description)).toHaveClass('hidden');

    userEvent.click(descriptionButton);

    rerender(
      <Router location={ history.location } navigator={ history }>
        <Tabs
          guitar={ tabsProps.guitar }
        />,
      </Router>,
    );

    expect(history.location.search).toBe('?tabs=description');
    expect(screen.queryByTestId('characteristics')).toHaveClass('hidden');
    expect(screen.getByText(tabsProps.guitar.description)).not.toHaveClass('hidden');
  });

  it('Должен быть редирект когда пользователь нажал кнопку "Характеристики"', () => {
    const history = createMemoryHistory();

    history.push('?tabs=description');

    const { rerender } = render(
      <Router location={ history.location } navigator={ history }>
        <Tabs
          guitar={ tabsProps.guitar }
        />,
      </Router>,
    );

    const characteristicsButton = screen.getByRole('button', { name: 'Характеристики' });

    expect(history.location.search).toBe('?tabs=description');
    expect(screen.queryByTestId('characteristics')).toHaveClass('hidden');
    expect(screen.getByText(tabsProps.guitar.description)).not.toHaveClass('hidden');

    userEvent.click(characteristicsButton);

    rerender(
      <Router location={ history.location } navigator={ history }>
        <Tabs
          guitar={ tabsProps.guitar }
        />,
      </Router>,
    );

    expect(history.location.search).not.toBe('?tabs=description');
    expect(screen.queryByTestId('characteristics')).not.toHaveClass('hidden');
    expect(screen.getByText(tabsProps.guitar.description)).toHaveClass('hidden');
  });
});
