package com.jeffrey.onlinestorebe.utils.jwtUtils;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new JWTInterceptors())
//                .excludePathPatterns("/**");
                .addPathPatterns("/**") // 所有接口token验证
                .excludePathPatterns("/users/login/wechat"); // 登录接口不验证

    }
}
