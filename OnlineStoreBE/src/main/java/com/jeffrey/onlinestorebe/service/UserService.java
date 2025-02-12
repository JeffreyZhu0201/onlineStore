package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    Result<String> loginWithWeChat(String code);
}
