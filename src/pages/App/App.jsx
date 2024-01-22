import { useState } from "react";
import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../UserForm/AuthForm/AuthPage";
import { getUser } from "../../utilities/user-service";

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
