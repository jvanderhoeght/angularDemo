package com.demo.repositories;

import com.demo.domain.Task;

import java.util.ArrayList;
import java.util.List;


public class TaskRepository {

    private List<Task> tasks = new ArrayList();
    private long id = 0;

    public TaskRepository() {
        initializeRepository();
    }

    private void initializeRepository() {
        Task task1 = Task.builder()
                .title("Task 1")
                .description("Task 1 description")
                .build();
        Task task2 = Task.builder()
                .title("Task 2")
                .description("Task 2 description")
                .build();
        Task task3 = Task.builder()
                .title("Task 3")
                .description("Task 3 description")
                .build();
        this.addTask(task1);
        this.addTask(task2);
        this.addTask(task3);
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public Task addTask(Task task) {
        task.setId(this.id++);
        this.tasks.add(task);

        return task;
    }
}
