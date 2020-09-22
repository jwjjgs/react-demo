import React from "react";
import { Divider, Space } from "antd";
import Weather from "../../components/Weather";
import Header from "../../components/common/Header";
import Simple from "../../components/Lesson/Simple";
import HotSearch from "../../components/HotSearch";
import FateSimple from "../../components/Fate/FateSimple";

export default () => {
  return (
    <>
      <Header title="^-^" isIndex={true}></Header>
      <div style={{ padding: "0 24px" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Weather />
          <FateSimple />
          <Simple />
          <HotSearch />
          <Divider orientation="center" plain>
            你是一只飞鸟 飞上我的树梢
          </Divider>
        </Space>
      </div>
    </>
  );
};
