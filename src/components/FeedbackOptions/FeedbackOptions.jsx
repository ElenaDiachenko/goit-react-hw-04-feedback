import { FeedbackOptionsWrap } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback})=>(
    <FeedbackOptionsWrap>
          {Object.keys(options).map(key =>
            <button key={key} onClick={()=>onLeaveFeedback(key)}>{key}</button>
          )}
        </FeedbackOptionsWrap>
)