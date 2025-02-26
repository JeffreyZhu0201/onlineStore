package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.sellerEntity.Seller;
import com.jeffrey.onlinestorebe.entity.userEntity.Users;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface SellerMapper {
    // 根据 openid 查询用户是否存在
    @Select("select id from seller where open_id = #{openId}")
    String getSellerByOpenId(String openId);
    // 新增用户 并返回id

    @Insert("insert into seller (id,open_id,phone,username,avatar_url,create_time,invite_code,sharing_ratio) values (#{id},#{open_id},#{phone},#{user_name},#{avatar_url},#{create_time},#{invite_code},#{sharing_ratio)")
    Boolean insertSeller(Seller seller);

    // 根据 id 查询用户
    @Select("select * from seller where id = #{id}")
    Users getSellerById(String id);

    // 根据 id 更新用户信息
    @Update("update seller set username = #{user_name}, avatar_url = #{avatar_url},phone=#{phone} where id = #{id}")
    Boolean updateSeller(Seller seller);

    @Update("update `seller` set invite_code = #{inviteCode} where id = #{id}")
    Boolean updateInviteCode(String id, String inviteCode);

    // 根据 id 删除用户
    @Select("delete from seller where id = #{id}")
    int deleteSeller(String id);

    // 根据 id 查询用户是否存在
    @Select("select count(*) from seller where id = #{id}")
    int getSellerByIdCount(String id);

}