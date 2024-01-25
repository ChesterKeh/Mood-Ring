import { useEffect, useState } from "react";
import Journal from "../../components/Journal/Journal";
import CreateButton from "../../components/CreateButton/CreateButton";
import TaskComponent from "../../components/Task/Task";
import { getTaskByUser } from "../../utilities/task-service";

export default function JournalPage({ user }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
    console.log(user);
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTaskByUser(user._id);
      setTasks(response.tasks);
      console.log("response:", response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <>
      <h3>journal page</h3>
      <Journal />
      <div className="side">
        <TaskComponent user={user} tasks={tasks} loadTasks={loadTasks} />
      </div>
      <CreateButton />
    </>
  );
}
