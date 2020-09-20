import React from "react";
import "./HotSearchItem.css";

export default (props) => {
  const { id, title, index, icon } = props;
  console.log(icon);
  return (
    <div className="HotSearchItem">
      <strong>{id}</strong>
      <span>
        {title}
        <em>{index}</em>
      </span>

      {icon ? (
        <i
          style={{
            backgroundImage: `url(//img.t.sinajs.cn/t4/appstyle/searchpc/css/h5/img/${icon}.png)`,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
