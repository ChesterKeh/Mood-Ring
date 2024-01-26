import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TokenExpirePage from "../TokenExpirePage/TokenExpirePage";
import TaskComponent from "../../components/Task/Task";
import Calendar from "../../components/Calendar/Calendar";
import Journal from "../../components/Journal/Journal";
import LinkedUsers from "../../components/LinkedUsers/LinkedUsers";
import MonthSpinner from "../../components/MonthSpinner/MonthSpinner";
import CreateButton from "../../components/CreateButton/CreateButton";
import { getToken } from "../../utilities/user-service";
import { getTaskByUser } from "../../utilities/task-service";
import { RingLoader } from "react-spinners";

function MainPage({ user, setUser }) {
    const [loading, setLoading] = useState(false);
    const [validToken, setValidToken] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedNavButton, setSelectedNavButton] = useState("calendar");
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
      if (getToken() !== null){
        setValidToken(true);
      } else{
        setValidToken(false);
      }
      loadTasks();
    }, [selectedNavButton, currentDate]);
  
    const loadTasks = async () => {
      try {
        const response = await getTaskByUser(user._id);
        setTasks(response.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (!validToken || user === null){
       return (
        <><TokenExpirePage setUser={setUser}/></>
       );
    } else{
      return (
        <>
            <div className="mainHeader">
                <Navbar user={user} setSelectedNavButton={setSelectedNavButton} setUser={setUser}/>
            </div>
            <RingLoader
              color="#ffffff"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div className="sideBody">
                <TaskComponent user={user} tasks={tasks} loadTasks={loadTasks} />
                <LinkedUsers user={user} setUser={setUser}/>
            </div>
            <div className="calendarPage">
              {selectedNavButton === "calendar" ? <Calendar className="calendarPageBody" user={user} currentDate={currentDate}/> : <></>}
              {selectedNavButton === "journal" ? <Journal /> : <></>}
              <div className="calendarPageFooter">
                  <MonthSpinner className="calendarPageFooterCol1" currentDate={currentDate} setCurrentDate={setCurrentDate}/>
                  <CreateButton className="calendarPageFooterCol2" user={user} loadTasks={loadTasks} setSelectedNavButton={setSelectedNavButton} setCurrentDate={setCurrentDate}/>
              </div>
            </div>
        </>
      );
    }
  }
}

export default MainPage;
