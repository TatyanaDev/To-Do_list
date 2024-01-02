import Todolist from "components/TodoList/TodoList";
import styles from "./todolist.module.scss";

const TodolistPage = () => {
  return (
    <>
      <h1 className={styles.todoHeader}>To Do List</h1>
      <Todolist />
    </>
  );
};

export default TodolistPage;
