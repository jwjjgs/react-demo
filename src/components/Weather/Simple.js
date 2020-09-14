import React from "react";

import { Typography, Row, Col, Tag, Image, Divider } from "antd";

import SkyIcon from "./SkyIcon";

export default (props) => {
  const { max, min, now, tip, icon, desc } = props;
  return (
    <>
      <Row>
        <Col span={8}>
          <Row justify="start">
            <Col>
              <Typography.Title level={2}>
                {now}°
                <SkyIcon desc={icon} />
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row justify="end">
            <Col>
              <Tag color="#108ee9">
                <Image
                  preview={false}
                  src="//caiyunapp.com/weather/img/tel-icon.png"
                  width={8}
                />
                <Divider type="vertical" />
                {min}°~{max}°
              </Tag>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Row justify="start">
            <Col>{desc}</Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row justify="end">
            <Col>{tip}</Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
