import { useEffect, useState } from "react";
import { Modal } from "react-overlays";
import { getEventsByDate } from "../../utilities/event-service"
import { getJournalsByDate } from "../../utilities/journal-api";
import CalendarDayBoxItem from "./CalendarDayBoxItem";

export default function CalendarDayBox({ date }){
    const [showJournal, setShowJournal] = useState("hidden");
    const [showSummary, setShowSummary] = useState(false);
    const [events, setEvents] = useState([]);
    const [journals, setJournals] = useState([]);
    const day = date === null ? 0 : date.getDate();

    useEffect(() => {
        const getEvents = async () => {
            const response = await getEventsByDate(date);
            setEvents(response.events);
        }
        const getJournals = async () => {
            const response = await getJournalsByDate(date);
            setJournals(response.journals);
        }
        if (date !== null){
            getEvents();
            getJournals();
        }
    }, [events, journals]);

    //For modal usage https://contactmentor.com/create-modal-react-js-overlay/
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    const boxShowSummary = () =>{
        if ((Array.isArray(events) && events.length > 0)
            || (Array.isArray(journal) && journal.length > 0)){
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
                    <div className="scrollableModal">
                        <label>Day: {day}</label>
                        <div>
                            {events?.map((event) => (<CalendarDayBoxItem item={event} type={"event"}/>))}
                        </div>
                        <hr/>
                        <div>
                            {journals?.map((journal) => (<CalendarDayBoxItem item={journal} type={"journal"}/>))}
                        </div>
                        <button onClick={boxHideSummary}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}