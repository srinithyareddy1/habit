import React,{useEffect, useState} from "react";
import { getHabits } from "../services/api";
import HabitItem from "./HabitItem";

function HabitList(){

    const [habits, setHabits]= useState([]);

    useEffect(() =>{
        fetchHabits();
    }, []);
    const fetchHabits=async () => {
        const response=await getHabits();
        setHabits(response.data);
    };
    return(
        <div>

            {habits.map((habit) =>(
                <HabitItem key ={habit.id} habit={habit}/>
            ))}
        </div>
    );




}
export default HabitList;