import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ResultInfo from "../../components/UI/ResultInfo/ResultInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const WeightHeightChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  const weight = data[0].data[valueIndex];
  const height = data[1].data[valueIndex] / 100;
  const bmi = (weight / (height * height)).toFixed(2);

  return (
    <div className={classes.InfoContainer}>
      <div className={classes.Row}>
        <ResultInfo type="weight" data={data[0].data} valueIndex={valueIndex} />
        <div className={classes.RowSpace}></div>
        <ResultInfo type="height" data={data[1].data} valueIndex={valueIndex} />
      </div>
      <div className={`${classes.Row} ${classes.Bmi}`}>
        <div className="InfoTitle">BMI</div>
        <div className="InfoValue" style={{ margin: "0 15px" }}>
          {bmi}
        </div>
        <div className="InfoCriteria">อ้วนมาก</div>
      </div>
      <div className={`${classes.Row} ResultRow InfoUnit InfoTime`}>
        27 เม.ย. 2562 15.14 น.
      </div>
    </div>
  );
};

const WeightHeightChart = (props) => {
  const weightData = [90.8, 70.0, 72.3, 90.8, 70.0, 72.3, 90.8, 70.0, 72.3];
  const heightData = [182, 180, 179, 182, 180, 179, 182, 180, 179];
  const data = [
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

  const { index, pageIndex } = props;

  return (
    <ResultChart
      title="น้ำหนัก | ส่วนสูง"
      data={data}
      index={index}
      pageIndex={pageIndex}
    >
      <WeightHeightChartInfo data={data} />
    </ResultChart>
  );
};

export default WeightHeightChart;
