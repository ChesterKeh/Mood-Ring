import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
export default function AccountButton() {
  const navigate = useNavigate;
  const dropdownOptions = [
    { value: "Private", label: "Set To Private" },
    { value: "LogOut", label: "Log Out" },
  ];

  const [dropdownValue, setDropdownValue] = useState(null);

  const handlePrivate = (event) => {
    event.preventDefault();
    console.log("private");
  };
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("authToken");
    console.log("logout");
  };

  const onDropdownChange = (event) => {
    switch (event.value) {
      case "Private":
        handlePrivate();
        break;
      case "LogOut":
        handleLogout();
        navigate("/login");
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
