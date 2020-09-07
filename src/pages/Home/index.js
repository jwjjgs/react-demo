import React from "react";
<<<<<<< HEAD
import Header from "../../components/common/Header";

import { Card, Row, Col, Statistic, Divider, Button } from "antd";
import { Link } from "react-router-dom";
import { TableOutlined } from "@ant-design/icons";

export default () => {
  return (
    <>
      <Header title="首页" isIndex={true} />
      <Row>
        <Col span={24}>
          <Card>
            <Statistic title="啦啦啦" suffix="天" value={170} />
            <Divider orientation="left" plain>
              分割线
            </Divider>
            <Link to="/lesson">
              <Button type="primary" icon={<TableOutlined />}>
                课表
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </>
=======
import { Typography, Space } from "antd";

const { Text, Link } = Typography;

export default () => {
  return (
    <Space direction="horizontal" align="center">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      
    </Space>
>>>>>>> 7f8c6f2de380d133f70f2479a45e9152a42d7d45
  );
};
