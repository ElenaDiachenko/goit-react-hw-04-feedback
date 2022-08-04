import PropTypes from 'prop-types';
import { StatisticsWrap } from "./Statistics.styled";

export const Statistics = ({ options, total, positivePercentage }) => (
            <StatisticsWrap>
          {Object.entries(options).map(el => (
            <p key={el[0]}>{el[0].charAt(0).toUpperCase()+ el[0].slice(1)}: {el[1]}</p>
          ))}
          <p>Total: {total}</p>
          {options.good>0 && <p>Positive feedback: {positivePercentage}</p>}
          
        </StatisticsWrap>
)

Statistics.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};