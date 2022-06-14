import { render, screen } from '@testing-library/react';
import SvgSprite from './svg-sprite';

describe('Component: Footer', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <SvgSprite />,
    );

    expect(screen.getByTestId('svg-sprite')).toBeInTheDocument();
  });
});
