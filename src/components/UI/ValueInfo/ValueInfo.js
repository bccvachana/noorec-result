import React from "react";
import classes from "./ValueInfo.module.scss";
import { dataStatic } from "../../../assets/dataStatic";
import ResultArrow from "../../../assets/ResultArrow.svg";

const ValueInfo = (props) => {
  const { type, data, valueIndex, noTitle } = props;
  const { title, unit, toFixed } = dataStatic[type];

  const isValueIndex = valueIndex || valueIndex === 0;

  const difference = isValueIndex
    ? data[valueIndex - 1]
      ? data[valueIndex] - data[valueIndex - 1]
      : 0
    : null;

  return (
    <div
      className={classes.ValueInfo}
      style={{ alignItems: isValueIndex ? "center" : "flex-start" }}
    >
      {noTitle ? null : <div className="InfoTitle">{title}</div>}
      {isValueIndex ? (
        <div className={classes.Container}>
          <div
            className={`InfoValue ${classes.ValueChart} ${
              toFixed > 0 ? classes.toFixed : ""
            }`}
          >
            {isValueIndex
              ? data[valueIndex].toFixed(toFixed)
              : data[data.length - 1]}
          </div>
          <div className={classes.Space}></div>
          <div
            className={`${classes.DetailContainer} ${
              toFixed > 0 ? classes.toFixed : ""
            }`}
          >
            <div className={classes.Unit}>{unit}</div>
            {isValueIndex ? (
              <div className={classes.Detail}>
                {difference > 0 ? (
                  <img src={ResultArrow} alt="ResultArrow" />
                ) : (
                  <img
                    src={ResultArrow}
                    alt="ResultArrow"
                    style={{ transform: "rotate(180deg)" }}
                  />
                )}
                {Math.abs(difference).toFixed(toFixed)}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div>
          <div className={classes.Container}>
            <div className="InfoValue">
              {data[data.length - 1].toFixed(toFixed)}
            </div>
            {unit ? <div className={classes.Space} /> : null}
            {unit ? (
              <div className={classes.DetailContainer}>
                <div className={classes.Unit}>{unit}</div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ValueInfo;
