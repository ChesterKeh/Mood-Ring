import { useState, useEffect } from "react";
import Select from "react-select";
import CreateEventModal from "../Modal/CreateEventModal";
import CreateTaskModal from "../Modal/CreateTaskModal";
import CreateJournalModal from "../Modal/CreateJournalModal";

export default function CreateButton({ user, loadTasks, loadJournals, setSelectedNavButton, setCurrentDate }) {
  //https://www.npmjs.com/package/react-dropdown
  const dropdownOptions = [
    { value: "Event", label: "Event" },
    { value: "Journal", label: "Journal" },
    { value: "Task", label: "Task" },
  ];
  const [dropdownValue, setDropdownValue] = useState(null); //static value
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [showCreateJournal, setShowCreateJournal] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);

  const onDropdownChange = (event) => {
    switch (event.value) {
      case "Event":
        setShowCreateEvent(true);
        break;
      case "Task":
        setShowCreateTask(true);
        break;
      default:
        setShowCreateJournal(true);
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
        placeholder="+ create"
      />
      <CreateEventModal
        user={user}
        showCreateEvent={showCreateEvent}
        setShowCreateEvent={setShowCreateEvent} 
        setSelectedNavButton={setSelectedNavButton} 
        setCurrentDate={setCurrentDate}
      />
      <CreateTaskModal
        user={user}
        showCreateTask={showCreateTask}
        setShowCreateTask={setShowCreateTask}
        loadTasks={loadTasks}
      />
      <CreateJournalModal
        user={user}
        showCreateJournal={showCreateJournal}
        setShowCreateJournal={setShowCreateJournal}
        loadJournals={loadJournals}
        setSelectedNavButton={setSelectedNavButton}
        setCurrentDate={setCurrentDate}
      />
    </div>
  );
}
