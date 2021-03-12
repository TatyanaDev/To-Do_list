import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useTodo } from '../../hooks';
import styles from './Todolist.module.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { VALID_INPUT } from '../../utils/validationSchemas';

const initialValues = { body: '' };

const Todolist = () => {
  const { tasks, addTask, setTasks, deleteTasks } = useTodo([
    // {
    //   id: Date.now(),
    //   isDone: false,
    // { body: '' },
    // },
  ]);

  return (
    <div>
      <div>To-Do List</div>
      <Formik
        initialValues={initialValues}
        onSubmit={addTask}
        validationSchema={VALID_INPUT}
      >
        <Form>
          <label >
            <Field name='body' type='text' />
          </label>
          <button type='submit'>Create task</button>
        </Form>
      </Formik>
      <ul>
        {tasks.map(value => (
          <li key={value.id}>
            <label>
              <input type='checkbox' />
              <span>{value.body}</span>
            </label>
            <button onClick={() => deleteTasks(value.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;

// const Input = ({ name, placeholder, ...rest }) => {
//   const error = cn(styles.error, {
//     [styles.errorLogin]: window.location.pathname === '/',
//     [styles.errorSignUp]: window.location.pathname === '/sign-up',
//   });
//   return (
//     <label style={{ position: 'relative' }}>
//       <Field name={name}>
//         {({ field, meta }) => {
//           const classNames = cn(styles.input, {
//             [styles.validInput]: meta.touched && !meta.error,
//             [styles.errorInput]: meta.touched && meta.error,
//             [styles.inputLogin]: window.location.pathname === '/',
//             [styles.inputSignup]: window.location.pathname === '/sign-up',
//           });
//           return (
//             <input
//               type='text'
//               className={classNames}
//               placeholder={placeholder}
//               {...field}
//             />
//           );
//         }}
//       </Field>
//       <ErrorMessage name={name} component='span' className={error} {...rest} />
//     </label>
//   );
// };

// Input.defaultProps = {
//   name: 'name',
// };

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
// };

// export default Input;
