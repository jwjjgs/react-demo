import React from "react";
import "./Point.css";
import { Typography, Popover, Space } from "antd";
import Text from "antd/lib/typography/Text";

const { Paragraph } = Typography;

export default (props) => {
  const { point, week, node, len, name, tname, addr, mark, pointColor } = props; //week星期几 node开始第几节 len几节 name课名 tname老师名字 addr教室 mark备注
  const weekStr = ["一", "二", "三", "四", "五", "六", "天"];
  function handlePointOnClick() {}
  const content = (
    <>
      <Space direction="vertical">
        <Text>
          时间：
          {node === 0 ? "早读" : node < 5 ? "上午" : node < 9 ? "下午" : "晚上"}
          -{node === 0 ? "" : `第${node % 4}节`}-{`共${len}节`}
        </Text>
        <Text>地点：{addr}</Text>
        <Text>教师：{tname}</Text>
        <Text>备注：{mark}</Text>
      </Space>
    </>
  );

  return (
    <Popover
      content={content}
      title={`星期${weekStr[week - 1]}`}
      trigger="click"
    >
      <div
        className="lesson-p"
        style={{
          width: point.width - 8,
          height: point.height * len - 8,
          top: node * point.height,
          left: (week - 1) * point.width,
          background: `${pointColor}`,
        }}
        onClick={() => handlePointOnClick()}
      >
        <Paragraph
          ellipsis={{
            rows: parseInt((point.height * len - 8) / 14),
            expandable: false,
            symbol: "...",
          }}
          style={{ color: "#fff", lineHeight: "14px" }}
        >
          {`${name}@${addr}`}
        </Paragraph>
      </div>
    </Popover>
  );
};
