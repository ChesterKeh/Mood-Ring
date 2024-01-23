import { useState } from "react";
import { Modal } from "react-overlays";
import { createEvent } from "../../utilities/event-service"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateEventModal({ showCreateEvent, setShowCreateEvent }){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventData, setEventData] = useState({});

    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const hideModal = () => {
        setShowCreateEvent(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //Check if end date is > start date
        
        const eventDataArray = [];
        //Based on date range, create individual events
        let currentDate = new Date(startDate.getTime());
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        while (currentDate.getTime() <= endDate.getTime()){
            const dateData = {"calendarday" : new Date(currentDate.getTime())};
            const newEventData = Object.assign({}, eventData, dateData);
            eventDataArray.push(newEventData);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        const response = await createEvent(eventDataArray);
    }

    const handleChange = (event) => {
        setEventData({...eventData, [event.target.name]: event.target.value});
    };
    
    return (
        <Modal className="modal" 
                show={showCreateEvent} 
                onHide={hideModal} 
                renderBackdrop={renderBackdrop}>
            <div>
                <label>Add Event</label>
                <form onSubmit={handleSubmit}>
                    <label>Event Name: <input name="eventname" onChange={handleChange}/></label><br/>
                    <label>Start Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></label><br/>
                    <label>End Date: <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></label><br/>
                    <label>
                        Description:
                        <textarea name="description" onChange={handleChange} rows={4} cols={40}/>
                    </label><br/>
                    <button type="submit">Add</button>
                </form>
                <button onClick={hideModal}>Close</button>
            </div>
        </Modal>
    );
}