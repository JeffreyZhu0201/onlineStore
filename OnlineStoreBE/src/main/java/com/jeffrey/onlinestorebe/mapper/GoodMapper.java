package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GoodMapper {

    @Insert("insert into goods (title,price,content,photo) values (#{title}, #{price},#{content}, #{photo})")
    Boolean addGood(Good good);



}
