import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('Должен быть корректный рендер', () => {
    render(
      <BrowserRouter>
        <NotFoundScreen />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText('Page not found');
    const linkElement = screen.getByText('Go to main page');

    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
