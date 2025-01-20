Component({
  data: {
    // 分类列表
    categories: [
      { id: 1, name: '新品上市' },
      { id: 2, name: '热销商品' },
      { id: 3, name: '营养保健' },
      { id: 4, name: '美妆护肤' },
      { id: 5, name: '个人护理' }
    ],
    // 子分类列表
    subCategories: [
      { id: 1, name: '全部' },
      { id: 2, name: '面部护理' },
      { id: 3, name: '身体护理' },
      { id: 4, name: '口腔护理' }
    ],
    // 商品列表
    goodsList: [
      {
        id: 1,
        title: '商品标题1',
        desc: '商品描述1',
        price: '99.00',
        thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg',
        isNew: true,
        isHot: false
      },
      // ... 更多商品数据
    ],
    activeCategory: 0,
    activeSubCategory: 1,
    isRefreshing: false,
    hasMore: true,
    currentPage: 1
  },

  methods: {
    // 切换主分类
    onCategoryChange(event: any) {
      const { detail } = event;
      this.setData({
        activeCategory: detail,
        activeSubCategory: 1,
        currentPage: 1,
        hasMore: true
      });
      this.loadGoods();
    },

    // 切换子分类
    onSubCategoryChange(event: any) {
      const { id } = event.currentTarget.dataset;
      this.setData({
        activeSubCategory: id,
        currentPage: 1,
        hasMore: true
      });
      this.loadGoods();
    },

    // 点击商品
    onGoodsTap(event: any) {
      const { goodsId } = event.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/detail/detail?id=${goodsId}`
      });
    },

    // 下拉刷新
    async onRefresh() {
      if (this.data.isRefreshing) return;
      
      this.setData({ isRefreshing: true });
      try {
        await this.loadGoods(true);
      } finally {
        this.setData({ isRefreshing: false });
      }
    },

    // 加载更多
    async onLoadMore() {
      if (!this.data.hasMore || this.data.isRefreshing) return;
      
      try {
        await this.loadGoods();
      } catch (error) {
        console.error('加载更多失败:', error);
      }
    },

    // 加载商品数据
    async loadGoods(isRefresh = false) {
      // TODO: 实现商品加载逻辑
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isRefresh) {
        this.setData({
          currentPage: 1,
          goodsList: [],
          hasMore: true
        });
      }
      
      // 模拟加载数据
      const newGoods: never[] = [/* ... 新商品数据 ... */];
      
      this.setData({
        goodsList: [...this.data.goodsList, ...newGoods],
        currentPage: this.data.currentPage + 1,
        hasMore: this.data.currentPage < 3 // 示例：只加载3页
      });
    }
  }
}); 