import React, { useState, useEffect } from "react";
import { Collapse, Skeleton, Divider } from "antd";
import jsonp from "jsonp";
import moment from "moment";
import { weekStr } from "../../config";
import Simple from "./Simple";
import More from "./More";

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
          const simple = {
            now: realtime.temperature,
            max: daily.temperature[0].max,
            min: daily.temperature[0].min,
            tip: forecast_keypoint,
            icon: realtime.skycon,
            desc: getSkyDesc(realtime.skycon),
          };
          const more = { day: [], hour: [] };
          for (let i = 0; i < 5; i++) {
            more.day.push({
              date: `周${weekStr[moment(daily.temperature[i].date).weekday()]}`,
              temp: `${parseInt(daily.temperature[i].min)}°/${parseInt(
                daily.temperature[i].max
              )}`,
              icon: daily.skycon[i].value,
              prec: daily.precipitation[i].avg,
            });
          }
          for (let i = 0; i < hourlySteps; i++) {
            more.hour.push({
              date: moment(hourly.temperature[i].datetime).format("HH:mm"),
              temp: `${parseInt(hourly.temperature[i].value)}°`,
              icon: hourly.skycon[i].value,
              prec: hourly.precipitation[i].value,
            });
          }
          setWeather({
            simple,
            more,
            tip: hourly.description,
          });
        }
      }
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

  if (!weather) return <Skeleton active />;
  return (
    <>
      <Collapse bordered={false} ghost={true}>
        <Collapse.Panel
          header={<Simple {...weather.simple} />}
          showArrow={false}
        >
          <More list={weather.more.day} />
          <Divider orientation="center" plain>{weather.tip}</Divider>
          <More list={weather.more.hour} />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
