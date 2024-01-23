import { useState } from "react";
import { Modal } from "react-overlays";
import { createTaskWithSubtasks } from "../../utilities/task-service";

export default function CreateTaskModal({ showCreateTask, setShowCreateTask }) {
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
    const response = await createTaskWithSubtasks(taskData);
    console.log(response);
  };

  const handleChange = (task) => {
    setTaskData({ ...taskData, [task.target.name]: task.target.value });
  };

  const handleSubtaskChange = (subtask) => {
    setTaskData({
      ...taskData,
      subtask: [...taskData.subtask, { item: subtask.target.value }],
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
          <label>
            Subtask: <input name="subtask" onChange={handleSubtaskChange} />
            <input name="subtask" onChange={handleSubtaskChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <button onClick={hideModal}>Close</button>
      </div>
    </Modal>
  );
}
