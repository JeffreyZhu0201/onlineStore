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
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class OrderServiceImpl implements OrderService {

    @Resource
    private OrderMapper orderMapper;

    @Resource
    private OrderItemMapper orderItemMapper;

    @Override
    public Result<Order> createOrder(OrderDTO orderDto) {

        Order order = Order.builder()
                .id(String.valueOf(UUID.randomUUID()))
                .user_id(orderDto.getUser_id())
                .paid_time(LocalDateTime.now())
                .address_id(orderDto.getAddress_id())
                .seller_id(orderDto.getSeller_id())
                .build();
        AtomicReference<Float> money = new AtomicReference<>(0f);
        AtomicReference<Float> prime_cost = new AtomicReference<>(0f);
        orderDto.getOrderItems().forEach(orderItem -> {
            OrderItem newOrderItem = OrderItem.builder()
                    .id(String.valueOf(UUID.randomUUID()))
                    .order_id(order.getId())
                    .item_id(orderItem.getItem_id())
                    .number(orderItem.getNumber())
                    .price(orderItem.getPrice())
                    .prime_cost(orderItem.getPrime_cost())
                    .build();
            money.updateAndGet(v -> v + orderItem.getPrice() * orderItem.getNumber());
            prime_cost.updateAndGet(v -> v + orderItem.getPrime_cost() * orderItem.getNumber());
            orderItemMapper.insertOrderItem(newOrderItem);
        });
        order.setMoney(money.get());
        order.setPrime_cost(prime_cost.get());
        System.out.println(order);
        orderMapper.insertOrder(order);

//        System.out.println(order);
        return new Result<Order>(200,"123",order);
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
