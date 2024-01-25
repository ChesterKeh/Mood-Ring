import { confirmAlert } from "react-confirm-alert";
import { deleteTask } from "../../utilities/task-service";
import { useState } from "react";
import EditTaskModal from "../Modal/EditTaskModal";
export default function TaskItem({ item, loadTasks }) {
  const [showEdit, setShowEdit] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
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

  const handleCheckboxChange = (subItemId) => {
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(subItemId)) {
        return prevCheckedItems.filter((id) => id !== subItemId);
      } else {
        return [...prevCheckedItems, subItemId];
      }
    });
  };

  const progress = (checkedItems.length / item.subtask.length) * 100;

  return (
    <>
      <h1>{item.title}</h1>
      <div
        style={{
          marginTop: "10px",
          width: "80%",
          position: "relative",
          backgroundColor: "grey",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "20px",
            backgroundColor: "black",
            borderRadius: "4px",
            padding: "3px",
            fontSize: "10px",
          }}
        >
          {Math.floor(progress)}%
        </div>
      </div>
      {item.subtask.map((sub) => (
        <div
          key={sub._id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "6px",
          }}
        >
          <input
            type="checkbox"
            id={sub.item}
            name={sub.item}
            checked={checkedItems.includes(sub._id)}
            onChange={() => handleCheckboxChange(sub._id)}
          />
          <label>{sub.item}</label>
        </div>
      ))}

      <button onClick={handleUpdate}>edit</button>
      <button onClick={handleDelete}>delete</button>
      <EditTaskModal
        showEditTask={showEdit}
        setShowEditTask={setShowEdit}
        prevTask={item}
        loadTasks={loadTasks}
      />

      <hr />
    </>
  );
}
