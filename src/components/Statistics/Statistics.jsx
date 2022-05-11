import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ allFeedbackOptions, total, positivePercentage }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Statistic</h1>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <ul className={s.list}>
          {Object.keys(allFeedbackOptions).map(element => (
            <li className={s.item} key={element}>
              {element}: {allFeedbackOptions[element]}
            </li>
          ))}

          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>
            Positive Feedback: {positivePercentage.toFixed(2)} %
          </li>
        </ul>
      )}
    </div>
  );
};

Statistics.propTypes = {
  allFeedbackOptions: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
