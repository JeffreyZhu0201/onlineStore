package com.jeffrey.onlinestorebe.entity.userEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@AllArgsConstructor
@Data
public class WeChatCodeDTO {
    /**微信token*/
    private String code;
}