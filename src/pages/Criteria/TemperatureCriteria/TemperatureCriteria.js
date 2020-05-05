import React, { useState, useEffect } from "react";
import classes from "./TemperatureCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../components/Result/ResultCriteria";
import temperatureSvg from "../../../assets/Temperature/temperature.svg";

const TemperatureCriteria = (props) => {
  const { data, index } = props;
  const [svgHeightRef, setSvgHeightRef] = useState(0);

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setSvgHeightRef(document.getElementById("TempRef").clientHeight);
    //   clearTimeout(timer);
    // }, 750);
    window.addEventListener("resize", () => {
      setSvgHeightRef(0);
    });
  }, []);

  useEffect(() => {
    setSvgHeightRef(document.getElementById("TempRef").clientHeight);
  }, [index]);

  useEffect(() => {
    setSvgHeightRef(document.getElementById("TempRef").clientHeight);
  }, [svgHeightRef]);

  return (
    <ResultCriteria
      criteria={"ปกติ"}
      detail={
        <div>
          อุณหภูมิร่างกายของคุณอยู่ในเกณฑ์ปกติ
          รักษาสุขภาพให้เเข็งแรงด้วยการรับประทานอาหารให้ครบ 5 หมู่
          ออกกำลังอย่างสม่ำเสมอ และพักผ่อนให้เพียงพอ
        </div>
      }
    >
      <div className={classes.TemperatureContainer}>
        <div>
          <div id="TempRef" className={classes.TempSvgContainer}>
            <img
              src={temperatureSvg}
              alt="temperatureSvg"
              style={{ height: svgHeightRef }}
            />
            <div className={classes.TempBarContainer}>
              <div className={classes.TempBar}></div>
            </div>
          </div>
          <ValueInfo type="temperature" data={data[0].data} />
        </div>
      </div>
    </ResultCriteria>
  );
};

export default TemperatureCriteria;
