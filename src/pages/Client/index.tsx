import React from 'react';
import { Layout } from 'antd';
import FooterClient from '@/components/Client/Footer';
import HeaderClient from '@/components/Client/Header';
import MainClient from '@/components/Client/Main';
import BannerHeader from '@/components/Client/Banner';
import FooterClientTest from '@/components/Client/Footer';
//import HeaderClientTest from '@/components/Client/Header';
const { Header, Content, Footer, Sider } = Layout;
const AppClient: React.FC = () => {
  return (
    <div style={{position:'relative'}}>
    <Layout style={{backgroundColor:'white', maxWidth:'155rem',margin:'auto'}}>      
        <HeaderClient></HeaderClient>         
        <BannerHeader></BannerHeader>
        <MainClient></MainClient>     
        <FooterClient></FooterClient>
    </Layout> </div>
  );
};

export default AppClient;

