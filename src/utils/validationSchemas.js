import * as Yup from 'yup';

export const VALID_INPUT = Yup.object({
  body: Yup.string().matches(/^.{2,}$/, 'Сannot create an empty list'),
});

// export const LAST_SCHEMA = Yup.string()
//   .matches(
//     /^[A-Z][a-z]{1,64}$/,
//     'Please enter a valid last name. The first letter must be capitalized'
//   )
//   .required();

// export const EMAIL_SCHEMA = Yup.string()
//   .email(
//     'Enter a valid email. Must start with a lowercase letter, contain @ and "."'
//   )
//   .required();

// export const PASSWORD_SCHEMA = Yup.string()
//   .matches(
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
//     'Please enter a valid password. Must contain an uppercase letter, a small letter, a special character and at least 8 characters'
//   )
//   .required();

// export const SIGN_IN_SCHEMA = Yup.object({
//   email: EMAIL_SCHEMA,
//   password: PASSWORD_SCHEMA,
// });

// export const SIGN_UP_SCHEMA = Yup.object({
//   firstName: FIRST_SCHEMA,
//   lastName: LAST_SCHEMA,
//   displayName: Yup.string()
//     .matches(
//       /^[A-Z][a-z]{1,64}$/,
//       'Enter a name to display on the site. The first letter must be capitalized'
//     )
//     .required(),
//   email: EMAIL_SCHEMA,
//   password: PASSWORD_SCHEMA,
//   passwordConfirmation: Yup.string()
//     .oneOf([Yup.ref('password')], 'Passwords must match')
//     .required(),
// });
