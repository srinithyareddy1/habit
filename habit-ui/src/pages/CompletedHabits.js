import React,{useEffect,useState} from "react";
import { getCompletedHabits } from "../services/api";

function CompletedHabits(){
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetchCompleted();
    }, []);
    
    const fetchCompleted= async()=>{
        const response= await getCompletedHabits();

        setHabits(response.data);
    };

    return (
        <div>
            <h1>Completed Habits</h1>

            {habits.map((habit) => (
                <div key={habit.id}>
                <p>{habit.name}</p>
                </div>
            ))}
        </div>
    );
}
export default CompletedHabits;