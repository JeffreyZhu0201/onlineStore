package com.jeffrey.onlinestorebe.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.Date;

public class JwtTokenUtil {
    // 秘钥，实际应用中应该妥善保管，比如从配置文件读取等
    private static final String SECRET_KEY = "your_secret_key";
    // Token过期时间，这里设置为1小时，单位是毫秒，可以按需调整
    private static final long EXPIRATION_TIME = 60 * 60 * 1000;
    /**
     * 生成携带用户id的token
     * @param userId
     * @return
     */
    public static String generateTokenWithUserId(Long userId) {
        return JWT.create().withClaim("userId", userId).withExpiresAt(new Date(EXPIRATION_TIME)).sign(Algorithm.HMAC256(SECRET_KEY));
    }
    /**
     * 解析token并返回用户id
     * @param token
     * @return
     */
    public static String parseTokenGetUserId(String token) {
        DecodedJWT decodedJWT = JWT.require(Algorithm.HMAC256(SECRET_KEY)).build().verify(token);
        return String.valueOf(decodedJWT.getClaim("userId"));
    }
}