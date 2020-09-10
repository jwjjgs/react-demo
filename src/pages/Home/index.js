import React from "react";
import { Layout, Image, Divider } from "antd";
import Weather from "../../components/Weather";
import Header from "../../components/common/Header";
import Content from "../../components/common/Content";
import Timer from "../../components/Timer";
import Table from "../../components/Lesson/Table";

export default () => {
  return (
    <Layout>
      <Header isIndex={true}></Header>
      <Timer />
      <Content>
        <Weather />
        <Table />
      </Content>

      <Layout.Footer>
        <Divider orientation="center" plain>
          你是一只飞鸟 飞上我的树梢
        </Divider>
      </Layout.Footer>
    </Layout>
  );
};
