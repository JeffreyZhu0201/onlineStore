package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.jeffrey.onlinestorebe.entity.sellerEntity.Seller;
import com.jeffrey.onlinestorebe.mapper.SellerMapper;
import com.jeffrey.onlinestorebe.service.SellerService;
import com.jeffrey.onlinestorebe.staticData.WeChatProperties;
import com.jeffrey.onlinestorebe.utils.HttpClientUtil;
import com.jeffrey.onlinestorebe.utils.Result;
import com.jeffrey.onlinestorebe.utils.jwtUtils.JwtTokenUtil;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {
    @Resource
    private final SellerMapper sellerMapper;

    @Override
    public Result<String> loginWithWeChat(String code) {
        String openId = getOpenId(code);
        // 查询用户是否已存在
        String sellerId = sellerMapper.getSellerByOpenId(openId);
        if (sellerId == null) {
            Seller seller = Seller.builder().openId("123").id(UUID.randomUUID().toString()).create_time(LocalDateTime.now()).build();
            if(sellerMapper.insertSeller(seller) != null){
                return Result.success("登录成功", JwtTokenUtil.generateToken(seller.getId()));
            }
            return Result.failure("登录失败");
        }
        return Result.success("登录成功", JwtTokenUtil.generateToken(sellerId));
    }

    @Override
    public Result<String> gennerateInviteCode(String id) {
        String inviteCode = generateRandomString(8);
        if (sellerMapper.updateInviteCode(id, inviteCode)) {
            return Result.success("生成邀请码成功", inviteCode);
        }
        return new Result<String>(400,"生成邀请码失败",null);
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


    public static String generateRandomString(int length) {
        String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        SecureRandom RANDOM = new SecureRandom();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            int index = RANDOM.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }
        return sb.toString();
    }

}