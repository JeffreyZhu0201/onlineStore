package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderDTO;
import com.jeffrey.onlinestorebe.utils.Result;

import java.util.List;

public interface OrderService {
    Result<Order> createOrder(OrderDTO orderDto);

    Result<List<Order>> getOrderByUserId(Long userId);

    Result<List<Order>> getOrderByStatusAndUserId(String status, Long userId);
}
