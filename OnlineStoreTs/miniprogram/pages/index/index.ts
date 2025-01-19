/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-01-19 14:20:58
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-01-19 15:57:28
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
    ]
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
      const { goodsId } = event.currentTarget.dataset
      console.log('点击商品：', goodsId)
      // TODO: 实现商品详情页跳转
    }
  }
})
