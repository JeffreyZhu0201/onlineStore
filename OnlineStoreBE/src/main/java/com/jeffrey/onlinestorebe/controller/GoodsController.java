package com.jeffrey.onlinestorebe.controller;


import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.service.GoodService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/goods")
public class GoodsController {

    @Resource
    private GoodService goodService;

    @PostMapping("/add")
    public Result<Good> addGood(@RequestBody Good good){
        return goodService.addGood(good);
    }

    @PostMapping("/delete")
    public Result<Good> deleteGood(@RequestParam("id") String id){
        return goodService.deleteGood(id);
    }

    @PostMapping("/update")
    public Result<Good> updateGood(@RequestBody Good good){
        return goodService.updateGood(good);
    }

    @GetMapping("/getById")
    public Result<Good> getGoodById(@RequestParam("id") String id){
        return goodService.getGoodById(id);
    }

    @GetMapping("/getByTitle")
    public Result<List<Good>> getGoodByTitle(@RequestParam("title") String title){
        return goodService.getGoodByTitle(title);
    }

    @GetMapping("/vagueSearch")
    public Result<List<Good>> vagueSearch(@RequestParam("title") String title){
        return goodService.vagueSearch(title);
    }

    @GetMapping("/getAll")
    public Result<List<Good>> getAllGoods(){
        return goodService.getAllGoods();
    }

    @GetMapping("/getRanged")
    public Result<List<Good>> getRangedGoods(@RequestParam("offset") int offset, @RequestParam("limit") int limit){
        return goodService.getRangedGoods(offset, limit);
    }
}
