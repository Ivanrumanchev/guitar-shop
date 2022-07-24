import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FilterType from './filter-type';
import { ParamKey } from '../../../constants/params';
import { GuitarTypeName } from '../../../constants/const';

describe('Component: FilterType', () => {
  it('Должен быть корректный рендер', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <FilterType />
      </Router>,
    );

    expect(screen.getByText(/Тип гитар/)).toBeInTheDocument();
    expect(screen.getByText(/Электрогитара/)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length).toBe(3);
  });

  it('При нажатии на чекбокс в адресной строке должны появиться query параметры', async () => {
    const history = createMemoryHistory();

    render(
      <Router location={ history.location } navigator={ history }>
        <FilterType />
      </Router>,
    );

    const inputAcoustic = screen.getByRole('checkbox', {name: 'Акустическая гитара'}) as HTMLInputElement;
    const inputElectric = screen.getByRole('checkbox', {name: 'Электрогитара'}) as HTMLInputElement;
    const inputUkulele = screen.getByRole('checkbox', {name: 'Укулеле'}) as HTMLInputElement;

    expect(inputAcoustic.checked).toEqual(false);
    expect(inputElectric.checked).toEqual(false);
    expect(inputUkulele.checked).toEqual(false);

    expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Acoustic}`)).toEqual(false);
    fireEvent.click(inputAcoustic);
    expect(inputAcoustic.checked).toEqual(true);
    await waitFor(() => {
      expect(history.location.search).toContain(`${ParamKey.Type}=${GuitarTypeName.Acoustic}`);
    });
    fireEvent.click(inputAcoustic);
    expect(inputAcoustic.checked).toEqual(false);
    await waitFor(() => {
      expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Acoustic}`)).toEqual(false);
    });

    expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Electric}`)).toEqual(false);
    fireEvent.click(inputElectric);
    expect(inputElectric.checked).toEqual(true);
    await waitFor(() => {
      expect(history.location.search).toContain(`${ParamKey.Type}=${GuitarTypeName.Electric}`);
    });
    fireEvent.click(inputElectric);
    expect(inputElectric.checked).toEqual(false);
    await waitFor(() => {
      expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Electric}`)).toEqual(false);
    });

    expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Ukulele}`)).toEqual(false);
    fireEvent.click(inputUkulele);
    expect(inputUkulele.checked).toEqual(true);
    await waitFor(() => {
      expect(history.location.search).toContain(`${ParamKey.Type}=${GuitarTypeName.Ukulele}`);
    });
    fireEvent.click(inputUkulele);
    expect(inputUkulele.checked).toEqual(false);
    await waitFor(() => {
      expect(history.location.search.includes(`${ParamKey.Type}=${GuitarTypeName.Ukulele}`)).toEqual(false);
    });
  });
});
