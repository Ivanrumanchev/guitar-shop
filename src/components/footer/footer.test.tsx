import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <Footer />,
    );

    expect(screen.getByText(/Магазин гитар, музыкальных инструментов и гитарная мастерская/)).toBeInTheDocument();
    expect(screen.getByText(/Где купить?/)).toBeInTheDocument();
    expect(screen.getByText(/Контакты/)).toBeInTheDocument();
  });
});
