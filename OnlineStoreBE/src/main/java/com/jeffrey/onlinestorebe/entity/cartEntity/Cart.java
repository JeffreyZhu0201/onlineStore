package com.jeffrey.onlinestorebe.entity.cartEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Cart {
    private Long id;
    private Long item_id;
    private Long user_id;
    private Integer number;
    private Boolean selected;
}
