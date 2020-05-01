import React, { useState, useEffect } from "react";
import classes from "./Result.module.scss";

import Chart from "../../components/Chart/Chart";
import BpChart from "../../components/Chart/BpChart";

export const ValueIndexContext = React.createContext();

const ResultChart = (props) => {
  const { children, title, data, index, pageIndex } = props;

  const [isChart, setIsChart] = useState(false);
  const [valueIndex, setValueIndex] = useState(0);

  useEffect(() => {
    if (index === pageIndex) {
      setIsChart(true);
    } else {
      let isChartTimer = setTimeout(() => {
        setIsChart(false);
        setValueIndex(
          data[0].type === "bloodPressure"
            ? data[0].data[0].length - 1
            : data[0].data.length - 1
        );
        clearTimeout(isChartTimer);
      }, 300);
    }
  }, [index]);

  return (
    <div className="FullPageContainer">
      {title ? <div className={classes.Title}>{title}</div> : null}
      <div className={`${classes.Container} ContainerRef`}>
        <ValueIndexContext.Provider value={valueIndex}>
          {children}
        </ValueIndexContext.Provider>
        <div className={classes.Chart}>
          {isChart ? (
            data[0].type === "bloodPressure" ? (
              <BpChart
                data={data}
                valueIndex={valueIndex}
                setValueIndex={setValueIndex}
              />
            ) : (
              <Chart
                data={data}
                valueIndex={valueIndex}
                setValueIndex={setValueIndex}
              />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResultChart;
