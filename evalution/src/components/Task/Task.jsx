import React from "react";

import { Counter } from "../Counter";

import remove from "../../assets/remove.svg";
import styles from "./task.module.css";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  function toggleTaskStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };

  return (
    <li
      data-cy="task"
      className={`${styles.task} ${task.done ? styles.done : ""}`}
    >
      <div className={styles.taskInfos}>
        <label className={styles.taskCheckbox}>
          <input
            type="checkbox"
            data-cy="task-checkbox"
            onChange={toggleTaskStatus}
            checked={task.done}
          />
          <div className={styles.taskCheckboxEl}></div>
        </label>
        <div data-cy="task-text" className={styles.taskText}>
          {task.text}
        </div>
      </div>
      <Counter taskId={task.id} count={task.count} updateCount={updateCount} />
      <button
        className={styles.taskRemove}
        data-cy="task-remove-button"
        onClick={() => handleRemoveTask(task.id)}
        title="Remover item"
      >
        <img src={remove} alt="remove button text" />
      </button>
    </li>
  );
};

export default Task;
