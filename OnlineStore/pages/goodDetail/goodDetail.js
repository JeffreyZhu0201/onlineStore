/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-21 16:31:57
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-21 17:32:54
 * @FilePath: \OnlineStore\pages\goodDetail\goodDetail.js
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// pages/goodDetail/goodDetail.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: "123",
    goodName: "goodName",
    detail: "detaildetaildetaildetaildetaildetaildetaildetaildetail",
    price: 123,
    visible: false,
    imgList: [
      { url: "123" },
      { url: "123" },
      { url: "123" },
      { url: "123" },
    ]
  },

  methods: {
    handleBack() {
      wx.navigateBack();
    }
  },
  onClickIcon() {
    console.log('点击图标');
  },

  onClickButton() {
    console.log('点击按钮');
  },
  handlePopup(e) {
    this.setData({ visible: true });
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})