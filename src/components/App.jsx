import { useState } from 'react';
import { Container } from './Container/Container.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = name => {
    setFeedback({ ...feedback, [name]: feedback[name] + 1 });
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = feedback;
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return Math.floor((good / countTotalFeedback()) * 100) || 0;
  };

  const { good, bad, neutral } = feedback;

  return (
    <Container>
      <Section title={'Please, leave us your feedback!'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </Container>
  );
}
