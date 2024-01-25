import { NavLink } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";
import "./Navbar.css";

export default function Navbar({ user }) {
  return (
    <>
      <nav style={{ padding: "20px" }}>
        <NavLink to="/calendar" className="navLink">
          calendar
        </NavLink>

        <NavLink to="/journal" className="navLink">
          journal
        </NavLink>

        {/* <span>Welcome, {user.name}</span> */}
        {/* <AccountButton /> */}
      </nav>
    </>
  );
}
