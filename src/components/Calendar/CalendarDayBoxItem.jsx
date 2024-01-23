import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import EditEventModal from "../Modal/EditEventModal";
import { deleteEvent } from "../../utilities/event-service"

export default function CalendarDayBoxItem({ item }){
    const [showEditEvent, setShowEditEvent] = useState(false);

    const editButtonClick = () => {
        setShowEditEvent(true);
    };

    const deleteButtonClick = async () => {
        confirmAlert({
            title: "Delete Confirmation",
            message:"Are you sure you want to delete?",
            buttons: [
                {
                    label: "Delete",
                    onClick: deleteAction
                },
                {
                    label: "Cancel"
                }
            ]
        });
    }

    const deleteAction = async () => {
        try{
            const response = await deleteEvent(item);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div>
            <div>
                <label>{item.eventname}</label>
                <button onClick={editButtonClick}>Edit</button>
                <button onClick={deleteButtonClick}>Delete</button>
            </div>
            <label>{item.description}</label>
            <EditEventModal showEditEvent={showEditEvent} setShowEditEvent={setShowEditEvent} prevEvent={item}/>
        </div>
    );
}