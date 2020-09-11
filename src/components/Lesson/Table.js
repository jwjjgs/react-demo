import React, { useState } from "react";
import "./Table.css";
import Point from "./Point";
import { data, pointColor } from "../../config/lesson";
import { weekStr } from "../../config";
import { Layout, Row, Col, Collapse, Tag } from "antd";
import TableSimple from "./TableSimple";
import { AppstoreOutlined } from "@ant-design/icons";

export default () => {
  // const { innerHeight, setInnerHeight } = useState(window.innerHeight);
  // const { innerWidth, setInnerWidth } = useState(window.innerWidth);

  // window.addEventListener("resize", () => { handleResize() });
  // function handleResize() {
  //   setInnerHeight(window.innerHeight)
  //   setInnerWidth(window.innerWidth)
  // }
  const { innerHeight, innerWidth } = window;
  const h = innerHeight > 840 ? 840 : innerHeight;
  const w = innerWidth > 480 ? 480 : innerWidth;

  const base = 32;
  const height = (h - base) / 12;
  const width = (w - 32 - base) / 7;

  function Table() {
    return (
      <>
        <Layout className="lesson" style={{ maxHeight: h, maxWidth: w }}>
          <Layout style={{ height: base }} className="lesson-w">
            <Row>
              <Col
                flex={`${base}px`}
                style={{
                  width: base,
                  height: base,
                  lineHeight: `${base}px`,
                }}
              >
                #
              </Col>
              {weekStr.map((item, key) => (
                <Col
                  flex="auto"
                  key={key}
                  style={{
                    height: base,
                    lineHeight: `${base}px`,
                  }}
                >
                  {/* 星期 */}
                  {item}
                </Col>
              ))}
            </Row>
          </Layout>
          <Layout>
            <Row>
              <Col flex={`${base}px`}>
                <Layout className="lesson-n">
                  {/* 节点 */}
                  <Row>
                    {[
                      { text: "早", len: 1 },
                      { text: "上", len: 4 },
                      { text: "下", len: 4 },
                      { text: "晚", len: 3 },
                    ].map((item, key) => (
                      <Col
                        key={key}
                        span={24}
                        style={{
                          height: height * item.len - 2,
                          lineHeight: `${height * item.len - 2}px`,
                        }}
                      >
                        {item.text}
                      </Col>
                    ))}
                  </Row>
                </Layout>
              </Col>
              <Col flex="auto">
                <Layout className="lesson-c">
                  {/* 课 */}
                  {Object.keys(data).map((key, i) => {
                    return data[key].map((item, k) => {
                      return (
                        <Point
                          {...item}
                          key={key + k}
                          height={height}
                          width={width}
                          pointColor={pointColor[i]}
                        />
                      );
                    });
                  })}
                </Layout>
              </Col>
            </Row>
          </Layout>
        </Layout>
      </>
    );
  }

  return (
    <Collapse bordered={false} ghost={true}>
      <Collapse.Panel
        header={<TableSimple />}
        showArrow={false}
        extra={<AppstoreOutlined />}
      ></Collapse.Panel>
    </Collapse>
  );
};
