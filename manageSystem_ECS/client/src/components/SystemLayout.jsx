import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  EditOutlined,
  HomeOutlined,
  DiffOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from 'antd';
import * as React from "react"
import Products from '../pages/Products';
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
];
console.log()
const SystemLayout = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          theme="dark"
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item icon={<HomeOutlined />} key="/product">
            <Link to="/product">ProductList</Link>
          </Menu.Item>
          <Menu.Item icon={<DiffOutlined />} key="/article">
            <Link to="/Edit">内容管理</Link>
          </Menu.Item>
          <Menu.Item icon={<EditOutlined />} key="/publish">
            <Link to="/publish">发布文章</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Developed By Wenliang Yu
        </Footer>
      </Layout>
    </Layout>
  );
};
export default SystemLayout;