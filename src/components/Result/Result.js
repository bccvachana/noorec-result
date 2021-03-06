import React, { useState, useEffect, useContext } from "react";
import classes from "./Result.module.scss";

import Switch from "../../components/UI/Switch/Switch";
import ResultWhiteSvg from "../../assets/Result/resultWhite.svg";
import ResultSvg from "../../assets/Result/result.svg";
import ChartWhiteSvg from "../../assets/Result/chartWhite.svg";
import ChartSvg from "../../assets/Result/chart.svg";
import InfoSvg from "../../assets/Result/info.svg";

import { ModalContext } from "../../App";
import resultStatic from "./resultStatic";

const Result = (props) => {
  const { type, index } = props;
  const { title, Criteria, Chart, pageIndex, data } = resultStatic[type];
  const [resultType, setResultType] = useState(0);
  const [isChartScroll, setIsChartScroll] = useState(false);

  const modal = useContext(ModalContext);

  useEffect(() => {
    if (index !== pageIndex) {
      setResultType(0);
      setIsChartScroll(false);
    }
  }, [index]);

  useEffect(() => {
    if (resultType === 1) {
      setIsChartScroll(true);
    }
  }, [resultType]);

  return (
    <div className="FullPageContainer">
      <div className={classes.Title}>
        <div className={classes.TitleInfoContainer}>
          {title}
          <img
            src={InfoSvg}
            alt="InfoSvg"
            onClick={() => modal.openModal(type)}
          />
        </div>
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
      <div className={`${classes.Container} ContainerRef`}>
        <div className={classes.ResultCriteria}>
          {React.cloneElement(Criteria, {
            ...props,
            pageIndex: pageIndex,
            data: data,
          })}
        </div>
        <div
          className={classes.ResultChart}
          style={
            resultType === 1
              ? {
                  opacity: 1,
                  visibility: "visible",
                }
              : { opacity: 0, visibility: "hidden" }
          }
        >
          {React.cloneElement(Chart, {
            ...props,
            pageIndex: pageIndex,
            data: data,
            isChartScroll: isChartScroll,
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;
