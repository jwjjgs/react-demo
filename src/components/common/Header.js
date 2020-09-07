import React from "react";
import { PageHeader } from "antd";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
export default (props) => {
  const { isIndex, title, subTitle, extra } = props;
  const history = useHistory();
  return (
    <>
      <PageHeader
        className="site-page-header"
        backIcon={isIndex ? false : <ArrowLeftOutlined />}
        onBack={() => history.goBack()}
        title={title || ""}
        subTitle={subTitle || ""}
        extra={extra || []}
      />
    </>
  );
};
