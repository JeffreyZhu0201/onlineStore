/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:21:40
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 17:59:51
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\dashboardLinks.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import React from 'react'

const Overview = React.lazy(()=>import('./Overview/Overview'))
const UserManage = React.lazy(()=>import('./UserManage/UserManage'))
const OrderManage = React.lazy(()=>import('./OrderManage/OrderManage'))
const SalerManage = React.lazy(()=>import('./SalerManage/SalerManage'))
const SettlementApplication = React.lazy(()=>import('./SettlementApplication/SettlementApplication'))


const dashboardLinks = [
    {
        name: '总览',
        path: '/',
        page: <Overview></Overview>,
        number: 1
    },
    {
        name: '用户管理',
        path: '/userManage',
        page: <UserManage></UserManage>,
        number: 1
    },
    {
        name: '订单管理',
        path: '/orderManage',
        page: <OrderManage></OrderManage>,
        number: 1
    },
    {
        name: '分销员管理',
        path: '/salerManage',
        page: <SalerManage></SalerManage>,
        number: 1
    },
    {
        name: '结算申请',
        path: '/settlementApplication',
        page: <SettlementApplication></SettlementApplication>,
        number: 1
    },
]

export default dashboardLinks