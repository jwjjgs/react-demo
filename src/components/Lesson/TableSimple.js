import React from "react";
import { data, pointColor } from "../../config/lesson";
import { Typography } from "antd";

export default (props) => {
  // const { lesson } = props;
  // if (!lesson) return <></>;
  const weekNow = new Date().getDay();

  function InfoListItem(props) {
    const { name, addr } = props;
    return (
      <div
        style={{
          listStyle: "none",
          display: "inline-block",
          width: 60,
          height: 80,
          textAlign: "center",
        }}
      >
        <Typography.Paragraph
          ellipsis={{
            rows: 4,
            expandable: false,
            symbol: "...",
          }}
        >
          {`${name}@${addr}`}
        </Typography.Paragraph>
      </div>
    );
  }

  return (
    <div>
      {Object.keys(data).map((key, i) => {
        return data[key].map((item, k) => {
          if (item.week === weekNow)
            return (
              <InfoListItem
                {...item}
                key={key + k}
                pointColor={pointColor[i]}
              />
            );
        });
      })}
    </div>
  );
};
