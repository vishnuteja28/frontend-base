package com.blackhawk.demo.services;

import com.blackhawk.demo.models.User;
import com.blackhawk.demo.models.UserCredentials;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {

    @Override
    public User isValidUser(UserCredentials user) {
        InputStream is = ProductServiceImpl.class.getResourceAsStream("/mock-data/users.json");
        Gson gson = new Gson();

        List<User> validUsers = gson.fromJson(new InputStreamReader(is), new TypeToken<List<User>>() {
        }.getType());

        User users = validUsers.stream().filter(obj -> obj.getName().equals(user.getUsername()) &&
                obj.getPassword().equals(user.getPassword())).findFirst().orElse(null);

        return users;
    }
}
