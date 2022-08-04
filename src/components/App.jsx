import { Component } from 'react';
import { Container,Title,FeedbackOptions,Statistics } from './App.styled';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  render() {
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
        </Statistics>

      </Container>
    )
  }
}
