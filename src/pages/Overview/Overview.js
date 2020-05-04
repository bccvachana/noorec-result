import React from "react";
import classes from "./Overview.module.scss";
import { dataTypeStatic } from "../../assets/dataTypeStatic";

const OverviewInfo = (props) => {
  const { type, data, criteria } = props;
  const { title, unit, toFixed } = dataTypeStatic[type];
  return (
    <div
      className={`${classes.Info} ${
        type === "weight" || type === "height" ? classes.WeightHeight : ""
      } ${type === "bloodPressure" ? classes.BloodPressure : ""}`}
    >
      <div className="InfoTitle">{title}</div>
      <div className={classes.ValueContainer}>
        {type !== "bloodPressure" ? (
          <div className={classes.Value}>
            {data}
            {unit ? (
              <span className="InfoUnit">
                &nbsp;&nbsp;
                {unit}
              </span>
            ) : null}
          </div>
        ) : (
          <div className={classes.Value}>
            {data[0]}
            <span style={{ color: "#b1b3b9", fontWeight: "200" }}> | </span>
            {data[1]}
            <span className="InfoUnit">&nbsp;&nbsp;{unit}</span>
          </div>
        )}
        {criteria ? <div className="InfoCriteria">{criteria}</div> : null}
      </div>
    </div>
  );
};

const Overview = (props) => {
  const { data, index, isFromTop } = props;
  return (
    <div className={`FullPageContainer ${classes.OverviewContainer}`}>
      <div className={classes.ProfileTitle}>
        <img
          className={classes.Profile}
          src="https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=3366546513417226&width=1024&ext=1591070495&hash=AeSgTYO7XIh6YAb4"
          alt="profile"
        />
        <div className={classes.Title}>
          <div>บันทึกข้อมูลสุขภาพ</div>
          <div className={classes.Detail}>ของคุณ Vachana</div>
        </div>
      </div>
      <div className={classes.Row}>
        <OverviewInfo type="weight" data={data.weight} />
        <div className={classes.Space}></div>
        <OverviewInfo type="height" data={data.height} />
      </div>
      <div className={classes.Row}>
        <OverviewInfo type="bmi" data={data.bmi} criteria="อ้วนมาก" />
        <div className={classes.Space}></div>
        <OverviewInfo
          type="temperature"
          data={data.temperature}
          criteria="ปกติ"
        />
      </div>
      <div className={classes.Row}>
        <OverviewInfo
          type="bloodPressure"
          data={[data.systolic, data.diastolic]}
          criteria="ปกติ"
        />
      </div>
      <div className={classes.Row}>
        <OverviewInfo type="rate" data={data.rate} criteria="เร็วผิดปกติ" />
        <div className={classes.Space}></div>
        <OverviewInfo type="oxygen" data={data.oxygen} criteria="ปกติ" />
      </div>
    </div>
  );
};

export default Overview;
