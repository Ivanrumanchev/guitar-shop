import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Pagination from './pagination';
import { AppRoute, CARDS_PER_PAGE } from '../../../constants/const';

describe('Component: Pagination', () => {
  it('Должен быть корректный рендер', () => {
    const history = createMemoryHistory();

    let paginationProps = {
      totalCount: 50,
      currentPage: 1,
      path: AppRoute.Catalog,
    };

    const { rerender } = render(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    const quantityPages = Math.ceil(paginationProps.totalCount / CARDS_PER_PAGE);

    expect(screen.getByText(/Далее/)).toBeInTheDocument();
    expect(screen.queryByText(/Назад/)).not.toBeInTheDocument();
    expect(screen.getByText(quantityPages)).toBeInTheDocument();

    paginationProps = {
      totalCount: 50,
      currentPage: 2,
      path: AppRoute.Catalog,
    };

    rerender(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    expect(screen.getByText(/Далее/)).toBeInTheDocument();
    expect(screen.getByText(/Назад/)).toBeInTheDocument();

    paginationProps = {
      totalCount: 50,
      currentPage: quantityPages,
      path: AppRoute.Catalog,
    };

    rerender(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    expect(screen.queryByText(/Далее/)).not.toBeInTheDocument();
    expect(screen.getByText(/Назад/)).toBeInTheDocument();
  });

  it('Должен быть редирект когда пользователь нажал на номер страницы', () => {
    const history = createMemoryHistory();

    const paginationProps = {
      totalCount: 50,
      currentPage: 2,
      path: AppRoute.Catalog,
    };

    const quantityPages = Math.ceil(paginationProps.totalCount / CARDS_PER_PAGE);

    render(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    const lastPageLinkElement = screen.getByText(quantityPages);

    expect(history.location.pathname).not.toBe(`${paginationProps.path}/${quantityPages}`);

    userEvent.click(lastPageLinkElement);

    expect(history.location.pathname).toBe(`${paginationProps.path}/${quantityPages}`);
  });

  it('Должен быть редирект когда пользователь нажал на кнопку "Далее"', () => {
    const history = createMemoryHistory();

    const paginationProps = {
      totalCount: 50,
      currentPage: 2,
      path: AppRoute.Catalog,
    };

    const STEP = 1;

    render(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    const toNextPageLinkElement = screen.getByText(/Далее/);

    expect(history.location.pathname).not.toBe(`${paginationProps.path}/${paginationProps.currentPage + STEP}`);

    userEvent.click(toNextPageLinkElement);

    expect(history.location.pathname).toBe(`${paginationProps.path}/${paginationProps.currentPage + STEP}`);
  });

  it('Должен быть редирект когда пользователь нажал на кнопку "Назад"', () => {
    const history = createMemoryHistory();

    const paginationProps = {
      totalCount: 50,
      currentPage: 2,
      path: AppRoute.Catalog,
    };

    const STEP = 1;

    render(
      <Router location={ history.location } navigator={ history }>
        <Pagination
          totalCount={ paginationProps.totalCount }
          currentPage={ paginationProps.currentPage }
          path={ paginationProps.path }
        />,
      </Router>,
    );

    const toPrevPageLinkElement = screen.getByText(/Назад/);

    expect(history.location.pathname).not.toBe(`${paginationProps.path}/${paginationProps.currentPage - STEP}`);

    userEvent.click(toPrevPageLinkElement);

    expect(history.location.pathname).toBe(`${paginationProps.path}/${paginationProps.currentPage - STEP}`);
  });
});
