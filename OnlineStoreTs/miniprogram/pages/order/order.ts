Component({
  data: {
    active: 0,
    orderList: [],
    isEmpty: true
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().init();
      }
    }
  },

  methods: {
    onLoad() {
      // TODO: 加载订单数据
    },

    onTabChange(event: any) {
      this.setData({
        active: event.detail.index
      });
      // TODO: 根据标签加载不同状态的订单
    }
  }
}); 