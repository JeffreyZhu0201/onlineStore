/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 22:49:30
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 23:01:38
 * @FilePath: \onlineStore\admin-dashboard\src\common\Https\Auth.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */


import axios from "axios"

import staticResource from "../staticResource"


export function auth() {
    return axios({
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token') || ''
        },
        url: staticResource.baseUrl + "/auth/verify",
        params: {
        }
    })
}

export async function checkAuth(){
    auth().then((res: { data: { code: number; }; }) => {
        console.log(res);
      if (res.data.code !== 200) {
        localStorage.clear();
        window.location.href = '/login';
      }
    }).catch((err: any) => {
        console.log(err);
        localStorage.clear();
        window.location.href = '/login';
    })
  }