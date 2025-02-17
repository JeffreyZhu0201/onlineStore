Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'wap-home',
				text: '首页',
				url: '/pages/index/index'
			},
			{
				icon: 'goods-collect',
				text: '分类',
				url: '/pages/Category/Category'
      },
      {
				icon: 'cart',
				text: '购物车',
				url: '/pages/Cart/Cart'
      },
      {
				icon: 'user',
				text: '我的',
				url: '/pages/User/User'
			}
		]
	},

	methods: {
		onChange(event) {
      this.setData({ active: event.detail });
      console.log("switched tab"+this.data.list[event.detail].url);
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
