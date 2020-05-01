import React from "react";
import classes from "./Result.module.scss";

const ResultCriteria = (props) => {
  const { children, criteria, detail } = props;

  return (
    <div className="FullPageContainer">
      <div className={classes.Container}>
        {children}
        <div className={classes.Criteria}>{criteria}</div>
        <div className={classes.CriteriaDetail}>{detail}</div>
      </div>
    </div>
  );
};

export default ResultCriteria;
