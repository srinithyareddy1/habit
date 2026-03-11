package com.example.habittracker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
public class Habit {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean completed;

    public Habit(){

    }

    public Habit( String name, boolean completed){//constructor
        this.name=name;
        this.completed=completed;
    }

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(){
        this.name=name;
    }
    public boolean isCompleted(){
        return completed;
    }
    public void setCompleted(boolean completed){
        this.completed=completed;
    }


}
