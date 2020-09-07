import React from "react";
import "./Table.css";
import Point from "./Point";
import { data } from "../../config/lesson";

export default (props) => {
  const { x, y } = props;

  const base = 32;
  const p1 = { x: x || 0, y: y || 72 };
  const p2 = {
    x: p1.x + base,
    y: p1.y + base,
  };
  const p3 = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  const point = {
    x: p2.x,
    y: p2.y,
    height: (p3.y - p2.y) / 12,
    width: (p3.x - base) / 7,
  };
  const pointColor = [
    "#f50",
    "#2db7f5","#87d068","#108ee9"
  ];
  return (
    <div
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
        <div style={{ width: base }}>#</div>
        {/* 星期 */}
        {["一", "二", "三", "四", "五", "六", "天"].map((item, key) => (
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
      >
        {/* 节点 */}
        <div style={{ height: point.height * 1 }}>
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
      >
        {/* 课 */}
        {data.map((item, key) => {
          return (
            <Point
              {...item}
              key={key}
              point={point}
              pointColor={pointColor[key % pointColor.length]}
            />
          );
        })}
      </div>
    </div>
  );
};
