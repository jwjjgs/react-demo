import React from "react";
import { Layout } from "antd";
import Weather from "../../components/Weather";
import Header from "../../components/common/Header";
import Content from "../../components/common/Content";
import Timer from "../../components/Timer";
import Table from "../../components/Lesson/Table";

export default () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <Header title="首页" isIndex={true}>
        <Weather />
      </Header>
      <Content>
        <Timer />
        <Table />
      </Content>
    </Layout>
  );
};
