import { StringVariants } from '../constants/const';
import { StringsDisabledMapper } from '../types/filter';

export const stringsDisabledMapper: StringsDisabledMapper = {
  [StringVariants.FourStrings]: function(acoustic: boolean, electric: boolean, ukulele: boolean) {
    return electric || ukulele;
  },
  [StringVariants.SixStrings]: function(acoustic: boolean, electric: boolean, ukulele: boolean) {
    return acoustic || electric;
  },
  [StringVariants.SevenStrings]: function(acoustic: boolean, electric: boolean, ukulele: boolean) {
    return acoustic || electric;
  },
  [StringVariants.TwelveStrings]: function(acoustic: boolean, electric: boolean, ukulele: boolean) {
    return acoustic;
  },
};
