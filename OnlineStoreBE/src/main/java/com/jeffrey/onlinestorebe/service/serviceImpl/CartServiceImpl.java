package com.jeffrey.onlinestorebe.service.serviceImpl;

import com.jeffrey.onlinestorebe.entity.cartEntity.Cart;
import com.jeffrey.onlinestorebe.mapper.CartMapper;
import com.jeffrey.onlinestorebe.service.CartService;
import com.jeffrey.onlinestorebe.utils.Result;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Resource
    private CartMapper cartMapper;

    @Override
    public Result<Boolean> addCart(Cart cart) {
        Boolean addRes = cartMapper.addCart(cart);
        if (addRes) {
            return new Result<Boolean>(200, "Add cart successfully", addRes);
        } else {
            return new Result<Boolean>(400, "Add cart failed", null);
        }
    }
    @Override
    public Result<Cart> deleteCart(Cart cart) {
        Boolean deleteRes = cartMapper.deleteCart(cart);
        if (deleteRes) {
            return new Result<Cart>(200, "Delete cart successfully", cart);
        }
        return new Result<Cart>(400, "Delete cart failed", null);
    }

    @Override
    public Result<Cart> updateCart(Cart cart) {
        Boolean updateRes = cartMapper.updateCart(cart);
        if (updateRes) {
            return new Result<Cart>(200, "Update cart successfully", cart);
        }
        return new Result<Cart>(400, "Update cart failed", null);
    }

    @Override
    public Result<Cart> addItem(Cart cart) {
        cart.setNumber(cart.getNumber() + 1);
        Boolean updateRes = cartMapper.updateCart(cart);
        if (updateRes) {
            return new Result<Cart>(200, "Add item successfully", cart);
        }
        return new Result<Cart>(400, "Add item failed", null);
    }

    @Override
    public Result<List<Cart>> getCartByUserId(Long userId) {
        List<Cart> cartList = cartMapper.getCartByUserId(userId);
        if (!cartList.isEmpty()) {
            return new Result<List<Cart>>(200, "Get cart by user id successfully", cartList);
        }
        return new Result<List<Cart>>(400, "Get cart by user id failed", null);
    }

    @Override
    public Result<Cart> selectItem(Cart cart) {
        cart.setSelected(true);
        Boolean updateRes = cartMapper.updateCart(cart);
        if (updateRes) {
            return new Result<Cart>(200, "Select item successfully", cart);
        }
        return new Result<Cart>(400, "Select item failed", null);
    }
}
