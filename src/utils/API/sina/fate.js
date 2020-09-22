import Axios from "axios";

function getFateInfo(code) {
  return Axios({
    url: `https://interface.sina.cn/ast/get_app_fate.d.json?type=astro&class=${
      getFateList()[code].name
    }`,
  });
}

function getFateList() {
  return [
    {
      name: "Aries",
      nameCn: "\u767d\u7f8a\u5ea7",
      date: " 03/21 - 04/19 ",
    },
    {
      name: "Taurus",
      nameCn: "\u91d1\u725b\u5ea7",
      date: " 04/20 - 05/20 ",
    },
    {
      name: "Gemini",
      nameCn: "\u53cc\u5b50\u5ea7",
      date: " 05/21 - 06/21 ",
    },
    {
      name: "Cancer",
      nameCn: "\u5de8\u87f9\u5ea7",
      date: " 06/22 - 07/22 ",
    },
    {
      name: "Leo",
      nameCn: "\u72ee\u5b50\u5ea7",
      date: " 07/23 - 08/22 ",
    },
    {
      name: "Virgo",
      nameCn: "\u5904\u5973\u5ea7",
      date: " 08/23 - 09/23 ",
    },
    {
      name: "Libra",
      nameCn: "\u5929\u79e4\u5ea7",
      date: " 09/23 - 10/23 ",
    },
    {
      name: "Scorpio",
      nameCn: "\u5929\u874e\u5ea7",
      date: " 10/24 - 11/22 ",
    },
    {
      name: "Sagittarius",
      nameCn: "\u5c04\u624b\u5ea7",
      date: " 11/23 - 12/21 ",
    },
    {
      name: "Capricorn",
      nameCn: "\u6469\u7faf\u5ea7",
      date: " 12/22 - 01/19 ",
    },
    {
      name: "Aquarius",
      nameCn: "\u6c34\u74f6\u5ea7",
      date: " 01/20 - 02/18 ",
    },
    {
      name: "Pisces",
      nameCn: "\u53cc\u9c7c\u5ea7",
      date: " 02/19 - 03/20 ",
    },
  ];
}

export { getFateInfo, getFateList };
