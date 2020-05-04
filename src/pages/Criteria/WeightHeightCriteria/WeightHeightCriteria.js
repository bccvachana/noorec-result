import React, { useState, useEffect } from "react";
import classes from "./WeightHeightCriteria.module.scss";
import "../../../assets/WeightHeight/WeightHeightSwiper.scss";
import Swiper from "react-id-swiper";
import ValueInfo from "../../../components/UI/ValueInfo/ValueInfo";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
import weightHeightStatic from "../../../assets/WeightHeight/WeightHeightStatic";

const WeightHeightCriteria = (props) => {
  const { index, pageIndex, isFromTop, data } = props;
  const criteria = "underWeight";
  const { title, detail, bar, marginLeft } = weightHeightStatic[criteria];

  const [svgWidthRef, setSvgWidthRef] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [isSwiper, setIsSwiper] = useState(false);

  const height = data[1].data[data[1].data.length - 1];
  const bmiConst = (height * height) / 10000;

  useEffect(() => {
    // let timer = setTimeout(() => {
    //   setSvgWidthRef(
    //     document.getElementById("WeightHeightRef").clientWidth + 20
    //   );
    //   clearTimeout(timer);
    // }, 750);
    window.addEventListener("resize", () => {
      let resizeTimer = setTimeout(() => {
        setSvgWidthRef(
          document.getElementById("WeightHeightRef").clientWidth + 20
        );
        clearTimeout(resizeTimer);
      }, 200);
    });
  }, []);

  useEffect(() => {
    if (swiper) {
      if (isFromTop) {
        for (let slide = 2; slide <= 10; slide++) {
          swiper.slideTo(slide, 175 * slide);
        }
      } else {
        swiper.slideTo(10, 0);
      }
    }
  }, [swiper]);

  useEffect(() => {
    setSvgWidthRef(document.getElementById("WeightHeightRef").clientWidth + 20);
    if (index === pageIndex) {
      setIsSwiper(true);
    } else {
      let isSwiperTimer = setTimeout(() => {
        setIsSwiper(false);
        clearTimeout(isSwiperTimer);
      }, 300);
    }
  }, [index]);

  const swiperParams = {
    allowTouchMove: false,
    spaceBetween: 30,
    direction: "vertical",
    getSwiper: (swiper) => {
      setSwiper(swiper);
    },
  };

  const reOrder = (criteria) => {
    const weightHeightStaticKey = Object.keys(weightHeightStatic);
    const index = weightHeightStaticKey.indexOf(criteria);
    weightHeightStaticKey.splice(
      5 - index + 1,
      0,
      ...weightHeightStaticKey.splice(0, index + 1)
    );
    return weightHeightStaticKey;
  };
  const keyArray = reOrder(criteria);

  return (
    <ResultCriteria criteria={title} detail={detail}>
      <div
        className={classes.SwiperValueContainer}
        style={{ marginLeft: marginLeft }}
      >
        <div>
          <img
            id="WeightHeightRef"
            src={weightHeightStatic["extremeObase"].svg}
            alt="svg"
          />
          {isSwiper ? (
            <div id="ResultSwiper" style={{ width: svgWidthRef }}>
              <Swiper {...swiperParams}>
                {[...Array(2)].map(() => {
                  return keyArray.map((key, index) => (
                    <div key={`${key}${index}`}>
                      <img src={weightHeightStatic[key].svg} alt="svg" />
                    </div>
                  ));
                })}
              </Swiper>
            </div>
          ) : null}
          <div className={classes.ValueContainer}>
            <ValueInfo type="weight" data={data[0].data} />
            <div className={classes.ValueSpace} />
            <ValueInfo type="height" data={data[1].data} />
            <div className={classes.ValueSpace} />
            <ValueInfo type="bmi" data={data[2].data} />
          </div>
        </div>
      </div>
      <div className={classes.ColorBarContainer}>
        <div className={classes.ColorBarWeightLabel}>
          <div>{(18.5 * bmiConst).toFixed(1)}</div>
          <div>{(23 * bmiConst).toFixed(1)}</div>
          <div>{(25 * bmiConst).toFixed(1)}</div>
          <div>{(30 * bmiConst).toFixed(1)}</div>
        </div>
        <div className={classes.ColorBar}>
          {Object.keys(weightHeightStatic).map((key) => (
            <div key={key}></div>
          ))}
          <span
            className={classes.Circle}
            style={{
              left: `calc(${bar}% - 8px)`,
            }}
          ></span>
        </div>
        <div className={classes.ColorBarDetail}>
          {Object.keys(weightHeightStatic).map((key) => (
            <div key={key}>{weightHeightStatic[key].title}</div>
          ))}
        </div>
      </div>
    </ResultCriteria>
  );
};

export default WeightHeightCriteria;
