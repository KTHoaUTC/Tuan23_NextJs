// import FooterClient from "@/components/Client/Footer";
// import HeaderClient from "@/components/Client/Header";
// import React from "react";

// const index = () => {
//   return (
//     <>
//       <div>
//         <div className="info-top-grid">
//           <div className="info-contact-agile">
//             <ul>
//               <li>
//                 <span className="fas fa-phone-volume"></span>
//                 <p>+(000)123 4565 32</p>
//               </li>
//               <li>
//                 <span className="fas fa-envelope"></span>
//                 <p>
//                   <a href="mailto:info@example.com">info@example1.com</a>
//                 </p>
//               </li>
//               <li></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <HeaderClient />
//       <FooterClient />
//     </>
//   );
// };

// export default index;



import React from 'react';
import { Layout } from 'antd';
import FooterClient from '@/components/Client/Footer';
import HeaderClient from '@/components/Client/Header';
import MainClient from '@/components/Client/Main';
const { Header, Content, Footer, Sider } = Layout;
const AppClient: React.FC = () => {
  return (
    <Layout>
       
        <HeaderClient></HeaderClient>

        
        <MainClient></MainClient>
       
        <FooterClient></FooterClient>
    </Layout>
  );
};

export default AppClient;

