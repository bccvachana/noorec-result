import React, { Component } from "react";

import Swiper from "react-id-swiper";
import "./assets/style/swiper.scss";

import { defaults } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import Welcome from "./pages/Welcome/Welcome";
import Result from "./pages/Result/Result";

import WeightHeightChart from "./pages/ChartPage/WeightHeightChart";
import WeightHeightCriteria from "./pages/CriteriaPage/WeightHeightCriteria/WeightHeightCriteria";
import TemperatureChart from "./pages/ChartPage/TemperatureChart";
import TemperatureCriteria from "./pages/CriteriaPage/TemperatureCriteria/TemperatureCriteria";
import BloodPressureChart from "./pages/ChartPage/BloodPressureChart";
import RateChart from "./pages/ChartPage/RateChart";
import OxygenChart from "./pages/ChartPage/OxygenChart";

import WeightHeight from "./pages/WeightHeight/WeightHeight";

defaults.global.defaultFontFamily = "Prompt";
defaults.global.defaultFontColor = "white";

let recordData = {
  weight: "90.6",
  height: "180",
  temperature: "35.10",
  bloodPressureHigh: "140",
  bloodPressureLow: "88",
  rate: "83",
  oxygen: "98",
};
recordData.bmi = (
  recordData.weight /
  ((recordData.height * recordData.height) / 10000)
).toFixed(2);

class App extends Component {
  state = {
    index: 0,
    swiper: null,
    scroll: 0,
  };
  isFromTop = true;

  swiperParams = {
    direction: "vertical",
    speed: 450,
    followFinger: false,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      progressbarOpposite: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    getSwiper: (swiper) => {
      this.setState({ swiper: swiper });
    },
    on: {
      slideChange: () => {
        if (this.state.swiper) {
          const index = this.state.swiper.activeIndex;
          this.setState((prevState) => {
            this.isFromTop = index > prevState.index ? true : false;
            return { index: index };
          });
          window.sessionStorage.setItem("noorecIndex", index);
        }
      },
    },
  };

  componentDidMount() {
    const noorecIndex = Number(window.sessionStorage.getItem("noorecIndex"));
    setTimeout(() => {
      this.state.swiper.on("scroll", () => {
        this.state.swiper.mousewheel.disable();
        const timer = setTimeout(() => {
          this.setState({ scroll: this.state.scroll + 1 });
          this.state.swiper.mousewheel.enable();
          clearTimeout(timer);
        }, 1300);
      });
      this.state.swiper.slideTo(noorecIndex, 600);
    }, 500);
  }

  render() {
    return (
      <Swiper {...this.swiperParams}>
        <div>
          <Welcome
            next={() =>
              this.state.swiper ? this.state.swiper.slideNext() : null
            }
          />
        </div>
        <div>
          <Result
            recordData={recordData}
            index={this.state.index}
            isFromTop={this.isFromTop}
          />
        </div>
        <div>
          <WeightHeight index={this.state.index} pageIndex={2} />
        </div>
        <div>
          <WeightHeightCriteria
            index={this.state.index}
            pageIndex={3}
            isFromTop={this.isFromTop}
          />
        </div>
        <div>
          <TemperatureChart index={this.state.index} pageIndex={4} />
        </div>
        <div>
          <TemperatureCriteria
            index={this.state.index}
            pageIndex={3}
            isFromTop={this.isFromTop}
          />
        </div>
        <div>
          <BloodPressureChart index={this.state.index} pageIndex={6} />
        </div>
        <div></div>
        <div>
          <RateChart index={this.state.index} pageIndex={8} />
        </div>
        <div></div>
        <div>
          <OxygenChart index={this.state.index} pageIndex={10} />
        </div>
        <div></div>
      </Swiper>
    );
  }
}

export default App;
