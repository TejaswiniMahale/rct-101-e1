import React from "react";
import { Task } from "../Task";
import empty from "../../assets/empty.svg";
import styles from "./tasks.module.css";

const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  if (tasks.length > 0) {
    return (
      <ul data-cy="tasks" className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    );
  }
  return (
    <div data-cy="empty" className={styles.empty}>
      <img src={empty} alt="empty task list" />
      <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task above</p>
    </div>
  );
};

export default Tasks;
