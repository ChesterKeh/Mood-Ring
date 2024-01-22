import { useState } from "react";
import { Modal } from "react-overlays";

export default function CreateTaskModal({ showCreateTask, setShowCreateTask }){
    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowCreateTask(false);
    }

    return (
        <Modal className="modal" 
                show={showCreateTask} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Add Task</label>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}