import { useState } from "react";
import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <h1>Mood Ring V2</h1>
      <Routes>
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
    </>
  );
}

export default App;
