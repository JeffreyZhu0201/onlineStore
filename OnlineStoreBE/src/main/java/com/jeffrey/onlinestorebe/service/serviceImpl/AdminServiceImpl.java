package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import com.jeffrey.onlinestorebe.mapper.AdminMapper;
import com.jeffrey.onlinestorebe.service.AdminService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    @Resource
    private AdminMapper adminMapper;

    @Override
    public Result<Admin> addAdmin(Admin admin) {
        Boolean adminRes = adminMapper.insertAdmin(admin);
        if(adminRes){
            return new Result<Admin>(200,"添加成功",admin);
        }
        return new Result<Admin>(400,"添加失败",null);
    }

    @Override
    public Result<Boolean> deleteAdmin(Long id) {
        Boolean deleteRes = adminMapper.deleteAdmin(id);
        if(deleteRes){
            return new Result<Boolean>(200,"删除成功",deleteRes);
        }
        return new Result<Boolean>(400,"删除失败",deleteRes);
    }

    @Override
    public Result<Admin> updateAdmin(Admin admin) {
        Boolean updateRes = adminMapper.updateAdmin(admin);
        if(updateRes){
            return new Result<Admin>(200,"更新成功",admin);
        }
        return new Result<Admin>(400,"更新失败",null);
    }

    @Override
    public Result<Admin> getAdminById(Long id) {
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
