import CalendarDayBox from "../Calendar/CalendarDayBox";
import "../Calendar/Calendar.css";
import CreateButton from "../CreateButton/CreateButton";
import { getEventsByDate } from "../../utilities/event-service"

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const calendarDays = [];

//Load initial list based on current date
const currentDate = new Date();
const firstDayOfMonthIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); //0 -> Sun
const numOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); //https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript

const response = await getEventsByDate(currentDate);
const monthEvents = response.events;

//Determine initial place in first row
for (let i = 0; i < firstDayOfMonthIndex; i++){
    calendarDays.push({"day": 0});
}
//Populate based on days in the month
for (let i = 1; i <= numOfDaysInMonth; i++){
    const dayBox = {"day": i};
    const dayEvents = [];
    for (const event of monthEvents){
        if (new Date(event["calendarday"]).getDate() === i){
            dayEvents.push(event);
        }
    }
    dayBox.events = dayEvents;
    calendarDays.push(dayBox);
}

export default function Calendar(){
    return (
        <div className="calendar">
            <div className="calendarHeader">
                {weekdays.map((day) => (<h2>{day}</h2>))}
            </div>
            <div className="calendarBody">
                {calendarDays.map((day) => (<CalendarDayBox dayObj={day}/>))}
            </div>
            <CreateButton />
        </div>
    );

}