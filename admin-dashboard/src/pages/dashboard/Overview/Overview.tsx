/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 15:22:21
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-25 15:46:56
 * @FilePath: \onlineStore\admin-dashboard\src\pages\dashboard\Overview\Overview.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
import React from "react";

import { Card, Statistic, Row, Col } from 'antd';
import { MoneyCollectOutlined, CheckCircleOutlined, ClockCircleOutlined, AccountBookOutlined, CreditCardOutlined, CheckSquareOutlined, TruckOutlined, FieldTimeOutlined, FileDoneOutlined, FileTextOutlined, ContainerOutlined, LineChartOutlined, UserAddOutlined } from '@ant-design/icons';

function Overview() {
  return (<div>

    <div className="font-semibold text-3xl">总览</div>

    <div className="container mt-4">
      <Row gutter={16}>
        {/* 销售额统计 */}
        <Col span={8}>
          <div className="font-semibold text-xl p-4">营业额</div>
          <Card className="drop-shadow-lg mb-4">
            <Statistic
              title="总销售额"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<AccountBookOutlined />}
              suffix="元"
            />
          </Card>
          <Row gutter={12} className="mb-4">
            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="已完成金额"
                  value={6.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<CheckCircleOutlined />}
                  suffix="元"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="未完成金额"
                  value={5.00}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<TruckOutlined />}
                  suffix="元"
                />
              </Card>
            </Col>

          </Row>

          <Row gutter={12} className="mb-4">
            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="已结算金额"
                  value={6.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<CheckSquareOutlined />}
                  suffix="元"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="未结算金额"
                  value={0.00}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ClockCircleOutlined />}
                  suffix="元"
                />
              </Card>
            </Col>

          </Row>

          <Card className="drop-shadow-lg">
            <Statistic
              title="理论总余额"
              value={5}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<CreditCardOutlined />}
              suffix="元"
            />
          </Card>
        </Col>

        {/* 订单统计 */}
        <Col span={8}>
          <div className="font-semibold text-xl p-4">订单统计</div>
          <Card className="drop-shadow-lg mb-4">
            <Statistic
              title="总订单量"
              value={5}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<FileTextOutlined />}
              suffix="笔"
            />
          </Card>
          <Row gutter={12} className="mb-4">
            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="已完成订单"
                  value={2}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<FileDoneOutlined />}
                  suffix="笔"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="未完成订单"
                  value={3}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<FieldTimeOutlined />}
                  suffix="笔"
                />
              </Card>
            </Col>

          </Row>

          <Row gutter={12} className="mb-4">
            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="已结算订单"
                  value={2}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<MoneyCollectOutlined />}
                  suffix="笔"
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card className="drop-shadow-lg">
                <Statistic
                  title="未结算订单"
                  value={0}
                  precision={0}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<ClockCircleOutlined />}
                  suffix="笔"
                />
              </Card>
            </Col>

          </Row>
        </Col>
        {/* 今日数据 */}
        <Col span={8}>
          <div className="font-semibold text-xl p-4">今日数据</div>
          <Card className="drop-shadow-lg mb-4">
            <Statistic
              title="今日销售额"
              value={100.00}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<LineChartOutlined />}
              suffix="元"
            />
          </Card>
          <Row gutter={12} className="mb-4">
            <Col span={12}>
              <Card className="drop-shadow-lg mb-4">
                <Statistic
                  title="今日新增订单量"
                  value={100}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={ <ContainerOutlined />}
                  suffix="笔"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card className="drop-shadow-lg mb-4">
                <Statistic
                  title="今日新增用户数"
                  value={123}
                  precision={0}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<UserAddOutlined />}
                  suffix="人"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>


    </div>

  </div>)
}

export default Overview;