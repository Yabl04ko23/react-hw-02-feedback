import "./App.css";
import React, { Component } from "react";

import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return Object.values(this.state).reduce(reducer);
  };

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    if (total === 0) {
      return 0;
    } else {
      return Math.round((100 / total) * good);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <>
        <Section title="Please, leave feedback" children={<FeedbackOptions onLeaveFeedback={this.handleFeedback} />} />
        <Section
          children={
            totalFeedback === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positivePercentage}
              />
            )
          }
          title="Statistics"
        />
      </>
    );
  }
}

export default App;
