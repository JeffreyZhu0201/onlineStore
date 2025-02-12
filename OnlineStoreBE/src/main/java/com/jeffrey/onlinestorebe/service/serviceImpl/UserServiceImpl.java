package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jeffrey.onlinestorebe.entity.userEntity.Users;
import com.jeffrey.onlinestorebe.mapper.UsersMapper;
import com.jeffrey.onlinestorebe.service.UserService;
import com.jeffrey.onlinestorebe.staticData.WeChatProperties;
import com.jeffrey.onlinestorebe.utils.HttpClientUtil;
import com.jeffrey.onlinestorebe.utils.JwtTokenUtil;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {


    @Resource
    private final UsersMapper usersMapper;

    @Override
    public Result<String> loginWithWeChat(String code) {
        String openId = getOpenId(code);
        // 查询用户是否已存在
        Long userId = usersMapper.getUserByOpenId(openId);
        if (userId == null) {
            Users user = Users.builder().openId("123").createTime(LocalDateTime.now()).build();
            usersMapper.insertUsers(user);
            String token = JwtTokenUtil.generateTokenWithUserId(user.getId());
            return Result.success("登录成功", token);
        }
        return Result.success("登录成功", JwtTokenUtil.generateTokenWithUserId(userId));
    }
    public String getOpenId(String code) {
        WeChatProperties weChatProperties = new WeChatProperties();
        // 封装请求参数
        HashMap<String, String> map = new HashMap<>();
        map.put("appid", weChatProperties.getAppId());
        map.put("secret", weChatProperties.getSecret());
        map.put("js_code", code);
        map.put("grant_type", "authorization_code");
        System.out.println(map);
        // 使用封装好的 HttpClientUtil 从微信后台请求
        String WECHAT_LOGIN_URL = "https://api.weixin.qq.com/sns/jscode2session";
        String json = HttpClientUtil.doGet(WECHAT_LOGIN_URL, map);
        // 将获取过来的数据解析出来
        JSONObject jsonObject = JSON.parseObject(json);
        // 获取openId
        log.info("jsonObject:{}", jsonObject);
        return jsonObject.getString("openid");
    }
}