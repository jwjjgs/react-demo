import React from "react";
import "./Table.css";
import Point from "./Point";
import { data, pointColor } from "../../config/lesson";
import { weekStr } from "../../config";
import { Row, Col } from "antd";
import moment from "moment";

export default (props) => {
  // const { innerHeight, setInnerHeight } = useState(window.innerHeight);
  // const { innerWidth, setInnerWidth } = useState(window.innerWidth);

  // window.addEventListener("resize", () => { handleResize() });
  // function handleResize() {
  //   setInnerHeight(window.innerHeight)
  //   setInnerWidth(window.innerWidth)
  // }

  const { margin } = props;
  const { innerHeight, innerWidth } = window;
  const h = innerHeight > 840 ? 840 : innerHeight;
  const w = innerWidth > 480 ? 480 : innerWidth;
  const weekSelect = {
    backgroundColor: "#096dd9",
    color: "#fff",
    borderRadius: "8px",
  };
  const week = moment().day();
  const base = 32;
  const height = (h - base) / 12;
  const width = (w - margin - base) / 7;

  function Table() {
    return (
      <>
        <div className="lesson" style={{ maxHeight: h, maxWidth: w }}>
          <div style={{ height: base }} className="lesson-w">
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
                  <div
                    style={{
                      ...(week === key ? weekSelect : {}),
                    }}
                  >
                    {item}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row>
              <Col flex={`${base}px`}>
                <div className="lesson-n">
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
                </div>
              </Col>
              <Col flex="auto">
                <div className="lesson-c">
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
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }

  return <Table />;
};
