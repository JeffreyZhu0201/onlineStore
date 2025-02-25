/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 16:00:39
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 21:10:17
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\SellerManage\SellerManage.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Modal, InputNumber, message } from 'antd';
import { TableProps } from 'antd/es/table';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { SellerEntity } from '../../../common/Entity';

// 模拟分销员数据
const mockSellers: SellerEntity[] = [
    {
        id: 'S001',
        openId:'123123123',
        user_name: '张三',
        phone: '13800138000',
        sharing_ratio: 0.15,
        sell_volume:10020.00,
        withdraw:1003
    },
    {
        id: 'S002',
        openId:'123123123',
        user_name: '李四',
        phone: '13800138000',
        sharing_ratio: 0.32,
        sell_volume:99999.00,
        withdraw:1234
    },
];

function SellerManage() {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState<SellerEntity[]>(mockSellers);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentSeller, setCurrentSeller] = useState<SellerEntity>();
    const [newCommissionRate, setNewCommissionRate] = useState<number>(0);

    const handleSearch = () => {
        const filtered = mockSellers.filter(seller =>
            seller.user_name.toLowerCase().includes(searchText.toLowerCase()) ||
            seller.phone.includes(searchText)
        );
        setFilteredData(filtered);
    };

    const handleCommissionChange = (seller: SellerEntity) => {
        setCurrentSeller(seller);
        setNewCommissionRate(seller.sharing_ratio);
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        if (currentSeller && newCommissionRate >= 0 && newCommissionRate <= 1) {
            
            // 添加通信逻辑

            const updatedData = filteredData.map(item =>
                item.id === currentSeller.id
                    ? { ...item, sharing_ratio: newCommissionRate }
                    : item
            );
            setFilteredData(updatedData);
            message.success(`已更新${currentSeller.user_name}的分润比例为${(newCommissionRate * 100).toFixed(2)}%`);
            setIsModalVisible(false);
        } else {
            message.error('请输入0-1之间的有效比例');
        }
    };

    const columns: TableProps<SellerEntity>['columns'] = [
        {
            title: '分销员ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '分润比例',
            dataIndex: 'sharing_ratio',
            key: 'commission_rate',
            render: (rate: number, record: SellerEntity) => (
                <Space>
                    {(rate * 100).toFixed(1)}%
                    <Button 
                        type="link" 
                        icon={<EditOutlined />}
                        onClick={() => handleCommissionChange(record)}
                    />
                </Space>
            ),
        },
        {
            title: '总销售额',
            dataIndex: 'sell_volume',
            key: 'sell_volume',
            render: (sell_volume: number) => `¥${sell_volume.toFixed(2).toString()}`,
        },
        {
            title: '已结算金额',
            dataIndex: 'withdraw',
            key: 'withdraw',
            render: (withdraw: number) => `¥${withdraw.toFixed(2).toString()}`,
        }
    ];

    return (
        <Card title="分销员管理">
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="搜索姓名/电话/邮箱"
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
                rowKey="id"
                pagination={{
                    pageSize: 10,
                    showTotal: (total) => `共 ${total} 条数据`,
                }}
            />

            <Modal
                title="设置分润比例"
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={() => setIsModalVisible(false)}
            >
                <Space direction="vertical">
                    <p>{'分销员：'}{(currentSeller?currentSeller.user_name:'')}</p>
                    <Space>
                        分润比例：
                        <InputNumber
                            min={0} //真实值区间
                            max={1}
                            step={0.01}
                            value={newCommissionRate}
                            onChange={(value) => setNewCommissionRate(Number(value))}   //传递真实值
                            formatter={value => `${(Number(value) * 100).toFixed(1)}%`} //将真实值转化为百分数
                            parser={value => Number(value!.replace('%', '')) / 100} //返回value真实值
                        />
                    </Space>
                </Space>
            </Modal>
        </Card>
    );
}

export default SellerManage;
