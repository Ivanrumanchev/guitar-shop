import { datatype, name, system, lorem, date } from 'faker';
import { NewReview, ReviewDTO } from '../types/review';
import { GuitarDTO } from './../types/guitar';

export const makeFakeProductData = (): GuitarDTO => ({
  id: datatype.number(),
  name: name.title(),
  vendorCode: datatype.string(5),
  type: datatype.string(5),
  description: lorem.sentences(2),
  previewImg: system.filePath(),
  stringCount: datatype.number({ min: 4, max: 7 }),
  rating: datatype.number({ min: 1, max: 5 }),
  price: datatype.number(),
});

export const makeFakeCatalogData = (): GuitarDTO[] => new Array(3).fill(null).map(() => makeFakeProductData());

export const makeFakeReviewData = (): ReviewDTO => ({
  id: datatype.uuid(),
  userName: name.title(),
  advantage: lorem.sentences(),
  disadvantage: lorem.sentences(),
  comment: lorem.sentences(2),
  rating: datatype.number({ min: 1, max: 5 }),
  createAt: date.past().toString(),
  guitarId: datatype.number(),
});

export const makeFakeReviewsData = (): ReviewDTO[] => new Array(3).fill(null).map(() => makeFakeReviewData());

export const makeFakeNewReviewData = (): NewReview => ({
  guitarId: datatype.number(),
  userName: name.title(),
  rating: datatype.number({ min: 1, max: 5 }),
  advantage: lorem.sentences(),
  disadvantage: lorem.sentences(),
  comment: lorem.sentences(2),
});
