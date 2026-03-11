import React from "react";

function HabitItem({habit}){
    return (
        <div>
            <h4>{habit.name}</h4>
            <p>Status: {habit.completed ? "Completed" : "Pending"}</p>
        </div>
    )
}
export default HabitItem;