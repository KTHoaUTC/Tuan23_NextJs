import BannerHeader from '@/components/Client/Banner';
import FooterClient from '@/components/Client/Footer';
import HeaderClient from '@/components/Client/Header';
import MainClient from '@/components/Client/Main';
import { Layout } from 'antd';
import React from 'react';
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

