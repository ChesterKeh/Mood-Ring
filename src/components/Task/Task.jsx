import { useEffect, useState } from "react";
import { getTaskByUser } from "../../utilities/task-service";
import TaskItem from "./TaskItem";

export default function TaskComponent({ user, tasks, loadTasks }) {
  return (
    <>
      <h2>tasks</h2>
      {tasks.map((entry) => (
        <TaskItem key={entry._id} item={entry} loadTasks={loadTasks} />
      ))}
    </>
  );
}
