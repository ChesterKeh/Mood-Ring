import { useState } from "react";
import Select from "react-select";
export default function AccountButton() {
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
    console.log("logout");
  };

  const onDropdownChange = (event) => {
    switch (event.value) {
      case "Private":
        handlePrivate();
        break;
      case "LogOut":
        handleLogout();
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
