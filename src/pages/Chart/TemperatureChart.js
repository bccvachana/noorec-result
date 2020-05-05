import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ValueInfo from "../../components/UI/ValueInfo/ValueInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../components/Result/ResultChart";

const TemperatureChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={`${classes.Row} InfoTitle`}>อุณหภูมิร่างกาย</div>
      <div className={classes.Row}>
        <ValueInfo
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
  const { data } = props;

  return (
    <ResultChart {...props}>
      <TemperatureChartInfo data={data} />
    </ResultChart>
  );
};

export default TemperatureChart;
