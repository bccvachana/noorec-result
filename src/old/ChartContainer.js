import React, { useState, useEffect } from "react";
import classes from "./ChartContainer.module.scss";
import withMediaQuery from "../../../hoc/withMediaQuery";

import BarChart from "../BarChart/BarChart";
import LineChart from "../LineChart/LineChart";
import ChartScroll from "../ChartScroll/ChartScroll";
import ChartSwitch from "../ChartSwitch/ChartSwitch";

import BarIconSvg from "../../../assets/Chart/Bar.svg";
import WhiteBarIconSvg from "../../../assets/Chart/BarWhite.svg";
import LineIconSvg from "../../../assets/Chart/Line.svg";
import WhiteLineIconSvg from "../../../assets/Chart/LineWhite.svg";

import { dataStatic } from "../../../assets/dataStatic";

const ChartContainer = (props) => {
  const {
    type,
    data,
    dataIndex,
    setDataIndex,
    selectValueIndex,
    setSelectValueIndex,
    device,
    resultContainerWidth,
  } = props;
  const [chartContainerWidth, setChartContainerWidth] = useState(
    resultContainerWidth - 50
  );
  const [scroll, setScroll] = useState(0);
  const [chartType, setChartType] = useState(0);

  useEffect(() => {
    setScroll(0);
    setChartContainerWidth(resultContainerWidth - 50);
  }, [resultContainerWidth]);

  const chartWidth = 50 * data.length + 40;

  const isChartOverflow = chartWidth > chartContainerWidth;

  return (
    <div className={classes.Chart}>
      <div className={classes.ChartControl}>
        <ChartSwitch
          switch={["น้ำหนัก", "ส่วนสูง", "BMI"]}
          switchIndex={dataIndex}
          setSwitchIndex={setDataIndex}
          activeColor="#fa5458"
        />
        <ChartSwitch
          switch={[
            {
              icon: <img src={BarIconSvg} alt="BarIconSvg" />,
              whiteIcon: <img src={WhiteBarIconSvg} alt="WhiteBarIconSvg" />,
            },
            {
              icon: <img src={LineIconSvg} alt="LineIconSvg" />,
              whiteIcon: <img src={WhiteLineIconSvg} alt="WhiteLineIconSvg" />,
            },
          ]}
          switchIndex={chartType}
          setSwitchIndex={setChartType}
          activeColor="#feb562"
        />
      </div>

      <div
        className={classes.ChartContainer}
        style={{
          width: `${chartContainerWidth}px`,
          alignItems: `${isChartOverflow ? "flex-start" : "center"}`,
          marginBottom: `${isChartOverflow ? "20px" : "0"}`,
        }}
      >
        <BarChart
          chartWidth={chartWidth}
          chartContainerWidth={chartContainerWidth}
          data={data}
          selectIndex={selectValueIndex}
          setSelectIndex={setSelectValueIndex}
          fontSize={device === "Mobile" ? 14 : 17.5}
          toFixed={dataStatic[type].toFixed}
          isChartOverflow={isChartOverflow}
          scroll={scroll}
          opacity={chartType === 1 ? "0" : "1"}
          zIndex={chartType === 1 ? "2" : "3"}
        />
        <LineChart
          chartWidth={chartWidth}
          chartContainerWidth={chartContainerWidth}
          data={data}
          selectIndex={selectValueIndex}
          setSelectIndex={setSelectValueIndex}
          fontSize={device === "Mobile" ? 14 : 17.5}
          toFixed={dataStatic[type].toFixed}
          isChartOverflow={isChartOverflow}
          scroll={scroll}
          opacity={chartType}
          zIndex={chartType === 1 ? "3" : "2"}
        />
      </div>
      {isChartOverflow ? (
        <ChartScroll
          chartContainerWidth={chartContainerWidth}
          chartWidth={chartWidth}
          setScroll={setScroll}
        />
      ) : null}
    </div>
  );
};

export default withMediaQuery(ChartContainer);
