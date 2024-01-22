import { useState } from "react";
import { Modal } from "react-overlays";

export default function CalendarDayBox({ day }){
    const [showJournal, setShowJournal] = useState("hidden");
    const [showSummary, setShowSummary] = useState(false);

    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const boxShowSummary = () =>{
        setShowSummary(true);
        //Add a spinner
        //Load events based on day
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
                        <label>List 1</label>
                        <label>List 1</label>
                        <label>List 1</label>
                    </div>
                </div>
                <Modal className="modal" 
                       show={showSummary} 
                       onHide={boxHideSummary} 
                       renderBackdrop={renderBackdrop}>
                    <div>
                        <label>Day: {day}</label>
                        <button onClick={boxHideSummary}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}