/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:13:55
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 15:20:30
 * @FilePath: \onlineStore\admin-dashboard\common\Links.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

// import {Navigate} from 'react-router-dom'

import React from 'react'

const Login = React.lazy(()=>import('../pages/Login/Login'))
const Register = React.lazy(()=>import('../pages/Register/Register'))
const Dashboard = React.lazy(()=>import('../pages/dashboard/Dashboard'))

const links = [
    {
        name:'登录',
        path:'/login',
        page:<Login></Login>,
        number:1
    },
    {
        name:'注册',
        path:'/register',
        page:<Register></Register>,
        number:1
    },
    {
        name:'',
        path:'/dashboard/*',
        page:<Dashboard></Dashboard>,
        number:1
    },
]

export default links