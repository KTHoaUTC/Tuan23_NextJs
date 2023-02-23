import React, { useState } from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


const DeleteProduct: React.FC = () => {

  return (
    <>
      <Button style={{float:'right', margin:'0px'}} type="primary" >
      <DeleteOutlined />
      </Button>
    </>
  );
};

export default DeleteProduct;