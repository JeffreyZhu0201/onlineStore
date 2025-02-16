package com.jeffrey.onlinestorebe.entity.orderEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
//@Table(name = "order",schema = "order")
//@Entity
@NoArgsConstructor
public class Order {
//    @Id
//    @GeneratedValue(generator = "uuid")
//    @GenericGenerator(name = "id", strategy = "uuid2")
    String id;
    String user_id;
    LocalDateTime paid_time;
    Float money;
    String seller_id;
    Float prime_cost;
    String status;
    String withdraw_status;
    String address_id;
}
