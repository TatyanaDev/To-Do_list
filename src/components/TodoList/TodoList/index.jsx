import { Field, Form, Formik, ErrorMessage } from "formik";
import { useTodo } from "hooks";
import cn from "classnames";
import { VALID_INPUT } from "utils/validationSchemas";
import styles from "./todoList.module.scss";

const Todolist = () => {
  const { tasks, addTask, deleteTasks } = useTodo(new Map());
  const initialValues = { body: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={addTask}
        validationSchema={VALID_INPUT}
      >
        <Form>
          <label>
            <Field name="body">
              {({ field, meta }) => {
                const classNames = cn(styles.input, {
                  [styles.validInput]: meta.touched && !meta.error,
                  [styles.errorInput]: meta.touched && meta.error,
                });
                return <input type="text" className={classNames} {...field} />;
              }}
            </Field>
            <ErrorMessage
              name="body"
              component="span"
              className={styles.error}
            />
          </label>
          <button type="submit" className={styles.button}>
            Create task
          </button>
        </Form>
      </Formik>

      <ul className={styles.containerTask}>
        {tasks.map((value) => (
          <li key={value.id} className={styles.task}>
            <label className={styles.wrapper}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.taskBody}>{value.body}</span>
              <button
                className={styles.buttonDelete}
                onClick={() => deleteTasks(value.id)}
              >
                X
              </button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
