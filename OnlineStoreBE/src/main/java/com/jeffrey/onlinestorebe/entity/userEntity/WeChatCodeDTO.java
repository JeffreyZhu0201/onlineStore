package com.jeffrey.onlinestorebe.entity.userEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WeChatCodeDTO {
    /**微信token*/
    public String code;
}