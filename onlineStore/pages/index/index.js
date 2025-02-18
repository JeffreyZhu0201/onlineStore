const app = getApp()

Page({
  data: {
    value:"",
  },
  onShow() {
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
})
