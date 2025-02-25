export interface GoodsEntity {
    item_id: string;
    title: string;
    price: number;//单价
    count: number;
    imageUrl: string;
}

// 订单实体类型定义
export interface OrderEntity {
    id: string;
    user_id: string;
    paid_time: string;
    money: number;
    seller_id: string;
    status: string;
    withdraw_status: string;
    goodsList: GoodsEntity[];
    address: string;
}
