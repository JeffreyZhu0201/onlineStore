package com.jeffrey.onlinestorebe.entity.userEntity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class Users {
    /** 用户id */
    private Long id;
    /** 微信用户唯一标识 */
    private String openId;
//     用户电话号码
    private String phone;
    /** 用户名称 */
    private String username;
    /** 头像路径 */
    private String avatarUrl;
    /** 创建时间 */
    private LocalDateTime createTime;
}