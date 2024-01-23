import CalendarPage from "../CalendarPage/CalendarPage";
import { Route, Routes } from "react-router-dom";

import AuthPage from "../UserForm/AuthForm/SignupAuthPage";

import JournalPage from "../JournalPage/JournalPage";
import Navbar from "../../components/Navbar/Navbar";
import SignupAuthPage from "../UserForm/AuthForm/SignupAuthPage";
import LoginAuthPage from "../UserForm/AuthForm/LoginAuthPage";

function App() {
  return (
    <>
      <Navbar />
      <h1>Mood Ring V2</h1>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/signup" element={<SignupAuthPage />} />

        <Route path="/login" element={<LoginAuthPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </>
  );
}

export default App;
