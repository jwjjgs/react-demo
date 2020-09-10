import React from "react";
import { Layout, Space } from "antd";

export default (props) => {
  return (
    <Layout.Content
      style={{
        margin: "0px 16px",
        padding: 0,
      }}
    >
      <Space direction="vertical" style={{width: "100%"}} size="middle">{props.children}</Space>
    </Layout.Content>
  );
};
