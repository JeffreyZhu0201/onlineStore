package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.entity.orderEntity.OrderItem;
import com.jeffrey.onlinestorebe.entity.userEntity.WeChatCodeDTO;
import com.jeffrey.onlinestorebe.mapper.OrderItemMapper;
import com.jeffrey.onlinestorebe.service.UserService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://127.0.0.1:8080"}, allowCredentials = "true")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/users")
public class UserController {
    @Resource
    private UserService userService;
    @Resource
    private OrderItemMapper oderItemMapper;


    @PostMapping("/login/wechat")
    public Result<String> loginWithWeChat(@RequestBody WeChatCodeDTO weChatCodeDTO) {
        return userService.loginWithWeChat(weChatCodeDTO.getCode());
    }

    @PostMapping("/test")
    public Result<String> test(@RequestBody OrderItem oderItem) {
        System.out.println(oderItemMapper.insertOderItem(oderItem));
        return Result.success("test");
    }
}
