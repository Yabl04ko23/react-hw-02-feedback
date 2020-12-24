import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";

class Section extends Component {
  render() {
    const { total, good, neutral, bad, positivePercentage, onLeaveFeedback } = this.props;
    let statistics;
    let notification = <Notification message="No feedback given" />;
    if (total > 0) {
      statistics = (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      );
      notification = "";
    }
    return (
      <>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <h2>Statistics</h2>
        {notification}
        {statistics}
      </>
    );
  }
}

export default Section;
