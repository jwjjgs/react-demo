import React from "react";
import Header from "../../components/common/Header";
import { Button } from "antd";
import Table from "../../components/Lesson/Table";

export default () => {
  
  return (
    <>
      <Header title="课表" extra={[<Button key="3">Operation</Button>]} />
      <Table />

    </>
  )
}
