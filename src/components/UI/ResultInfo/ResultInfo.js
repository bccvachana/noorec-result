import React from "react";
import classes from "./ResultInfo.module.scss";
import { dataStatic } from "../../../assets/dataStatic";
import ResultArrow from "../../../assets/ResultArrow.svg";

const ResultInfo = (props) => {
  const { type, data, valueIndex, noTitle } = props;
  const { title, unit, toFixed } = dataStatic[type];
  const difference = data[valueIndex - 1]
    ? data[valueIndex] - data[valueIndex - 1]
    : 0;
  return (
    <div>
      {noTitle ? null : <div className="InfoTitle">{title}</div>}
      <div className={classes.Container}>
        <div
          className={`InfoValue ${classes.Value} ${
            toFixed > 0 ? classes.toFixed : ""
          }`}
        >
          {data[valueIndex].toFixed(toFixed)}
        </div>
        <div className={classes.Space}></div>
        <div className={classes.DetailContainer}>
          <div className={classes.Unit}>{unit}</div>
          <div
            className={`${classes.Detail} ${
              toFixed > 0 ? classes.toFixed : ""
            }`}
          >
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
        </div>
      </div>
    </div>
  );
};

export default ResultInfo;
