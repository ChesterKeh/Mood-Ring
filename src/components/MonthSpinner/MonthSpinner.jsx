import { useEffect, useState } from "react";

export default function MonthSpinner(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState("");

    useEffect(() => {
        //https://stackoverflow.com/questions/1643320/get-month-name-from-date
        setCurrentDate(new Date());
        setCurrentMonth(currentDate.toLocaleDateString("default", { month: "long"}));
    }, []);
    
    const minusMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        setCurrentMonth(newDate.toLocaleDateString("default", { month: "long"}));
        setCurrentDate(newDate);
    }

    const plusMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        setCurrentMonth(newDate.toLocaleDateString("default", { month: "long"}));
        setCurrentDate(newDate);
    }

    return (
        <div>
            <button onClick={minusMonth}>&lt;</button>
            <label>{currentMonth}</label>
            <button onClick={plusMonth}>&gt;</button>
        </div>
    );
}