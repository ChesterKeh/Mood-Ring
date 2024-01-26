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
import { getJournalsByUser } from "../../utilities/journal-service";
import "./MainPage.css";

function MainPage({ user, setUser }) {
  const [loading, setLoading] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedNavButton, setSelectedNavButton] = useState("calendar");
  const [tasks, setTasks] = useState([]);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    if (getToken() !== null) {
      setValidToken(true);
    } else {
      setValidToken(false);
    }
    loadTasks();
    loadJournals();
  }, [selectedNavButton, currentDate]);

  const loadTasks = async () => {
    try {
      const response = await getTaskByUser(user._id);
      setTasks(response.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const loadJournals = async () => {
    try {
      const response = await getJournalsByUser(user._id);
      setJournals(response.journals);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  if (!validToken || user === null) {
    return (
      <>
        <TokenExpirePage setUser={setUser} />
      </>
    );
  } else {
    return (
      <>
        <div className="mainHeader">
          <Navbar
            user={user}
            setSelectedNavButton={setSelectedNavButton}
            setUser={setUser}
          />
          <CreateButton
            user={user}
            loadTasks={loadTasks}
            setSelectedNavButton={setSelectedNavButton}
            setCurrentDate={setCurrentDate}
          />
        </div>
        <div className="container">
          <div className="sideBody">
            <TaskComponent user={user} tasks={tasks} loadTasks={loadTasks} />
            <LinkedUsers user={user} setUser={setUser} />
          </div>
          <div className="entryContainer">
            {/* <div className="calendarPage"> */}
            {selectedNavButton === "calendar" ? (
              <Calendar
                className="calendarPageBody"
                user={user}
                currentDate={currentDate}
              />
            ) : (
              <></>
            )}
            {selectedNavButton === "journal" ? (
              <Journal
                user={user}
                journals={journals}
                loadJournals={loadJournals}
              />
            ) : (
              <></>
            )}
            <div className="calendarPageFooter">
              <MonthSpinner
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
