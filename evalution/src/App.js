import "./App.css";
import TaskApp from "./components/TaskApp";
import tasks from "./data/tasks.json";

function App() {
  return (
    <div>
      <TaskApp data={tasks} />
    </div>
  );
}

export default App;

