import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AccountButton from "../../components/AccountButton/AccountButton";
import TokenExpirePage from "../TokenExpirePage/TokenExpirePage";
import TaskComponent from "../../components/Task/Task";
import Calendar from "../../components/Calendar/Calendar";
import MonthSpinner from "../../components/MonthSpinner/MonthSpinner";
import CreateButton from "../../components/CreateButton/CreateButton";
import { getToken } from "../../utilities/user-service";

function MainPage({ user, setUser }) {
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
            <div className="mainHeader">
                <Navbar />
                <AccountButton />
            </div>
            <div className="sideBody">
                <TaskComponent user={user} tasks={tasks} loadTasks={loadTasks} />
            </div>
            <div className="calendarPage">
                <Calendar className="calendarPageBody" 
                user={user} 
                currentDate={currentDate}/>
                <div className="calendarPageFooter">
                    <MonthSpinner className="calendarPageFooterCol1"
                    currentDate={currentDate}
                    setCurrentDate={setCurrentDate}/>
                    <CreateButton className="calendarPageFooterCol2"
                    user={user}
                    loadTasks={loadTasks}/>
            </div>
        </div>
        </>
      );
    }
  }
  
  export default MainPage;