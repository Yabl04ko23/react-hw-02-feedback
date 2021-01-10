import React, { Component } from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const {onLeaveFeedback} = this.props
    return (
      <div>
        <div className={styles.statsBlock}>
          <button type="button" className={styles.statsBtn} onClick={() => onLeaveFeedback("good")}>
            Good
          </button>
          <button type="button" className={styles.statsBtn} onClick={() => onLeaveFeedback("neutral")}>
            Neutral
          </button>
          <button type="button" className={styles.statsBtn} onClick={() => onLeaveFeedback("bad")}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
