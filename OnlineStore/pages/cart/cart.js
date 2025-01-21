/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-20 22:00:35
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 22:15:15
 * @FilePath: \OnlineStore\pages\cart\cart.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    good:{
      type:Object,
      value:{
        id:0,
        title:"商品名称1",
        intro:"商品简介1",
        price:0,
        count:1,
        image:"https://tdesign.gtimg.com/mobile/demos/swiper1.png"
      }
    }
  },
  onload() {
    // Do something when page load.
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      const page = getCurrentPages().pop();
      this.getTabBar().setData({
        value: '/' + page.route
      })
    }
  },
  onSubmit(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  }
})
