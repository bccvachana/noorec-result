import React, { Component } from "react";

class Ani extends Component {
  constructor(props) {
    super(props);
    this.targets = [];
  }

  componentDidMount() {
    let animeProps = { ...this.props, targets: this.targets };
    delete animeProps.children;
    this.anime = anime(animeProps);
  }

  addTarget = (newTarget) => {
    this.targets = [...this.targets, newTarget];
  };

  render() {
    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [this.props.children];
    }

    return (
      <g>
        {children.map((child, i) =>
          React.cloneElement(child, { key: i, ref: this.addTarget })
        )}
      </g>
    );
  }
}

export default Ani;
