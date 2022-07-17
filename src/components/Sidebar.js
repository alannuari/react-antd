import { Layout } from 'antd';
import React from 'react';
const { Sider } = Layout;

class Sidebar extends React.Component {

    render() { 
        return (
            <Sider 
                trigger={null} 
                collapsible 
                collapsed={this.props.collapsed} 
                style={{ display: this.props.isResponsive ? 'none' : '' }}>
                <div className="logo">
                    React
                </div>
                {this.props.menu}
            </Sider>
        );
    }
}
 
export default Sidebar;