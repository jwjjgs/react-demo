import React from "react";
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
  );
};
