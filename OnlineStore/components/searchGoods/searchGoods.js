/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-21 11:44:15
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 11:45:12
 * @FilePath: \OnlineStore\components\searchGoods\searchGoods.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
Component({
  data: {
    value: '',
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.detail;
      this.setData({
        result: value,
      });
    },
  },
});
