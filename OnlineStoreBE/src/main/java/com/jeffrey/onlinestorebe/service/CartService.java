package com.jeffrey.onlinestorebe.service;

import com.jeffrey.onlinestorebe.entity.cartEntity.Cart;
import com.jeffrey.onlinestorebe.utils.Result;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    Result<Cart> addCart(Cart cart);

    Result<Cart> deleteCart(Cart cart);

    Result<Cart> updateCart(Cart cart);


    Result<Cart> addItem(Cart cart);

    Result<List<Cart>> getCartByUserId(Long userId);

    Result<Cart> selectItem(Cart cart);
}
