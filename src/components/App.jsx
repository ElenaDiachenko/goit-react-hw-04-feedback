import { Component } from 'react';
import { Container,Title,FeedbackOptions,Statistics } from './App.styled';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 6
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    
    return `${goodFeedback > 0 ?  Math.ceil((goodFeedback /totalFeedback) * 100):goodFeedback}%`;
  }
  
  
  render() {
    const test = this.countPositiveFeedbackPercentage()
    console.log(test)
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <FeedbackOptions>
          {Object.keys(this.state).map(key =>
            <button key={key}>{key}</button>
            )}
        </FeedbackOptions>
        <Title>Statistics</Title>
        <Statistics>
          {Object.entries(this.state).map(el => (
            <p key={el[0]}>{el[0].charAt(0).toUpperCase()+ el[0].slice(1)}: {el[1]}</p>
          ))}
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
        </Statistics>

      </Container>
    )
  }
}
