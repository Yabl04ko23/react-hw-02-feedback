import React, { Component } from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div className={styles.statsBlock}>
          <button type="button" className={styles.statsBtn} onClick={() => this.props.onLeaveFeedback("good")}>
            Good
          </button>
          <button type="button" className={styles.statsBtn} onClick={() => this.props.onLeaveFeedback("neutral")}>
            Neutral
          </button>
          <button type="button" className={styles.statsBtn} onClick={() => this.props.onLeaveFeedback("bad")}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
