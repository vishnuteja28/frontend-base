package com.blackhawk.demo.controllers;

import com.blackhawk.demo.models.ProductDetails;
import com.blackhawk.demo.models.User;
import com.blackhawk.demo.models.UserCredentials;
import com.blackhawk.demo.services.LoginService;
import com.blackhawk.demo.services.ProductService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sun.rmi.runtime.Log;

@RestController
@RequestMapping("api/v1/users")
public class UserController {

    private LoginService loginService;

    public UserController(LoginService loginService) {
        this.loginService = loginService;
    }


    /**
     * This method will return info of the user if he/she is authentic user
     *
     * @param user  UserCredentials object having username and password
     * @return User object having user info
     */
    @CrossOrigin
    @PostMapping(path = "/authenticate")
    public User isAuthenticUser(@RequestBody UserCredentials user) {
        //Call Service by passing the parameters
        return loginService.isValidUser(user);
    }

}

