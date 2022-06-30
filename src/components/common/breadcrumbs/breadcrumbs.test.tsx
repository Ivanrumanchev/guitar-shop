import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Breadcrumbs from './breadcrumbs';
import { AppRoute, BroadcrumbsName } from '../../../constants/const';

describe('Component: Breadcrumbs', () => {
  const breadcrumbs = [
    {
      name: BroadcrumbsName.Main,
      url: AppRoute.Root,
    },
    {
      name: BroadcrumbsName.Catalog,
      url: AppRoute.Catalog,
    },
    {
      name: 'GuitarName',
      url: AppRoute.Product,
    },
  ];

  it('Должен быть корректный рендер', () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <Breadcrumbs breadcrumbs={ breadcrumbs } />,
      </Router>,
    );

    const mainLinkElement = screen.getByText(BroadcrumbsName.Main);
    const catalogLinkElement = screen.getByText(BroadcrumbsName.Catalog);
    const guitarLinkElement = screen.getByText('GuitarName');

    expect(mainLinkElement).toBeInTheDocument();
    expect(catalogLinkElement).toBeInTheDocument();
    expect(guitarLinkElement).toBeInTheDocument();
  });

  it('Должен быть редирект когда пользователь нажал на ссылку', () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <Breadcrumbs breadcrumbs={ breadcrumbs } />,
      </Router>,
    );

    const catalogLinkElement = screen.getByText(breadcrumbs[1].name);

    expect(history.location.pathname).not.toBe(breadcrumbs[1].url);

    userEvent.click(catalogLinkElement);

    expect(history.location.pathname).toBe(breadcrumbs[1].url);
  });
});
