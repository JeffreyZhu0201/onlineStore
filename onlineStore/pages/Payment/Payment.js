// pages/Payment/Payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentText:"",
    currentTab: 0,
    orders: [
      {
        id: 1,
        imgUrl: '/images/goods1.jpg',
        title: '商品A',
        desc: '描述A',
        status: '待付款'
      },
      {
        id: 2,
        imgUrl: '/images/goods2.jpg',
        title: '商品B',
        desc: '描述B',
        status: '待发货'
      },
      {
        id: 3,
        imgUrl: '/images/goods3.jpg',
        title: '商品C',
        desc: '描述C',
        status: '已完成'
      }
    ],
    tabStatus: ['全部订单', '待付款', '待发货', '已完成'],
    filteredOrders: []
  },
  saveCurrentText(data){
    this.setData({currentText,data})
  },
  onLoad() {
    // console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      console.log(data.data)
      target_index = 0
      for(let i =0;i<=3;i++){
        if(data.data == tabStatus[index]){
          target_index = index
        }
      }
      this.setData({ currentTab: target_index });
    })
    this.updateFilteredOrders(this.data.currentTab);
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
    wx.navigateBack({
    })
  },
  onTabChange(event) {
    console.log(event.detail)
    const currentTab = event.detail.index;
    this.setData({
      currentTab
    });
    this.updateFilteredOrders(currentTab);
  },
  updateFilteredOrders(currentTab) {
    const { orders, tabStatus } = this.data;
    let filteredOrders;
    if (currentTab === 0) {
      filteredOrders = orders;
    } else {
      filteredOrders = orders.filter(order => order.status === tabStatus[currentTab]);
    }
    this.setData({
      filteredOrders
    });
  },
  onShow() {
    this.updateFilteredOrders(this.data.currentTab);
  },

})