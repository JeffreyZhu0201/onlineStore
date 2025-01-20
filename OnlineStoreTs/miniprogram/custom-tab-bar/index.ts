Component({
  data: {
    active: 0,
    list: [
      {
        icon: 'home-o',
        text: '首页',
        url: '/pages/index/index'
      },
      {
        icon: 'apps-o',
        text: '分类',
        url: '/pages/category/category'
      },
      {
        icon: 'shopping-cart-o',
        text: '购物车',
        url: '/pages/cart/cart'
      },
      {
        icon: 'user-o',
        text: '我的',
        url: '/pages/profile/profile'
      }
    ]
  },

  lifetimes: {
    attached() {
      this.init();
    }
  },

  methods: {
    onChange(event:any) {
      try {
        const index = event.detail;
        const url = this.data.list[index].url;
        this.setData({ active: index });
        wx.switchTab({ url });
      } catch (error) {
        console.error('Tab change failed:', error);
      }
    },

    init() {
      try {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        const route = page ? page.route : 'pages/index/index';
        const active = this.data.list.findIndex(
          item => item.url.includes(route)
        );
        if (active !== -1) {
          this.setData({ active });
        }
      } catch (error) {
        console.error('TabBar init failed:', error);
        this.setData({ active: 0 });
      }
    }
  }
});