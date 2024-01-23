import { useState } from "react";

export default function CalendarDayBoxItem({ item }){

    return (
        <div>
            <div>
                <label>{item.eventname}</label>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <label>{item.description}</label>
        </div>
    );
}