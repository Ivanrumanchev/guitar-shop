import { GuitarType } from '../constants/const';

export type GuitarDTO = {
  id: number,
  name: string,
  vendorCode: string,
  type: string,
  description: string,
  previewImg: string,
  stringCount: number,
  rating: number,
  price: number,
};

export type GuitarTypes = keyof typeof GuitarType;
