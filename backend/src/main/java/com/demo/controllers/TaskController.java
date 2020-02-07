package com.demo.controllers;

import com.demo.domain.Task;
import com.demo.repositories.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    private TaskRepository repository = new TaskRepository();

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return repository.getTasks();
    }

    @PostMapping("/tasks/create")
    public Task createTask(@RequestBody Task task) {
        return this.repository.addTask(task);
    }

}
