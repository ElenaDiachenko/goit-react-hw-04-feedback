import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hundleClickFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    
    return `${goodFeedback > 0 ?  Math.ceil((goodFeedback /totalFeedback) * 100):goodFeedback}%`;
  }
  
  
  render() {
    const options = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const hundleClickFeedback = this.hundleClickFeedback;
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={hundleClickFeedback} />
        </Section>
        <Section title="Statictics">
        {total === 0 ?
          (<Notification message="There is no feedback" />
          ) : (
          <Statistics options={options} total={total} positivePercentage={positivePercentage}></Statistics>
          )}
        </Section>
      </>
    )
  }
}
