Component({
  data: {
    cartItems: [],
    totalPrice: 0,
    selectedAll: false,
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
      // TODO: 加载购物车数据
    },

    onSubmit() {
      wx.navigateTo({
        url: '/pages/order/confirm/confirm'
      });
    }
  }
}); 