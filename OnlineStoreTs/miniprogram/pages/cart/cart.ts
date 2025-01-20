/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-19 16:43:12
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-20 16:32:26
 * @FilePath: \OnlineStoreTs\miniprogram\pages\cart\cart.ts
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
Component({
  data: {
    cartItems: [],
    totalPrice: 0,
    selectedAll: false,
    isEmpty: true
  },

  lifetimes: {
    attached() {
      this.getTabBar().init();
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function') {
        this.getTabBar().init();
      }
    }
  },

  methods: {
    onLoad() {
      // TODO: 加载购物车数据
    },

    onSubmit() {
      wx.navigateTo({
        url: '/pages/order/confirm/confirm'
      });
    }
  }
}); 