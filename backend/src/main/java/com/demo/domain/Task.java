package com.demo.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Task {

    private long id;
    private String title;
    private String description;
    private Category category;
}
