package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

@Service
public interface GoodService {
    Result<Good> addGood(Good good);
}
