import React from 'react';
import styles from './Todolist.module.scss';
import Todolist from '../../components/TodoList/TodoList';

const TodolistPage = () => {
  return (
    <>
      <h1 className={styles.todoHeader}>To Do List</h1>
      <Todolist />
    </>
  );
};

export default TodolistPage;
