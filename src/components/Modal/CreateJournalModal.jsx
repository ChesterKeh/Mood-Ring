import { useState } from "react";
import { Modal } from "react-overlays";

export default function CreateJournalModal({
  showCreateJournal,
  setShowCreateJournal,
}) {
  //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const hideModal = () => {
    setShowCreateJournal(false);
  };

  return (
    <Modal
      className="modal"
      show={showCreateJournal}
      onHide={hideModal}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <label>Add Journal</label>
        <form onSubmit={handleSubmit}>
          <label>
            Title: <input name="title" on onChange={handleChange} />
          </label>
          <br />
          <label>Date: </label>
          <br />
          <label>
            Mood: <input name="mood" />
          </label>
          <label>
            Body: <textarea />
          </label>
        </form>
        <button onClick={hideModal}>Close</button>
      </div>
    </Modal>
  );
}
