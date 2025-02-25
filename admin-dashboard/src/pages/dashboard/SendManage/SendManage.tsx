/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:22:45
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 20:18:43
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\SendManage\SendManage.tsx
 * @Description: File Description Here.
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, message, Dropdown } from 'antd';
import { TableProps } from 'antd/es/table';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';

import {OrderEntity,SellerEntity} from '../../../common/Entity';

// 模拟订单数据
const mockOrders: OrderEntity[] = [
    {
        id: '1',
        user_id: 'user001',
        paid_time: '2025-02-24 10:00:00',
        money: 299.99,
        seller: {
            id: 'seller001',
            openId: 'wx_seller001',
            phone: '13800138000',
            user_name: '苹果官方旗舰店',
            sharing_ratio: 0,
            sell_volume: 0,
            withdraw:0
        },
        status: 'completed',
        withdraw_status: 'processed',
        address: '浙江省杭州市西湖区文三路 100 号',
        goodsList: [
            {
                item_id: 'item001',
                title: 'iPhone 15',
                price: 199.99,
                count: 1,
                imageUrl: 'https://example.com/iphone15.jpg'
            },
            {
                item_id: 'item002',
                title: 'AirPods Pro',
                price: 100.00,
                count: 1,
                imageUrl: 'https://example.com/airpods.jpg'
            }
        ]
    },
    {
        id: '2',
        user_id: 'user002',
        paid_time: '2025-02-24 11:30:00',
        money: 159.99,
        seller: {
            id: 'seller002',
            openId: 'wx_seller002',
            phone: '13900139000',
            user_name: '数码电器专营店',
            sharing_ratio: 0,
            sell_volume: 0,
            withdraw:10020
        },
        status: 'shipping',
        withdraw_status: 'pending',
        address: '北京市朝阳区建国路 88 号',
        goodsList: [
            {
                item_id: 'item003',
                title: 'MacBook Air',
                price: 159.99,
                count: 1,
                imageUrl: 'https://example.com/macbook.jpg'
            }
        ]
    }
];

const orderStatus = [
    {
        label: '待发货',
        key: 'unsend',
    },
    {
        label: '运输中',
        key: 'shipping',
    }
];

function matchTag(status: string) {
    if (status === 'completed') {
        return { color: 'green', text: '已完成' };
    } else if (status === 'shipping') {
        return { color: 'blue', text: '配送中' };
    }
    else if (status === 'unsend') {
        return { color: 'default', text: '未发货' }
    }
    return { color: 'red', text: '未知状态' };
}
function SendManage() {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState<OrderEntity[]>(mockOrders);

    const handleOrderStatusChange = (key: string, record: OrderEntity) => {
        const updatedData = filteredData.map(item =>
            item.id === record.id ? { ...item, status: key } : item
        );
        setFilteredData(updatedData);
        console.log('状态更新为:', key, '订单信息:', record);
        const status = orderStatus.find(item => item.key === key);
        const statusLabel = status ? status.label : '未知状态';
        message.success(`订单 ${record.id} 状态已更新为 ${statusLabel}`);
    };

    const columns: TableProps<OrderEntity>["columns"] = [
        {
            title: '订单ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '支付时间',
            dataIndex: 'paid_time',
            key: 'paid_time',
        },
        {
            title: '金额',
            dataIndex: 'money',
            key: 'money',
            render: (money: number) => `￥${money.toFixed(2)}`,
        },
        {
            title: '配送地址',
            dataIndex: 'address',
            key: 'address',
            render: (address: string) => (
                <><Button onClick={() => { copy(address); message.success(`复制地址成功${address}`) }}>{address}</Button></>
            ),
        },
        {
            title: '订单状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: string, record: OrderEntity) => (
                <Dropdown
                    menu={{
                        items: orderStatus,
                        onClick: ({ key }) => handleOrderStatusChange(key, record)
                    }}
                >
                    <Space>
                        <Tag color={matchTag(status).color}>
                            {matchTag(status).text}
                        </Tag>
                        <DownOutlined />
                    </Space>
                </Dropdown>
            ),
        },
        {
            title: '商家信息',
            dataIndex: 'seller',
            key: 'seller',
            render: (seller: SellerEntity) => (
                <Space direction="vertical" size="small">
                    <div>{seller.user_name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{seller.phone}</div>
                </Space>
            ),
        },
    ];

    const handleSearch = () => {
        const filtered = mockOrders.filter(order =>
            order.id.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <Card title="订单管理">
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="搜索订单ID或用户ID"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    style={{ width: 200 }}
                />
                <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
                    搜索
                </Button>
            </Space>
            <Table
                columns={columns}
                dataSource={filteredData}
                
                pagination={{
                    pageSize: 10,
                    total: filteredData.length,
                    showTotal: (total) => `共 ${total} 条数据`,
                }}
            />
        </Card>
    );
}

export default SendManage;
