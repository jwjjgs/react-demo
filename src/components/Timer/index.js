import React, { useState, useEffect } from "react";
import moment from "moment";
import { Card, Statistic, Divider, Typography, Collapse } from "antd";
import { weekStr } from "../../config";
export default () => {
  const [nowMoment, setMoment] = useState(getMomet());

  const weekNow =
    parseInt(
      (Date.now() - Date.parse(new Date("2020/09/07 00:00:00"))) /
        1000 /
        60 /
        60 /
        24 /
        7
    ) + 1;
  useEffect(() => {
    const timer = setInterval(() => setMoment((nowMoment) => getMomet()), 1000);
    return () => clearInterval(timer);
  }, [nowMoment]);
  function getMomet() {
    return moment.duration(
      Date.now() - Date.parse(new Date("2020/05/17 23:23:23"))
    );
  }

  function LoveTimer() {
    return (
      <>
        {parseInt(nowMoment.asDays())}天{parseInt(nowMoment.hours())}时
        {parseInt(nowMoment.minutes())}分{parseInt(nowMoment.seconds())}秒
      </>
    );
  }

  return (
    <>
      <Collapse bordered={false} ghost={true}>
        <Collapse.Panel
          header={
            <Typography.Title level={3}>
              {`第${weekNow}周`}
              {"   "}
              {`星期${weekStr[moment().weekday()]}`}
            </Typography.Title>
          }
          key="1"
          showArrow={false}
        >
          <LoveTimer />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};
