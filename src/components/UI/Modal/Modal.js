import React from "react";
import "./Modal.scss";

import { CSSTransition } from "react-transition-group";
import closeButton from "../../../assets/Modal/closeButton.svg";

import resultStatic from "../../../components/Result/resultStatic";

const Modal = (props) => {
  const { closeModal, modalType } = props;
  const { title, detail } = resultStatic[modalType];
  return (
    <CSSTransition in={props.isModal} classNames="ModalContainer">
      <div className="ModalContainer">
        <div className="BackDrop" onClick={closeModal} />
        <CSSTransition in={props.isModal} classNames="Modal">
          <div className="Modal">
            <div className="ModalCloseButton" onClick={closeModal}>
              <img src={closeButton} alt={closeButton} />
            </div>
            {detail}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Modal;
