package com.jeffrey.onlinestorebe.entity.locationEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Data
@AllArgsConstructor
@Getter
public class Location {
    String id;
    String position;
    String phone;
    String name;
    String user_id;
}
