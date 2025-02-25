/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:59:41
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 18:20:30
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\UserManage\UserManage.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import React from "react"
import { Table, TableProps, Space, Dropdown, message } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";

interface UserEntity {
    id: string;
    openId: string;
    username: string;
    phone: string;
    address: string[];
    avatarUrl: string;
}

// 模拟数据
const mockUsers: UserEntity[] = [
    {
        id: '1',
        openId: 'wx_123456',
        username: '张三',
        phone: '13800138000',
        address: ['广东省', '深圳市', '南山区'],
        avatarUrl: 'https://example.com/avatar1.jpg',
    },
    {
        id: '2',
        openId: 'wx_234567',
        username: '李四',
        phone: '13900139000',
        address: ['广东省', '广州市', '天河区'],
        avatarUrl: 'https://example.com/avatar2.jpg',
    },
    {
        id: '3',
        openId: 'wx_345678',
        username: '王五',
        phone: '13700137000',
        address: ['浙江省', '杭州市', '西湖区'],
        avatarUrl: 'https://example.com/avatar3.jpg',
    },
];

function UserManage() {
    const updateUser = (record: UserEntity) => {
        console.log(1)
    }
    const deleteUser = (record:UserEntity)=>{
        console.log(record)
    }
    const columns: TableProps<UserEntity>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: '头像',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            render: (avatarUrl: string) => (
                <img
                    src={avatarUrl}
                    alt="用户头像"
                    style={{ width: 40, height: 40, borderRadius: '50%' }}
                />
            ),
            width: 40,
        },
        {
            title: 'OpenID',
            dataIndex: 'openId',
            key: 'openId',
            width: 120,
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            width: 50,
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
            width: 100,
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
            render: (_, {address}) => (
                <>
                    <Dropdown menu={{ items: address.map((item, index) => ({ key: index, label: item,onClick:()=>{copy(item);message.success(`已复制:${item}`)} })) }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {address[0]}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </>
            ),
            width: 200,
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button onClick={() => updateUser(record)} style={{ background: 'none', border: 'none', color: '#1890ff', cursor: 'pointer', padding: 0 }}>更新</button>
                    <button onClick={() => deleteUser(record)} style={{ background: 'none', border: 'none', color: '#1890ff', cursor: 'pointer', padding: 0 }}>删除</button>
                </Space>
            ),
            width: 100
        },
    ];

    return (
        <div className="p-4">
            <Table<UserEntity>
                columns={columns}
                dataSource={mockUsers}
                rowKey="id"
                scroll={{ x: 1000 }}
                pagination={{
                    total: mockUsers.length,
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                }}
            />
        </div>
    );
}

export default UserManage