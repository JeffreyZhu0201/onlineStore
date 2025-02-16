package com.jeffrey.onlinestorebe.service;


import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import com.jeffrey.onlinestorebe.mapper.AdminMapper;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;

public interface AdminService {

    Result<Admin> addAdmin(Admin admin);

    Result<Boolean> deleteAdmin(String id);

    Result<Admin> updateAdmin(Admin admin);

    Result<Admin> getAdminById(String id);

    Result<Admin> getAdminByUsername(String username);
}
