package com.michau.carstoriesserver.repository;

import com.michau.carstoriesserver.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
