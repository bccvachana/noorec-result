import React from "react";
import UnderWeight from "./00.svg";
import UnderWeightShadow from "./01.svg";
import Normal from "./10.svg";
import NormalShadow from "./11.svg";
import OverWeight from "./20.svg";
import OverWeightShadow from "./21.svg";
import Obase from "./30.svg";
import ObaseShadow from "./31.svg";
import ExtreamObase from "./40.svg";
import ExtreamObaseShadow from "./41.svg";

export default {
  underWeight: {
    title: "ผอม",
    svg: UnderWeight,
    shadow: UnderWeightShadow,
    bar: 10,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  normal: {
    title: "สมส่วน",
    svg: Normal,
    shadow: NormalShadow,
    bar: 30,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  overWeight: {
    title: "ท้วม",
    svg: OverWeight,
    shadow: OverWeightShadow,
    bar: 50,
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
    shadow: ObaseShadow,
    bar: 70,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
  extremeObase: {
    title: "อ้วนมาก",
    svg: ExtreamObase,
    shadow: ExtreamObaseShadow,
    bar: 90,
    detail:
      "รูปร่างอวบมาก หรือมองดูอ้วนแล้ว ควรควบคุมอาหารโดยลดปริมาณอาหาร หรือปรับเปลี่ยนอาหารจากที่ให้พลังงานมาก เป็นอาหารที่ให้พลังงานน้อย",
  },
};
