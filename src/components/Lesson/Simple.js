import React from "react";
import { List, Card, Typography, Row, Col, Divider, Space } from "antd";
import { data, timeTable } from "../../config/lesson";
import { weekStr } from "../../config";
import moment from "moment";
import { Link } from "react-router-dom";
const { Text, Title } = Typography;

export default () => {
  const weekNow = new Date().getDay();

  const style = {
    title: {
      fontSize: "13px",
      lineHeight: "13px",
      display: "block",
    },
    text: {
      fontSize: 8,
      lineHeight: "8px",
      display: "block",
    },
  };

  const list = {
    早自习: [],
    上午: [],
    下午: [],
    晚自习: [],
  };

  let count = 0;

  for (let item of Object.values(data)) {
    for (let child of item)
      if (child.week === weekNow) {
        const obj = {
          node: child.node,
          len: child.len,
          name: child.name,
          addr: child.addr,
          tname: child.tname,
        };
        if (child.node === 0) list.早自习.push(obj);
        else if (child.node < 5) list.上午.push(obj);
        else if (child.node < 9) list.下午.push(obj);
        else list.晚自习.push(obj);
        count++;
      }
  }

  function SimpleList(props) {
    const { list } = props;
    return (
      <List
        dataSource={list}
        split={false}
        renderItem={(item) => (
          <List.Item>
            <SimpleItem {...item} />
          </List.Item>
        )}
      />
    );
  }

  function SimpleItem(props) {
    /**
     * props = { node,len,name,addr,tname }
     */

    const { node, len, name, addr, tname } = props;

    return (
      <>
        <Row>
          <Col flex="32px">
            <Row>
              <Text type="secondary" style={style.text}>
                {timeTable[node].start}
              </Text>
              <Text
                type="secondary"
                style={{ ...style.text, marginTop: "14px" }}
              >
                {timeTable[node + len - 1].end}
              </Text>
            </Row>
          </Col>
          <Col flex="18px">
            <Divider
              type="vertical"
              style={{ backgroundColor: "#40a9ff", width: 2, height: "100%" }}
            />
          </Col>
          <Col flex="auto">
            <Title style={style.title}>{name}</Title>
            <Text type="secondary" style={style.text}>
              {len === 1
                ? `第${node % 4}节`
                : `第${node % 4}节-第${(node % 4) + len - 1}节`}
              <Divider type="vertical" /> {addr}
              {tname ? (
                <>
                  <Divider type="vertical" /> {tname}
                </>
              ) : (
                <></>
              )}
            </Text>
          </Col>
        </Row>
      </>
    );
  }
  console.log(list);
  return (
    <>
      <Link to="/lesson">
        <Card
          size="small"
          title={`${count}节课`}
          extra={
            <>
              <Text
                type="secondary"
                style={{ ...style.title, display: "inline-block" }}
              >
                {`周${weekStr[moment().weekday()]} ${moment().format("MM/DD")}`}
              </Text>
            </>
          }
        >
          <div style={{ minHeight: 120, maxHeight: 300, overflowY: "scroll" }}>
            <Space direction="vertical">
              {Object.keys(list).map((item) => {
                if (list[item].length === 0) return;
                return (
                  <div key={item}>
                    <Text type="secondary" style={style.title}>
                      {item}
                    </Text>
                    <SimpleList list={list[item]} />
                  </div>
                );
              })}
            </Space>
          </div>
        </Card>
      </Link>
    </>
  );
};
