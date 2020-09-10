import React, { useState, useEffect } from "react";

import {
  Collapse,
  Typography,
  Row,
  Col,
  Spin,
  Tag,
  Image,
  Divider,
} from "antd";
import jsonp from "jsonp";
import moment from "moment";
import { weekStr } from "../../config";

import SkyIcon from "./SkyIcon";

export default () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getWeather();
  }, []);

  function getWeather() {
    const hourlySteps = 24;
    jsonp(
      `https://api.caiyunapp.com/v2.5/96Ly7wgKGq6FhllM/103.75063,29.559692/weather.jsonp?hourlysteps=${hourlySteps}`,
      {
        param: "callback",
      },
      (err, res) => {
        if (res.status === "ok") {
          const { realtime, daily, hourly, forecast_keypoint } = res.result;
          const temp = realtime.temperature;
          const tempMax = daily.temperature[0].max;
          const tempMin = daily.temperature[0].min;
          const tempAvg = daily.temperature[0].avg;
          const skyCon = realtime.skycon;
          const skyDesc = getSkyDesc(skyCon);
          const skyPrec = daily.precipitation[0].avg;
          const tip = { forecast_keypoint, description: hourly.description };
          const dailyData = [];
          for (let i = 0; i < 5; i++) {
            dailyData.push({
              datetime: `周${
                weekStr[moment(daily.temperature[i].date).weekday()]
              }`,
              value: `${parseInt(daily.temperature[i].min)}°/${parseInt(
                daily.temperature[i].max
              )}`,
              icon: daily.skycon[i].value,
              prec: daily.precipitation[i].avg,
            });
          }
          const hourlyData = [];
          for (let i = 0; i < hourlySteps; i++) {
            hourlyData.push({
              date: moment(hourly.temperature[i].datetime).format("HH:mm"),
              value: `${parseInt(hourly.temperature[i].value)}°`,
              icon: hourly.skycon[i].value,
              prec: hourly.precipitation[i].value,
            });
          }
          setWeather({
            temp,
            tempMax,
            tempMin,
            tempAvg,
            skyCon,
            skyDesc,
            skyPrec,
            tip,
            dailyData,
            hourlyData,
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
          <Col span={8}>
            <Row justify="start">
              <Col>
                <Typography.Title level={2}>
                  {weather && weather.temp}°
                  <SkyIcon desc={weather.skyCon} />
                </Typography.Title>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row justify="end">
              <Col>
                <Tag color="#108ee9">
                  <Image
                    preview={false}
                    src="//caiyunapp.com/weather/img/tel-icon.png"
                    width={8}
                  />
                  <Divider type="vertical" />
                  {weather.tempMin}°~{weather.tempMax}°
                </Tag>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Row justify="start">
              <Col>{weather.skyDesc}</Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row justify="end">
              <Col>{weather.tip.forecast_keypoint}</Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }

  function InfoList(props) {
    if (!props) return <Spin />;
    const { dataSource } = props;
    return (
      <div
        style={{ whiteSpace: "nowrap", overflowX: "auto", marginTop: "16px" }}
      >
        {dataSource.map((item, key) => {
          return <InfoListItem key={key} {...item} />;
        })}
      </div>
    );
  }

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

  function getSkyDesc(desc) {
    return {
      CLEAR_DAY: "晴",
      CLEAR_NIGHT: "晴",
      PARTLY_CLOUDY_DAY: "多云",
      PARTLY_CLOUDY_NIGHT: "多云",
      CLOUDY: "阴",
      CLOUDY_NIGHT: "阴",
      RAIN: "雨",
      SNOW: "雪",
      SNOW_NIGHT: "雪",
      WIND: "大风",
      FOG: "雾",
      HAZE: "雾霾",
    }[desc];
  }

  return (
    <>
      <Collapse bordered={false} ghost={true}>
        <Collapse.Panel header={<Header />} key="1" showArrow={false}>
          <div style={{ textAlign: "center" }}>
            <Tag color="#108ee9">{weather && weather.tip.description}</Tag>
          </div>
          <InfoList dataSource={weather && weather.hourlyData} />
          <InfoList dataSource={weather && weather.dailyData} />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
