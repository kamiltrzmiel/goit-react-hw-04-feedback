import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0});


  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) return 0;
    return Math.floor((feedback.good / totalFeedback) * 100);
  };

  const changeFeedbackState = statname => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [statname]: prevFeedback[statname] + 1,
    }));
  };

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={changeFeedbackState}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            posPerc={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback data" />
        )}  
      </Section>
    );
  };
export default App;
