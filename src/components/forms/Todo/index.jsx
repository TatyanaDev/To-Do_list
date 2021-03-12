import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { VALID_INPUT } from '../../../utils/validationSchemas';
import styles from './todo.module.scss';
import Input from '../../forms/Input';

const Todo = props => {
  return (
    <Formik
      validationSchema={VALID_INPUT}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        return (
          <Form>
            <Input name='input' placeholder='' />
            {/* <Input name='password' type='password' placeholder='Password' />
            <Field
              name='submit'
              type='submit'
              value='LOGIN'
              className={styles.login}
            /> */}
          </Form>
        );
      }}
    </Formik>
  );
};

Todo.propTypes = {
  onSubmit: PropTypes.func,
};

export default Todo;
