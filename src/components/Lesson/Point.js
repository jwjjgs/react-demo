import React from "react";
import "./Point.css";
import { Typography, Tooltip, Space, Divider } from "antd";
import { weekStr } from "../../config";

const { Paragraph, Text } = Typography;

export default (props) => {
  const {
    height,
    width,
    week,
    node,
    len,
    name,
    tname,
    addr,
    mark,
    pointColor,
  } = props; //week星期几 node开始第几节 len几节 name课名 tname老师名字 addr教室 mark备注
  function handlePointOnClick() {}
  const Content = (
    <>
      <Space direction="vertical">
        <Text strong={true}>{name}</Text>
        <Divider style={{ margin: "0px" }} />
        <Text>
          星期{weekStr[week - 1]}{" "}
          {node === 0
            ? "早自习"
            : node < 5
            ? "上午"
            : node < 9
            ? "下午"
            : "晚自习"}{" "}
          {node === 0 ? "" : `第${node % 4}节`}
        </Text>
        <Text>地点：{addr}</Text>
        <Text>教师：{tname}</Text>
        <Text>备注：{mark}</Text>
      </Space>
    </>
  );
  return (
    <Tooltip
      arrowPointAtCenter={true}
      color={pointColor}
      title={Content}
      trigger="click"
      placement="right"
    >
      <div
        className="lesson-p shadow-1-up"
        style={{
          height: height * len - 4,
          top: node * height,
          left: week * width,
          width: width - 2,
          background: `${pointColor}`,
        }}
        onClick={() => handlePointOnClick()}
      >
        <Paragraph
          ellipsis={{
            rows: parseInt((height * len - 4) / 14),
            expandable: false,
            symbol: "...",
          }}
        >
          {`${name}@${addr}`}
        </Paragraph>
      </div>
    </Tooltip>
  );
};
