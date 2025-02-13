package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.cartEntity.Cart;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CartMapper {

    @Insert("insert into cart (item_id,user_id, number,selected) values (#{item_id}, #{user_id}, #{number}, #{selected})")
    Boolean addCart(Cart cart);

    @Delete("delete from cart where item_id = #{item_id} and user_id = #{user_id}")
    Boolean deleteCart(Cart cart);

    @Update("update cart set item_id=#{item_id},user_id=#{user_id}, number=#{number},selected=#{selected} where( item_id = #{item_id} and user_id = #{user_id})")
    Boolean updateCart(Cart cart);
//
//    @Insert("insert into cart (item_id,user_id, number,selected) values (#{item_id}, #{user_id}, #{number}, #{selected})")
//    Boolean addItem(Cart cart);

    @Update("select * from cart where user_id = #{user_id}")
    List<Cart> getCartByUserId(Long userId);



}
