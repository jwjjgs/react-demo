import React from "react";

export default (props) => {
  const { lesson } = props;
  if (!lesson) return <></>;

  function InfoListItem(props) {
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
        <Row>
          <Col span={24}>
            <Typography.Text style={{ color: "#000" }}>
              {props.datetime}
            </Typography.Text>
          </Col>
          <Col span={24}>
            <SkyIcon desc={props.icon} prec={props.prec} />
          </Col>
          <Col span={24}>
            <Typography.Text style={{ color: "#000" }}>
              {props.value}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <Row>
      {Object.keys(data).map((key, i) => {
        return data[key].map((item, k) => {
          return (
            <Col span={6} order={4}>
              <Point
                {...item}
                key={key + k}
                height={height}
                width={width}
                pointColor={pointColor[i]}
              />
            </Col>
          );
        });
      })}
    </Row>
  );
};
