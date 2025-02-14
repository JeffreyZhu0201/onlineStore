package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderDTO;
import com.jeffrey.onlinestorebe.service.OrderService;
import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderServiceImpl implements OrderService {
    @Override
    public Result<Order> createOrder(OrderDTO orderDto) {
        Order order = Order.builder()
                .user_id(orderDto.getUser_id())
                .paid_time(LocalDateTime.now())
//                .seller_id(orderDto.getSeller_id())
//                .prime_cost(orderDto.getPrime_cost())
//                .status(orderDto.getStatus())
//                .withdraw_status(orderDto.getWithdraw_status())
//                .address_id(orderDto.getAddress_id())
                .build();
        System.out.println(order);
        return new Result<Order>(200,"123",order);
    }
}
