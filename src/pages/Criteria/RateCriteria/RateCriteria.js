import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./RateCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
import Svg1 from "../../../assets/Rate/1.svg";

const rateAnimation = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

const RateCriteria = (props) => {
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
      <div className={classes.RateContainer}>
        <div className={classes.Svg1Container}>
          <img id="RateRef" src={Svg1} alt="Svg1" />
        </div>
        <div className={classes.Svg1Container}>
          <div
            className={classes.Svg2Container}
            style={{ width: svgWidthRef, height: svgHeightRef }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 483 161"
              className={classes.Path}
            >
              <motion.path
                d="M6.5 85.5 182.5 85.5 205.5 6.5 245.5 154.5 289.5 47.5 304.5 85.5 476.5 85.5"
                animate={{
                  pathLength: [0, 1, 1, 1],
                  pathOffset: [0, 0, 0, 1],
                  opacity: [1, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.4, 0.6, 1],
                  ease: "easeOut",
                  loop: Infinity,
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
      <div className={classes.ValueContainer}>
        <ValueInfo type="rate" data={data[0].data} titleCenter />
      </div>
    </ResultCriteria>
  );
};

export default RateCriteria;
