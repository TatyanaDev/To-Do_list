import { Field, Form, Formik, ErrorMessage } from "formik";
import { useToDo } from "hook";
import cn from "classnames";
import { TO_DO_SCHEMA } from "utils/validation-schemes";
import basket from "./../../icon/basket.png";
import style from "./toDo.module.scss";

const ToDo = () => {
  const { tasks, addTask, deleteTask } = useToDo([]);
  const initialValues = { body: "" };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={addTask}
        validationSchema={TO_DO_SCHEMA}
      >
        <Form className={style.form}>
          <label>
            <Field name="body">
              {({ field, meta }) => {
                const classNames = cn(style.input, {
                  [style.validInput]: meta.touched && !meta.error,
                  [style.invalidInput]: meta.touched && meta.error,
                });

                return <input type="text" className={classNames} {...field} />;
              }}
            </Field>

            <ErrorMessage
              name="body"
              component="span"
              className={style.error}
            />
          </label>

          <button type="submit" className={style.createBtn}>
            Create task
          </button>
        </Form>
      </Formik>

      <ul className={style.containerTasks}>
        {tasks.map((task) => (
          <li key={task.id} className={style.task}>
            <label className={style.wrapperTask}>
              <input type="checkbox" className={style.checkbox} />
              <span className={style.bodyTask}>{task.body}</span>
              <button
                className={style.deleteBtn}
                onClick={() => deleteTask(task.id)}
              >
                <img src={basket} alt="X" />
              </button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
