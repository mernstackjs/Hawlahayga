import { useState } from "react";
import CreateTask from "./tasks/createTask";
import Task from "./tasks/Task";

export default function App() {
  const [Tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  return (
    <div className="md:p-12">
      <div className="grid md:grid-cols-2 gap-3">
        <CreateTask
          setError={setError}
          setTasks={setTasks}
          setLoading={setLoading}
          error={error}
        />
        <Task
          Tasks={Tasks}
          loading={loading}
          error={error}
          setError={setError}
          setTasks={setTasks}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}
