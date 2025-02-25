import React, { useState } from 'react';
import { Table, Card, Space, Tag, Button, message, Modal, Popconfirm, PopconfirmProps } from 'antd';
import { TableProps } from 'antd/es/table';
import { SettlementApplicationEntity } from '../../../common/Entity';

// 模拟结算申请数据
const mockApplications: SettlementApplicationEntity[] = [
    {
        id: 'SA001',
        user_id: 'U001',
        user_name: '张三',
        totle_money: 5000.00,
        sharing_ratio: 0.15,
        withdraw_seller_money: 750.00,
        withdraw_developer_money: 50.00,
        withdraw_boss_money: 4200.00,
        user_openId: 'wx_123456',
        boss_openId: 'wx_boss123',
        develop_openId: 'wx_dev123',
        orderList: [],
        status: 'pending'
    },
    {
        id: 'SA002',
        user_id: 'U002',
        user_name: '李四',
        totle_money: 8000.00,
        sharing_ratio: 0.20,
        withdraw_seller_money: 1600.00,
        withdraw_developer_money: 80.00,
        withdraw_boss_money: 6320.00,
        user_openId: 'wx_234567',
        boss_openId: 'wx_boss123',
        develop_openId: 'wx_dev123',
        orderList: [],
        status: 'approved'
    }
];

function SettlementApplication() {
    const [applications, setApplications] = useState(mockApplications);
    const [selectedApp, setSelectedApp] = useState<SettlementApplicationEntity | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleStatusChange = (record: SettlementApplicationEntity, newStatus: string) => {
        const updated = applications.map(app =>
            app.id === record.id ? { ...app, status: newStatus } : app
        );
        setApplications(updated);
        message.success(`申请 ${record.id} 已${newStatus === 'approved' ? '通过' : '拒绝'}`);
    };

    const showOrderDetails = (record: SettlementApplicationEntity) => {
        setSelectedApp(record);
        setIsModalVisible(true);
    };

    const cancel_withdraw: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const getStatusTag = (status: string) => {
        const statusMap = {
            pending: { color: 'orange', text: '处理中' },
            approved: { color: 'green', text: '已通过' },
            rejected: { color: 'red', text: '已拒绝' }
        };
        const defaultStatus = { color: 'default', text: '未知状态' };
        return statusMap[status as keyof typeof statusMap] || defaultStatus;
    };

    const columns: TableProps<SettlementApplicationEntity>['columns'] = [
        {
            title: '申请ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '分销员',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: '总金额',
            dataIndex: 'totle_money',
            key: 'totle_money',
            render: (money: number) => `¥${money.toFixed(2)}`,
        },
        {
            title: '分润比例',
            dataIndex: 'sharing_ratio',
            key: 'sharing_ratio',
            render: (ratio: number) => `${(ratio * 100).toFixed(1)}%`,
        },
        {
            title: '分销员收益',
            dataIndex: 'withdraw_seller_money',
            key: 'withdraw_seller_money',
            render: (money: number) => `¥${money.toFixed(2)}`,
        },
        {
            title: '开发者收益',
            dataIndex: 'withdraw_developer_money',
            key: 'withdraw_developer_money',
            render: (money: number) => `¥${money.toFixed(2)}`,
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                const { color, text } = getStatusTag(status);
                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: '操作',
            key: 'action',
            width: 100,
            render: (_, record) => (
                <Space size="middle">
                    {record.status === 'pending' && (
                        <>
                            <Popconfirm
                                title="确认提现?"
                                description="请检查提现金额以及提现人员是否正确"
                                onConfirm={() => handleStatusChange(record,'approved')}
                                onCancel={cancel_withdraw}
                                okText="通过"
                                cancelText="取消"
                            >
                                <Button color='red' variant='solid'>通过</Button>
                            </Popconfirm>

                            <Popconfirm
                                title="拒绝申请"
                                description="您确认要拒绝分销员的提现申请?"
                                onConfirm={()=>handleStatusChange(record,'rejected')}
                                onCancel={cancel_withdraw}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button color='cyan' variant='solid'>拒绝</Button>
                            </Popconfirm>

                        </>
                    )}
                    <Button
                        type="link"
                        onClick={() => showOrderDetails(record)}
                    >
                        查看详情
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <Card title="结算申请管理">
            <Table
                columns={columns}
                dataSource={applications}
                rowKey="id"
                pagination={{
                    pageSize: 10,
                    showTotal: (total) => `共 ${total} 条数据`,
                }}
            />

            <Modal
                title="申请详情"
                open={isModalVisible}
                onOk={() => setIsModalVisible(false)}
                onCancel={() => setIsModalVisible(false)}
                width={800}
            >
                {selectedApp && (
                    <Space direction="vertical" className='text-lg'>
                        <p>申请ID: {selectedApp.id}</p>
                        <p>分销员: {selectedApp.user_name}</p>
                        <p>总金额: ¥{selectedApp.totle_money.toFixed(2)}</p>
                        <p>分润比例: {(selectedApp.sharing_ratio * 100).toFixed(1)}%</p>
                        <p>分销员收益: ¥{selectedApp.withdraw_seller_money.toFixed(2)}</p>
                        <p>开发者收益: ¥{selectedApp.withdraw_developer_money.toFixed(2)}</p>
                        <p>平台收益: ¥{selectedApp.withdraw_boss_money.toFixed(2)}</p>
                    </Space>
                )}
            </Modal>
        </Card>
    );
}

export default SettlementApplication;
