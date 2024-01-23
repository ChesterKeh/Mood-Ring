import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Modal } from "react-overlays";
import { updateEvent } from "../../utilities/event-service"

export default function EditEventModal({ showEditEvent, setShowEditEvent, prevEvent}){
    const [eventData, setEventData] = useState(prevEvent);
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowEditEvent(false);
    }

    const handleChange = (event) => {
        setEventData({...eventData, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        confirmAlert({
            title: "Confirm Edit",
            message:"Are you sure you want to edit?",
            buttons: [
                {
                    label: "Edit",
                    onClick: editAction
                },
                {
                    label: "Cancel"
                }
            ]
        });
    }

    const editAction = async () => {
        try {
            const response = await updateEvent(eventData);
            setShowEditEvent(false);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <Modal className="modal" 
                show={showEditEvent} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Edit Event</label>
                <form onSubmit={handleSubmit}>
                    <label>Event Name: <input name="eventname" onChange={handleChange} defaultValue={eventData.eventname}/></label><br/>
                    <label>
                        Description:
                        <textarea name="description" onChange={handleChange} defaultValue={eventData.description} rows={4} cols={40}/>
                    </label><br/>
                    <button type="submit">Edit</button>
                </form>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}