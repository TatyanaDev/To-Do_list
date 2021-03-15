import React from 'react';
import { useTodo } from 'hooks';
import styles from './todoList.module.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { VALID_INPUT } from 'utils/validationSchemas';

const initialValues = { body: '' };

const Todolist = () => {
  const { tasks, addTask, deleteTasks } = useTodo(new Map());
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={addTask}
        validationSchema={VALID_INPUT}
      >
        <Form>
          <label>
            <Field name='body' type='text' className={styles.input} />
            <ErrorMessage
              name='body'
              component='span'
              className={styles.error}
            />
          </label>
          <button type='submit' className={styles.button}>
            Create task
          </button>
        </Form>
      </Formik>
      <ul className={styles.containerTask}>
        {tasks.map(value => (
          <li key={value.id} className={styles.task}>
            <label>
              <input type='checkbox' className={styles.checkbox} />
              <span>{value.body}</span>
            </label>
            <button
              className={styles.buttonDelete}
              onClick={() => deleteTasks(value.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
