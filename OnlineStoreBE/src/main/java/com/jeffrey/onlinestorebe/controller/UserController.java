package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.entity.userEntity.WeChatCodeDTO;
import com.jeffrey.onlinestorebe.service.UserService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.rmi.server.LogStream.log;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/users")
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/login/wechat")
    public Result<String> loginWithWeChat(@RequestBody WeChatCodeDTO weChatCodeDTO) {
        log(weChatCodeDTO.getCode());
        return userService.loginWithWeChat(weChatCodeDTO.getCode());
    }
}
