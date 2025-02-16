package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GoodService {
    Result<Good> addGood(Good good);

    Result<Good> deleteGood(String id);

    Result<Good> updateGood(Good good);

    Result<Good> getGoodById(String id);

    Result<List<Good>> getGoodByTitle(String title);

    Result<List<Good>> vagueSearch(String title);

    Result<List<Good>> getAllGoods();

    Result<List<Good>> getRangedGoods(int offset, int limit);

}
