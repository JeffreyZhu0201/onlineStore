package com.jeffrey.onlinestorebe.staticData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class WeChatProperties {
    private String appId = "wx7e4b3b7b7b7b7b7b";
    private String secret = "1234567890abcdef1234567890abcdef";

    public WeChatProperties() {
    }
}
