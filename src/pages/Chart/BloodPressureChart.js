import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ResultInfo from "../../components/UI/ResultInfo/ResultInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const BloodPressureChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={classes.Row}>
        <ResultInfo
          type="systolic"
          data={data[0].data[0]}
          valueIndex={valueIndex}
        />
        <div className={classes.BpRowSpace}></div>
        <ResultInfo
          type="diastolic"
          data={data[0].data[1]}
          valueIndex={valueIndex}
        />
      </div>
      <div className={`${classes.Row} ${classes.BloodPressure}`}>
        <div className="InfoCriteria">ปกติ</div>
      </div>
      <div className={`${classes.Row} ResultRow InfoUnit InfoTime`}>
        27 เม.ย. 2562 15.14 น.
      </div>
    </div>
  );
};

const BloodPressureChart = (props) => {
  const SystolicData = [120, 122, 130, 112, 115, 135, 122];
  const DiastolicData = [80, 79, 90, 85, 87, 77, 100];
  const data = [{ type: "bloodPressure", data: [SystolicData, DiastolicData] }];

  const { index, pageIndex } = props;

  return (
    <ResultChart
      title="ความดันโลหิต"
      data={data}
      index={index}
      pageIndex={pageIndex}
    >
      <BloodPressureChartInfo data={data} />
    </ResultChart>
  );
};

export default BloodPressureChart;
