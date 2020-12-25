import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { totalFeedback, good, neutral, bad, positivePercentage } = this.props;
    Statistics.propTypes = {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
      totalFeedback: PropTypes.number,
      positivePercentage: PropTypes.number,
    };

    return (
      <>
        <div>
          <p className={styles.statsItem}>
            Good: <span>{good}</span>
          </p>
          <p className={styles.statsItem}>
            Neutral: <span>{neutral}</span>
          </p>
          <p className={styles.statsItem}>
            Bad: <span>{bad}</span>
          </p>
          <p className={styles.statsItem}>
            Total: <span>{totalFeedback}</span>
          </p>
          <p className={styles.statsItem}>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </div>
      </>
    );
  }
}

export default Statistics;
