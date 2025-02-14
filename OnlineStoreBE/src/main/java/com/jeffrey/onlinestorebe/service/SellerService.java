package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

@Service
public interface SellerService {
    Result<String> loginWithWeChat(String code);

    Result<String> gennerateInviteCode(Long id);
}
