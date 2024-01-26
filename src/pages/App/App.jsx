import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import MainPage from "../MainPage/MainPage";
import { getToken } from "../../utilities/user-service";
import TokenExpirePage from "../TokenExpirePage/TokenExpirePage";

function App() {
  const [user, setUser] = useState(null);
  const [validToken, setValidToken] = useState(false);

  useEffect(() => {
    if (getToken() !== null) {
      setValidToken(true);
    } else {
      setValidToken(false);
    }
  }, []);

  if (!user) {
    return (
      <>
        <Routes>
          <Route path="*" element={<AuthPage setUser={setUser} />} />
        </Routes>
      </>
    );
  } else {
    if (validToken) {
      return (
        <>
          {/* <h1>Mood Ring V2</h1> */}
          <Routes>
            <Route
              path="*"
              element={<MainPage user={user} setUser={setUser} />}
            />
            {/* <Route path="/calendar" element={<CalendarPage user={user} setUser={setUser}/>} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<CalendarPage user={user} />} /> */}
          </Routes>
        </>
      );
    } else {
      <TokenExpirePage />;
    }
  }
}

export default App;
