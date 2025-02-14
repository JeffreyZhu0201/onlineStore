package com.jeffrey.onlinestorebe.entity.orderEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class Order {
    Long id;
    Long user_id;
    LocalDateTime paid_time;
    Float money;
    Long seller_id;
    Float prime_cost;
    String status;
    String withdraw_status;
    Long address_id;
}
