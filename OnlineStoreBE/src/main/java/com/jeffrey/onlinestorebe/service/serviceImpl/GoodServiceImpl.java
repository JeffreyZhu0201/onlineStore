package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.mapper.GoodMapper;
import com.jeffrey.onlinestorebe.service.GoodService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class GoodServiceImpl implements GoodService {

    @Resource
    private GoodMapper goodMapper;


    @Override
    public Result<Good> addGood(Good good) {
        Boolean goodRes = goodMapper.addGood(good);
        if(goodRes) {
            return new Result<>(200, "商品增加成功", good);
        }
        return new Result<>(400, "商品增加失败", null);
    }
}
