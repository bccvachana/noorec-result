import React, { useState, useEffect } from "react";
import classes from "./BloodPressureCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
import Svg1 from "../../../assets/BloodPressure/1.svg";
import Svg2 from "../../../assets/BloodPressure/2.svg";

const BloodPressureCriteria = (props) => {
  const { data, index } = props;
  const [svgWidthRef, setSvgWidthRef] = useState(0);
  const [svgHeightRef, setSvgHeightRef] = useState(0);

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setSvgWidthRef(document.getElementById("BloodPressureRef").clientWidth);
    //   setSvgHeightRef(document.getElementById("BloodPressureRef").clientHeight);
    //   clearTimeout(timer);
    // }, 750);
    window.addEventListener("resize", () => {
      setSvgWidthRef(0);
      setSvgHeightRef(0);
    });
  }, []);

  useEffect(() => {
    setSvgWidthRef(document.getElementById("BloodPressureRef").clientWidth);
    setSvgHeightRef(document.getElementById("BloodPressureRef").clientHeight);
  }, [index]);

  useEffect(() => {
    setSvgWidthRef(document.getElementById("BloodPressureRef").clientWidth);
  }, [svgWidthRef]);
  useEffect(() => {
    setSvgHeightRef(document.getElementById("BloodPressureRef").clientHeight);
  }, [svgHeightRef]);

  return (
    <ResultCriteria
      criteria={"ปกติ"}
      detail={
        "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย"
      }
    >
      <div className={classes.BloodPressureContainer}>
        <div className={classes.Svg1Container}>
          <img id="BloodPressureRef" src={Svg1} alt="Svg1" />
        </div>
        <div className={classes.Svg1Container}>
          <div
            className={classes.Svg2Container}
            style={{ width: svgWidthRef, height: svgHeightRef }}
          >
            <img src={Svg2} alt="Svg2" />
          </div>
        </div>
      </div>
      <div className={classes.ValueContainer}>
        <ValueInfo type="systolic" data={data[0].data[0]} titleCenter />
        <div className={classes.RowSpace}></div>
        <ValueInfo type="diastolic" data={data[0].data[1]} titleCenter />
      </div>
    </ResultCriteria>
  );
};

export default BloodPressureCriteria;
