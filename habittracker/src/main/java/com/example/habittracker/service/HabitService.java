package com.example.habittracker.service;

import java.util.List;
import java.util.stream.Collectors;

import com.example.habittracker.entity.Habit;
import com.example.habittracker.repository.HabitRepository;
import org.springframework.stereotype.Service;

@Service
public class HabitService {

    private final HabitRepository repository;

    public HabitService(HabitRepository repository){
        this.repository=repository;
    }
    public Habit addHabit(Habit habit){
        return repository.save(habit);
    }
    public List<Habit> getAllHabits(){
        return repository.findAll();
    }
    

   
    public List<Habit> getCompletedHabits(){

        return  repository.findAll()
                .stream()
                .filter(h ->h.isCompleted())
                .collect(Collectors.toList());
    }
    
}
