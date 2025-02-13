package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.locationEntity.Location;
import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LocationService {

    Result<Boolean> addLocation(Location location);

    Result<Boolean> deleteLocation(Long id);

    Result<Boolean> updateLocation(Location location);

    Result<Integer> countLocation(Long id);

    Result<List<Location>> getAllLocationByUserId(Long userId);
}
