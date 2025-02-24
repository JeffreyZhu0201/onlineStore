package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.utils.Result;
import org.apache.ibatis.jdbc.Null;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/verify")
    public Result<Null> verifyToken() {
        return new Result<>(200, "您已登录!", null);
    }
}
