import { useEffect, useState } from "react";
import { getTask } from "../../utilities/task-service";
import TaskItem from "./TaskItem";

export default function TaskComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTask();
      setTasks(response.tasks);
      console.log("response:", response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <>
      <h2>tasks</h2>
      {tasks.map((entry) => (
        <TaskItem key={entry._id} item={entry} loadTasks={loadTasks} />
      ))}
    </>
  );
}
