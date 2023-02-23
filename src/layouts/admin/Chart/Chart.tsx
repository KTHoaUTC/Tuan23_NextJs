import React from 'react';
import {  Layout} from 'antd';
import { Pie } from '@ant-design/plots';

const Chart: React.FC = () => {
    const data = [
        {
          type: 'Quần',
          value: 27,
        },
        {
          type: 'Áo',
          value: 25,
        },
        {
          type: 'Váy',
          value: 18,
        },
        {
          type: 'Dép',
          value: 15,
        },
        {
          type: 'Giày',
          value: 10,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }:any) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };
  return (  

    <Pie {...config} />
    
  );
};
export default Chart
