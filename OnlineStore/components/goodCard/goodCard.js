/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-21 14:33:50
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 15:07:26
 * @FilePath: \OnlineStore\components\goodCard\goodCard.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
Component({
  behaviors: [],
  properties: {
      // imageUrl:"https://tdesign.gtimg.com/mobile/demos/swiper1.png",
      // title:"Title",
      // price:2.00,
      // stock:0,
      // id:""
  },
  data: {
    imageUrl:"https://tdesign.gtimg.com/mobile/demos/swiper1.png",
    title:"Title",
    intro:"Introduction",
    price:2.00,
    stock:0,
    id:""
  },
  lifetimes: {
    created() {

    },
    attached() {

    },
    moved() {

    },
    detached() {

    },
  },
  methods: {
    goodDetail(){
      wx.navigateTo({
        url: '/pages/goodDetail/goodDetail',
      })
    }
  },
});