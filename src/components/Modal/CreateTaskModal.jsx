import { useState } from "react";
import { Modal } from "react-overlays";
import { createTask } from "../../utilities/task-service";

export default function CreateTaskModal({
  showCreateTask,
  setShowCreateTask,
  loadTasks,
}) {
  const [taskData, setTaskData] = useState({
    title: "",
    subtask: [],
  });

  //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const hideModal = () => {
    setShowCreateTask(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createTask(taskData);
    console.log(response);
    loadTasks();
  };

  const handleChange = (task) => {
    setTaskData({ ...taskData, [task.target.name]: task.target.value });
  };

  const handleSubtaskChange = (event, index) => {
    const newSubtasks = [...taskData.subtask];
    newSubtasks[index] = { item: event.target.value };
    setTaskData({ ...taskData, subtask: newSubtasks });
  };

  const addSubtaskField = () => {
    setTaskData({
      ...taskData,
      subtask: [...taskData.subtask, { item: "" }],
    });
  };
  return (
    <Modal
      className="modal"
      show={showCreateTask}
      onHide={hideModal}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <label>Add Task</label>
        <form onSubmit={handleSubmit}>
          <label>
            Title: <input name="title" onChange={handleChange} />
          </label>
          {taskData.subtask.map((subtask, index) => (
            <label key={index}>
              Subtask:{" "}
              <input
                name={`subtask-${index}`}
                value={subtask.item}
                onChange={(event) => handleSubtaskChange(event, index)}
              />
            </label>
          ))}
          <button type="button" onClick={addSubtaskField}>
            Add Subtask
          </button>
          <button type="submit">Add</button>
        </form>
        <button onClick={hideModal}>Close</button>
      </div>
    </Modal>
  );
}
