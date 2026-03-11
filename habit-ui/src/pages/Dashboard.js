import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../components/HabitList";
import AddHabit from "../components/AddHabit";

function Dashboard() {

  return (
    <div>

      <h1>Habit Tracker Dashboard</h1>

      <nav>
        <Link to="/">All Habits</Link> |{" "}
        <Link to="/completed">Completed Habits</Link>
      </nav>

      <AddHabit />
      <h2>All Habits</h2>

      <HabitList />

    </div>
  );
}

export default Dashboard;