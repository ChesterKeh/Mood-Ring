import "./MonthSpinner.css";

export default function MonthSpinner( {currentDate, setCurrentDate} ){
    const minusMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        setCurrentDate(newDate);
    }

    const plusMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        setCurrentDate(newDate);
    }

    return (
        <div className="spinnerBody">
            <button onClick={minusMonth}>&lt;</button>
            <label>{currentDate.toLocaleDateString("default", { month: "long"})} - {currentDate.getFullYear()}</label>
            <button onClick={plusMonth}>&gt;</button>
        </div>
    );
}