package com.demo.controllers;

import com.demo.domain.User;
import com.demo.repositories.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private UserRepository repository = new UserRepository();

    @GetMapping("/users")
    public List<User> getAllTasks() {
        return repository.getUsers();
    }

    @PostMapping("/users/create")
    public User createUser(@RequestBody User user) {
        return this.repository.addUser(user);
    }

}
