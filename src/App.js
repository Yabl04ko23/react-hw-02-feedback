import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    const { good, neutral, bad } = this.state;
    if (e.target.textContent === "Good") {
      this.setState(() => {
        return {
          good: good + 1,
        };
      });
    }
    if (e.target.textContent === "Neutral") {
      this.setState(() => {
        return {
          neutral: neutral + 1,
        };
      });
    }
    if (e.target.textContent === "Bad") {
      this.setState(() => {
        return {
          bad: bad + 1,
        };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    let positivePercentage = Math.round((100 / total) * good);
    return (
      <>
        <Section
          onLeaveFeedback={this.handleFeedback}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default App;
