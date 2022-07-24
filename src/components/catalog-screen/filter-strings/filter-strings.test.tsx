import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterStrings from './filter-strings';
import { ParamKey } from '../../../constants/params';
import { APIRoute, GuitarTypeName } from '../../../constants/const';

describe('Component: FilterStrings', () => {
  it('Должен быть корректный рендер', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    expect(screen.getByText(/Количество струн/)).toBeInTheDocument();
    expect(screen.getByText(/4-strings/)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toBe(4);
  });

  it('При нажатии на чекбокс в адресной строке должны появиться query параметры', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    const inputFourStrings = screen.getByRole('checkbox', {name: '4-strings'}) as HTMLInputElement;
    const inputSixStrings = screen.getByRole('checkbox', {name: '6-strings'}) as HTMLInputElement;
    const inputSevenStrings = screen.getByRole('checkbox', {name: '7-strings'}) as HTMLInputElement;
    const inputTwelveStrings = screen.getByRole('checkbox', {name: '12-strings'}) as HTMLInputElement;

    expect(inputFourStrings.checked).toEqual(false);
    expect(inputSixStrings.checked).toEqual(false);
    expect(inputSevenStrings.checked).toEqual(false);
    expect(inputTwelveStrings.checked).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.StringCount}=4`)).toEqual(false);
    fireEvent.click(inputFourStrings);
    expect(inputFourStrings.checked).toEqual(true);
    expect(history.location.search).toContain(`${ParamKey.StringCount}=4`);
    fireEvent.click(inputFourStrings);
    expect(inputFourStrings.checked).toEqual(false);
    expect(history.location.search.includes(`${ParamKey.StringCount}=4`)).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.StringCount}=6`)).toEqual(false);
    fireEvent.click(inputSixStrings);
    expect(inputSixStrings.checked).toEqual(true);
    expect(history.location.search).toContain(`${ParamKey.StringCount}=6`);
    fireEvent.click(inputSixStrings);
    expect(inputSixStrings.checked).toEqual(false);
    expect(history.location.search.includes(`${ParamKey.StringCount}=6`)).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.StringCount}=7`)).toEqual(false);
    fireEvent.click(inputSevenStrings);
    expect(inputSevenStrings.checked).toEqual(true);
    expect(history.location.search).toContain(`${ParamKey.StringCount}=7`);
    fireEvent.click(inputSevenStrings);
    expect(inputSevenStrings.checked).toEqual(false);
    expect(history.location.search.includes(`${ParamKey.StringCount}=7`)).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.StringCount}=12`)).toEqual(false);
    fireEvent.click(inputTwelveStrings);
    expect(inputTwelveStrings.checked).toEqual(true);
    expect(history.location.search).toContain(`${ParamKey.StringCount}=12`);
    fireEvent.click(inputTwelveStrings);
    expect(inputTwelveStrings.checked).toEqual(false);
    expect(history.location.search.includes(`${ParamKey.StringCount}=12`)).toEqual(false);
  });

  it('Проверка логики блокировки чекбоксов при выборе типов гитар', async () => {
    const history = createMemoryHistory();

    const {rerender} = render(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    const inputFourStrings = screen.getByRole('checkbox', {name: '4-strings'}) as HTMLInputElement;
    const inputSixStrings = screen.getByRole('checkbox', {name: '6-strings'}) as HTMLInputElement;
    const inputSevenStrings = screen.getByRole('checkbox', {name: '7-strings'}) as HTMLInputElement;
    const inputTwelveStrings = screen.getByRole('checkbox', {name: '12-strings'}) as HTMLInputElement;

    expect(inputFourStrings.disabled).toEqual(true);
    expect(inputSixStrings.disabled).toEqual(true);
    expect(inputSevenStrings.disabled).toEqual(true);
    expect(inputTwelveStrings.disabled).toEqual(true);

    history.push(`${APIRoute.Catalog}?${ParamKey.Type}=${GuitarTypeName.Acoustic}`);

    rerender(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    expect(inputFourStrings.disabled).toEqual(true);
    expect(inputSixStrings.disabled).toEqual(false);
    expect(inputSevenStrings.disabled).toEqual(false);
    expect(inputTwelveStrings.disabled).toEqual(false);

    history.goBack();
    history.push(`${APIRoute.Catalog}?${ParamKey.Type}=${GuitarTypeName.Electric}`);

    rerender(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    expect(inputFourStrings.disabled).toEqual(false);
    expect(inputSixStrings.disabled).toEqual(false);
    expect(inputSevenStrings.disabled).toEqual(false);
    expect(inputTwelveStrings.disabled).toEqual(true);

    history.goBack();
    history.push(`${APIRoute.Catalog}?${ParamKey.Type}=${GuitarTypeName.Ukulele}`);

    rerender(
      <Router location={ history.location } navigator={ history }>
        <FilterStrings />
      </Router>,
    );

    expect(inputFourStrings.disabled).toEqual(false);
    expect(inputSixStrings.disabled).toEqual(true);
    expect(inputSevenStrings.disabled).toEqual(true);
    expect(inputTwelveStrings.disabled).toEqual(true);
  });
});
