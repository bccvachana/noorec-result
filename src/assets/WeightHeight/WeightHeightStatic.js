import React from "react";
import UnderWeight from "./0.svg";
import Normal from "./1.svg";
import OverWeight from "./2.svg";
import Obase from "./3.svg";
import ExtreamObase from "./4.svg";

export default {
  underWeight: {
    title: "ผอม",
    svg: UnderWeight,
    bar: 10,
    marginLeft: -20,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  normal: {
    title: "สมส่วน",
    svg: Normal,
    bar: 30,
    marginLeft: -15,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  overWeight: {
    title: "ท้วม",
    svg: OverWeight,
    bar: 50,
    marginLeft: -10,
    detail: (
      <span>
        รูปร่างอวบมาก หรือมองดูอ้วนแล้ว
        <br />
        ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก
        เป็นอาหารที่ให้พลังงานน้อย
      </span>
    ),
  },
  obase: {
    title: "อ้วน",
    svg: Obase,
    bar: 70,
    marginLeft: -5,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  extremeObase: {
    title: "อ้วนมาก",
    svg: ExtreamObase,
    bar: 90,
    marginLeft: 0,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
};
