import React, { useState, useEffect } from "react";

import { Collapse, Typography, Row, Col, Spin, Tag, } from "antd";
import jsonp from "jsonp";
import Weather from "./Icon";
import Icon from "@ant-design/icons";
import moment from 'moment'
import { weekStr } from '../../config'


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
          const status = getSkyCons(realtime.skycon);
          const tip = { forecast_keypoint, description: hourly.description };
          const dailyData = [];
          for (let i = 0; i < 5; i++) {
            dailyData.push({
              datetime: `周${weekStr[moment(daily.temperature[i].date).weekday()]}`,
              value: `${parseInt(daily.temperature[i].min)}°/${parseInt(daily.temperature[i].max)}`,
              icon: daily.skycon[i].value,
            });
          }
          const hourlyData = [];
          for (let i = 0; i < hourlySteps; i++) {
            hourlyData.push({
              datetime: moment(hourly.temperature[i].datetime).format("HH:mm"),
              value: `${parseInt(hourly.temperature[i].value)}°`,
              icon: hourly.skycon[i].value,
            });
          }
          setWeather({
            temp,
            tempMax,
            tempMin,
            tempAvg,
            status,
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
                  <Icon component={weather.status.icon} />
                </Typography.Title>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row justify="end">
              <Col>
                <Typography.Title level={5}>{weather.tempMin}°~{weather.tempMax}°<Icon component={Weather.TEMPERATURE} /></Typography.Title>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Row justify="start">
              <Col>{weather.status.text}</Col>
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
      <div style={{ whiteSpace: "nowrap", overflowX: "auto", marginTop: "16px" }}>

        {dataSource.map((item, key) => {
          const props = {
            date: item.datetime,
            icon: item.icon,
            temp: item.value
          }

          return (
            <InfoListItem key={key} {...props} />
          )
        })}
      </div>
    )
  }

  function InfoListItem(props) {
    return (
      <div style={{ listStyle: "none", display: "inline-block", width: 60, height: 80, textAlign: "center" }}>
        <Row>
          <Col span={24}><Typography.Text style={{ color: "#000" }}>{props.date}</Typography.Text></Col>
          <Col span={24}><Icon component={getSkyCons(props.icon).icon} /></Col>
          <Col span={24}><Typography.Text style={{ color: "#000" }}>{props.temp}</Typography.Text></Col>
        </Row>
      </div>
    )
  }

  function getSkyCons(status) {
    switch (status) {
      case "CLEAR_DAY":
        return { text: "晴", icon: Weather.CLEAR_DAY };
      case "CLEAR_NIGHT":
        return { text: "晴", icon: Weather.CLEAR_NIGHT };
      case "PARTLY_CLOUDY_DAY":
        return { text: "日间局部多云", icon: Weather.PARTLY_CLOUDY_DAY };
      case "PARTLY_CLOUDY_NIGHT":
        return { text: "夜间局部多云", icon: Weather.PARTLY_CLOUDY_NIGHT };
      case "CLOUDY":
        return { text: "多云", icon: Weather.CLOUDY };
      case "RAIN":
        return { text: "雨", icon: Weather.RAIN };
      case "LIGHT_RAIN":
        return { text: "小雨", icon: Weather.LIGHT_RAIN };
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
          <div style={{ textAlign: "center" }}><Tag color="#108ee9">{weather && weather.tip.description}</Tag></div>
          <InfoList dataSource={weather && weather.hourlyData} />
          <InfoList dataSource={weather && weather.dailyData} />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
