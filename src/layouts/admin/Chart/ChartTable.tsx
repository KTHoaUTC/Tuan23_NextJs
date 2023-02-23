import React from 'react';
import { Column } from '@ant-design/plots';

const ChartTable: React.FC = () => {
    const data = [
        {
          type: 'Quần',
          sales: 38,
        },
        {
          type: 'Áo',
          sales: 52,
        },
        {
          type: 'Váy',
          sales: 61,
        },
        {
          type: 'Dép',
          sales: 145,
        },
        {
          type: 'Giày',
          sales: 48,
        },
      ];
      const configCot = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Mặt Hàng',
          },
          sales: {
            alias: 'Đã Bán',
          },
        },
      };

      
  return (  
    <>
    <Column {...configCot} />
    </>
    
  );
};
export default ChartTable
