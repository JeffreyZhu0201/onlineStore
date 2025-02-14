package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface OrderMapper {

    @Insert("INSERT INTO orders (user_id, user_id, paid_time, seller_id, prime_cost, address_id) VALUES (#{user_id}, #{paid_time}, #{money}, #{seller_id}, #{prime_cost}, #{address_id})")
    void insertOrder(Order order);

    @Select("SELECT * FROM orders WHERE user_id = #{userId}")
    List<Order> getOrdersByUserId(int userId);

    @Select("SELECT * FROM orders WHERE id = #{orderId}")
    Order getOrderByOrderId(int orderId);

    @Delete("DELETE FROM orders WHERE id = #{orderId}")
    void deleteOrderByOrderId(int orderId);

    @Update("UPDATE orders SET status = #{status} WHERE id = #{orderId}")
    void updateOrderStatus(int orderId, int status);

    @Select("SELECT * FROM orders where status=#{status} and user_id=#{userId}")
    List<Order> getOrdersByStatusAndUserId(int status, int userId);

    @Select("SELECT * FROM orders where status=#{status} and seller_id=#{sellerId} and withdraw_status=#{withdrawStatus}")
    List<Order> getOrdersByStatusAndSellerId(String status, Long sellerId, String withdrawStatus);

    @Update("UPDATE orders SET withdraw_status = #{withdrawStatus} WHERE id = #{orderId}")
    void updateOrderWithdrawStatus(int orderId, String withdrawStatus);

}
