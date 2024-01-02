import { useState } from "react";

export function useToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ body }, { resetForm }) => {
    const newTask = {
      body,
      id: Date.now(),
      isDone: false,
    };

    setTasks([...tasks, newTask]);

    resetForm();
  };

  const changeStatusTask = (changeId) =>
    setTasks(
      tasks.map((task) =>
        task.id === changeId ? { ...task, isDone: !task.isDone } : task
      )
    );

  const deleteTask = (deleteId) =>
    setTasks(tasks.filter(({ id }) => id !== deleteId));

  return {
    tasks,
    addTask,
    changeStatusTask,
    deleteTask,
  };
}
