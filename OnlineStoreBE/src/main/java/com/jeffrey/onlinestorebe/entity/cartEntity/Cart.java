package com.jeffrey.onlinestorebe.entity.cartEntity;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Cart {
    private String id;
    private String item_id;
    private String user_id;
    private Integer number;
    private Boolean selected;
}
