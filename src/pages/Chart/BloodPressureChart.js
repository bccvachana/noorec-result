import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ValueInfo from "../../components/UI/ValueInfo/ValueInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../components/Result/ResultChart";

const BloodPressureChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={classes.Row}>
        <ValueInfo
          type="systolic"
          data={data[0].data[0]}
          valueIndex={valueIndex}
        />
        <div className={classes.RowSpace} style={{ maxWidth: "30px" }}></div>
        <ValueInfo
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
  const { data } = props;

  return (
    <ResultChart {...props}>
      <BloodPressureChartInfo data={data} />
    </ResultChart>
  );
};

export default BloodPressureChart;
