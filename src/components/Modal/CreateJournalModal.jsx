import { useState } from "react";
import { Modal } from "react-overlays";

export default function CreateJournalModal({ showCreateJournal, setShowCreateJournal }){
    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowCreateJournal(false);
    }

    return (
        <Modal className="modal" 
                show={showCreateJournal} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Add Journal</label>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}