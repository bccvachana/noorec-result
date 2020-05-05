import React, { useState, useEffect } from "react";
import classes from "./OxygenCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../components/Result/ResultCriteria";
import Svg1 from "../../../assets/Oxygen/1.svg";
import Svg2 from "../../../assets/Oxygen/2.svg";
import Svg3 from "../../../assets/Oxygen/3.svg";
import Svg4 from "../../../assets/Oxygen/4.svg";

const OxygenCriteria = (props) => {
  const { data, index, pageIndex, isFromTop } = props;
  const [svgWidthRef, setSvgWidthRef] = useState(0);
  const [svgHeightRef, setSvgHeightRef] = useState(0);
  const [isOxygen, setIsOxygen] = useState(true);

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
    setSvgWidthRef(document.getElementById("OxygenRef").clientWidth);
    setSvgHeightRef(document.getElementById("OxygenRef").clientHeight);
    if (index === pageIndex) {
      setIsOxygen(true);
    } else {
      let timer = setTimeout(() => {
        setIsOxygen(false);
        clearTimeout(timer);
      }, 300);
    }
  }, [index]);

  useEffect(() => {
    setSvgWidthRef(document.getElementById("OxygenRef").clientWidth);
  }, [svgWidthRef]);
  useEffect(() => {
    setSvgHeightRef(document.getElementById("OxygenRef").clientHeight);
  }, [svgHeightRef]);

  return (
    <ResultCriteria
      criteria={"ปกติ"}
      detail={
        "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย"
      }
    >
      <div className={classes.OxygenContainer}>
        <div>
          <div className={classes.Svg1Container} style={{ opacity: 0 }}>
            <img id="OxygenRef" src={Svg1} alt="Svg1" />
          </div>
        </div>
        {isOxygen ? (
          <div className={classes.Svg1Container}>
            <div
              className={classes.Svg2Container}
              style={{ width: svgWidthRef, height: svgHeightRef }}
            >
              <img
                className={`${classes.Svg2} ${
                  isFromTop ? classes.Animate : ""
                }`}
                src={Svg2}
                alt="Svg2"
                style={{ opacity: isFromTop ? 0 : 1 }}
              />
              <img
                className={`${classes.Svg3} ${
                  isFromTop ? classes.Animate : ""
                }`}
                src={Svg3}
                alt="Svg3"
                style={{ opacity: isFromTop ? 0 : 1 }}
              />
              <img
                className={`${classes.Svg4} ${
                  isFromTop ? classes.Animate : ""
                }`}
                src={Svg4}
                alt="Svg4"
                style={{ opacity: isFromTop ? 0 : 1 }}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <ValueInfo type="oxygen" data={data[0].data} titleCenter />
    </ResultCriteria>
  );
};

export default OxygenCriteria;
