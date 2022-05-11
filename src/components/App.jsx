import { useEffect, useState } from 'react';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

const feedbackOptions = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const allFeedbackOptions = { good, neutral, bad };

  useEffect(() => {
    setCountTotalFeedback(good + neutral + bad);
    setPositiveFeedbackPercentage((100 / countTotalFeedback) * good);
  }, [good, neutral, bad, countTotalFeedback]);

  const onLeaveFeedback = id => {
    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section>
        <Feedback
          onLeaveFeedback={onLeaveFeedback}
          feedbackOptions={feedbackOptions}
        />
        <Statistics
          allFeedbackOptions={allFeedbackOptions}
          total={countTotalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

export default App;
