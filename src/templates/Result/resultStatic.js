import React from "react";

import WeightHeightCriteria from "../../pages/Criteria/WeightHeightCriteria/WeightHeightCriteria";
import WeightHeightChart from "../../pages/Chart/WeightHeightChart";
import TemperatureCriteria from "../../pages/Criteria/TemperatureCriteria/TemperatureCriteria";
import TemperatureChart from "../../pages/Chart/TemperatureChart";

export default {
  weightHeight: {
    title: "น้ำหนัก | ส่วนสูง",
    Criteria: <WeightHeightCriteria />,
    Chart: <WeightHeightChart />,
    pageIndex: 2,
    data: (() => {
      const weightData = [90.8, 70.0, 72.3, 90.8, 70.0, 72.3, 90.8, 70.0, 72.3];
      const heightData = [182, 180, 179, 182, 180, 179, 182, 180, 179];
      return [
        { type: "weight", data: weightData },
        { type: "height", data: heightData },
        {
          type: "bmi",
          data: weightData.map((weight, index) => {
            const height = heightData[index] / 100;
            const bmi = weight / (height * height);
            return bmi;
          }),
        },
      ];
    })(),
  },
  temperature: {
    title: "อุณหภูมิร่างกาย",
    Criteria: <TemperatureCriteria />,
    Chart: <TemperatureChart />,
    pageIndex: 3,
    data: (() => {
      const temperatureData = [36.7, 36.0, 35.9, 37.0, 38.2, 36];
      return [{ type: "temperature", data: temperatureData }];
    })(),
  },
};
