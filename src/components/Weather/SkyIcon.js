import React from "react";
import { Image } from "antd";

export default (props) => {
  const { desc, prec, width } = props;
  const allPicName = {
    CLEAR: "clear.png",
    CLEAR_NIGHT: "clear_night.png",
    PARTLY_CLOUDY: "partly_cloudy.png",
    PARTLY_CLOUDY_NIGHT: "partly_cloudy_night.png",
    CLOUDY: "cloudy.png",
    SNOW: "snow.png",
    RAIN: "rain.png",
    FOG: "fog.png",
    HAZE: "haze.png",
    WIND: "wind.png",
  };
  
  let name =
    allPicName[
      desc.match(
        /CLEAR_NIGHT|CLEAR|PARTLY_CLOUDY_NIGHT|PARTLY_CLOUDY|CLOUDY|SNOW|RAIN|FOG|HAZE|WIND|/
      )[0]
    ] || "partly_cloudy.png";
  if (prec) {
    let prec_ = prec * 24;
    if (prec_ > 1) {
      if (prec < 10) {
        name = "rain_low.png";
      } else if (prec < 25) {
        name = "rain_middle.png";
      } else if (prec < 50) {
        name = "rain_high.png";
      } else {
        name = "rain_large.png";
      }
    }
  }
  return (
    <Image
      preview={false}
      width={width || 22}
      src={`//caiyunapp.com/images/skyicon/${name}`}
    />
  );
};
