import React from "react";
import { v4 } from "uuid";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";

import styles from "./taskApp.module.css";

const TaskApp = ({ data }) => {
  const [tasks, setTasks] = React.useState(data);

  const addTask = (newTask) => {
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleRemoveTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, crr) => {
      if (crr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTasks]);
  };

  return (
    <div data-cy="task-app" className={styles.main}>
      <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
        <AddTask addTask={addTask} />
        <div className={styles.taskBody}>
          <Tasks
            tasks={tasks}
            handleUpdateTask={handleUpdateTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
