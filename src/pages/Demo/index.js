import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Demo = ()=>{
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
return(
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} collapsedWidth='100'>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: '首页',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: '课程介绍',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: '联系我们',
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
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
          minHeight: 624,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       this is conotentn
      </Content>
    </Layout>
  </Layout>
)
}
export default Demo