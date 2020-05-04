import React, { useState, useEffect } from "react";
import classes from "./TemperatureCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
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
        "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย"
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
