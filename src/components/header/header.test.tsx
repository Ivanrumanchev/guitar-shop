import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Component: Header', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <Header />,
    );

    expect(screen.getByText(/Каталог/)).toBeInTheDocument();
    expect(screen.getByText(/Поиск/)).toBeInTheDocument();
    expect(screen.getByText(/Перейти в корзину/)).toBeInTheDocument();
  });
});
