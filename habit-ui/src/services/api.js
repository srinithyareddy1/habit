import axios from "axios";

const API=axios.create({
baseURL: "https://habit-o09t.onrender.com"
});

export const getHabits= () => API.get("/habits");
export const getCompletedHabits= () => API.get("/habits/completed");
export const addHabit = (habit) =>API.post("/habits",habit);