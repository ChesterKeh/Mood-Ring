import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
export default function AccountButton({ user, setUser }) {
  const navigate = useNavigate;
  const dropdownOptions = [
    { value: "Private", label: "Set To Private" },
    { value: "LogOut", label: "Log Out" },
  ];

  const [dropdownValue, setDropdownValue] = useState(null);

  const handlePrivate = () => {
    console.log("private");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("logout");
    setUser(null);
    navigate("/login");
  };

  const onDropdownChange = (event) => {
    switch (event.value) {
      case "Private":
        handlePrivate();
        break;
      case "LogOut":
        handleLogout();
        break;
      default:
        break;
    }
    setDropdownValue(null);
  };

  return (
    <div>
      <Select
        options={dropdownOptions}
        value={dropdownValue}
        onChange={onDropdownChange}
        placeholder="Account"
      />
    </div>
  );
}
