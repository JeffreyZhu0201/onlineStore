package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import com.jeffrey.onlinestorebe.mapper.AdminMapper;
import com.jeffrey.onlinestorebe.service.AdminService;
import com.jeffrey.onlinestorebe.utils.Result;
import com.jeffrey.onlinestorebe.utils.jwtUtils.JwtTokenUtil;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class AdminServiceImpl implements AdminService {
    @Resource
    private AdminMapper adminMapper;

    @Override
    public Result<Map<String,String>> login(String username, String password) {
        Admin admin = adminMapper.getAdminByUsername(username);
        if(admin == null){
            return new Result<Map<String,String>>(400, "用户名不存在", null);
        }
        if(!admin.getPassword().equals(password)){
            return new Result<Map<String,String>>(400,"密码错误",null);
        }
        Map<String,String> map = new HashMap<>();
        map.put("token",JwtTokenUtil.generateToken(admin.getUser_name()));
        map.put("username",admin.getUser_name());
        return new Result<Map<String,String>>(200,"登录成功",map);
    }

    @Override
    public Result<Admin> addAdmin(Admin admin) {
        if(adminMapper.getAdminByUsername(admin.getUser_name())!=null){
            return new Result<Admin>(400,"用户名已存在",null);
        }
        admin.setId(UUID.randomUUID().toString());
        Boolean adminRes = adminMapper.insertAdmin(admin);
        if(adminRes){
            return new Result<Admin>(200,"添加成功",admin);
        }
        return new Result<Admin>(400,"添加失败",null);
    }

    @Override
    public Result<Boolean> deleteAdmin(String id) {
        Boolean deleteRes = adminMapper.deleteAdmin(id);
        if(deleteRes){
            return new Result<Boolean>(200,"删除成功",deleteRes);
        }
        return new Result<Boolean>(400,"删除失败",deleteRes);
    }

    @Override
    public Result<Admin> updateAdmin(Admin admin) {
        if(adminMapper.getAdminByUsername(admin.getUser_name())!=null){
            return new Result<Admin>(400,"用户名已存在",null);
        }
        Boolean updateRes = adminMapper.updateAdmin(admin);
        if(updateRes){
            return new Result<Admin>(200,"更新成功",admin);
        }
        return new Result<Admin>(400,"更新失败",null);
    }

    @Override
    public Result<Admin> getAdminById(String id) {
        Admin admin = adminMapper.getAdminById(id);
        if(admin != null){
            return new Result<Admin>(200,"查询成功",admin);
        }
        return new Result<Admin>(400,"查询失败",null);
    }

    @Override
    public Result<Admin> getAdminByUsername(String username) {
        Admin admin = adminMapper.getAdminByUsername(username);
        if(admin != null){
            return new Result<Admin>(200,"查询成功",admin);
        }
        return new Result<Admin>(400,"查询失败",null);
    }
}
