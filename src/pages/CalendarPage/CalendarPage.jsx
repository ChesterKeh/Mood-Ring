import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import CreateButton from "../../components/CreateButton/CreateButton";
import MonthSpinner from "../../components/MonthSpinner/MonthSpinner";
import "./CalendarPage.css"

function CalendarPage({ user }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="calendarPage">
      <Calendar className="calendarPageBody" user={user} currentDate={currentDate}/>
      <div className="calendarPageFooter">
        <MonthSpinner className="calendarPageFooterCol1" currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        <CreateButton user={user} className="calendarPageFooterCol2"/>
      </div>
    </div>
  );
}
  
export default CalendarPage;