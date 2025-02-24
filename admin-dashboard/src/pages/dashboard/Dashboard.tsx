/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:55:10
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 17:47:50
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\Dashboard.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */


import React, { Suspense } from "react"

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


function Dashboard() {
    return (
        <>
            <Routes>
                {dashboardLinks.map((item, index) => {
                    return <Route key={index} path={item.path} element={
                        <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>}
                    >
                    </Route>
                })}
            </Routes>
            <Outlet />
        </>
    )
}


export default Dashboard