import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ValueInfo from "../../components/UI/ValueInfo/ValueInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const WeightHeightChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={classes.Row}>
        <ValueInfo type="weight" data={data[0].data} valueIndex={valueIndex} />
        <div className={classes.RowSpace}></div>
        <ValueInfo type="height" data={data[1].data} valueIndex={valueIndex} />
      </div>
      <div className={`${classes.Row} ${classes.Bmi}`}>
        <div className="InfoTitle">BMI</div>
        <div className="InfoValue" style={{ margin: "0 15px" }}>
          {data[2].data[valueIndex].toFixed(2)}
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
  const { data } = props;

  return (
    <ResultChart {...props}>
      <WeightHeightChartInfo data={data} />
    </ResultChart>
  );
};

export default WeightHeightChart;
