import { render, screen } from '@testing-library/react';
import Filter from './filter';

describe('Component: Sort', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <Filter />,
    );

    expect(screen.getByText(/Фильтр/)).toBeInTheDocument();
    expect(screen.getByText(/Максимальная цена/)).toBeInTheDocument();
    expect(screen.getByText(/Тип гитар/)).toBeInTheDocument();
    expect(screen.getByText(/Количество струн/)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Очистить'})).toBeInTheDocument();
  });
});
