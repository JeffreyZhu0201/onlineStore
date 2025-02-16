package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.orderEntity.OrderItem;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface OrderItemMapper {

    @Insert("insert into order_item (id,item_id,order_id,number,prime_cost,price) value(#{id},#{item_id},#{order_id},#{number},#{prime_cost},#{price})")
    Boolean insertOderItem(OrderItem oderItem);

    @Delete("delete from order_item where id = #{id}")
    Boolean deleteOderItem(String id);

    @Delete("delete from order_item where order_id = #{order_id}")
    Boolean deleteOderItemByOrderId(String order_id);

    @Select("select * from order_item where id = #{id}")
    OrderItem selectOderItemById(String id);

    @Select("select * from order_item where order_id = #{order_id}")
    List<OrderItem> selectOderItemByOrderId(String order_id);

}
