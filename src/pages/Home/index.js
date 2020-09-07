import React from "react";
import { Typography, Space } from "antd";

const { Text, Link } = Typography;

export default () => {
  return (
    <Space direction="horizontal" align="center">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      
    </Space>
  );
};
