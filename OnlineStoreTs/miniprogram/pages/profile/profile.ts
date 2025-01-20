Component({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '未登录'
    },
    isLogin: false
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
      // TODO: 检查登录状态
    },

    onLogin() {
      // TODO: 实现登录逻辑
    },

    onNavigate(event: any) {
      const { url } = event.currentTarget.dataset;
      wx.navigateTo({ url });
    }
  }
}); 