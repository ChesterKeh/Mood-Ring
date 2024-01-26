import AccountButton from "../AccountButton/AccountButton";
import "./Navbar.css";

export default function Navbar({ user, setSelectedNavButton, setUser}) {
  const onNavButtonClick = (event) => {
    setSelectedNavButton(event.target.name);
  }

  return (
    <div style={{ padding: "20px" }}>
      <button name="calendar" onClick={onNavButtonClick}>Calendar</button>
      <button name="journal" onClick={onNavButtonClick}>Journal</button>
      <AccountButton user={user} setUser={setUser}/>
    </div>
  );
}
