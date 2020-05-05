import React from "react";
import classes from "./Welcome.module.scss";

import characterSvg from "../../assets/Welcome/character.svg";
import logoSvg from "../../assets/Welcome/logo.svg";
import arrowSvg from "../../assets/Welcome/arrow.svg";

const Welcome = (props) => {
  return (
    <div className={`FullPageContainer ${classes.Container}`}>
      <div className={classes.Triangle}></div>
      <div className={classes.Content}>
        <div className={classes.Before}></div>
        <img className={classes.Logo} src={logoSvg} alt="logoSvg" />
        <div className={classes.TextProfileContainer}>
          <div className={classes.Title}>
            <div>บันทึกข้อมูลสุขภาพ</div>
            <div className={classes.Detail}>
              ของคุณ{" "}
              <span style={{ color: "#fa5458" }}>
                {props.userName ? props.userName : "Vachana"}
              </span>
            </div>
          </div>
          <img
            className={classes.Profile}
            src="https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=3366546513417226&width=1024&ext=1591070495&hash=AeSgTYO7XIh6YAb4"
            alt="profile"
          />
        </div>
        <div className={classes.Scroll}>
          <img src={arrowSvg} alt="arrowSvg" onClick={props.next} />
        </div>
      </div>
      <img
        className={classes.Character}
        src={characterSvg}
        alt="characterSvg"
      />
    </div>
  );
};

export default Welcome;
