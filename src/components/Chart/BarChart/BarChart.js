import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import classes from "../Chart.module.scss";

import { barData, barOption } from "./BarChartProps";
import { bPBarData, bPBarOption } from "./BpBarChartProps";

require("./RoundedBar");

const BarChart = (props) => {
  const {
    chartWidth,
    containerWidth,
    data,
    valueIndex,
    setValueIndex,
    fontSize,
    toFixed,
    isChartOverflow,
    scroll,
    type,
  } = props;

  const [isScrollChart, setIsScrollChart] = useState(false);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    if (isChartOverflow) {
      setIsScrollChart(false);
      setIsTransition(true);
      setTimeout(() => {
        setIsScrollChart(true);
        setTimeout(() => {
          setIsTransition(false);
        }, 2000);
      }, 50);
    }
  }, [isChartOverflow]);

  const dataRange = !type
    ? Math.max(...data) - Math.min(...data)
    : Math.max(...[...data[0], ...data[1]]) -
      Math.min(...[...data[0], ...data[1]]);
  const option = {
    data: data,
    valueIndex: valueIndex,
    fontSize: fontSize,
    valuePadding: (dataRange * 1) / 3,
    toFixed: toFixed,
  };

  return (
    <div
      className={classes.BarContainer}
      style={{
        width: chartWidth,
        left: isChartOverflow
          ? isScrollChart
            ? -chartWidth + containerWidth - scroll
            : 0
          : 0,
        transition: isTransition ? "all 1.5s ease-in-out" : "",
      }}
    >
      <Bar
        data={!type ? barData(data, valueIndex) : bPBarData(data, valueIndex)}
        options={!type ? barOption(option) : bPBarOption(option)}
        onElementsClick={(elememt) => {
          if (elememt[0]) {
            setValueIndex(elememt[0]._index);
          }
        }}
        redraw={!isScrollChart}
      />
    </div>
  );
};

export default BarChart;
