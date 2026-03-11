package com.example.habittracker.controller;

import com.example.habittracker.entity.Habit;
import com.example.habittracker.service.HabitService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/habits")
@CrossOrigin(origins= "http://localhost:3000")
public class HabitController {

    private final HabitService service;

    public HabitController(HabitService service) {
        this.service=service;
    }
    @PostMapping
    public Habit createHabit(@RequestBody Habit habit){
        return service.addHabit(habit);
    }
    @GetMapping
    public List<Habit> getAllHabits(){
        return service.getAllHabits();
    }
    @GetMapping("/completed")
    public List<Habit> getCompleteHabits(){
        return service.getCompletedHabits();
    }
}
