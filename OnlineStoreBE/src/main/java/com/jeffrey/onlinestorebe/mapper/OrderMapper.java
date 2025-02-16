package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.orderEntity.Order;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface OrderMapper {

    @Insert("INSERT INTO `order` (user_id, paid_time, seller_id, prime_cost,money, address_id) values (#{user_id}#{paid_time}, #{seller_id}, #{prime_cost},#{money} ,#{address_id}))")//
    void insertOrder(Order order);

    @Delete("DELETE FROM `order` WHERE id = #{orderId}")
    void deleteOrderByOrderId(int orderId);

    @Select("SELECT * FROM `order` WHERE user_id = #{userId}")
    List<Order> getOrdersByUserId(Long userId);

    @Select("SELECT * FROM `order` WHERE id = #{orderId}")
    Order getOrderByOrderId(int orderId);

    @Update("UPDATE `order` SET status = #{status} WHERE id = #{orderId}")
    Boolean updateOrderStatus(int orderId, String status);

    @Select("SELECT * FROM `order` where status=#{status} and user_id=#{userId}")
    List<Order> getOrdersByStatusAndUserId(String status, Long userId);

    @Select("SELECT * FROM `order` where status=#{status} and seller_id=#{sellerId} and withdraw_status=#{withdrawStatus}")
    List<Order> getOrdersByStatusAndSellerId(String status, Long sellerId, String withdrawStatus);

    @Select("SELECT * FROM `order` where seller_id=#{sellerId}")
    List<Order> getOrdersBySellerId(Long sellerId);

    @Update("UPDATE `order` SET withdraw_status = #{withdrawStatus} WHERE id = #{orderId}")
    Boolean updateOrderWithdrawStatus(Long orderId, String withdrawStatus);

}
