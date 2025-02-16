package com.jeffrey.onlinestorebe.entity.goodsEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Good {
    String id;
    String title;
    double price;
    String content;
    String photo;
}
