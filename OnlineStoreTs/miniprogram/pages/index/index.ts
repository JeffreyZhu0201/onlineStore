/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-19 14:20:58
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-20 16:30:29
 * @FilePath: \OnlineStoreTs\miniprogram\pages\index\index.ts
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    // 店铺名
    storeName:'珠海宁一生物科技',
    // 搜索框默认文字
    searchPlaceholder: '搜索商品',
    // 店铺公告
    notice: '欢迎光临本店！新品上市，全场满200减20！',
    // 功能导航
    navItems: [
      { icon: 'new-arrival-o', text: '新品上市' },
      { icon: 'hot-o', text: '热销商品' },
      { icon: 'discount', text: '优惠活动' },
      { icon: 'service-o', text: '联系客服' }
    ],
    // 商品列表
    goodsList: [
      {
        id: 1,
        title: '商品1',
        price: '99.00',
        desc: '商品描述1',
        thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
      },
      {
        id: 2,
        title: '商品2',
        price: '199.00',
        desc: '商品描述2',
        thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
      },
      {
        id: 3,
        title: '商品3',
        price: '299.00',
        desc: '商品描述3',
        thumb: 'https://img.yzcdn.cn/vant/ipad.jpeg'
      }
    ],
    // 添加分类标签
    categories: [
      { id: 'all', name: '全部' },
      { id: 'new', name: '新品' },
      { id: 'hot', name: '热销' },
      { id: 'discount', name: '特惠' }
    ],
    activeCategory: 'all',
    
    // 下拉刷新状态
    isRefreshing: false,
    // 是否还有更多数据
    hasMore: true,
    // 当前页码
    currentPage: 1
  },

  lifetimes: {
    attached() {
      this.getTabBar().init();
    }
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function') {
        this.getTabBar().init();
      }
    }
  },

  methods: {
    // 搜索事件处理
    onSearch(event: any) {
      const searchValue = event.detail
      console.log('搜索内容：', searchValue)
      // TODO: 实现搜索逻辑
    },

    // 导航项点击事件
    onNavItemTap(event: any) {
      const { index } = event.currentTarget.dataset
      console.log('点击导航项：', this.data.navItems[index])
      // TODO: 实现导航跳转逻辑
    },

    // 商品点击事件
    onGoodsTap(event: any) {
      const { goodsId } = event.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/detail/detail?id=${goodsId}`
      });
    },

    // 切换分类
    onCategoryChange(event: any) {
      const categoryId = event.currentTarget.dataset.id;
      this.setData({
        activeCategory: categoryId
      });
      // TODO: 根据分类加载商品
    },

    // 下拉刷新
    async onRefresh() {
      if (this.data.isRefreshing) return;
      
      this.setData({ isRefreshing: true });
      try {
        // TODO: 刷新商品列表
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.setData({
          currentPage: 1,
          hasMore: true
        });
      } finally {
        this.setData({ isRefreshing: false });
      }
    },

    // 上拉加载更多
    async onLoadMore() {
      if (!this.data.hasMore || this.data.isRefreshing) return;

      try {
        // TODO: 加载更多商品
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.setData({
          currentPage: this.data.currentPage + 1,
          hasMore: this.data.currentPage < 3 // 示例：只加载3页
        });
      } catch (error) {
        console.error('加载更多失败:', error);
      }
    }
  }
})
