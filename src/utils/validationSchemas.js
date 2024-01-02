import * as Yup from "yup";

export const VALID_INPUT = Yup.object({
  body: Yup.string()
    .matches(
      /^.{2,}$/,
      "You cannot create such a short task.Must be at least two characters long"
    )
    .trim()
    .required(),
});
