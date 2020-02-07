package com.demo.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {

    private long id;
    private String lastName;
    private String firstName;
}
