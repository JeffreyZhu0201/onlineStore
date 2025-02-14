package com.jeffrey.onlinestorebe.controller;


import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.service.GoodService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goods")
public class goodsController {

    @Resource
    private GoodService goodService;

    public Result<Good> addGood(Good good){
        return goodService.addGood(good);
    }
}
