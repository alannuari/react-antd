import {
    MenuFoldOutlined,
    MenuUnfoldOutlined, DownOutlined,
    PhoneOutlined,
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Dropdown, Space, Menu} from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const menu = (
    <Menu
        theme="dark"
        items={[
            {
                key: '1',
                icon: <HomeOutlined />,
                label: (
                    <Link to='/'>Home</Link>
                ),
            },
            {
                key: '2',
                icon: <UserOutlined />,
                label: (
                    <Link to='/about'>About</Link>
                ),
            },
            {
                key: '3',
                icon: <PhoneOutlined />,
                label: (
                    <Link to='/contact'>Contact</Link>
                ),
            },
        ]}
    />
);

class MasterLayout extends React.Component {
    constructor(props) {
        super(props);

        this.setCollapsed = this.setCollapsed.bind(this);
    }
    state = { 
        collapsed: false,
        isResponsive: false
    }

    setCollapsed(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                collapsed: e
            }
        })
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 500) {
                this.setState(() => {
                    return {
                        collapsed: true,
                        isResponsive: true
                    }
                })
            } else {
                this.setState(() => {
                    return {
                        collapsed: true,
                        isResponsive: false
                    }
                })
            }
        })
    }
    render() { 
        return (
            <Layout style={{ minHeight: '100vh' }} >
                <Sidebar collapsed={this.state.collapsed} menu={menu} isResponsive={this.state.isResponsive} />
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            paddingLeft: '24px'
                        }}
                        >
                        {!this.state.isResponsive ? (
                            <>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => this.setCollapsed(!this.state.collapsed),
                                })}
                            </>
                        ) : (
                            <Dropdown overlay={menu} trigger={['click']}>
                                <span onClick={(e) => e.preventDefault()} 
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold'
                                        }}>
                                    <Space>
                                        React
                                        <DownOutlined />
                                    </Space>
                                </span>
                            </Dropdown>
                        )}
                        
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            overflowX: 'scroll'
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
 
export default MasterLayout;