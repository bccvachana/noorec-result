import React, { useState } from "react";
import classes from "./Weight.module.scss";
import weightSvg from "../../assets/Weight/weightSvg.svg";
import Draggable from "react-draggable";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import AnimateOnChange from "react-animate-on-change";
import { useEffect } from "react";

import ChartContainer from "../../components/ChartContainer/ChartContainer";

const Weight = (props) => {
  const data = [
    70.5,
    70.0,
    69.3,
    72.1,
    69.3,
    72.1,
    70.5,
    70.0,
    69.3,
    72.1,
    69.3,
    72.1,
  ];

  return (
    <div className="FullPageContainer">
      <div className="ResultTitle">น้ำหนัก</div>
      <div className="ResultContainer">
        {/* <div className="Value">
          {props.recordData.weight} <span className="Unit">kg</span>
        </div> */}
        {props.index === 2 ? (
          <ChartContainer data={data} index={props.index} pageIndex={2} />
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
      {/* <div
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => {
          setSelectIndex(data.length);
          setData((data) => [
            ...data,
            (Math.floor(Math.random() * (710 - 690)) + 690) / 10,
          ]);
        }}
      >
        Add Data
      </div> */}
    </div>
  );
};

export default Weight;
