import React from "react";
import Header from "../../components/common/Header";
import Table from "../../components/Lesson/Table";
import moment from "moment";
export default () => {
  const weekNow = moment().diff("2020/09/07", "weeks") + 1;
  return (
    <>
      <Header title={`第 ${weekNow} 周`} />
      <Table margin={0} />
    </>
  );
};
