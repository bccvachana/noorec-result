import React, { useState, useEffect } from "react";
import classes from "./OxygenCriteria.module.scss";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../templates/Result/ResultCriteria";

const OxygenCriteria = (props) => {
  return (
    <ResultCriteria
      criteria={"ปกติ"}
      detail={
        "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย"
      }
    ></ResultCriteria>
  );
};

export default OxygenCriteria;
