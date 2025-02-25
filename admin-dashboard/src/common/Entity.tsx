export interface UserEntity {
    id: string;
    openId: string;
    username: string;
    phone: string;
    address: string[];
    avatarUrl: string;
}

export interface GoodsEntity {
    item_id: string;
    title: string;
    price: number;//单价
    count: number;
    imageUrl: string;
}

export interface SellerEntity{
    id: string;
    openId:string,
    phone: string;
    user_name: string;
    sharing_ratio:number;
    sell_volume:number;
    withdraw:number
}

// 订单实体类型定义
export interface OrderEntity {
    id: string;
    user_id: string;
    paid_time: string;
    money: number;
    seller: SellerEntity;
    status: string;
    withdraw_status: string;
    goodsList: GoodsEntity[];
    address: string;
}

export interface SettlementApplicationEntity{
    id:string,
    user_id:string,
    user_name:string,
    totle_money:number,
    sharing_ratio:number,
    withdraw_seller_money:number,
    withdraw_developer_money:number,
    withdraw_boss_money:number,
    user_openId:string,
    boss_openId:string,
    develop_openId:string,
    orderList:OrderEntity[],
    status:string
}
