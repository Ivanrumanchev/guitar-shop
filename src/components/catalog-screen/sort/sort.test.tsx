import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ParamKey, ParamValue } from '../../../constants/params';
import Sort from './sort';

describe('Component: Sort', () => {
  it('Должен быть корректный рендер', () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <Sort />
      </Router>,
    );

    expect(screen.getByText(/Сортировать:/)).toBeInTheDocument();
    expect(screen.getByText(/по цене/)).toBeInTheDocument();
    expect(screen.getByLabelText(/По возрастанию/)).toBeInTheDocument();
  });

  it('При нажатии на кнопки в адресной строке должны появиться query параметры', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <Sort />
      </Router>,
    );

    const sortByPriceButton = screen.getByRole('button', {name: 'по цене'});
    const sortByRatingButton = screen.getByRole('button', {name: 'по популярности'});
    const sortOrderUpButton = screen.getByRole('button', {name: 'По возрастанию'});
    const sortOrderDownButton = screen.getByRole('button', {name: 'По убыванию'});

    expect(sortByPriceButton).toBeInTheDocument();
    expect(sortByRatingButton).toBeInTheDocument();
    expect(sortOrderUpButton).toBeInTheDocument();
    expect(sortOrderDownButton).toBeInTheDocument();

    expect(history.location.search.includes(`${ParamKey.Sort}=${ParamValue.Price}`)).toEqual(false);
    fireEvent.click(sortByPriceButton);
    expect(history.location.search).toContain(`${ParamKey.Sort}=${ParamValue.Price}`);

    expect(history.location.search.includes(`${ParamKey.Sort}=${ParamValue.Rating}`)).toEqual(false);
    fireEvent.click(sortByRatingButton);
    expect(history.location.search).toContain(`${ParamKey.Sort}=${ParamValue.Rating}`);
    expect(history.location.search.includes(`${ParamKey.Sort}=${ParamValue.Price}`)).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.Order}=${ParamValue.Asc}`)).toEqual(false);
    fireEvent.click(sortOrderUpButton);
    expect(history.location.search).toContain(`${ParamKey.Order}=${ParamValue.Asc}`);

    expect(history.location.search.includes(`${ParamKey.Order}=${ParamValue.Desc}`)).toEqual(false);
    fireEvent.click(sortOrderDownButton);
    expect(history.location.search).toContain(`${ParamKey.Order}=${ParamValue.Desc}`);
    expect(history.location.search.includes(`${ParamKey.Order}=${ParamValue.Asc}`)).toEqual(false);
  });
});
