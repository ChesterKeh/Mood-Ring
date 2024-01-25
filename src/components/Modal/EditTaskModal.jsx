import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Modal } from "react-overlays";
import { updateTask } from "../../utilities/task-service";

export default function EditTaskModal({
  showEditTask,
  setShowEditTask,
  prevTask,
  loadTasks,
}) {
  const [taskData, setTaskData] = useState(prevTask);

  //   console.log("previoustask:" + taskData.subtask);
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const hideModal = () => {
    setShowEditTask(false);
  };

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubtaskChange = (event, index) => {
    const newSubtasks = [...taskData.subtask];
    newSubtasks[index] = { item: event.target.value };
    setTaskData({ ...taskData, subtask: newSubtasks });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    confirmAlert({
      title: "Confirm Edit",
      message: "Are you sure you want to edit?",
      buttons: [
        {
          label: "Edit",
          onClick: editAction,
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  const editAction = async () => {
    try {
      const response = await updateTask(taskData);
      loadTasks();
      setShowEditTask(false);
    } catch (error) {
      console.log(error);
    }
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
      show={showEditTask}
      onHide={hideModal}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <label>Edit Task</label>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              name="title"
              onChange={handleChange}
              defaultValue={taskData.title}
            />
          </label>
          <br />
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
          <br />
          <button type="submit">Edit</button>
        </form>
        <button onClick={hideModal}>Close</button>
      </div>
    </Modal>
  );
}
