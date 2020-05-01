import React, { useState, useEffect } from "react";
import classes from "./TemperatureCriteria.module.scss";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
import temperatureSvg from "../../../assets/Temperature/temperature.svg";

const TemperatureCriteria = (props) => {
  const [SvgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    setSvgHeight(document.getElementById("TempRef").clientHeight);
    window.addEventListener("resize", () => {
      setSvgHeight(0);
    });
  }, []);

  useEffect(() => {
    setSvgHeight(document.getElementById("TempRef").clientHeight);
  }, [SvgHeight]);

  return (
    <ResultCriteria
      criteria={"ปกติ"}
      detail={
        "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย"
      }
    >
      <div id="TempRef" className={classes.Container}>
        <img
          src={temperatureSvg}
          alt="temperatureSvg"
          style={{ height: SvgHeight }}
        />
        <div className={classes.TempBarContainer}>
          <div className={classes.TempBar}></div>
        </div>
      </div>
    </ResultCriteria>
  );
};

export default TemperatureCriteria;
