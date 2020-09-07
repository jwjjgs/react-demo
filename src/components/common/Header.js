import React from "react";
import { PageHeader } from "antd";
import { useHistory } from "react-router-dom";

export default (props) => {
  const {isBack,title,subTitle} = props;
  const history = useHistory();
  return (
    <>
      <PageHeader
        className="site-page-header"
        backIcon={isBack || <ArrowLeft />}
        onBack={() => history.goBack()}
        title={title || ''}
        subTitle={subTitle || ''}
      />
    </>
  );
};
