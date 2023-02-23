import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import AppTable from './TableProduct';
const {  Content } = Layout;
const MainAdmin: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (  
        <Content style={{ margin: '0 16px' }}>
           <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Hoa</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Hello?.
          </div>  
           <AppTable></AppTable> 
        </Content> 
  );
};

export default MainAdmin