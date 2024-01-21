import CalendarDayBox from "../Calendar/CalendarDayBox";
import "../Calendar/Calendar.css";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const calendarDays = [];

//Get first day of the month, populate list from that date
const month = 1; //index starts from 0 -> Jan
const year = 2024;
const firstDayOfMonthIndex = new Date(year, month, 1).getDay(); //0 -> Sun
const numOfDaysInMonth = new Date(year, month + 1, 0).getDate(); //https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
console.log(numOfDaysInMonth);
console.log(firstDayOfMonthIndex);
//Determine initial place in first row
for (let i = 0; i < firstDayOfMonthIndex; i++){
    calendarDays.push("");
}
//Populate based on days in the month
for (let i = 1; i <= numOfDaysInMonth; i++){
    calendarDays.push(i);
}

export default function Calendar(){
    return (
        <div className="calendar">
            <div className="calendarHeader">
                {weekdays.map((day) => (<h2>{day}</h2>))}
            </div>
            <div className="calendarBody">
                {calendarDays.map((day) => (<h2>{day}</h2>))}
            </div>
        </div>
    );

}