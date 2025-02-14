package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderDTO;
import com.jeffrey.onlinestorebe.utils.Result;

public interface OrderService {
    Result<Order> createOrder(OrderDTO orderDto);
}
