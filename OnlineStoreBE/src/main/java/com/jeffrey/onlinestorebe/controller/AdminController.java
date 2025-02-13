package com.jeffrey.onlinestorebe.controller;

import com.jeffrey.onlinestorebe.entity.adminEntity.Admin;
import com.jeffrey.onlinestorebe.service.AdminService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Resource
    private AdminService adminService;

    @PostMapping("/add")
    public Result<Admin> addAdmin(@RequestBody Admin admin){
        return adminService.addAdmin(admin);
    }

    @PostMapping("/delete")
    public Result<Boolean> deleteAdmin(@RequestBody Long id){
        return adminService.deleteAdmin(id);
    }

    @PostMapping("/update")
    public Result<Admin> updateAdmin(@RequestBody Admin admin){
        return adminService.updateAdmin(admin);
    }

    @GetMapping("/getById")
    public Result<Admin> getAdminById(@RequestBody Long id){
        return adminService.getAdminById(id);
    }

    @GetMapping("/getByUsername")
    public Result<Admin> getAdminByUsername(@RequestBody String username){
        return adminService.getAdminByUsername(username);
    }
}
