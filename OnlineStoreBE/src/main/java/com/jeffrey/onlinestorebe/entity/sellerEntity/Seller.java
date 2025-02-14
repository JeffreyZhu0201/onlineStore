package com.jeffrey.onlinestorebe.entity.sellerEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class Seller {
    private Long id;
    private String openId;
    private  String phone;
    private String user_name;
    private String avatar_url;
    private LocalDateTime create_time;
    private Float unpaid;
    private Float paid;
    private String invite_code;
}
