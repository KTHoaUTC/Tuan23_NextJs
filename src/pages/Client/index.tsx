// import BannerHeader from '@/components/Client/Banner';
// import FooterClient from '@/components/Client/Footer';
// import HeaderClient from '@/components/Client/Header';
// import MainClient from '@/components/Client/Main';
// import { Layout } from 'antd';
// import React from 'react';
// const AppClient: React.FC = () => {
//   return (
//     <div style={{position:'relative'}}>
//     <Layout style={{backgroundColor:'white', maxWidth:'155rem',margin:'auto'}}>      
//         <HeaderClient></HeaderClient>         
//         <BannerHeader></BannerHeader>
//         <MainClient></MainClient>     
//         <FooterClient></FooterClient>
//     </Layout> </div>
//   );
// };

// export default AppClient;

import BannerHeader from "@/components/Client/Banner";
import LayoutClient from "@/components/Client/LayoutClient";
import MainClient from "@/components/Client/Main";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <BannerHeader></BannerHeader>
      <MainClient></MainClient>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutClient>{page}</LayoutClient>
  )
};
export default Page;
