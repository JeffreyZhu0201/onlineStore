/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:21:40
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 13:34:48
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\dashboardLinks.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import { DollarOutlined, HomeOutlined, ShoppingCartOutlined,TeamOutlined,UserOutlined } from '@ant-design/icons'
import React from 'react'

const Overview = React.lazy(() => import('./Overview/Overview'))
const UserManage = React.lazy(() => import('./UserManage/UserManage'))
const OrderManage = React.lazy(() => import('./OrderManage/OrderManage'))
const SalerManage = React.lazy(() => import('./SalerManage/SalerManage'))
const SettlementApplication = React.lazy(() => import('./SettlementApplication/SettlementApplication'))


const dashboardLinks = [
    {
        name: '总览',
        path: '/',
        page: <Overview></Overview>,
        icon: <HomeOutlined />,
        number: 1
    },
    {
        name: '用户管理',
        path: '/userManage',
        page: <UserManage></UserManage>,
        icon: <UserOutlined />,
        number: 1
    },
    {
        name: '订单管理',
        path: '/orderManage',
        page: <OrderManage></OrderManage>,
        icon: <ShoppingCartOutlined />,
        number: 1
    },
    {
        name: '分销员管理',
        path: '/salerManage',
        page: <SalerManage></SalerManage>,
        icon: <TeamOutlined />,
        number: 1
    },
    {
        name: '结算申请',
        path: '/settlementApplication',
        page: <SettlementApplication></SettlementApplication>,
        icon: <DollarOutlined />,
        number: 1
    },
]

export default dashboardLinks