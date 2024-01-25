import { Link } from "react-router-dom"; // Add missing import

import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";

import JournalPage from "../JournalPage/JournalPage";
import Navbar from "../../components/Navbar/Navbar";
import SignupAuthPage from "../UserForm/AuthPage/SignupAuthPage";
import LoginAuthPage from "../UserForm/AuthPage/LoginAuthPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <header>{user?.name}</header>
      <Navbar />

      <h1>Mood Ring V2</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Routes>
        <Route path="/calendar" element={<CalendarPage user={user} />} />
        <Route path="/signup" element={<SignupAuthPage setUser={setUser} />} />

        <Route path="/login" element={<LoginAuthPage setUser={setUser} />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/journal" element={<JournalPage user={user} />} />
      </Routes>
    </>
  );
}

export default App;
