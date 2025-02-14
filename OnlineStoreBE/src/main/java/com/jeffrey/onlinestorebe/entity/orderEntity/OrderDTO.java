package com.jeffrey.onlinestorebe.entity.orderEntity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class OrderDTO {

    Long user_id;
    Long item_id;
    Integer number;
    List<OrderItem> orderItems;

}
