package com.crudoperation.javacrud.controller;

import com.crudoperation.javacrud.exception.UserNotFoundException;
import com.crudoperation.javacrud.model.User;
import com.crudoperation.javacrud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser (@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @DeleteMapping("/delete/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id" + id + "has been deleted.";
    }
    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setName(newUser.getName());
            user.setUserName(newUser.getUserName());
            user.setEmail(newUser.getEmail());
            user.setPhoneNo(newUser.getPhoneNo());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }

}
