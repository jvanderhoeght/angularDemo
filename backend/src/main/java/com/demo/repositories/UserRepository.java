package com.demo.repositories;

import com.demo.domain.User;

import java.util.ArrayList;
import java.util.List;


public class UserRepository {

    private List<User> users = new ArrayList();
    private long id = 0;

    public UserRepository() {
        initializeRepository();
    }

    private void initializeRepository() {
        User user1 = User.builder().firstName("Richard").lastName("Castle").build();
        User user2 = User.builder().firstName("Catherine").lastName("Beckett").build();
        User user3 = User.builder().firstName("Javier").lastName("Esposito").build();
        this.addUser(user1);
        this.addUser(user2);
        this.addUser(user3);
    }

    public List<User> getUsers() {
        return users;
    }

    public User addUser(User user) {
        user.setId(this.id++);
        this.users.add(user);

        return user;
    }
}
