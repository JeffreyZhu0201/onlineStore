package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderDTO;
import com.jeffrey.onlinestorebe.service.OrderService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Resource
    private OrderService orderService;

    @PostMapping("/create")
    public Result<Order> createOrder(@RequestBody OrderDTO orderDto) {
        return orderService.createOrder(orderDto);
    }

    @GetMapping("/get/by/userid")
    public Result<List<Order>> getOrderByUserId(@RequestParam("userId") Long userId) {
        return orderService.getOrderByUserId(userId);
    }

    @GetMapping("/get/by/statusAndUserId")
    public Result<List<Order>> getOrderByStatusAndUserId(@RequestParam("status") String status, @RequestParam("userId") Long userId) {
        return orderService.getOrderByStatusAndUserId(status, userId);
    }


}
