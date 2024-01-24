import { confirmAlert } from "react-confirm-alert";
import { deleteTask } from "../../utilities/task-service";
export default function TaskItem({ item }) {
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("update");
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
      <hr />
    </>
  );
}
