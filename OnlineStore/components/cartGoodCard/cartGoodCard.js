/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-21 21:03:59
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 22:08:19
 * @FilePath: \OnlineStore\components\cartGoodCard\cartGoodCard.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// components/cartGoodCard/cartGoodCard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    good:{
      type:Object,
      value:{
        id:0,
        title:"商品名称",
        intro:"商品简介",
        price:0,
        count:0,
        image:"https://tdesign.gtimg.com/mobile/demos/swiper1.png"
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})