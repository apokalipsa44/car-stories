package com.michau.carstoriesserver.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class User {
    @Id
    public String id;

    public String firstName;
    public String lastName;
}
