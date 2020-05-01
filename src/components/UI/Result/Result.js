import React from "react";

const Result = (props) => {
  return (
    <div className="FullPageContainer">
      {props.title ? <div className="ResultTitle">{props.title}</div> : null}
      <div className="ResultContainer">{props.children}</div>
    </div>
  );
};

export default Result;
