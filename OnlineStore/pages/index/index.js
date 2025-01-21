/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-20 22:00:35
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 13:22:51
 * @FilePath: \OnlineStore\pages\index\index.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    
  },
  handleBack() {
    console.log('go back');
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      const page = getCurrentPages().pop();
      this.getTabBar().setData({
        value: '/' + page.route
      })
    }
  },
  onload() {
    // Do something when page load.
    // app.globalData.userInfo = 'Jeffrey Zhu'
    // console.log(app.globalData.userInfo)
  }
  // onShow() {
  //   // Do something when page show.
  //   const app = getApp()
  //   app.globalData.userInfo = 'Jeffrey Zhu'
  //   console.log(app.globalData.userInfo)
  // },
})
