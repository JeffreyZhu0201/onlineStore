package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.orderEntity.OrderItem;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface OderItemMapper {

    @Insert("insert into order_item (item_id,order_id,number,prime_cost,price) value(#{item_id},#{order_id},#{number},#{prime_cost},#{price})")
    Boolean insertOderItem(OrderItem oderItem);

    @Delete("delete from order_item where id = #{id}")
    Boolean deleteOderItem(Long id);

    @Delete("delete from order_item where order_id = #{order_id}")
    Boolean deleteOderItemByOrderId(Long order_id);

    @Select("select * from order_item where id = #{id}")
    OrderItem selectOderItemById(Long id);

    @Select("select * from order_item where order_id = #{order_id}")
    List<OrderItem> selectOderItemByOrderId(Long order_id);

}
