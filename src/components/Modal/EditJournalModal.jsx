import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Modal } from "react-overlays";
import { updateJournal } from "../../utilities/journal-service"

export default function EditJournalModal({ showEditJournal, setShowEditJournal, prevJournal}){
    const [journalData, setjournalData] = useState(prevJournal);
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowEditJournal(false);
    }

    const handleChange = (event) => {
        setjournalData({...journalData, [event.target.name]: event.target.value});
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
            const response = await updateJournal(journalData);
            setShowEditJournal(false);
        } catch (error){
            console.log(error);
        }
    }

    return (
        <Modal className="modal" 
                show={showEditJournal} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Edit Journal</label>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input name="title" onChange={handleChange} defaultValue={journalData.title}/></label><br/>
                    <label>
                        Description:
                        <textarea name="body" onChange={handleChange} defaultValue={journalData.body} rows={4} cols={40}/>
                    </label><br/>
                    <button type="submit">Edit</button>
                </form>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}