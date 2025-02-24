/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 22:17:06
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 22:17:15
 * @FilePath: \onlineStore\admin-dashboard\src\common\Https\Acount.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */

import axios from "axios"

import staticResource from "../staticResource"


export function login(username: string, password: string) {
    return axios({
        method: "post",
        url: staticResource.baseUrl + "/admin/login",
        params: {
            username,
            password
        }
    })
}
