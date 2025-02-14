package com.jeffrey.onlinestorebe.entity.orderEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class order {
    Long id;
    Long paid_user;
    LocalDateTime paid_time;
    Float money;
    Long seller_id;
}
