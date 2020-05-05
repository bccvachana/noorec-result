import React, { Component } from "react";

import Modal from "./components/UI/Modal/Modal";
import Swiper from "react-id-swiper";
import "./assets/style/swiper.scss";

import { defaults } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import Welcome from "./pages/Welcome/Welcome";
import Overview from "./pages/Overview/Overview";

import Result from "./components/Result/Result";

export const ModalContext = React.createContext();

defaults.global.defaultFontFamily = "Prompt";
defaults.global.defaultFontColor = "white";

let recordData = {
  weight: "90.6",
  height: "180",
  temperature: "35.10",
  systolic: "140",
  diastolic: "88",
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
    isModal: false,
    modalType: "weightHeight",
  };
  isFromTop = true;

  swiperParams = {
    direction: "vertical",
    speed: 450,
    followFinger: false,
    mousewheel: true,
    simulateTouch: false,
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
    let timer = setTimeout(() => {
      this.state.swiper.on("scroll", () => {
        this.state.swiper.mousewheel.disable();
        let scrollTimer = setTimeout(() => {
          this.setState({ scroll: this.state.scroll + 1 });
          this.state.swiper.mousewheel.enable();
          clearTimeout(scrollTimer);
        }, 1300);
      });
      this.state.swiper.slideTo(noorecIndex, 600);
      clearTimeout(timer);
    }, 750);
  }

  render() {
    const { isModal, modalType } = this.state;
    return (
      <React.Fragment>
        <Modal
          isModal={isModal}
          closeModal={() => {
            this.setState({ isModal: false });
          }}
          modalType={modalType}
        />
        <ModalContext.Provider
          value={{
            openModal: (type) =>
              this.setState({ isModal: true, modalType: type }),
          }}
        >
          <Swiper {...this.swiperParams}>
            <div>
              <Welcome
                next={() =>
                  this.state.swiper ? this.state.swiper.slideNext() : null
                }
              />
            </div>
            <div>
              <Overview
                data={recordData}
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
            <div>
              <Result
                type="weightHeight"
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
            <div>
              <Result
                type="temperature"
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
            <div>
              <Result
                type="bloodPressure"
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
            <div>
              <Result
                type="rate"
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
            <div>
              <Result
                type="oxygen"
                index={this.state.index}
                isFromTop={this.isFromTop}
              />
            </div>
          </Swiper>
        </ModalContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
