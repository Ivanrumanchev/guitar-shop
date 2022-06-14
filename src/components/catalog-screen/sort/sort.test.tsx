import { render, screen } from '@testing-library/react';
import Sort from './sort';

describe('Component: Sort', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <Sort />,
    );

    expect(screen.getByText(/Сортировать:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/По возрастанию/)).toBeInTheDocument();
    expect(screen.getByLabelText(/По убыванию/)).toBeInTheDocument();
  });
});
