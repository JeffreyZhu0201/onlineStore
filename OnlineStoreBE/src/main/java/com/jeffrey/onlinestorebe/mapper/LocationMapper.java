package com.jeffrey.onlinestorebe.mapper;

import com.jeffrey.onlinestorebe.entity.locationEntity.Location;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface LocationMapper {

    Boolean insertLocation(Location location);

    @Delete("delete from location where id=#{id}")
    Boolean deleteLocation(Long id);

    @Update("update location set position=#{position},phone=#{phone},name=#{name},user_id=#{user_id} where id=#{id}")
    Boolean updateLocation(Location user);

    @Select("select count(*) from location where user_id = #{userId}")
    Integer getLocationByIdCount(Long userId);

    @Select("select * from location where user_id=#{userId}")
    List<Location> getAllLocationByUserId(Long userId);

}
