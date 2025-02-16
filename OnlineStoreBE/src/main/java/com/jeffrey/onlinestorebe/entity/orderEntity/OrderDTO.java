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

    String user_id;
    String address_id;
    List<OrderItem> orderItems;
    String seller_id;
}
