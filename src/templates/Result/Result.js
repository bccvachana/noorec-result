import React, { useState, useEffect } from "react";
import classes from "./Result.module.scss";

import Switch from "../../components/UI/Switch/Switch";

import ResultWhiteSvg from "../../assets/Result/resultWhite.svg";
import ResultSvg from "../../assets/Result/result.svg";
import ChartWhiteSvg from "../../assets/Result/chartWhite.svg";
import ChartSvg from "../../assets/Result/chart.svg";

const Result = (props) => {
  const { children, title, index, pageIndex } = props;
  const [resultType, setResultType] = useState(0);

  return (
    <div className="FullPageContainer">
      {title ? (
        <div className={classes.Title}>
          {title}
          <Switch
            switches={[
              {
                icon: <img src={ResultSvg} alt="ResultSvg" />,
                whiteIcon: <img src={ResultWhiteSvg} alt="ResultWhiteSvg" />,
              },
              {
                icon: <img src={ChartSvg} alt="ChartSvg" />,
                whiteIcon: <img src={ChartWhiteSvg} alt="ChartWhiteSvg" />,
              },
            ]}
            switchIndex={resultType}
            setSwitchIndex={setResultType}
            activeColor="#fa5458"
            type={"result"}
          />
        </div>
      ) : null}
      <div className={`${classes.Container} ContainerRef`}>{children}</div>
    </div>
  );
};

export default Result;
