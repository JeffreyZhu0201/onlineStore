package com.jeffrey.onlinestorebe.controller;


import com.jeffrey.onlinestorebe.entity.locationEntity.Location;
import com.jeffrey.onlinestorebe.service.LocationService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/location")
public class LocationController {

    @Resource
    private LocationService locationService;

    @PostMapping("/add")
    public Result<Boolean> addLocation(@RequestBody Location location){
        return locationService.addLocation(location);
    }

    @PostMapping("/delete")
    public Result<Boolean> deleteLocation(@RequestParam String id){
        return locationService.deleteLocation(id);
    }

    @PostMapping("/update")
    public Result<Boolean> updateLocation(@RequestBody Location location) {
        return locationService.updateLocation(location);
    }

    @GetMapping("/count")
    public Result<Integer> countLocation(@RequestParam String userId) {
        return locationService.countLocation(userId);
    }

    @GetMapping("/getAll")
    public Result<List<Location>> getAllLocationByUserId(@RequestParam String userId) {
        return locationService.getAllLocationByUserId(userId);
    }

}
