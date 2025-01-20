// custom-tab-bar/index.js
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
  
    methods: {
      onChange(event:any) {
        const index = event.detail;
        wx.switchTab({
          url: this.data.list[index].url
        });
        this.setData({ active: index });
      },
      init() {
        const page = getCurrentPages().pop();
        const route = page ? page.route : 'pages/index/index';
        const active = this.data.list.findIndex(item => item.url.includes(route));
        this.setData({ active });
      }
    }
  });