import styles from "./Day.module.css";
import React from "react";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h2 className={styles.date}>{this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

// function Day() {
//   return <h3 className={styles.date}>{new Date().toLocaleTimeString()}</h3>;
// }

export default Day;
