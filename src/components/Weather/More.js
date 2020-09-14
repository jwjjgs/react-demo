import React from "react";
import { List, Typography, Space } from "antd";
import SkyIcon from "./SkyIcon";

const { Text } = Typography;

export default (props) => {
  const { list } = props;
  /**
   * list = { day icon temp prec }
   */
  return (
    <List
      style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          style={{
            display: "inline-block",
            width: 60,
          }}
        >
          <Space direction="vertical" style={{ textAlign: "center" }}>
            <Text>{item.date}</Text>
            <SkyIcon desc={item.icon} prec={item.prec || 0} />
            <Text>{item.temp}</Text>
          </Space>
        </List.Item>
      )}
    />
  );
};
