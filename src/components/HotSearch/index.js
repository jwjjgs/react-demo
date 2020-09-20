import React, { useEffect, useState } from "react";

import jsonp from "jsonp";
import { Card, List, Space } from "antd";
import { SyncOutlined, WeiboOutlined } from "@ant-design/icons";
import HotSearchItem from "./HotSearchItem";

function getIcon(item) {
  const keys = Object.keys(item);
  const icons = [
    { name: "is_boom", icon: "icon_boom" },
    { name: "is_new", icon: "icon_new" },
    { name: "is_fei", icon: "icon_boil" },
    { name: "is_hot", icon: "icon_hot" },
    { name: "is_recommend", icon: "icon_recommend" },
  ];
  for (const key in icons)
    if (keys.indexOf(icons[key].name) >= 0) return icons[key].icon;
  return null;
}

/**
 * 微博热搜
 */
export default () => {
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => getList(), []);
  function getList() {
    if (refresh) return;
    setRefresh(true);
    jsonp(
      `https://s.weibo.com/ajax/jsonp/gettopsug`,
      {
        param: "_cb",
      },
      (err, res) => {
        if (res && res.data) {
          setRefresh(false);
          setList(res.data.list);
        }
      }
    );
  }
  return (
    <Card
      size="small"
      title={
        <Space>
          <WeiboOutlined />
          微博热搜
        </Space>
      }
      extra={<SyncOutlined onClick={() => getList()} spin={refresh} />}
      loading={refresh}
    >
      <List
        itemLayout="vertical"
        dataSource={list}
        renderItem={(item, key) => (
          <List.Item
            style={{}}
            onClick={() =>
              window.open(
                `https://s.weibo.com/weibo/${encodeURIComponent(
                  item.word
                )}?topnav=1&wvr=6&b=1`
              )
            }
          >
            <HotSearchItem
              {...{
                key: key,
                id: key + 1,
                title: item.note,
                index: item.num,
                icon: getIcon(item),
              }}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
