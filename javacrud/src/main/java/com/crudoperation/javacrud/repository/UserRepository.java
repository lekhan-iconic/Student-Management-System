package com.crudoperation.javacrud.repository;

import com.crudoperation.javacrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
