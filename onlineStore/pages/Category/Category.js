const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);
const app = getApp()

Page({
  data: {
    safearea:0,
    sideBarIndex: 1,
    scrollTop: 0,
    categories: [
      {
        label: '选项一',
        title: '标题一',
        badgeProps: {},
        items,
      },
      {
        label: '选项二',
        title: '标题二',
        badgeProps: {
          dot: true,
        },
        items: items.slice(0, 10),
      },
      {
        label: '选项三',
        title: '标题三',
        badgeProps: {},
        items: items.slice(0, 6),
      },
      {
        label: '选项四',
        title: '标题四',
        badgeProps: {
          count: 8,
        },
        items: items.slice(0, 8),
      },
      {
        label: '选项五',
        title: '标题五',
        badgeProps: {},
        disabled: true,
        items: items.slice(0, 8),
      },
    ],
  },
  onLoad(options) {
  },
  onReady() {
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
  onSideBarChange(e) {
    const { value } = e.detail;
    console.log('---', value);
    this.setData({ sideBarIndex: value, scrollTop: 0 });
  },
  onHide() {

  },
  onUnload() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
  }
})