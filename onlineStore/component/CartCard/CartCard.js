/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-20 21:47:08
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-21 09:47:37
 * @FilePath: \onlineStore\component\CartCard\CartCard.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// component/CartCard/CartCard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    goodsInfo: {
      type: Object,
      value: {}
    },
    checked: {
      type: Boolean,
      value: false
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
    onCheckboxChange() {
      this.triggerEvent('checkChange', {
        checked: !this.properties.checked
      })
    },

    onMinus() {
      if (this.properties.number > 1) {
        this.triggerEvent('numberChange', {
          number: this.properties.number - 1
        })
      }
    },

    onPlus() {
      this.triggerEvent('numberChange', {
        number: this.properties.number + 1
      })
    }
  }
})