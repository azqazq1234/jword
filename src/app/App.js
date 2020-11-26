import React, {useState} from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {PieChartOutlined, UserOutlined} from '@ant-design/icons';
import Word from '../page/Word';

const App = () => {
    const {Header, Sider, Content, Footer} = Layout;

    const [collapse, setCollapse] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapse} onCollapse={() => setCollapse(!collapse)}>
                <div style={{height: '4rem', color: 'white', textAlign: 'center', padding: '1rem 0 0 0', fontSize: '2rem'}}>
                    测
                </div>
                <Menu theme={'dark'} mode={'inline'} defaultSelectedKeys={['1']}>
                    <Menu.Item key={'o1'} icon={<PieChartOutlined />}>
                        o1
                    </Menu.Item>
                    <Menu.SubMenu key={'sub1'} icon={<UserOutlined />} title={'User'}>
                        <Menu.Item key={'s1'}>s1</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{backgroundColor: 'white'}}>
                    test
                </Header>
                <Content>
                    <Breadcrumb style={{margin: '1rem 2rem'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{margin: '1rem 2rem', backgroundColor: 'white'}}>
                        <Word />
                    </div>
                </Content>
                <Footer style={{textAlign: 'center', color: 'grey', height: '3rem', padding: '1rem 0 0 0'}}>Japanese Word Recite&Memory for individual use only</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
