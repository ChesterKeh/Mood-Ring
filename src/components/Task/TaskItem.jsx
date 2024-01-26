import { confirmAlert } from "react-confirm-alert";
import { deleteTask } from "../../utilities/task-service";
import { useState } from "react";
import EditTaskModal from "../Modal/EditTaskModal";
import "./Task.css";
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
      <div className="taskContainer">
        <h3>{item.title}</h3>
        <div
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            width: "98%",
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.145)",
            borderRadius: "25px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "10px",
              backgroundColor: "black",
              borderRadius: "25px",
              paddingBottom: "5px",
              paddingRight: "5px",

              fontSize: "10px",
              textAlign: "right",
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

        <button onClick={handleUpdate} className="taskButton">
          ✏️
        </button>
        <button onClick={handleDelete} className="taskButton">
          🗑
        </button>
      </div>
      <EditTaskModal
        showEditTask={showEdit}
        setShowEditTask={setShowEdit}
        prevTask={item}
        loadTasks={loadTasks}
      />
    </>
  );
}
