import React, { useState, useEffect } from "react";

import { Collapse, Typography, Row, Col, Spin, Tag } from "antd";
import jsonp from "jsonp";
import Weather from "./Icon";
import Icon from "@ant-design/icons";

export default () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getWeather();
  }, []);
  function getWeather() {
    jsonp(
      "https://api.caiyunapp.com/v2.5/96Ly7wgKGq6FhllM/103.75063,29.559692/weather.jsonp?hourlysteps=24",
      {
        param: "callback",
      },
      (err, res) => {
        if (res.status === "ok") {
          const { realtime, daily, hourly } = res.result;
          const temp = realtime.temperature;
          const tempMax = daily.temperature[0].max;
          const tempMin = daily.temperature[0].min;
          const tempAvg = daily.temperature[0].avg;
          const status = getSkyCons(realtime.skycon);
          setWeather({
            temp,
            tempMax,
            tempMin,
            tempAvg,
            status,
          });
        }
      }
    );
  }

  function Header() {
    if (!weather) return <Spin />;
    return (
      <>
        <Row>
          <Col span={12}>
            <Row justify="start">
              <Col>
                <Typography.Title level={3}>
                  {weather && weather.temp}°
                  <Icon component={weather.status.icon} />
                </Typography.Title>
              </Col>
            </Row>
            <Row justify="start">
              <Col>{weather.status.text}</Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="end">
              <Col></Col>
            </Row>
            <Row justify="end">
              <Col>
                <Tag color="geekblue">最低{weather.tempMin}°</Tag>
                <Tag color="volcano">最高{weather.tempMax}°</Tag>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }

  function getSkyCons(status) {
    switch (status) {
      case "CLEAR_DAY":
        return { text: "晴", icon: Weather.CLEAR_DAY };
      case "CLEAR_NIGHT":
        return { text: "晴", icon: Weather.CLEAR_NIGHT };
      case "PARTLY_CLOUDY_DAY":
        return { text: "局部多云", icon: Weather.PARTLY_CLOUDY_DAY };
      case "PARTLY_CLOUDY_NIGHT":
        return { text: "局部多云", icon: Weather.PARTLY_CLOUDY_NIGHT };
      case "CLOUDY":
        return { text: "多云", icon: Weather.CLOUDY };
      case "RAIN":
        return { text: "雨", icon: Weather.RAIN };
      case "SLEET":
        return { text: "雨夹雪", icon: Weather.SLEET };
      case "SNOW":
        return { text: "雪", icon: Weather.SNOW };
      case "WIND":
        return { text: "风", icon: Weather.WIND };
      case "FOG":
        return { text: "雾", icon: Weather.FOG };
      default:
        return "未知";
    }
  }

  return (
    <>
      <Collapse bordered={false} ghost={true}>
        <Collapse.Panel header={<Header />} key="1" showArrow={false}>
          dadadad
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
