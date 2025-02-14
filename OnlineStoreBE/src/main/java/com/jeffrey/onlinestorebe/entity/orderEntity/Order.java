package com.jeffrey.onlinestorebe.entity.orderEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class Order {
    private Long id;
    private Long user_id;
    private LocalDateTime paid_time;
    private Float money;
    private Long seller_id;
    private Float prime_cost;
    private String status;
    private String withdraw_status;
    private Long address_id;
}
