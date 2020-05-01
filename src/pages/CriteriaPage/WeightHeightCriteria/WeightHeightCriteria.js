import React, { useState, useEffect } from "react";
import classes from "./WeightHeightCriteria.module.scss";
import "../../../assets/WeightHeight/weightHeightSwiper.scss";
import Swiper from "react-id-swiper";

import ResultCriteria from "../../../templates/Result/ResultCriteria";
import weightHeightStatic from "../../../assets/WeightHeight/WeightHeightStatic";

const WeightHeightCriteria = (props) => {
  const height = 179;
  const bmiConst = (height * height) / 10000;

  const { index, pageIndex, isFromTop } = props;
  const criteria = "extremeObase";
  const { title, detail, bar } = weightHeightStatic[criteria];

  const [swiper, setSwiper] = useState(null);
  const [isSwiper, setIsSwiper] = useState(false);

  const swiperParams = {
    allowTouchMove: false,
    spaceBetween: 30,
    direction: "vertical",
    getSwiper: (swiper) => {
      setSwiper(swiper);
    },
  };

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
    if (index === pageIndex) {
      setIsSwiper(true);
    } else {
      let isSwiperTimer = setTimeout(() => {
        setIsSwiper(false);
        clearTimeout(isSwiperTimer);
      }, 300);
    }
  }, [index]);

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
      {isSwiper ? (
        <div id="resultSwiper">
          <Swiper {...swiperParams}>
            {[...Array(2)].map(() => {
              return keyArray.map((key, index) => (
                <div key={`${key}${index}`}>
                  <img src={weightHeightStatic[key].svg} alt="svg" />
                  <img
                    className="Shadow"
                    src={weightHeightStatic[key].shadow}
                    alt="shadow"
                  />
                </div>
              ));
            })}
          </Swiper>
        </div>
      ) : null}
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
