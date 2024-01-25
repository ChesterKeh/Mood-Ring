import { confirmAlert } from "react-confirm-alert";
import { deleteTask } from "../../utilities/task-service";
import { useState } from "react";
import EditTaskModal from "../Modal/EditTaskModal";
export default function TaskItem({ item, loadTasks }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleUpdate = (event) => {
    setShowEdit(true);
  };
  const handleDelete = async () => {
    confirmAlert({
      title: "Delete Confirmation",
      message: "Are you sure you want to delete?",
      buttons: [
        {
          label: "Delete",
          onClick: deleteAction,
        },
        {
          label: "Cancel",
        },
      ],
    });
  };
  const deleteAction = async () => {
    try {
      const response = await deleteTask(item);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>{item.title}</h1>
      {item.subtask.map((sub) => (
        <div
          key={sub._id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "6px",
          }}
        >
          <input type="checkbox" id={sub.item} name={sub.item} />
          <label>{sub.item}</label>
        </div>
      ))}
      <button onClick={handleUpdate}>edit</button>
      <button onClick={handleDelete}>delete</button>
      <EditTaskModal
        showEditTask={showEdit}
        setShowEditTask={setShowEdit}
        prevTask={item}
      />

      <hr />
    </>
  );
}
