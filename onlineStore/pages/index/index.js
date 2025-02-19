const app = getApp()
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];

Page({
  data: {
    safearea:0,
    value:"",
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
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
  onSearch() {
    // wx.switchTab({
    //   url: 'url',
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })
  },
  onClick() {
    
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onLoad(options){
  }
})
