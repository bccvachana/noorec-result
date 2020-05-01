import React from "react";
import Draggable from "react-draggable";

import classes from "./ChartScroll.module.scss";

const ChartScroll = (props) => {
  const { containerWidth, chartWidth, setScroll } = props;

  return (
    <div
      className={classes.ScrollLineContainer}
      style={{ width: containerWidth }}
    >
      <div className={classes.ScrollLine}></div>
      <Draggable
        axis="x"
        bounds="parent"
        onDrag={(e, data) => {
          setScroll(
            (-data.x * (-chartWidth + containerWidth)) / (containerWidth - 50)
          );
        }}
      >
        <div className={classes.Scroll}></div>
      </Draggable>
    </div>
  );
};

export default ChartScroll;
