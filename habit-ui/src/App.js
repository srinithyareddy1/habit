import React from "react";
import { BrowserRouter,Routes, Route} from "react-router-dom"
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";
import Dashboard from "./pages/Dashboard";
import CompletedHabits from "./pages/CompletedHabits";

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Dashboard/>}/>
      <Route path="/completed" element={<CompletedHabits/>}/>

    </Routes>



    </BrowserRouter>
  );
}

export default App;
