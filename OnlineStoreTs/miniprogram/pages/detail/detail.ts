Component({
  data: {
    // 商品详情数据
    goods: {
      id: 1,
      title: '2024新款女装春季连衣裙',
      price: '299.00',
      originalPrice: '399.00',
      sales: 1000,
      inventory: 500,
      images: [
        'https://img.yzcdn.cn/vant/cat.jpeg',
        'https://img.yzcdn.cn/vant/dog.jpeg',
        'https://img.yzcdn.cn/vant/rabbit.jpeg'
      ],
      description: '商品描述信息...',
      specifications: [
        { name: '颜色', value: '白色、黑色、粉色' },
        { name: '尺码', value: 'S、M、L、XL' },
        { name: '材质', value: '棉95%、氨纶5%' }
      ],
      isCollected: false
    },
    // 懒加载相关
    loading: true,           // 页面加载状态
    detailLoading: false,    // 详情加载状态
    showDetail: false,       // 是否显示详情
    detailImages: [] as string[],        // 详情图片列表
    currentPage: 1,          // 当前页码
    hasMore: true,           // 是否还有更多详情
    // 购物车弹出层相关
    showSkuPopup: false,      // 是否显示规格弹出层
    actionType: '',           // 操作类型：'cart' 或 'buy'
    selectedNum: 1,           // 选择的数量
    selectedSpecs: {          // 选择的规格
      color: '',
      size: ''
    },
    // 规格选项
    specifications: {
      color: ['白色', '黑色', '粉色'] as string[],
      size: ['S', 'M', 'L', 'XL'] as string[]
    }
  },

  methods: {
    // 预览图片
    onPreviewImage(event: any) {
      const { index } = event.currentTarget.dataset;
      wx.previewImage({
        current: this.data.goods.images[index],
        urls: this.data.goods.images
      });
    },

    // 收藏商品
    onCollect() {
      this.setData({
        ['goods.isCollected']: !this.data.goods.isCollected
      });
      wx.showToast({
        icon: 'success',
        title: this.data.goods.isCollected ? '已收藏' : '已取消收藏'
      });
    },

    // 分享商品
    onShare() {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      });
    },

    // 加入购物车
    onAddToCart() {
      // TODO: 实现加入购物车逻辑
      wx.showToast({
        icon: 'success',
        title: '已加入购物车'
      });
    },

    // 立即购买
    onBuyNow() {
      // TODO: 实现立即购买逻辑
      wx.navigateTo({
        url: '/pages/order/confirm/confirm'
      });
    },

    // 客服会话
    onContact() {
      // 微信客服会自动处理
    },

    // 页面加载
    async onLoad(options: any) {
      const { id } = options;
      this.setData({ loading: true });
      
      try {
        // TODO: 根据ID获取商品基本信息
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.setData({ loading: false });
      } catch (error) {
        console.error('加载商品信息失败:', error);
        this.setData({ loading: false });
      }
    },

    // 监听页面滚动到底部
    async onReachBottom() {
      if (this.data.detailLoading || !this.data.hasMore) return;

      this.setData({ detailLoading: true });
      try {
        // 模拟加载更多详情图片
        const newImages: string[] = [
          'https://img.yzcdn.cn/vant/cat.jpeg',
          'https://img.yzcdn.cn/vant/dog.jpeg'
        ];
        
        await new Promise(resolve => setTimeout(resolve, 800));
        
        this.setData({
          detailImages: [...this.data.detailImages, ...newImages],
          currentPage: this.data.currentPage + 1,
          hasMore: this.data.currentPage < 3,
          detailLoading: false
        });
      } catch (error) {
        console.error('加载详情失败:', error);
        this.setData({ detailLoading: false });
      }
    },

    // 显示商品详情
    onShowDetail() {
      if (!this.data.showDetail) {
        this.setData({ 
          showDetail: true 
        }, () => {
          // 首次显示详情时加载第一页
          this.onReachBottom();
        });
      }
    },

    // 打开规格选择弹出层
    openSkuPopup(event: any) {
      const { type } = event.currentTarget.dataset;
      this.setData({
        showSkuPopup: true,
        actionType: type,
        // 重置选择
        selectedNum: 1,
        selectedSpecs: {
          color: '',
          size: ''
        }
      });
    },

    // 关闭规格选择弹出层
    closeSkuPopup() {
      this.setData({
        showSkuPopup: false
      });
    },

    // 选择规格
    onSpecChange(event: any) {
      const { type } = event.currentTarget.dataset;
      const value = event.detail;
      this.setData({
        [`selectedSpecs.${type}`]: value
      });
    },

    // 修改数量
    onNumChange(event: any) {
      this.setData({
        selectedNum: event.detail
      });
    },

    // 确认选择
    async onConfirmSku() {
      const { selectedSpecs, selectedNum, actionType } = this.data;
      
      // 验证是否选择了所有规格
      if (!selectedSpecs.color || !selectedSpecs.size) {
        wx.showToast({
          title: '请选择规格',
          icon: 'none'
        });
        return;
      }

      // 根据操作类型处理
      if (actionType === 'cart') {
        await this.addToCart();
      } else if (actionType === 'buy') {
        await this.buyNow();
      }

      this.closeSkuPopup();
    },

    // 加入购物车
    async addToCart() {
      // const { selectedSpecs, selectedNum, goods } = this.data;
      // TODO: 调用加入购物车接口
      await new Promise(resolve => setTimeout(resolve, 500));
      
      wx.showToast({
        title: '已加入购物车',
        icon: 'success'
      });
    },

    // 立即购买
    async buyNow() {
      const { selectedSpecs, selectedNum, goods } = this.data;
      // TODO: 跳转到订单确认页
      wx.navigateTo({
        url: `/pages/order/confirm/confirm?goodsId=${goods.id}&num=${selectedNum}&specs=${JSON.stringify(selectedSpecs)}`
      });
    }
  }
}); 