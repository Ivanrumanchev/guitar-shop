import { GuitarTypeName, StringVariants } from '../constants/const';

export type StringsDisabledMapper = {
  [Property in StringVariants]: (acoustic: boolean, electric: boolean, ukulele: boolean) => boolean;
};

export type CheckStringsMapper = {
  [Property in StringVariants]: () => boolean;
};

export type CheckSetStringsMapper = {
  [Property in StringVariants]: (checked: boolean) => void;
};

export type CheckTypeMapper = {
  [Property in GuitarTypeName]: () => boolean;
};

export type CheckSetTypeMapper = {
  [Property in GuitarTypeName]: (checked: boolean) => void;
};
