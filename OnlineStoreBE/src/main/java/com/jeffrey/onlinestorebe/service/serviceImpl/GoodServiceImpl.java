package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.mapper.GoodMapper;
import com.jeffrey.onlinestorebe.service.GoodService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodServiceImpl implements GoodService {

    @Resource
    private GoodMapper goodMapper;


    @Override
    public Result<Good> addGood(Good good) {
        if (!goodMapper.getGoodByTitle(good.getTitle()).isEmpty()) {
            return new Result<>(400, "商品已存在", null);
        }
        Boolean goodRes = goodMapper.addGood(good);
        if(goodRes) {
            return new Result<>(200, "商品增加成功", goodMapper.getGoodByTitle(good.getTitle()).get(0));
        }
        return new Result<>(400, "商品增加失败", null);
    }

    @Override
    public Result<Good> deleteGood(Long id) {
        Good deleteGood = goodMapper.getGoodById(id);
        Boolean goodRes = goodMapper.deleteGood(id);
        if(goodRes) {
            return new Result<>(200, "商品删除成功", deleteGood);
        }
        return new Result<>(400, "商品删除失败", null);
    }

    @Override
    public Result<Good> updateGood(Good good) {
        if(good.getId() == null){
            return new Result<>(400, "未传递商品id", null);
        }
        Boolean goodRes = goodMapper.updateGood(good);
        if(goodRes) {
            return new Result<>(200, "商品更新成功", good);
        }
        return new Result<>(400, "商品更新失败", null);
    }

    @Override
    public Result<Good> getGoodById(Long id) {
        Good goodRes = goodMapper.getGoodById(id);
        if(goodRes != null) {
            return new Result<>(200, "商品获取成功", goodRes);
        }
        return new Result<>(400, "商品获取失败", null);
    }

    @Override
    public Result<List<Good>> getGoodByTitle(String title) {
        List<Good> goodRes = goodMapper.getGoodByTitle(title);
        if(!goodRes.isEmpty()) {
            return new Result<>(200, "商品获取成功", goodRes);
        }
        return new Result<>(400, "商品获取失败", null);
    }

    @Override
    public Result<List<Good>> vagueSearch(String title) {
        List<Good> searchRes = goodMapper.vagueSearch("%"+title+"%");
        if(!searchRes.isEmpty()) {
            return new Result<List<Good>>(200, "模糊搜索成功", searchRes);
        }
        return new Result<List<Good>>(400, "模糊搜索失败", null);
    }

    @Override
    public Result<List<Good>> getAllGoods() {
        List<Good> allGoods = goodMapper.getAllGoods();
        if(!allGoods.isEmpty()) {
            return new Result<List<Good>>(200, "获取所有商品成功", allGoods);
        }
        return new Result<List<Good>>(400, "获取所有商品失败", null);
    }

    @Override
    public Result<List<Good>> getRangedGoods(int offset, int limit) {
        try{
            List<Good> rangedGoods = goodMapper.getRangedGoods(offset, limit);
            if(!rangedGoods.isEmpty()){
                return new Result<List<Good>>(200, "获取分页商品成功", rangedGoods);
            }
            return new Result<List<Good>>(400, "获取分页商品失败", null);
        }
        catch (Exception e){
            return new Result<List<Good>>(400, "获取分页商品失败", null);
        }

    }
}
