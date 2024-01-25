import { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import CreateButton from "../../components/CreateButton/CreateButton";
import MonthSpinner from "../../components/MonthSpinner/MonthSpinner";
import "./CalendarPage.css";
import TaskComponent from "../../components/Task/Task";
import { getTask } from "../../utilities/task-service";
import { getToken } from "../../utilities/user-service";
import TokenExpirePage from "../TokenExpirePage/TokenExpirePage";

function CalendarPage({ user, setUser }) {
  const [validToken, setValidToken] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if (getToken() !== null){
      setValidToken(true);
    } else{
      setValidToken(false);
    }
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTask();
      setTasks(response.tasks);
      console.log("response:", response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  if (!validToken || user === null){
     return (
      <>
        <TokenExpirePage setUser={setUser}/>
      </>
     );
  } else{
    return (
      <>
        <div className="side">
          <TaskComponent user={user} tasks={tasks} loadTasks={loadTasks} />
        </div>
        <div className="calendarPage">
          <Calendar className="calendarPageBody" user={user} currentDate={currentDate} />
          <div className="calendarPageFooter">
            <MonthSpinner
              className="calendarPageFooterCol1"
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
            />
            <CreateButton
              className="calendarPageFooterCol2"
              user={user}
              loadTasks={loadTasks}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CalendarPage;
