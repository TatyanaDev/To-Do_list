import ToDo from "components/ToDo";
import style from "./toDoList.module.scss";

const ToDoList = () => (
  <>
    <h1 className={style.header}>To-Do list</h1>
    <ToDo />
  </>
);

export default ToDoList;
