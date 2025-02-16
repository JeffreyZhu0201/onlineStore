package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.cartEntity.Cart;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CartMapper {

    @Insert("insert into cart (id,item_id,user_id, number,selected) values (#{id},#{item_id}, #{user_id}, #{number}, #{selected})")
    Boolean addCart(Cart cart);

    @Delete("delete from cart where item_id = #{item_id} and user_id = #{user_id} LIMIT 1")
    Boolean deleteCart(Cart cart);

    @Update("update cart set item_id=#{item_id},user_id=#{user_id}, number=#{number},selected=#{selected} where( item_id = #{item_id} and user_id = #{user_id})")
    Boolean updateCart(Cart cart);
//
//    @Insert("insert into cart (item_id,user_id, number,selected) values (#{item_id}, #{user_id}, #{number}, #{selected})")
//    Boolean addItem(Cart cart);

    @Select("select * from cart where user_id = #{userId}")
    List<Cart> getCartByUserId(String userId);

    @Select("select * from cart where user_id = #{user_id} and item_id = #{item_id}")
    List<Cart> itemExist(Cart cart);

}
