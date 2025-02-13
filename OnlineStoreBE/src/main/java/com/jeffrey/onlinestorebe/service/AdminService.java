package com.jeffrey.onlinestorebe.service;


import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import com.jeffrey.onlinestorebe.mapper.AdminMapper;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;

public interface AdminService {

    public Result<Admin> addAdmin(Admin admin);

    Result<Boolean> deleteAdmin(Long id);

    Result<Admin> updateAdmin(Admin admin);

    Result<Admin> getAdminById(Long id);

    Result<Admin> getAdminByUsername(String username);
}
