import { Link } from "react-router-dom"; // Add missing import

import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";

import JournalPage from "../JournalPage/JournalPage";
import Navbar from "../../components/Navbar/Navbar";
import SignupAuthPage from "../UserForm/AuthForm/SignupAuthPage";
import LoginAuthPage from "../UserForm/AuthForm/LoginAuthPage";
import { useState } from "react";
import { getUser } from "../../utilities/user-service";

function App() {
  return (
    <>
      <Navbar />

      <h1>Mood Ring V2</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Routes>
        <Route
          path="/calendar"
          element={<CalendarPage />}
        />
        <Route
          path="/signup"
          element={<SignupAuthPage />}
        />

        <Route
          path="/login"
          element={<LoginAuthPage />}
        />
        <Route
          path="/calendar"
          element={<CalendarPage />}
        />
        <Route
          path="/journal"
          element={<JournalPage />}
        />
      </Routes>
    </>
  );
}

export default App;
