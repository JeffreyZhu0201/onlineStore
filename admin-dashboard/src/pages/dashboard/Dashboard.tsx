/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:55:10
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 23:57:33
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\Dashboard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */


import React, { useState, Suspense } from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
    useLocation
    //  Link
} from 'react-router-dom';

import dashboardLinks from "./dashboardLinks"
import Loading from '../../common/Loading';
import { checkAuth } from "../../common/Https/Auth"

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

function Dashboard() {

    const location = useLocation();
    if (location.pathname !== '/login') {
        checkAuth();
    }

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onClick = (e: any) => {
        console.log('click ', e);
    };

    return (
        <>
            <Layout className="h-full">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    
                    <Menu
                        onClick={onClick}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
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
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}


export default Dashboard