import "./MonthSpinner.css";

export default function MonthSpinner({ currentDate, setCurrentDate }) {
  const minusMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      currentDate.getDate()
    );
    setCurrentDate(newDate);
  };

  const plusMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="spinnerBody">
      <button onClick={minusMonth} className="spinnerButton">
        &lt;
      </button>
      <h1>
        {currentDate.toLocaleDateString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h1>
      <button onClick={plusMonth} className="spinnerButton">
        &gt;
      </button>
    </div>
  );
}
