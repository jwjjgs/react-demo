import { Card, Col, Image, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getFateInfo } from "../../utils/API/sina/fate";

export default () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getFateInfo_ = async () => {
    const res = await getFateInfo(0);
    if (res && res.status === 200) setData(res.data.result.data);
  };
  useEffect(() => {
    getFateInfo_();
  }, []);

  function Block(props) {
    const { title, value } = props;
    return (
      <div
        style={{
          backgroundColor: "rgb(25,13,55)",
          textAlign: "center",
          width: "1.6rem",
          height: "1.5rem",
        }}
      >
        <Typography.Text
          style={{
            color: "#dbd8ea",
            fontsize: ".26rem",
            lineHeight: "1.5",
            fontWeight: "bolder",
          }}
        >
          {title}
        </Typography.Text>
        <Typography.Text
          style={{
            color: "#ffce72",
            fontsize: ".26rem",
            lineHeight: "1.5",
            fontWeight: "bolder",
          }}
        >
          {value}
        </Typography.Text>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "rgb(11,1,32)",
      }}
    >
      <Image
        height="42px"
        width="193px"
        style={{
          margin: "0 auto",
          display: "block",
        }}
        src="data:image/png;base64,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"
      />
      <div
        style={{
          border: "1px solid rgba(212,162,69,.6)",
          margin: "-21px 4px 4px 4px",
          height: "200px",
          borderRadius: "4px",
        }}
      >
        <Row>
          <Col span={6}>
            <Block title="今日幸运值" value="90%" />
          </Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    </div>
  );
};
