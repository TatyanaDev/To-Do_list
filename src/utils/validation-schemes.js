import * as Yup from "yup";

export const TO_DO_SCHEMA = Yup.object({
  body: Yup.string()
    .matches(
      /^.{2,}$/,
      "You cannot create such a short task. Must be at least two characters long"
    )
    .label("Task")
    .trim()
    .required(),
});
