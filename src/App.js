import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";

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
    return Math.round((100 / total) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback);
    return (
      <>
        <Section
          onLeaveFeedback={this.handleFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default App;
