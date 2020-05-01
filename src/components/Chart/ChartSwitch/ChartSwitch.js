import React from "react";
import classes from "./ChartSwitch.module.scss";

const ChartSwitch = (props) => {
  const { switches, switchIndex, setSwitchIndex, activeColor } = props;
  return (
    <div
      className={classes.ChartSwitchContainer}
      style={{
        gridTemplateColumns: `repeat(${switches.length}, 1fr)`,
      }}
    >
      <div
        className={classes.ChartTypeActive}
        style={{
          width: `calc(100%/${switches.length})`,
          transform: `translateX(${switchIndex * 100}%)`,
          backgroundColor: activeColor,
        }}
      />
      {switches.map((switchEl, index) => (
        <div
          key={index}
          className={classes.Switch}
          style={{
            color: index === switchIndex ? "white" : "#3b4251",
          }}
          onClick={() => {
            setSwitchIndex(index);
          }}
        >
          {switchEl.icon ? (
            <div className={classes.IconContainer}>
              {index === switchIndex ? switchEl.whiteIcon : switchEl.icon}
            </div>
          ) : (
            switchEl
          )}
        </div>
      ))}
    </div>
  );
};

export default ChartSwitch;
