import React, { Component } from "react";
import styles from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h2>Please, leave feedback</h2>
        <div className={styles.statsBlock}>
          <button type="button" className={styles.statsBtn} onClick={this.props.onLeaveFeedback}>
            Good
          </button>
          <button type="button" className={styles.statsBtn} onClick={this.props.onLeaveFeedback}>
            Neutral
          </button>
          <button type="button" className={styles.statsBtn} onClick={this.props.onLeaveFeedback}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
