import React, { Component } from "react";
import "styles.css";

export default class Indicator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <status-indicator {...this.props} />;
  }
}
