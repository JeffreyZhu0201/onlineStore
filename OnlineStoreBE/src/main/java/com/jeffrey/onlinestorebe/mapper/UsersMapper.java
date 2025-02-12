package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.userEntity.Users;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UsersMapper {
    // 根据 openid 查询用户是否存在
    @Select("select id from users where open_id = #{openId}")
    Long getUserByOpenId(String openId);
    // 新增用户 并返回id
    Users insertUsers(Users users);
}