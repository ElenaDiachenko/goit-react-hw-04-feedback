import PropTypes from 'prop-types';
import { FeedbackOptionsWrap,FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback})=>(
    <FeedbackOptionsWrap>
          {Object.keys(options).map(key =>
            <FeedbackButton key={key} onClick={()=>onLeaveFeedback(key)}>{key}</FeedbackButton>
          )}
        </FeedbackOptionsWrap>
)

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
