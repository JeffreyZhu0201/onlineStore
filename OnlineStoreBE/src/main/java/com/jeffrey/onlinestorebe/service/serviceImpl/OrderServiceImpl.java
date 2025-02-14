package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderDTO;
import com.jeffrey.onlinestorebe.entity.orderEntity.OrderItem;
import com.jeffrey.onlinestorebe.mapper.OrderItemMapper;
import com.jeffrey.onlinestorebe.mapper.OrderMapper;
import com.jeffrey.onlinestorebe.service.OrderService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Resource
    private OrderMapper orderMapper;

    @Resource
    private OrderItemMapper orderItemMapper;

    @Override
    public Result<Order> createOrder(OrderDTO orderDto) {

//        orderDto.getOrderItems().forEach(orderItem -> {
//            OrderItem newOrderItem = orderItem.builder()
//                    .user_id(orderDto.getUser_id())
//                    .paid_time(LocalDateTime.now())
//                    .prime_cost(orderDto.getPrime_cost())
//                    .status(orderDto.getStatus())
//                    .withdraw_status(orderDto.getWithdraw_status())
//                    .address_id(orderDto.getAddress_id())
//                    .build();
//        });


//        System.out.println(order);
        return new Result<Order>(200,"123",null);
    }

    @Override
    public Result<List<Order>> getOrderByUserId(Long userId) {
        List<Order> resOrder = orderMapper.getOrdersByUserId(userId);
        if(!resOrder.isEmpty()){
            return new Result<List<Order>>(200,"获取订单成功",resOrder);
        }
        return new Result<List<Order>>(400,"获取订单失败",null);
    }

    @Override
    public Result<List<Order>> getOrderByStatusAndUserId(String status, Long userId) {
        List<Order> resOrder = orderMapper.getOrdersByStatusAndUserId(status,userId);
        if(!resOrder.isEmpty()){
            return new Result<List<Order>>(200,"获取订单成功",resOrder);
        }
        return new Result<List<Order>>(400,"获取订单失败",null);
    }
}
