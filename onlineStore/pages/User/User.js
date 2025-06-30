// pages/User/User.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    safearea:0,
    paymentList:[
      {
        text:"所有订单",
        icon:"task",
        bindClick:"onClick"
      },
      {
        text:"待付款",
        icon:"wallet",
        bindClick:"onClick"
      },
      {
        text:"待发货",
        icon:"flight-takeoff",
        bindClick:"onClick"
      },
      {
        text:"已完成",
        icon:"bookmark-checked",
        bindClick:"onClick"
      },
      
    ]
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
  onClick(e){
    console.log("clicked")
    wx.navigateTo({
      url: '/pages/Payment/Payment',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data:"e.currentTarget.dataset.text" })
        }
    })
  }
})