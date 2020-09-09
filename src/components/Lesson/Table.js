import React, { useState } from "react";
import "./Table.css";
import Point from "./Point";
import { data, pointColor } from "../../config/lesson";
import { weekStr } from "../../config";
import { Layout, Row, Col } from "antd";

export default () => {
  // const { innerHeight, setInnerHeight } = useState(window.innerHeight);
  // const { innerWidth, setInnerWidth } = useState(window.innerWidth);

  // window.addEventListener("resize", () => { handleResize() });
  // function handleResize() {
  //   setInnerHeight(window.innerHeight)
  //   setInnerWidth(window.innerWidth)
  // }
  const { innerHeight, innerWidth } = window;
  const base = 32;
  const height = (innerHeight - base) / 12;
  const width = (innerWidth - 24 - base) / 7;
  return (
    <>
      <Layout className="lesson">
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
                        height: height * item.len,
                        lineHeight: `${height * item.len}px`,
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

      {/* <div
        style={{
          top: p1.y,
          left: p1.x,
          height: p3.y - p1.y,
          width: p3.x - p1.x,
          lineHeight: `${base}px`,
        }}
      >
        <div
          className="lesson lesson-w"
          style={{
            top: p1.y,
            left: p1.x,
            height: base,
            width: p3.x - p1.x,
          }}
        >
          <div style={{ width: base }}>#</div> */}
      {/* 星期 */}
      {/* {weekStr.map((item, key) => (
            <div key={key} style={{ width: point.width }}>
              {item}
            </div>
          ))}
        </div>
        <div
          className="lesson lesson-n"
          style={{
            top: p2.y,
            left: p1.x,
            height: p3.y - p2.y,
            width: base,
          }}
        > */}
      {/* 节点 */}
      {/* <div style={{ height: point.height * 1 }}>
            <span>早</span>
          </div>
          <div style={{ height: point.height * 4 }}>
            <span>上</span>
          </div>
          <div style={{ height: point.height * 4 }}>
            <span>下</span>
          </div>
          <div style={{ height: point.height * 3 }}>
            <span>晚</span>
          </div>
        </div>
        <div
          className="lesson lesson-c"
          style={{
            top: p2.y,
            left: p2.x,
            height: p3.y - p2.y,
            width: p3.x - p2.x,
          }}
        > */}
      {/* 课 */}
      {/* {Object.keys(data).map((key, i) => {
            return data[key].map((item, k) => {
              return (
                <Point
                  {...item}
                  key={key + k}
                  point={point}
                  pointColor={pointColor[i]}
                />
              );
            });
          })}
        </div>
      </div> */}
    </>
  );
};
