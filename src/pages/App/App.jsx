import { useState } from "react";
import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../UserForm/AuthForm/AuthPage";
import { getUser } from "../../utilities/user-service";

import JournalPage from "../JournalPage/JournalPage";
import Navbar from "../../components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Mood Ring V2</h1>
      <Routes>

    <Route
          path="/calendar"
          element={<CalendarPage />}
        />
        <Route
          path="/signup"
          element={<AuthPage />}
        />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/journal" element={<JournalPage />} />
          
      </Routes>
    </>
  );
}

export default App;
