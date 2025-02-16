package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.goodsEntity.Good;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface GoodMapper {

    @Insert("insert into goods (id,title,price,content,photo) values (#{id},#{title}, #{price},#{content}, #{photo})")
    Boolean addGood(Good good);

    @Delete("delete from goods where id = #{id}")
    Boolean deleteGood(String id);

    @Update("update goods set title = #{title}, price = #{price}, content = #{content}, photo = #{photo} where id = #{id}")
    Boolean updateGood(Good good);

    @Select("select * from goods where id = #{id} LIMIT 1")
    Good getGoodById(String id);

    @Select("select * from goods where title = #{title}")
    List<Good> getGoodByTitle(String title);

    @Select("select * from goods")
    List<Good> getAllGoods();

    @Select("select * from goods order by id Desc LIMIT #{limit} OFFSET #{offset}")
    List<Good> getRangedGoods(int offset, int limit);

    @Select("select * from goods where title like #{title}")
    List<Good> vagueSearch(String title);

}
