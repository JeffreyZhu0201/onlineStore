/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:55:10
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 18:27:19
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\Dashboard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */


import React, { useState, Suspense, useEffect } from "react"

import {
    Routes,
    Route,
    Outlet,
    //  Link
} from 'react-router-dom';

import dashboardLinks from "./dashboardLinks"
import Loading from '../../common/Loading';
import { checkAuth } from "../../common/Https/Auth"

import {
    DownOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, MenuProps, Space } from 'antd';

const { Header, Sider, Content } = Layout;

function Dashboard() {
    const selectedLabel = localStorage.getItem('selectedLabel') || '0';

    useEffect(()=>{
        checkAuth();
    
        console.log("dashboard")
    },[])

    const items: MenuProps['items'] = [
        {
            key: '0',
            icon: <UserOutlined />,
            label: '退出登录',
        }
    ]

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
        localStorage.clear();
        window.location.href = '/login';
        console.log('click ', key);
    };

    return (
        <>
            <Layout className="h-screen">
                <Sider trigger={null} collapsible collapsed={collapsed} className="flex flex-col h-screen">
                    {/* Logo 区域 */}
                    <div className={`flex-none flex items-center justify-center p-4 text-white ${collapsed ? 'space-x-0' : 'space-x-2'}`}>
                        <UserOutlined className="text-2xl" />
                        {!collapsed && <span>后台管理</span>}
                    </div>

                    {/* 导航菜单区域 */}
                    <div className="flex flex-col flex-1 full">
                        <div className="flex-1 overflow-y-auto">
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['0']}
                                selectedKeys={[selectedLabel]}
                                items={dashboardLinks.map((item, index) => ({
                                    key: index.toString(),
                                    icon: item.icon,
                                    label: item.name,
                                    onClick: () => {
                                        window.location.href = '/dashboard' + item.path;
                                        localStorage.setItem('selectedLabel', index.toString());
                                    }
                                }))}
                            />
                        </div>

                        {/* 用户信息区域 */}
                        <div className={`flex-none flex mt-auto items-center ${collapsed ? 'justify-center' : 'justify-between'} p-4 text-white border-t border-gray-800`}>
                            <div className="flex items-center">
                                <UserOutlined className="text-2xl justify-center" />
                                {!collapsed && <span className="ml-2">用户名</span>}
                            </div>
                            {!collapsed && (
                                <div className="logout">
                                    <Dropdown menu={{ items, onClick }} placement="topRight">
                                        <button onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <DownOutlined></DownOutlined>
                                            </Space>
                                        </button>
                                    </Dropdown>
                                </div>
                            )}
                        </div>
                    </div>
                </Sider>

                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Routes>
                            {dashboardLinks.map((item, index) => {
                                return <Route key={index} path={item.path} element={
                                    <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>}
                                >
                                </Route>
                            })}
                        </Routes>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}


export default Dashboard