import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { deleteJournal } from "../../utilities/journal-service";
import EditJournalModal from "../Modal/EditJournalModal";
import { format } from "date-fns";
import "./Journal.css";

export default function JournalItem({ item, loadJournals }) {
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
      const response = await deleteJournal(item);
      loadJournals();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="entryWrapper">
        <div className="titleWrapper">
          <h1>{item.title}</h1>
          <div className="buttonWrapper">
            <button onClick={handleUpdate} className="journalButton">
              ✏️
            </button>
            <button onClick={handleDelete} className="journalButton">
              🗑
            </button>
          </div>
        </div>
        <p>
          <i>
            {format(new Date(item.date), "dd MMMM yyyy")}, {item.mood}
          </i>
        </p>
        <p>{item.body}</p>
      </div>
      <EditJournalModal
        showEditJournal={showEdit}
        setShowEditJournal={setShowEdit}
        prevJournal={item}
        loadJournals={loadJournals}
      />
    </>
  );
}
