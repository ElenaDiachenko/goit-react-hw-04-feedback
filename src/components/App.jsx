import { Component } from 'react';
import { Container, Title} from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

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
      <Container>
        <Title>Please leave feedback</Title>
        <FeedbackOptions options={options} onLeaveFeedback={hundleClickFeedback}/>
        
        <Title>Statistics</Title>
         <Statistics options={options} total={total} positivePercentage={positivePercentage}></Statistics>
      </Container>
    )
  }
}
