import React,{useState} from "react";
import { addHabit } from "../services/api";

function AddHabit(){
    const [name,setName]= useState("");

    const handleSubmit=async (e) => {
        e.preventDefault();

        const habit ={
            name:name,
            completed:false
        };

        await addHabit(habit);

        setName("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <button type="submit"> Add Habit</button>
        </form>
    );

}
export default AddHabit;