import React from "react";
import classes from "./ResultTemplate.module.scss";

const ResultCriteria = (props) => {
  const { children, criteria, detail } = props;

  return (
    <div className={classes.ResultCriteria}>
      {children}
      <div className={classes.Criteria}>{criteria}</div>
      <div className={classes.CriteriaDetail}>{detail}</div>
    </div>
  );
};

export default ResultCriteria;
