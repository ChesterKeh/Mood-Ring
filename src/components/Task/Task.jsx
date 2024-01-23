import { useEffect, useState } from "react";

export default function Task() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("/api/task")
      .then((res) => res.json())
      .then((data) => setTask(data.tasks));
  }, []);

  console.log(task);

  if (task.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>tasks</h2>
      {task.map((entry) => (
        <div key={entry._id}>
          <h1>{entry.title}</h1>
          {entry.subtask.map((sub) => (
            <p>{sub.item}</p>
          ))}
          <hr />
        </div>
      ))}
    </>
  );
}
