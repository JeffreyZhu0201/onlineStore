Component({
  data: {
    value: 'pages/index/index',
    list: [
      { name: 'home', label: '首页',icon:"home",url:"/pages/index/index" },
      { name: 'app', label: '目录',icon:"catalog",url:"/pages/category/category" },
      { name: 'chat', label: '购物车',icon:"cart",url:"/pages/cart/cart" },
      { name: 'user', label: '我的',icon:"user-1",url:"/pages/profile/profile" },
    ],
  },
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
      wx.switchTab({
        url: e.detail.value,
      })
      console.log(e.detail.value)
    },
  },
});
