import React from "react";
import styles from "./counter.module.css";
const Counter = ({ taskId, count, updateCount }) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        data-cy="task-counter-increment-button"
        onClick={() => updateCount(count + 1)}
      >
        +
      </button>
      <span className={styles.currentValue} data-cy="task-counter-value">
        {count}
      </span>
      <button
        className={styles.button}
        data-cy="task-counter-decrement-button"
        onClick={() => updateCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
