import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import CreateButton from "../../components/CreateButton/CreateButton";
import MonthSpinner from "../../components/MonthSpinner/MonthSpinner";
import "./CalendarPage.css"

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="calendarPage">
      <Calendar className="calendarPageBody" currentDate={currentDate}/>
      <div className="calendarPageFooter">
        <MonthSpinner className="calendarPageFooterCol1" currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        <CreateButton className="calendarPageFooterCol2"/>
      </div>
    </div>
  );
}
  
export default CalendarPage;