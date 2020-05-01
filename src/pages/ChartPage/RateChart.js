import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ResultInfo from "../../components/UI/ResultInfo/ResultInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const RateChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={`${classes.Row} InfoTitle`}>ชีพจร</div>
      <div className={classes.Row}>
        <ResultInfo
          type="rate"
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

const RateChart = (props) => {
  const rateData = [84, 92, 80, 97, 102, 115];
  const data = [{ type: "rate", data: rateData }];

  const { index, pageIndex } = props;

  return (
    <ResultChart title="ชีพจร" data={data} index={index} pageIndex={pageIndex}>
      <RateChartInfo data={data} />
    </ResultChart>
  );
};

export default RateChart;
