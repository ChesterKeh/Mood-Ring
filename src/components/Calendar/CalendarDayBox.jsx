import { useState } from "react";
import { Modal } from "react-overlays";
import CalendarDayBoxItem from "./CalendarDayBoxItem";

export default function CalendarDayBox({ dayObj }){
    const [showJournal, setShowJournal] = useState("hidden");
    const [showSummary, setShowSummary] = useState(false);
    const day = dayObj.day;
    const events = dayObj.events;

    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const boxShowSummary = () =>{
        if (Array.isArray(events) && events.length > 0){
            setShowSummary(true);
        }
    }

    const boxHideSummary = () => {
        setShowSummary(false);
    }

    if (day === 0){
        return (<label className="hidden">test</label>);
    } else{
        return (
            <div>
                <div onClick={boxShowSummary}>
                    <label>{day}</label>
                    <image visibility={showJournal}></image>
                    <div>
                        {events?.map((event) => (<label>{event.eventname}</label>))}
                    </div>
                </div>
                <Modal className="modal" 
                       show={showSummary} 
                       onHide={boxHideSummary} 
                       renderBackdrop={renderBackdrop}>
                    <div>
                        <label>Day: {day}</label>
                        <div>
                            {events?.map((event) => (<CalendarDayBoxItem item={event}/>))}
                        </div>
                        <button onClick={boxHideSummary}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}