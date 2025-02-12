package com.jeffrey.onlinestorebe.utils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;


@Component
@RequiredArgsConstructor
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // 1.获取请求的 url
        String url = request.getRequestURL().toString();      // 2.判断请求的 url 中是否包含 login，如果包含，说明是登录操作，放行
        System.out.println(url);
        if (url.contains("login")) {
            return true;
        }
        if (HttpMethod.OPTIONS.toString().equals(request.getMethod())) {
            System.out.println("OPTIONS 请求，放行");
            return true;
        }
        // 3.获取请求头中的 Authorization
        String token = request.getHeader("Authorization");
        LoginInterceptor.log.info("请求头:{}", request.getHeader("Authorization"));
        // 4.判断令牌是否存在，如果不存在，返回错误结果(未登录)
        if (!StringUtils.hasLength(token)) {
            response.setStatus(401);
            return false;
        }
        // 5.解析 token，如果解析失败，返回错误结果
        try {
            String userId = JwtTokenUtil.parseTokenGetUserId(token);
            request.setAttribute("userId", userId);
            return true;
        } catch (Exception e) {
            LoginInterceptor.log.error("解析令牌失败", e);
            response.setStatus(401);
            return false;
        }
    }
}