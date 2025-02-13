package com.jeffrey.onlinestorebe.entity.locationEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Location {
    int id;
    String position;
    String phone;
    String name;
    int user_id;
}
