import { GuitarType } from '../const';
import { GuitarDTO, GuitarTypes } from '../types/guitar';

export const getNumberImage = (guitar: GuitarDTO) => {
  if (guitar) {
    return typeof guitar.previewImg === 'string'
      ? guitar.previewImg.match(/\d+/)
      : '';
  }

  return '';
};

export const getPrice = (guitar : GuitarDTO) => {
  if (guitar) {
    return typeof guitar.price === 'number'
      ? guitar.price.toLocaleString('ru')
      : guitar.price;
  }

  return '';
};

const isValidType = (value: string): value is GuitarTypes => value in GuitarType;

export const getGuitarType = (guitar: GuitarDTO) => {
  if (guitar) {
    if (typeof guitar.type === 'string') {
      const typeKey = `${ guitar.type.slice(0, 1).toUpperCase()}${guitar.type.slice(1)}`;

      return isValidType(typeKey) ? GuitarType[typeKey] : guitar.type;
    }
  }

  return '';
};

export const getFormattedDate = (date: string) => {
  if (!date) {
    return '';
  }

  const dateComment = new Date(date);

  const formatterDate = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
  });

  return formatterDate.format(dateComment);
};

export const getScrollToBottom = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;

  return scrollHeight - (scrollTop + windowHeight);
};
