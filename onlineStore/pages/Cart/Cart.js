// pages/Cart/Cart.js

const app = getApp()

Page({
  data: {
    safearea:0,
    radio:false,
    goods:[
      {
        image:"/static/images/one-sports-shoe.jpg",
        title:"title",
        specs:"specs",
        price:"123",
        number:1
      }
    ]
  },
  onChange(event) {
    this.setData({
      radio:!this.data.radio
    })
    console.log(this.data.radio)
  },
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          safearea : res.screenHeight - res.safeArea.bottom + 50
        })
      }
    })
    this.getTabBar().init();
  },
  selectItem(){
    console.log("selected")
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