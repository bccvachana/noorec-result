import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ResultInfo from "../../components/UI/ResultInfo/ResultInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const TemperatureChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={`${classes.Row} InfoTitle`}>อุณหภูมิร่างกาย</div>
      <div className={classes.Row}>
        <ResultInfo
          type="temperature"
          data={data[0].data}
          valueIndex={valueIndex}
          noTitle
        />
        <div className={classes.RowSpaceCriteria}></div>
        <div className="InfoCriteria">ปกติ</div>
      </div>

      <div className={`${classes.Row} ResultRow InfoUnit InfoTime`}>
        27 เม.ย. 2562 15.14 น.
      </div>
    </div>
  );
};

const TemperatureChart = (props) => {
  const temperatureData = [36.7, 36.0, 35.9, 37.0, 38.2, 36];
  const data = [{ type: "temperature", data: temperatureData }];

  const { index, pageIndex } = props;

  return (
    <ResultChart
      title="อุณหภูมิร่างกาย"
      data={data}
      index={index}
      pageIndex={pageIndex}
    >
      <TemperatureChartInfo data={data} />
    </ResultChart>
  );
};

export default TemperatureChart;
