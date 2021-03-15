import * as Yup from 'yup';

export const VALID_INPUT = Yup.object({
  body: Yup.string()
    .matches(/^.{2,}$/, 'Сannot create an empty list')
    .trim()
    .required(),
});