package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.locationEntity.Location;
import com.jeffrey.onlinestorebe.mapper.LocationMapper;
import com.jeffrey.onlinestorebe.service.LocationService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LocationServiceImpl implements LocationService {

    @Resource
    private LocationMapper locationMapper;

    @Override
    public Result<Boolean> addLocation(Location location) {
        location.setId(UUID.randomUUID().toString());
        Boolean locationRes = locationMapper.insertLocation(location);
        if(locationRes){
            return new Result<Boolean>(200,"添加成功",locationRes);
        }
        return new Result<Boolean>(400,"添加失败",null);
    }

    @Override
    public Result<Boolean> deleteLocation(String id) {
        Boolean deleteRes = locationMapper.deleteLocation(id);
        if(deleteRes){
            return new Result<Boolean>(200,"删除成功",deleteRes);
        }
        return new Result<Boolean>(400,"删除失败",deleteRes);
    }

    @Override
    public Result<Boolean> updateLocation(Location location) {
        Boolean updateRes = locationMapper.updateLocation(location);
        if(updateRes){
            return new Result<Boolean>(200,"更新成功",updateRes);
        }
        return new Result<Boolean>(400,"更新失败",updateRes);
    }

    @Override
    public Result<Integer> countLocation(String userId) {
        Integer countRes = locationMapper.getLocationByIdCount(userId);
        if(countRes>0){
            return new Result<Integer>(200,"查询成功",countRes);
        }
        return new Result<Integer>(400,"查询失败",countRes);
    }

    @Override
    public Result<List<Location>> getAllLocationByUserId(String userId) {
        List<Location> locationList = locationMapper.getAllLocationByUserId(userId);
        if(!locationList.isEmpty()){
            return new Result<List<Location>>(200,"查询成功",locationList);
        }
        return new Result<List<Location>>(400,"查询失败",locationList);
    }
}
