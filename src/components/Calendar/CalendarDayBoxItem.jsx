import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import EditEventModal from "../Modal/EditEventModal";
import EditJournalModal from "../Modal/EditJournalModal";
import { deleteEvent } from "../../utilities/event-service";
import { deleteJournal } from "../../utilities/journal-service";

export default function CalendarDayBoxItem({ item, load, type }){
    const [showEdit, setShowEdit] = useState(false);

    const editButtonClick = () => {
        setShowEdit(true);
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
            if (type === "event"){
                const response = await deleteEvent(item);
            } else{
                const response = await deleteJournal(item);
            }
            load();
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div>
            {type === "event" ? 
                <div>
                    <div>
                        <label>Event Name: {item.eventname}</label>
                        <button onClick={editButtonClick}>Edit</button>
                        <button onClick={deleteButtonClick}>Delete</button>
                    </div>
                    <label>{item.description}</label>
                    <EditEventModal showEditEvent={showEdit} setShowEditEvent={setShowEdit} prevEvent={item} load={load}/>
                </div> 
            : 
                <div>
                    <div>
                        <label>Title {item.title}</label>
                        <button onClick={editButtonClick}>Edit</button>
                        <button onClick={deleteButtonClick}>Delete</button>
                    </div>
                    <label>{item.body}</label>
                    <EditJournalModal showEditJournal={showEdit} setShowEditJournal={setShowEdit} prevJournal={item} load={load}/>
                </div>
            }
        </div>
    );
}