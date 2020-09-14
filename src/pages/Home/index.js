import React from "react";
import { Divider } from "antd";
import Weather from "../../components/Weather";
import Header from "../../components/common/Header";
import Simple from "../../components/Lesson/Simple";

export default () => {
  return (
    <>
      <Header title="^-^" isIndex={true}></Header>
      <div style={{ margin: "0 24px" }}>
        <Weather />
        <Simple />
        <Divider orientation="center" plain>
          你是一只飞鸟 飞上我的树梢
        </Divider>
      </div>
    </>
  );
};
