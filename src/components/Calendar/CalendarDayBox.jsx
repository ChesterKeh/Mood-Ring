import { useEffect, useState } from "react";
import { Modal } from "react-overlays";
import { getEventsByDate } from "../../utilities/event-service"
import { getJournalsByDate } from "../../utilities/journal-api";
import CalendarDayBoxItem from "./CalendarDayBoxItem";

export default function CalendarDayBox({ user, date }){
    const [showJournal, setShowJournal] = useState("hidden");
    const [showSummary, setShowSummary] = useState(false);
    const [events, setEvents] = useState([]);
    const [journals, setJournals] = useState([]);
    const day = date === null ? 0 : date.getDate();

    useEffect(() => {
        if (date !== null){
            loadEvents();
            loadJournals();
        }
    }, [date]);

    const loadEvents = async () => {
        const newEventList = [];
        const response = await getEventsByDate(date, user._id);
        newEventList.concat(response.events);
        for (const friendId of user.linked_user_id){
            const friendRes = await getEventsByDate(date, friendId);
            if (friendRes.events){
                newEventList.concat(friendRes.events);
            }
        }
        setEvents(newEventList);
    }

    const loadJournals = async () => {
        const response = await getJournalsByDate(date, user._id);
        setJournals(response.journals);
        if (response.journals !== null){
            setShowJournal(true);
        }
    }

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
                    <image path="" visibility={showJournal}></image>
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
                            {events?.map((event) => (<CalendarDayBoxItem item={event} load={loadEvents} type={"event"}/>))}
                        </div>
                        <hr/>
                        <div>
                            {journals?.map((journal) => (<CalendarDayBoxItem item={journal} load={loadJournals} type={"journal"}/>))}
                        </div>
                        <button onClick={boxHideSummary}>Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}