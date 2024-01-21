import { useState } from "react";
import Calendar from "../../components/Calendar/Calendar";

function CalendarPage() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <h1>Calendar</h1>
        <Calendar />
      </>
    );
  }
  
export default CalendarPage;