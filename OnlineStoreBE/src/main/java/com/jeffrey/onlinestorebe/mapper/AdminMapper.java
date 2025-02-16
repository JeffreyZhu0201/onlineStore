package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import org.apache.ibatis.annotations.*;

@Mapper
public interface AdminMapper {

    @Insert("insert into admin (id,user_name,password) values (#{id},#{user_name},#{password})")
    public Boolean insertAdmin(Admin admin);

    @Delete("delete from admin where id=#{id}")
    public Boolean deleteAdmin(String id);

    @Update("update admin set user_name=#{user_name},password=#{password} where id=#{id}")
    public Boolean updateAdmin(Admin admin);

    @Select("select * from admin where user_name=#{user_name}")
    public Admin getAdminByUsername(String user_name);

    @Select("select * from admin where id=#{id}")
    Admin getAdminById(String id);
}
