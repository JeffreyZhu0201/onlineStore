package com.jeffrey.onlinestorebe.entity.sellerEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@Builder
public class Seller {

    Long id;
    String openId;
    String phone;
    String user_name;
    String avatar_url;
    LocalDateTime create_time;
    Float unpaid;
    Float paid;
    String invite_code;
}
