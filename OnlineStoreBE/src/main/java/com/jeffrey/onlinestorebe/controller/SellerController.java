package com.jeffrey.onlinestorebe.controller;


import com.jeffrey.onlinestorebe.entity.userEntity.WeChatCodeDTO;
import com.jeffrey.onlinestorebe.service.SellerService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/seller")
public class SellerController {

    @Resource
    private SellerService sellerService;

    @PostMapping("/login/wechat")
    public Result<String> loginWithWeChat(@RequestBody WeChatCodeDTO weChatCodeDTO) {
        return sellerService.loginWithWeChat(weChatCodeDTO.getCode());
    }

    @PostMapping("/gennerate/invitecode")
    public Result<String> gennerateInviteCode(@RequestParam("id") Long id) {
        return sellerService.gennerateInviteCode(id);
    }

}
