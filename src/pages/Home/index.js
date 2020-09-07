import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import { Card, Row, Col, Statistic, Divider, Button } from "antd";
import { Link } from "react-router-dom";
import { TableOutlined } from "@ant-design/icons";
import moment from 'moment';

export default () => {
  const [nowMoment, setMoment] = useState(getMomet())
  useEffect(() => {
    const timer = setInterval(() => setMoment(nowMoment => getMomet()), 1000)
    return () => clearInterval(timer)
  }, [nowMoment])
  function getMomet() { return moment.duration(Date.now() - Date.parse(new Date("2020/05/17 23:23:23"))) }
  return (
    <>
      <Header title="首页" isIndex={true} />
      <Row>
        <Col span={24}>
          <Card>
            <Statistic title="啦啦啦" value={`${parseInt(nowMoment.asDays())}天${parseInt(nowMoment.hours())}时${parseInt(nowMoment.minutes())}分${parseInt(nowMoment.seconds())}秒`} />
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
