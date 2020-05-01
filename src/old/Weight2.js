import React, { useRef, useEffect } from "react";
import classes from "./Weight.module.scss";
import weightSvg from "../../assets/Weight/weightSvg.svg";
import { Scatter, defaults, Bar, Chart } from "react-chartjs-2";
import Draggable from "react-draggable";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";
import "chartjs-plugin-datalabels";
import { useState } from "react";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import AnimateOnChange from "react-animate-on-change";
require("./RoundedBars");

defaults.global.defaultFontFamily = "Prompt";
defaults.global.defaultFontColor = "white";
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
  color: "#FE777B",
});

const data = [70.5, 69.8, 70.4, 71.0, 70.0];

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
let orgradient = ctx.createLinearGradient(0, 0, 0, 200);
orgradient.addColorStop(0.2, "rgba(255, 255, 255, 1)");
orgradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");

const Weight = (props) => {
  const [selectIndex, setSelectIndex] = useState(data.length - 1);
  const [beforeIndex, setBeforeIndex] = useState(data.length - 1);
  const chartInstance = useRef();
  const matchTablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const matchDesktop = useMediaQuery("(min-width: 1024px)");

  const lineChartData = {
    datasets: [
      {
        data: data.map((value, index) => {
          return {
            x: index,
            y: value,
          };
        }),
        showLine: true,
        backgroundColor: () => {
          let canvas = document.createElement("canvas");
          let ctx = canvas.getContext("2d");
          let gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0.2, "rgba(255, 255, 255, 1)");
          gradient.addColorStop(0.95, "rgba(255, 255, 255, 0)");
          return gradient;
        },
        borderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: (point) => {
          return point.dataIndex === selectIndex ? "white" : "rgb(250, 84, 88)";
        },
        pointHoverBackgroundColor: "white",
        pointBorderColor: "rgb(255, 255, 255)",
        pointHoverBorderColor: "white",
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointRadius: (point) => {
          return point.dataIndex === selectIndex ? 7 : 5;
        },
        pointHoverRadius: 7,
        pointHitRadius: 15,
        lineTension: 0,
        borderJoinStyle: "rounded",
      },
    ],
  };
  const lineChartOption = {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 3,
        backgroundColor: "rgba(59, 66, 81, 0.75)",
        borderRadius: 30,
        textAlign: "center",
        padding: {
          left: 8,
          right: 8,
          top: 5,
          bottom: 3.5,
        },
        font: {
          size: 14,
        },
        color: "white",
        formatter: (value, context) => {
          return value.y.toFixed(1);
        },
      },
    },
    legend: false,
    maintainAspectRatio: false,
    responsive: false,
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 22.5,
        bottom: 0,
      },
    },
    tooltips: false,
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            suggestedMax: Math.max(...data) + 0.2,
            suggestedMin: Math.min(...data) - 1.5,
          },
        },
      ],
      xAxes: [{ display: false }],
    },
  };
  const barChartData = {
    labels: data.map((value, index) => {
      return index;
    }),
    datasets: [
      {
        backgroundColor: (bar) => {
          return bar.dataIndex === selectIndex
            ? "rgb(255, 255, 255)"
            : "transparent";
        },
        hoverBackgroundColor: "white",
        borderColor: "white",
        borderWidth: 3,
        hoverBorderColor: "white",
        hoverBorderWidth: 3,
        categoryPercentage: 0.5,
        barPercentage: 1,
        data: data,
      },
    ],
  };

  let barChartOption = {
    cornerRadius: 10,
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 3,
        backgroundColor: "rgba(59, 66, 81, 0.75)",
        borderRadius: 30,
        textAlign: "center",
        padding: {
          left: 8,
          right: 8,
          top: 5,
          bottom: 3.5,
        },
        font: {
          size: 14,
        },
        color: "white",
        formatter: (value, context) => {
          return value.toFixed(1);
        },
      },
    },
    animation: {
      duration: 1500,
    },
    maintainAspectRatio: false,
    responsive: false,
    legend: false,
    tooltips: false,
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            suggestedMax: Math.max(...data) + 0.2,
            suggestedMin: Math.min(...data) - 1.5,
          },
        },
      ],
      xAxes: [{ display: false }],
    },
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 17,
        bottom: 0,
      },
    },
    // this is needed, otherwise onHover is not fired
    onHover: (event, chartElement) => {
      event.target.style.cursor = chartElement[0] ? "pointer" : "default";
    },
  };
  useEffect(() => {
    if (props.index !== 2) setSelectIndex(data.length - 1);
  }, [props.index]);
  return (
    <div className="FullPageContainer">
      <div className="ResultTitle">น้ำหนัก</div>
      <div className="ResultContainer">
        {/* <div className="Value">
          {props.recordData.weight} <span className="Unit">kg</span>
        </div> */}
        {props.index === 3 ? (
          <div id="ChartContainer">
            <div className="Chart">
              <Scatter
                ref={chartInstance}
                data={lineChartData}
                options={lineChartOption}
                width={50 * data.length + 100}
                height={200}
                onElementsClick={(ele) => {
                  if (ele[0]) {
                    setSelectIndex(ele[0]._index);
                  }
                }}
              />
              <Bar
                ref={chartInstance}
                data={barChartData}
                options={barChartOption}
                width={50 * data.length + 100}
                height={200}
                onElementsClick={(ele) => {
                  if (ele[0]) {
                    setSelectIndex(ele[0]._index);
                  }
                }}
              />
            </div>
            <div className="line" style={{ width: 50 * data.length }}></div>
          </div>
        ) : null}
        {/* <AnimateOnChange
          baseClassName=""
          animationClassName="animated fadeInUp"
          animate={selectIndex !== beforeIndex}
          onAnimationEnd={() => {
            console.log(selectIndex !== beforeIndex);
            setBeforeIndex(selectIndex);
          }}
        >
          {data[selectIndex]}
        </AnimateOnChange> */}
      </div>
    </div>
  );
};

export default Weight;
