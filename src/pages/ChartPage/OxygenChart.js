import React, { useContext } from "react";
import classes from "./ChartPage.module.scss";

import ResultInfo from "../../components/UI/ResultInfo/ResultInfo";
import ResultChart, {
  ValueIndexContext,
} from "../../templates/Result/ResultChart";

const OxygenChartInfo = (props) => {
  const { data } = props;
  const valueIndex = useContext(ValueIndexContext);

  return (
    <div className={classes.InfoContainer}>
      <div className={`${classes.Row} InfoTitle`}>ออกซิเจนในเลือด</div>
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

const OxygenChart = (props) => {
  const rateData = [98, 96, 97, 95, 98, 99];
  const data = [{ type: "oxygen", data: rateData }];

  const { index, pageIndex } = props;

  return (
    <ResultChart
      title="ออกซิเจนในเลือด"
      data={data}
      index={index}
      pageIndex={pageIndex}
    >
      <OxygenChartInfo data={data} />
    </ResultChart>
  );
};

export default OxygenChart;
