package com.jeffrey.onlinestorebe.entity.goodsEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Good {
    Long id;
    String title;
    double price;
    String content;
    String photo;
}
