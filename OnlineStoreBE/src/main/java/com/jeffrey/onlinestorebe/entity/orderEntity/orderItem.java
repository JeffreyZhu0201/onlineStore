package com.jeffrey.onlinestorebe.entity.orderEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class orderItem {
    Long id;
    Long order_id;
    Long item_id;
    Integer number;
    Float price;
}
