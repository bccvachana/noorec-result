import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useEffect } from "react";

const withMediaQuery = (WrappedComponent) => {
  return (props) => {
    const matchTablet = useMediaQuery(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const matchDesktop = useMediaQuery("(min-width: 1024px)");
    const device =
      matchTablet || matchDesktop
        ? matchTablet
          ? "Tablet"
          : "Desktop"
        : "Mobile";

    const [resultContainerWidth, setResultContainerWidth] = useState(null);
    useEffect(() => {
      setResultContainerWidth(
        document.querySelector(".ResultContainer").clientWidth
      );
    }, []);
    window.addEventListener("resize", () => {
      setResultContainerWidth(
        document.querySelector(".ResultContainer").clientWidth
      );
    });
    return (
      <WrappedComponent
        {...props}
        device={device}
        resultContainerWidth={resultContainerWidth}
      />
    );
  };
};

export default withMediaQuery;
