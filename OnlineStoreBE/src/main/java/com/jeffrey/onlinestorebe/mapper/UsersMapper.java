package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.userEntity.Users;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UsersMapper {
    // 根据 openid 查询用户是否存在
    @Select("select id from users where open_id = #{openId}")
    String getUserByOpenId(String openId);
    // 新增用户 并返回id
    Boolean insertUsers(Users users);

    // 根据 id 查询用户
    @Select("select * from users where id = #{id}")
    Users getUserById(String id);

    // 根据 id 更新用户信息
    @Update("update users set user_name = #{username}, avatar_url = #{avatar_url},phone=#{phone} where id = #{id}")
    int updateUsers(Users users);

    // 根据 id 删除用户
    @Select("delete from users where id = #{id}")
    int deleteUsers(String id);

    // 根据 id 查询用户是否存在
    @Select("select count(*) from users where id = #{id}")
    int getUserByIdCount(String id);

}