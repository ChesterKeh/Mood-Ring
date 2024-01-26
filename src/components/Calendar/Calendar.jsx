import CalendarDayBox from "../Calendar/CalendarDayBox";
import "../Calendar/Calendar.css";


export default function Calendar({ user, currentDate }){
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const calendarDays = [];
    
    //Load initial list based on current date
    const firstDayOfMonthIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); //0 -> Sun
    const numOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); //https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
    //Determine initial place in first row
    for (let i = 0; i < firstDayOfMonthIndex; i++){
        calendarDays.push(null);
    }
    //Populate based on days in the month
    for (let i = 1; i <= numOfDaysInMonth; i++){
        const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        calendarDays.push(dayDate);
    }
    
    return (
        <div className="calendar">
            <div className="calendarHeader">
                {weekdays.map((day) => (<h3>{day}</h3>))}
            </div>
            <div className="calendarBody">
                {calendarDays.map((day) => (<CalendarDayBox user={user} date={day}/>))}
            </div>
        </div>
    );
  }
}
