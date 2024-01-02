import { useState } from "react";

export function useToDo(initialValues) {
  const [tasks, setTasks] = useState([...initialValues]);

  return {
    tasks,
    addTask: ({ body }, { resetForm }) => {
      const newTask = {
        body,
        id: Date.now(),
        isDone: false,
      };

      setTasks([...tasks, newTask]);

      resetForm();
    },

    deleteTask: (deleteId) =>
      setTasks(tasks.filter(({ id }) => id !== deleteId)),
  };
}
