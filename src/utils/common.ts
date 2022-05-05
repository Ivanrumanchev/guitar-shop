import { GuitarDTO } from '../types/guitar';

export const getNumberImage = (guitar: GuitarDTO) => {
  if (guitar && typeof guitar.previewImg === 'string') {
    return guitar.previewImg.match(/\d+/);
  }
};
