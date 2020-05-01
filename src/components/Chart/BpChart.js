import React, { useState, useEffect } from "react";
import classes from "./Chart.module.scss";
import withDeviceDetect from "../../hoc/withDeviceDetect";
import Switch from "../UI/Switch/Switch";

import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
import ChartScroll from "./ChartScroll/ChartScroll";

import BarIcon from "../../assets/Chart/Bar.svg";
import BarIconWhite from "../../assets/Chart/BarWhite.svg";
import LineIcon from "../../assets/Chart/Line.svg";
import LineIconWhite from "../../assets/Chart/LineWhite.svg";

import { dataStatic } from "../../assets/dataStatic";

const BpChart = (props) => {
  const { data, valueIndex, setValueIndex, device } = props;

  const [containerWidth, setContainerWidth] = useState(0);
  const [dataIndex, setDataIndex] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [chartType, setChartType] = useState(0);

  useEffect(() => {
    setContainerWidth(document.querySelector(".ContainerRef").clientWidth - 50);
    window.addEventListener("resize", () => {
      setContainerWidth(
        document.querySelector(".ContainerRef").clientWidth - 50
      );
      setScroll(0);
      setDataIndex(0);
    });
  }, []);

  const { type: dataType, data: dataData } = data[dataIndex];

  const chartWidth = 2 * 50 * dataData[0].length + 40;
  const isChartOverflow = chartWidth > containerWidth;
  const fontSize = device === "Mobile" ? 14 : 17;

  return (
    <div className={classes.Chart}>
      <div
        className={classes.ChartControl}
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Switch
          switches={[
            {
              icon: <img src={BarIcon} alt="BarIcon" />,
              whiteIcon: <img src={BarIconWhite} alt="BarIconWhite" />,
            },
            {
              icon: <img src={LineIcon} alt="LineIcon" />,
              whiteIcon: <img src={LineIconWhite} alt="LineIconWhite" />,
            },
          ]}
          switchIndex={chartType}
          setSwitchIndex={setChartType}
          activeColor="#feb562"
          type="chart"
        />
      </div>
      <div
        className={classes.ChartContainer}
        style={{
          alignItems: `${isChartOverflow ? "flex-start" : "center"}`,
          marginBottom: `${isChartOverflow ? "20px" : "0"}`,
        }}
      >
        <BarChart
          chartWidth={chartWidth}
          containerWidth={containerWidth}
          data={[...dataData]}
          type={dataType}
          valueIndex={valueIndex}
          setValueIndex={setValueIndex}
          fontSize={fontSize}
          toFixed={dataStatic[dataType].toFixed}
          isChartOverflow={isChartOverflow}
          scroll={scroll}
        />
        <LineChart
          chartWidth={chartWidth}
          containerWidth={containerWidth}
          data={[...dataData]}
          type={dataType}
          valueIndex={valueIndex}
          setValueIndex={setValueIndex}
          fontSize={fontSize}
          toFixed={dataStatic[dataType].toFixed}
          isChartOverflow={isChartOverflow}
          scroll={scroll}
          opacity={chartType === 1 ? 1 : 0}
          scale={chartType === 1 ? 1 : 1.05}
          visibility={chartType === 1 ? "visible" : "hidden"}
        />
      </div>
      {isChartOverflow ? (
        <ChartScroll
          containerWidth={containerWidth}
          chartWidth={chartWidth}
          setScroll={setScroll}
        />
      ) : null}
    </div>
  );
};

export default withDeviceDetect(BpChart);
