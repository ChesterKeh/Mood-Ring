import { useState } from "react";
import { Modal } from "react-overlays";

export default function CreateEventModal({ showCreateEvent, setShowCreateEvent }){
    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowCreateEvent(false);
    }
    
    return (
        <Modal className="modal" 
                show={showCreateEvent} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Add Event</label>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}