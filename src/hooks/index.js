import { useState } from 'react';

export function useTodo (initialValues) {
  const [tasks, setTasks] = useState([...initialValues]);

  return {
    tasks,
    setTasks,
    addTask: (values, actions) => {
      const newTask = {
        body: values.body,
        id: Date.now(),
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      actions.resetForm();
    },

    deleteTasks: id =>
      setTasks(tasks.filter(currentTask => currentTask.id !== id)),
    // changeStatus:id=>{},
  };
}
