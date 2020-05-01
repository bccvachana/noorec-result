import React from "react";
import classes from "./Result.module.scss";

const Result = (props) => {
  return (
    <div className={`FullPageContainer ${classes.Container}`}>
      <div className={classes.ProfileContainer}>
        <img
          className={classes.Profile}
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=3366546513417226&width=1024&ext=1588446791&hash=AeSpTApEOmdVqc9L"
          alt="profile"
        />
        <div className={classes.TitleContainer}>
          <div className={classes.Title}>บันทึกข้อมูลสุขภาพ</div>
          <div className={classes.Detail}>ของคุณ Vachana</div>
        </div>
      </div>
      <div
        className={`${classes.ResultRow} ${
          props.index === 1 && props.isFromTop ? "animated fadeInUp" : ""
        } ${classes.Animate}`}
      >
        <div className={classes.Result}>
          <div>น้ำหนัก</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.weight} <span className={classes.Unit}>kg</span>
            </div>
          </div>
        </div>
        <div className={classes.HorizontalSpace}></div>
        <div className={classes.Result}>
          <div>ส่วนสูง</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.height} <span className={classes.Unit}>cm</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.ResultRow} ${
          props.index === 1 && props.isFromTop ? "animated fadeInUp" : ""
        } ${classes.Animate}`}
      >
        <div className={classes.Result}>
          <div>BMI</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>{props.recordData.bmi}</div>
            <div className={classes.Criteria}>อ้วน</div>
          </div>
        </div>
        <div className={classes.HorizontalSpace}></div>
        <div className={classes.Result}>
          <div>อุณหภูมิร่างกาย</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.temperature}{" "}
              <span className={classes.Unit}>°C</span>
            </div>
            <div className={classes.Criteria}>ปกติ</div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.ResultRow} ${
          props.index === 1 && props.isFromTop ? "animated fadeInUp" : ""
        } ${classes.Animate}`}
      >
        <div className={`${classes.Result} ${classes.BloodPressure}`}>
          <div>ความดันโลหิต</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.bloodPressureHigh}
              <span style={{ color: "#b1b3b9", fontWeight: "200" }}> | </span>
              {props.recordData.bloodPressureLow}{" "}
              <span className={classes.Unit}>mmHg</span>
            </div>
            <div className={classes.Criteria}>สูงมาก</div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.ResultRow} ${
          props.index === 1 && props.isFromTop ? "animated fadeInUp" : ""
        } ${classes.Animate}`}
      >
        <div className={classes.Result}>
          <div>ชีพจร</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.rate} <span className={classes.Unit}>bpm</span>
            </div>
            <div className={classes.Criteria}>เร็วผิดปกติ</div>
          </div>
        </div>
        <div className={classes.HorizontalSpace}></div>
        <div className={classes.Result}>
          <div>ออกซิเจนในเลือด</div>
          <div className={classes.ValueContainer}>
            <div className={classes.Value}>
              {props.recordData.oxygen} <span className={classes.Unit}>%</span>
            </div>
            <div className={classes.Criteria}>ปกติ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
