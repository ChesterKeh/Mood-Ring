import { NavLink } from "react-router-dom";
import AccountButton from "../AccountButton/AccountButton";

export default function Navbar({ user }) {
  return (
    <>
      <nav>
        <NavLink to="/calendar">calendar</NavLink>/ &nbsp; | &nbsp;
        <NavLink to="/journal">journal</NavLink>
        &nbsp; | &nbsp;
        {/* <span>Welcome, {user.name}</span> */}
        <AccountButton />
      </nav>
    </>
  );
}
