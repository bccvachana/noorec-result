import React from "react";

import WeightHeightCriteria from "../../pages/Criteria/WeightHeightCriteria/WeightHeightCriteria";
import WeightHeightChart from "../../pages/Chart/WeightHeightChart";
import TemperatureCriteria from "../../pages/Criteria/TemperatureCriteria/TemperatureCriteria";
import TemperatureChart from "../../pages/Chart/TemperatureChart";
import BloodPressureCriteria from "../../pages/Criteria/BloodPressureCriteria/BloodPressureCriteria";
import BloodPressureChart from "../../pages/Chart/BloodPressureChart";
import RateCriteria from "../../pages/Criteria/RateCriteria/RateCriteria";
import RateChart from "../../pages/Chart/RateChart";
import OxygenCriteria from "../../pages/Criteria/OxygenCriteria/OxygenCriteria";
import OxygenChart from "../../pages/Chart/OxygenChart";

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
  bloodPressure: {
    title: "ความดันโลหิต",
    Criteria: <BloodPressureCriteria />,
    Chart: <BloodPressureChart />,
    pageIndex: 4,
    data: (() => {
      const systolicData = [120, 122, 130, 112, 115, 135, 122];
      const diastolicData = [80, 79, 90, 85, 87, 77, 100];
      return [{ type: "bloodPressure", data: [systolicData, diastolicData] }];
    })(),
  },
  rate: {
    title: "ชีพจร",
    Criteria: <RateCriteria />,
    Chart: <RateChart />,
    pageIndex: 5,
    data: (() => {
      const rateData = [84, 92, 80, 97, 102, 115];
      return [{ type: "rate", data: rateData }];
    })(),
  },
  oxygen: {
    title: "ออกซิเจนในเลือด",
    Criteria: <OxygenCriteria />,
    Chart: <OxygenChart />,
    pageIndex: 6,
    data: (() => {
      const oxygenData = [98, 96, 97, 95, 98, 99];
      return [{ type: "oxygen", data: oxygenData }];
    })(),
  },
};
