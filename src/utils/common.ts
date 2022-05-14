import { GuitarDTO } from '../types/guitar';

export const getNumberImage = (guitar: GuitarDTO) => {
  if (guitar && typeof guitar.previewImg === 'string') {
    return guitar.previewImg.match(/\d+/);
  }
};

export const getPrice = (guitar : GuitarDTO) => {
  if (guitar.price) {
    return typeof guitar.price === 'number'
      ? guitar.price.toLocaleString('ru')
      : guitar.price;
  }

  return '';
};
