/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:16:39
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 23:03:32
 * @FilePath: \onlineStore\admin-dashboard\src\pages\Login\Login.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {login} from '../../common/Https/Acount';


interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    try {
        const res = await login(values.username, values.password);
        console.log(res);
        if (res.data.code === 200) {
          message.success('登录成功！');
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('username', values.username);
          navigate('/dashboard');
        } else {
          message.error('登录失败，请重试！');
        }
      
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        className="w-full max-w-[360px] p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="m-4 text-2xl font-semibold text-center">管理员登录</h2>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="用户名"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;