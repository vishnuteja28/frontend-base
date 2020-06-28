package com.blackhawk.demo.services;

import com.blackhawk.demo.models.ProductDetails;
import com.blackhawk.demo.models.User;
import com.blackhawk.demo.models.UserCredentials;

public interface LoginService {

    User isValidUser(UserCredentials user);
}
