import { useEffect, useState } from "react";
import { getTask } from "../../utilities/task-service";
import TaskItem from "./TaskItem";

export default function TaskComponent({ user, tasks, loadTasks }) {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   loadTasks();
  //   console.log(user);
  // }, []);

  // const loadTasks = async () => {
  //   try {
  //     const response = await getTask();
  //     setTasks(response.tasks);
  //     console.log("response:", response);
  //   } catch (error) {
  //     console.error("Error fetching tasks:", error);
  //   }
  // };

  return (
    <>
      <h2>tasks</h2>
      {tasks.map((entry) => (
        <TaskItem key={entry._id} item={entry} loadTasks={loadTasks} />
      ))}
    </>
  );
}
