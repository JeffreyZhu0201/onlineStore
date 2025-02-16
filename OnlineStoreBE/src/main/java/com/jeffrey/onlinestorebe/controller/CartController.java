package com.jeffrey.onlinestorebe.controller;


import com.jeffrey.onlinestorebe.entity.cartEntity.Cart;
import com.jeffrey.onlinestorebe.service.CartService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {

    @Resource
    private CartService cartService;

    @PostMapping("/add")
    public Result<Cart> addCart(@RequestBody Cart cart){
        return cartService.addCart(cart);
    }

    @PostMapping("/delete")
    public Result<Cart> deleteCart(@RequestBody Cart cart){
        return cartService.deleteCart(cart);
    }

    @PostMapping("/update")
    public Result<Cart> updateCart(@RequestBody Cart cart){
        return cartService.updateCart(cart);
    }

//    @PostMapping("/additem")
//    public Result<Cart> addItem(@RequestBody Cart cart){
//        return cartService.addItem(cart);
//    }

    @GetMapping("/getcartbyuserid")
    public Result<List<Cart>> getCartByUserId(@RequestParam("userId") String userId){
        return cartService.getCartByUserId(userId);
    }

    @PostMapping("/selectitem")
    public Result<Cart> selectItem(@RequestBody Cart cart){
        return cartService.selectItem(cart);
    }

}
