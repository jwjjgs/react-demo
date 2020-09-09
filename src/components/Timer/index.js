import React, { useState, useEffect } from "react";
import moment from "moment";
import { Card, Statistic, Divider } from "antd";
import { weekStr } from '../../config'
export default () => {
  const [nowMoment, setMoment] = useState(getMomet());
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
      <Card>
        <Statistic title={`星期${weekStr[moment().weekday()]}`} value={""} />
        <Divider orientation="left" plain>
          陪你走过漫长岁月
        </Divider>
        <LoveTimer />
      </Card>
    </>
  );
};
