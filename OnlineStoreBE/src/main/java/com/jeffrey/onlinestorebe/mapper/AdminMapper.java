package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import org.apache.ibatis.annotations.*;

@Mapper
public interface AdminMapper {

    @Insert("insert into admin (username,password) values (#{user_name},#{password})")
    public Boolean insertAdmin(Admin admin);

    @Delete("delete from admin where id=#{id}")
    public Boolean deleteAdmin(Long id);

    @Update("update admin set username=#{user_name},password=#{password} where id=#{id}")
    public Boolean updateAdmin(Admin admin);

    @Select("select * from admin where username=#{user_name}")
    public Admin getAdminByUsername(String user_name);

    @Select("select * from admin where id=#{id}")
    Admin getAdminById(Long id);
}
