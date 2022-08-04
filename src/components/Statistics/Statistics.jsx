import { StatisticsWrap } from "./Statistics.styled";

export const Statistics = ({ options, total, positivePercentage }) => (
            <StatisticsWrap>
          {Object.entries(options).map(el => (
            <p key={el[0]}>{el[0].charAt(0).toUpperCase()+ el[0].slice(1)}: {el[1]}</p>
          ))}
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}</p>
        </StatisticsWrap>
)