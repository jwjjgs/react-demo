import React from "react";
import "./Point.css";
import { Typography, Space, Divider } from "antd";
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
  // const Content = (
  //   <>
  //     <Space direction="vertical" style={{ ...pointColor }}>
  //       <Text strong={true}>{name}</Text>
  //       <Divider style={{ margin: "0px" }} />
  //       <Text>
  //         星期{weekStr[week - 1]}{" "}
  //         {node === 0
  //           ? "早自习"
  //           : node < 5
  //           ? "上午"
  //           : node < 9
  //           ? "下午"
  //           : "晚自习"}{" "}
  //         {node === 0 ? "" : `第${node % 4}节`}
  //       </Text>
  //       <Text>地点：{addr}</Text>
  //       <Text>教师：{tname}</Text>
  //       <Text>备注：{mark}</Text>
  //     </Space>
  //   </>
  // );
  return (
    <div
      className="lesson-p"
      style={{
        top: node * height + 2,
        left: week * width + 2,
        width: width - 4,
        height: height * len - 4,
        ...pointColor,
      }}
      onClick={() => handlePointOnClick()}
    >
      <Paragraph
        ellipsis={{
          rows: parseInt((height * len - 12) / 12),
          expandable: false,
          symbol: "...",
        }}
      >
        <div className="lesson-p-node" style={{ ...pointColor }}>
          <b>{name}</b>@{addr}
        </div>
      </Paragraph>
    </div>
  );
};
